// -----------------------------------------
// code word rate limiting
// -----------------------------------------

const codeWordRateLimit = {};
const WRONG_LIMIT = 3;
const WINDOW_MS = 30_000;
const LOCKOUT_MS = 60_000;

function wouldTriggerLockout(key) {
  const entry = codeWordRateLimit[key];
  if (entry && entry.lockoutEndsAt && entry.lockoutEndsAt > Date.now()) return false;
  const now = Date.now();
  const recent = entry ? entry.attempts.filter(t => now - t <= WINDOW_MS) : [];
  return recent.length + 1 >= WRONG_LIMIT;
}

function registerWrongCodeAttempt(key) {
  if (!codeWordRateLimit[key]) {
    codeWordRateLimit[key] = { attempts: [], lockoutEndsAt: null, intervalId: null, startTimeoutId: null };
  }
  const entry = codeWordRateLimit[key];
  if (entry.lockoutEndsAt && entry.lockoutEndsAt > Date.now()) return;
  const now = Date.now();
  entry.attempts.push(now);
  entry.attempts = entry.attempts.filter(t => now - t <= WINDOW_MS);
  if (entry.attempts.length >= WRONG_LIMIT) {
    triggerCodeWordLockout(key);
  }
}

// after a wrong code's shake and red flash finish (the wrong letters clear partway through),
// focus the first empty box so the student can type again straight away
function refocusCodeInputAfterWrong(key, letterIndex) {
  const flash = document.querySelector('.code-input-flash-' + key + '-' + letterIndex);
  if (!flash) return;
  flash.addEventListener('animationend', () => {
    const line = flash.closest('.code-input-line');
    if (!line || !line.isConnected || line.classList.contains('code-input-line--hidden')) return;
    if (gameMode === "preview" || line.querySelector('.code-input-line__lockout-overlay')) return;
    // leave it alone if the student has already clicked into a box
    if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
    const codeInputs = Array.from(line.querySelectorAll('.code-input'));
    const firstInput = codeInputs.find(input => input.value === '');
    if (firstInput) {
      firstInput.focus({ preventScroll: true });
      activeInput__codeInput = firstInput;
    }
  }, { once: true });
}

function triggerCodeWordLockout(key) {
  if (!codeWordRateLimit[key]) {
    codeWordRateLimit[key] = { attempts: [], lockoutEndsAt: null, intervalId: null, startTimeoutId: null };
  }
  const entry = codeWordRateLimit[key];
  if (entry.intervalId) { clearInterval(entry.intervalId); entry.intervalId = null; }
  if (entry.startTimeoutId) { clearTimeout(entry.startTimeoutId); entry.startTimeoutId = null; }

  const line = document.querySelector('.code-input-line-' + key);
  if (!line) return;

  const focused = line.querySelector('.code-input:focus');
  if (focused) focused.blur();
  if (typeof activeInput__codeInput !== 'undefined' && activeInput__codeInput && line.contains(activeInput__codeInput)) {
    activeInput__codeInput = null;
  }

  line.classList.add('state-pointer-events-none');

  // clear any values left in the cells
  line.querySelectorAll('.code-input').forEach(function(cell) {
    cell.value = '';
    syncUpdates(cell, 'change');
  });

  let overlay = line.querySelector('.code-input-line__lockout-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'code-input-line__lockout-overlay';
    overlay.innerHTML = "You've tried too many times! You can try again in <span class='code-input-line__lockout-count'></span><span class='code-input-line__lockout-unit'>s.</span>";
    line.appendChild(overlay);
    scaleAbsolutely('.code-input-line__lockout-overlay', 0.015, 'fontSize');
    scaleAbsolutely('.code-input-line__lockout-overlay', 0.0015, 'borderWidth');
  }

  const countEl = overlay.querySelector('.code-input-line__lockout-count');
  if (countEl) countEl.textContent = ' ' + Math.ceil(LOCKOUT_MS / 1000);
  // +1s to account for the start delay so the first tick shows exactly LOCKOUT_MS/1000
  entry.lockoutEndsAt = Date.now() + LOCKOUT_MS + 1000;

  entry.startTimeoutId = setTimeout(function() {
    entry.startTimeoutId = null;
    entry.intervalId = setInterval(function() {
      const remaining = Math.ceil((entry.lockoutEndsAt - Date.now()) / 1000);
      if (countEl) countEl.textContent = ' ' + remaining;
      if (remaining <= 0) {
        if (countEl) countEl.textContent = ' 0';
        clearInterval(entry.intervalId);
        entry.intervalId = null;
        setTimeout(function() { endCodeWordLockout(key); }, 1000);
      }
    }, 1000);
  }, 1000);
}

function endCodeWordLockout(key) {
  const entry = codeWordRateLimit[key];
  if (entry) {
    if (entry.intervalId) { clearInterval(entry.intervalId); entry.intervalId = null; }
    if (entry.startTimeoutId) { clearTimeout(entry.startTimeoutId); entry.startTimeoutId = null; }
    entry.lockoutEndsAt = null;
    entry.attempts = [];
  }
  const line = document.querySelector('.code-input-line-' + key);
  if (!line) return;
  const overlay = line.querySelector('.code-input-line__lockout-overlay');
  if (overlay) {
    overlay.classList.add('code-input-line__lockout-overlay--fly-out');
    overlay.addEventListener('animationend', function() { overlay.remove(); }, { once: true });
  }
  line.classList.remove('state-pointer-events-none');
}

function clearCodeWordRateLimit(key) {
  const entry = codeWordRateLimit[key];
  if (entry) {
    if (entry.intervalId) { clearInterval(entry.intervalId); }
    if (entry.startTimeoutId) { clearTimeout(entry.startTimeoutId); }
    delete codeWordRateLimit[key];
  }
  const line = document.querySelector('.code-input-line-' + key);
  if (line) {
    const overlay = line.querySelector('.code-input-line__lockout-overlay');
    if (overlay) overlay.remove();
    line.classList.remove('state-pointer-events-none');
  }
}

function maybeRestoreCodeWordLockout(key, codeInputLine) {
  const entry = codeWordRateLimit[key];
  if (!entry || !entry.lockoutEndsAt) return;
  const remaining = entry.lockoutEndsAt - Date.now();
  if (remaining <= 0) {
    delete codeWordRateLimit[key];
    return;
  }
  if (entry.intervalId) { clearInterval(entry.intervalId); entry.intervalId = null; }
  if (entry.startTimeoutId) { clearTimeout(entry.startTimeoutId); entry.startTimeoutId = null; }

  codeInputLine.classList.add('state-pointer-events-none');

  let overlay = codeInputLine.querySelector('.code-input-line__lockout-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'code-input-line__lockout-overlay';
    overlay.innerHTML = "You've tried too many times! You can try again in <span class='code-input-line__lockout-count'></span><span class='code-input-line__lockout-unit'>s.</span>";
    codeInputLine.appendChild(overlay);
    scaleAbsolutely('.code-input-line__lockout-overlay', 0.015, 'fontSize');
    scaleAbsolutely('.code-input-line__lockout-overlay', 0.0015, 'borderWidth');
  }

  const countEl = overlay.querySelector('.code-input-line__lockout-count');
  if (countEl) countEl.textContent = ' ' + Math.ceil(remaining / 1000);

  entry.intervalId = setInterval(function() {
    const rem = Math.ceil((entry.lockoutEndsAt - Date.now()) / 1000);
    if (countEl) countEl.textContent = ' ' + rem;
    if (rem <= 0) {
      if (countEl) countEl.textContent = ' 0';
      clearInterval(entry.intervalId);
      entry.intervalId = null;
      setTimeout(function() { endCodeWordLockout(key); }, 1000);
    }
  }, 1000);
}

/////////////////////////////////////////
// draw code inputs at bottom of activity
/////////////////////////////////////////

function drawCodeInput(activityArrayIndex){

  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
  if (resource.challengeArray){
    if (resource.challengeArray[activityArrayIndex].info.type !== "code-box") {

      // create and append codeInput elements
      const codeInputLine = createElement("div", ["code-input-line","code-input-line--activity","code-input-line--hidden","code-input-line-" + (activityArrayIndex)], activityModalCodeMachine);

      if (gameMode === "preview"){
        codeInputLine.classList.add("state-pointer-events-none");
      }

      if (resource.challengeArray[activityArrayIndex].info.state === "complete"){
        keyboard.style.pointerEvents = "none";
      }
      else {
        keyboard.style.pointerEvents = "auto";
        toggleClass(codeInputLine,"code-input-line--visible","code-input-line--hidden");
        if (resource.challengeArray[activityArrayIndex].questions.info.type === "multiple-choice"){
          countCheckedRadiosByClass();
        }
      }

      for (let j = 0; j < resource.challengeArray[activityArrayIndex].questions.code.userArray.length; j++) {
          const codeInputContainer = createElement("div",["code-input-container", "code-input-container-" + + (activityArrayIndex) + "-" + j, "code-input-container--incomplete"],codeInputLine);
          const codeInputFlash = createElement("div",["code-input-flash", "code-input-flash--hidden", "code-input-flash-" + + (activityArrayIndex) + "-" + j],codeInputContainer);
          const codeInputLabel = createElement("p",["code-input-label", "code-input-label-" + j],codeInputContainer);
          const codeInput = createElement("input", ["code-input", "code-input-" + (activityArrayIndex) + "-" + j, "code-input--incomplete", "input-functionality-default"], codeInputContainer);
          codeInputLabel.textContent = j + 1;
          codeInput.type = "text";
          codeInput.maxLength = 1;
          
          if (resource.challengeArray[activityArrayIndex].info.state === "complete"){
            setComplete(activityArrayIndex);
            bringInInputs();
          }
  
        // set hardware keyboard functionality
        setHardwareKeyboardFunctionality(codeInput,"code-input","code-input-line--activity"); 
  
        // sync updates
        syncUpdates(codeInput, "load", activityArrayIndex);

        // game mode: preview
        if (gameMode === "preview"){
          let codeString = resource.challengeArray[activityArrayIndex].questions.code.answer;
          let codeArray = codeString.split('');
          let codeCharacter = codeArray[j];
          codeInput.value = codeCharacter;
        }
  
      } 
      
      // set software keyboard functionality
      setSoftwareKeyboardFunctionality("code-input","code-input-line--activity"); 

      // restore lockout overlay if a cooldown is still active for this activity
      maybeRestoreCodeWordLockout(activityArrayIndex, codeInputLine);
  
    } 
  }
  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
  else {
    if (resource.activityArray[activityArrayIndex-1].type !== "code-box") {

      // create and append codeInput elements
      const codeInputLine = createElement("div", ["code-input-line","code-input-line--activity","code-input-line--hidden","code-input-line-" + (activityArrayIndex-1)], activityModalCodeMachine);

      if (gameMode === "preview"){
        codeInputLine.classList.add("state-pointer-events-none");
      }

      if (resource.activityArray[activityArrayIndex-1].state === "complete"){
        keyboard.style.pointerEvents = "none";
      }
      else {
        keyboard.style.pointerEvents = "auto";
        toggleClass(codeInputLine,"code-input-line--visible","code-input-line--hidden");
        if (resource.activityArray[activityArrayIndex-1].content.multipleChoice){
          countCheckedRadiosByClass();
        }
      }
      for (let j = 0; j < resource.activityArray[activityArrayIndex-1].userCode.length; j++) {
          const codeInputContainer = createElement("div",["code-input-container", "code-input-container-" + + (activityArrayIndex-1) + "-" + j, "code-input-container--incomplete"],codeInputLine);
          const codeInputFlash = createElement("div",["code-input-flash", "code-input-flash--hidden", "code-input-flash-" + + (activityArrayIndex-1) + "-" + j],codeInputContainer);
          const codeInputLabel = createElement("p",["code-input-label", "code-input-label-" + j],codeInputContainer);
          const codeInput = createElement("input", ["code-input", "code-input-" + (activityArrayIndex-1) + "-" + j, "code-input--incomplete", "input-functionality-default"], codeInputContainer);
          codeInputLabel.textContent = j + 1;
          codeInput.type = "text";
          codeInput.maxLength = 1;
          
          if (resource.activityArray[activityArrayIndex-1].state === "complete"){
            setComplete(activityArrayIndex);
            bringInInputs();
          }
  
        // set hardware keyboard functionality
        setHardwareKeyboardFunctionality(codeInput,"code-input","code-input-line--activity"); 
  
        // sync updates
        syncUpdates(codeInput, "load", activityArrayIndex);

        // game mode: preview
        if (gameMode === "preview"){
          let codeString = resource.activityArray[activityArrayIndex-1].code;
          let codeArray = codeString.split('');
          let codeCharacter = codeArray[j];
          codeInput.value = codeCharacter;
        }
  
      } 
      
      // set software keyboard functionality
      setSoftwareKeyboardFunctionality("code-input","code-input-line--activity"); 

      // restore lockout overlay if a cooldown is still active for this activity
      maybeRestoreCodeWordLockout(activityArrayIndex - 1, codeInputLine);
  
    } 
  }
  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

}

//////////////////////////////
// sync all code input updates
//////////////////////////////

function syncUpdates(input, action){
  
  const classes = input.className.split(" ");
  const ijClass = classes.find(className => className.startsWith("code-input-"));
  const ijArr = ijClass.split("-").slice(2).map(Number);

  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
  if (resource.challengeArray){
      // save to array
    if (action === "change"){
      resource.challengeArray[ijArr[0]].questions.code.userArray[ijArr[1]] = input.value.toUpperCase();
    }

    // update inputs
    const selector = `.code-input-${ijArr[0]}-${ijArr[1]}`;
    const allCodeInputFields = document.querySelectorAll(selector);
    allCodeInputFields.forEach(field => {
      field.value = resource.challengeArray[ijArr[0]].questions.code.userArray[ijArr[1]].toUpperCase();
    });  
  
  }
  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
  else {
    // save to array
    if (action === "change"){
      resource.activityArray[ijArr[0]].userCode[ijArr[1]] = input.value.toUpperCase();
    }

    // update inputs
    const selector = `.code-input-${ijArr[0]}-${ijArr[1]}`;
    const allCodeInputFields = document.querySelectorAll(selector);
    allCodeInputFields.forEach(field => {
      field.value = resource.activityArray[ijArr[0]].userCode[ijArr[1]].toUpperCase();
    });  
  }
  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

  setComplete(activityArrayIndex);
}

////////////////////////////
// set the state to complete
////////////////////////////



function setComplete(activityArrayIndex){

  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
  if (resource.challengeArray){
    // if user input does not match the code
    let numInputsFilled = resource.challengeArray[activityArrayIndex].questions.code.userArray.filter(value => value !== "").length;
    let answerArray = resource.challengeArray[activityArrayIndex].questions.code.answer.split("");
    let userArray = resource.challengeArray[activityArrayIndex].questions.code.userArray;
    if (resource.challengeArray[activityArrayIndex].questions.code.answer !== userArray.join('').toUpperCase() && numInputsFilled == resource.challengeArray[activityArrayIndex].questions.code.answer.length) {
      if (!wouldTriggerLockout(activityArrayIndex)) { findNonIdenticalIndices(answerArray,userArray); }
      typeof Sound !== 'undefined' && Sound.event('code.wrong');
      registerWrongCodeAttempt(activityArrayIndex);
    }

    function findNonIdenticalIndices(arr1, arr2) {
    
      refocusCodeInputAfterWrong(activityArrayIndex, arr1.findIndex((letter, i) => letter !== arr2[i]));

      // Assuming both arrays have the same length for direct comparison
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          let wrongInputs = document.getElementsByClassName("code-input-" + (activityArrayIndex) + "-" + i);
          let codeInputFlashes = document.getElementsByClassName("code-input-flash-" + (activityArrayIndex) + "-" + i);
          let codeInputContainers = document.querySelectorAll(".code-input-container-" + (activityArrayIndex) + "-" + i);

          codeInputContainers.forEach((codeInputContainer) => {
            codeInputContainer.classList.add("code-input--wrong");
            codeInputContainer.addEventListener('animationend', removeWrongShake);
            function removeWrongShake(){
              codeInputContainer.classList.remove("code-input--wrong");
            }
          });

          for (let j = 0; j < wrongInputs.length; j++) {
            if (codeInputFlashes[j]){
              toggleClass(codeInputFlashes[j],"code-input-flash--hidden","code-input-flash--visible");
              codeInputFlashes[j].addEventListener('animationend', removeWrongInputs);
              setTimeout(clearInput,600);
              function clearInput(){
                wrongInputs[j].value = "";
                wrongInputs[j].blur();
                syncUpdates(wrongInputs[j], "change", activityArrayIndex);
              }
            }
            function removeWrongInputs() {
              toggleClass(codeInputFlashes[j],"code-input-flash--visible","code-input-flash--hidden");
            }
          }
        }
      }
    }
    
    // if the correct code matches the user's code input
    if (resource.challengeArray[activityArrayIndex].questions.code.answer === resource.challengeArray[activityArrayIndex].questions.code.userArray.join('').toUpperCase()) {
      clearCodeWordRateLimit(activityArrayIndex);
      // set state
      if (resource.challengeArray[activityArrayIndex].info.state !== "complete"){
        debriefStats.activitiesCompleted = debriefStats.activitiesCompleted + 1;    
        typeof Sound !== 'undefined' && Sound.event('code.correct');
      }
      resource.challengeArray[activityArrayIndex].info.state = "complete";  

      keyboard.style.pointerEvents = "none";

      // set button
      let completionDelay = (resource.challengeArray[activityArrayIndex].questions.code.answer.length) * 50 + 50;
      setTimeout(toggleClass,completionDelay,activityButtonDone, "activity-button-done--close","activity-button-done--open");
      activityButtonDone.addEventListener("click", function() {
        hideButtonThenClose(activityButtonDone, function() {
          setTimeout(toggleClass, 450, activityModalContentContainerToggle, "activity-modal-content-container-toggle--visible", "activity-modal-content-container-toggle--hidden");
          closeActivityModal();  // clears the activity once the pop-out ends
        });
      });

      // remove hint
      toggleClass(activityButtonHint,"activity-button-hint--visible","activity-button-hint--hidden");

      // set code inputs
      for (let k = 0; k < resource.challengeArray[activityArrayIndex].questions.code.answer.length; k++) {
        let codeInputs = document.querySelectorAll(".code-input-" + (activityArrayIndex) + "-" + k);
        let codeInputLabels = document.querySelectorAll(".code-input-label-" + k);

        let codeInputContainers = document.querySelectorAll(".code-input-container-" + (activityArrayIndex) + "-" + k);

        codeInputContainers.forEach((codeInputContainer) => {
          setTimeout(makeComplete, k * 50, codeInputContainer, "code-input-container--incomplete", "code-input-container--complete");
        });
        
        codeInputs.forEach((codeInput) => {
          codeInput.blur();
          setTimeout(makeComplete, k * 50, codeInput, "code-input--incomplete", "code-input--complete");
        });
        
        codeInputLabels.forEach((codeInputLabel) => {
          if (codeInputLabel) {
            codeInputLabel.style.color = "rgba(var(--off-white), 1)";
            codeInputLabel.innerHTML = '&#x2713';
          }
        });
      } 
      
      // set complete state
      function makeComplete(arg1, arg2, arg3){ 
        toggleClass(arg1, arg2, arg3);
        let allComplete = true;
        for (let i = 0; i < resource.challengeArray.length - 1; i++) {
          if (resource.challengeArray[i].info.state !== "complete") {
            allComplete = false;
            break;
          }
        }
        if (allComplete) {
          let codeBoxButton = document.querySelector(".code-box-button");
          toggleClass(codeBoxButton, "code-box-button--hidden", "code-box-button--visible");
          let codeNode = document.querySelector("#activity-node-" + resource.challengeArray.length);
          toggleClass(codeNode, "activity-node--disabled", "activity-node--enabled");     
        }
      }

      // set node
      resource.challengeArray.forEach((activity, i) => {
        let activityNode = document.querySelector("#activity-node-" + (i+1));
        setTimeout(updateActivityState, 300, activityNode, activity.info.state);
      });
      
    }
  }
  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
  else {
      // if user input does not match the code
    let numInputsFilled = resource.activityArray[activityArrayIndex-1].userCode.filter(value => value !== "").length;
    let answerArray = resource.activityArray[activityArrayIndex-1].code.split("");
    let userArray = resource.activityArray[activityArrayIndex-1].userCode;
    if (resource.activityArray[activityArrayIndex-1].code !== userArray.join('').toUpperCase() && numInputsFilled == resource.activityArray[activityArrayIndex-1].code.length) {
      if (!wouldTriggerLockout(activityArrayIndex - 1)) { findNonIdenticalIndices(answerArray,userArray); }
      typeof Sound !== 'undefined' && Sound.event('code.wrong');
      registerWrongCodeAttempt(activityArrayIndex - 1);
    }

    function findNonIdenticalIndices(arr1, arr2) {
    
      refocusCodeInputAfterWrong(activityArrayIndex - 1, arr1.findIndex((letter, i) => letter !== arr2[i]));

      // Assuming both arrays have the same length for direct comparison
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          let wrongInputs = document.getElementsByClassName("code-input-" + (activityArrayIndex-1) + "-" + i);
          let codeInputFlashes = document.getElementsByClassName("code-input-flash-" + (activityArrayIndex-1) + "-" + i);
          let codeInputContainers = document.querySelectorAll(".code-input-container-" + (activityArrayIndex - 1) + "-" + i);

          codeInputContainers.forEach((codeInputContainer) => {
            codeInputContainer.classList.add("code-input--wrong");
            codeInputContainer.addEventListener('animationend', removeWrongShake);
            function removeWrongShake(){
              codeInputContainer.classList.remove("code-input--wrong");
            }
          });

          for (let j = 0; j < wrongInputs.length; j++) {
            if (codeInputFlashes[j]){
              toggleClass(codeInputFlashes[j],"code-input-flash--hidden","code-input-flash--visible");
              codeInputFlashes[j].addEventListener('animationend', removeWrongInputs);
              setTimeout(clearInput,600);
              function clearInput(){
                wrongInputs[j].value = "";
                wrongInputs[j].blur();
                syncUpdates(wrongInputs[j], "change", activityArrayIndex);
              }
            }
            function removeWrongInputs() {
              toggleClass(codeInputFlashes[j],"code-input-flash--visible","code-input-flash--hidden");
            }
          }
        }
      }
    }
    
    // if the correct code matches the user's code input
    if (resource.activityArray[activityArrayIndex-1].code === resource.activityArray[activityArrayIndex-1].userCode.join('').toUpperCase()) {
      clearCodeWordRateLimit(activityArrayIndex - 1);
      // set state
      if (resource.activityArray[activityArrayIndex-1].state !== "complete"){
        debriefStats.activitiesCompleted = debriefStats.activitiesCompleted + 1;    
        typeof Sound !== 'undefined' && Sound.event('code.correct');
      }
      resource.activityArray[activityArrayIndex-1].state = "complete";  

      keyboard.style.pointerEvents = "none";

      // set button
      let completionDelay = (resource.activityArray[activityArrayIndex - 1].code.length) * 50 + 50;
      setTimeout(toggleClass,completionDelay,activityButtonDone, "activity-button-done--close","activity-button-done--open");
      activityButtonDone.addEventListener("click", function() {
        hideButtonThenClose(activityButtonDone, function() {
          setTimeout(toggleClass, 450, activityModalContentContainerToggle, "activity-modal-content-container-toggle--visible", "activity-modal-content-container-toggle--hidden");
          closeActivityModal();  // clears the activity once the pop-out ends
        });
      });

      // remove hint
      toggleClass(activityButtonHint,"activity-button-hint--visible","activity-button-hint--hidden");

      // set code inputs
      for (let k = 0; k < resource.activityArray[activityArrayIndex - 1].code.length; k++) {
        let codeInputs = document.querySelectorAll(".code-input-" + (activityArrayIndex - 1) + "-" + k);
        let codeInputLabels = document.querySelectorAll(".code-input-label-" + k);

        let codeInputContainers = document.querySelectorAll(".code-input-container-" + (activityArrayIndex - 1) + "-" + k);

        codeInputContainers.forEach((codeInputContainer) => {
          setTimeout(makeComplete, k * 50, codeInputContainer, "code-input-container--incomplete", "code-input-container--complete");
        });
        
        codeInputs.forEach((codeInput) => {
          codeInput.blur();
          setTimeout(makeComplete, k * 50, codeInput, "code-input--incomplete", "code-input--complete");
        });
        
        codeInputLabels.forEach((codeInputLabel) => {
          if (codeInputLabel) {
            codeInputLabel.style.color = "rgba(var(--off-white), 1)";
            codeInputLabel.innerHTML = '&#x2713';
          }
        });
      } 
      
      // set complete state
      function makeComplete(arg1, arg2, arg3){ 
        toggleClass(arg1, arg2, arg3);
        let allComplete = true;
        for (let i = 0; i < resource.activityArray.length - 1; i++) {
          if (resource.activityArray[i].state !== "complete") {
            allComplete = false;
            break;
          }
        }
        if (allComplete) {
          let codeBoxButton = document.querySelector(".code-box-button");
          toggleClass(codeBoxButton, "code-box-button--hidden", "code-box-button--visible");
          let codeNode = document.querySelector("#activity-node-" + resource.activityArray.length);
          toggleClass(codeNode, "activity-node--disabled", "activity-node--enabled");     
        }
      }

      // set node
      resource.activityArray.forEach((activity, i) => {
        let activityNode = document.querySelector("#activity-node-" + (i+1));
        setTimeout(updateActivityState, 300, activityNode, activity.state);
      });
      
    }
  }
  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌


}

/////////////////
// activity modal
/////////////////

// event listeners
buttonCloseModal.addEventListener("click", function() {
  hideButtonThenClose(buttonCloseModal, function() {
    toggleClass(activityModalWrapper,"overflow-y-hidden","overflow-y-scroll");
    setTimeout(toggleClass, 450, activityModalContentContainerToggle, "activity-modal-content-container-toggle--visible", "activity-modal-content-container-toggle--hidden");
    closeActivityModal();  // clears the activity once the pop-out ends
  });
});

// DONE and X vanish on click and the modal closes back to the map right away.
// A button that's gone can't be clicked again, so the close runs once.
// Opening a challenge brings them back and clears the modal's closing pop-out
// (showActivityCloseButtons).
function hideButtonThenClose(button, close) {
  if (button.classList.contains('activity-close-button--gone')) return;
  button.classList.add('activity-close-button--gone');
  close();
}
function showActivityCloseButtons() {
  activityModal.classList.remove('activity-modal--closing');
  buttonCloseModal.classList.remove('activity-close-button--gone');
  activityButtonDone.classList.remove('activity-close-button--gone');
}
activityButtonHint.addEventListener('click', (event) => {
  openHintModal("incrementHintCount");
});
activityModalHintButton.addEventListener('click', (event) => {
  openHintModal();
});

// toggle
function scrollToBottom() {
  activityModalWrapper.scrollTo({ top: activityModalWrapper.scrollHeight, behavior: 'smooth' });
}
function scrollItUp() {
  activityModalWrapper.scrollTo({ top: 0, behavior: 'smooth' });
}

activityModalContentContainerToggle.addEventListener('click', scrollToBottom);
scrollUp.addEventListener('click', scrollItUp);

// open and close hint modal
function openHintModal(parameter){

  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
  if (resource.challengeArray){

    if (resource.challengeArray[activityArrayIndex].info.hint.isUsed == false && parameter == "incrementHintCount"){
      resource.challengeArray[activityArrayIndex].info.hint.isUsed = true;
      debriefStats.hintsUsed = debriefStats.hintsUsed + 1;
    }  

  }
  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
  else {

    if (resource.activityArray[activityArrayIndex-1].isHintUsed == false && parameter == "incrementHintCount"){
      resource.activityArray[activityArrayIndex-1].isHintUsed = true;
      debriefStats.hintsUsed = debriefStats.hintsUsed + 1;
    }  

  }
  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

  // Closing an activity also closes its hint; only the activity's close sound plays then.
  if (openState.hint === false){
    toggleClass(activityModalHint, 'activity-modal-hint--hidden', 'activity-modal-hint--visible');
    openState.hint = true;
    typeof Sound !== 'undefined' && Sound.event('hint.open');
  } else if (openState.hint === true){
    toggleClass(activityModalHint, 'activity-modal-hint--visible', 'activity-modal-hint--hidden');
    openState.hint = false;
    if (parameter !== 'closingActivity') {
      typeof Sound !== 'undefined' && Sound.event('hint.close');
    }
  } 
}

// open and close activity modal
function openActivityModal(i) {

  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
  if (resource.challengeArray){
    if (resource.challengeArray[i].info.type === 'code-box'){
      return false;
    }
    else {
      let nodes = document.querySelectorAll('.activity-node:not([id^="activity-node-' + (i + 1) + '"])');
      nodes.forEach(function(node) {
        // Apply the desired class to each node
        toggleClass(node,"activity-node--not-clicked","activity-node--clicked");
        node.classList.remove("activity-node--visible");
      });
      setTimeout(bringNodesBack,1000);
      function bringNodesBack(){
        nodes.forEach(function(node) {
          // Apply the desired class to each node
          toggleClass(node,"activity-node--clicked","activity-node--not-clicked");
        });
      }
      toggleClass(activity, "state-display-none", "state-display-block");
      typeof Sound !== 'undefined' && Sound.event('activity.open');
      typeof Sound !== 'undefined' && Sound.event('activity.openWhoosh');
      fadeMapLoop(true);
      showActivityCloseButtons();
      setTimeout(toggleClass, 600, activityModal, "activity-modal--close", "activity-modal--open");
      setTimeout(addTopBackgroundImage,2000);
      function addTopBackgroundImage(){

        // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
        if (resource.challengeArray){
          if (resource.challengeArray[activityArrayIndex].activity.info.asset.scope === "global"){
            activityModalContentContainerTop.style.backgroundImage = "url(assets/activity/columnSort/" + resource.challengeArray[activityArrayIndex].activity.info.asset.path + ")";
          }
          if (resource.challengeArray[activityArrayIndex].activity.info.asset.scope === "local"){
            activityModalContentContainerTop.style.backgroundImage = "url(resource/" + resourceTheme + "/assets/activity/local/" + resource.challengeArray[activityArrayIndex].activity.info.asset.path + ")";
          }
          else {
            activityModalContentContainerTop.style.backgroundImage = "url(resource/" + resourceTheme + "/assets/activity/background/" + resource.challengeArray[activityArrayIndex].activity.info.asset + ")";
          }
        }
        // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

        // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
        else {
          activityModalContentContainerTop.style.backgroundImage = "url(resource/" + resourceTheme + "/assets/activity/background/" + resource.activityArray[activityArrayIndex-1].assets.activityBackground + ")";
        }
        // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

      }

      // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
      if (resource.challengeArray){
        if (settings.hints === "No" || resource.challengeArray[i].info.state === "complete"){
          toggleClass(activityButtonHint, 'activity-button-hint--visible', 'activity-button-hint--hidden');
        }
        else { 
          toggleClass(activityButtonHint,"activity-button-hint--hidden","activity-button-hint--visible");
        }
      }
      // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

      // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
      else {
        /* setTimeout(toggleClass, 150, activityBlackout, "activity-blackout--close", "activity-blackout--open"); */
        if (settings.hints === "No" || resource.activityArray[i].state === "complete"){
          toggleClass(activityButtonHint, 'activity-button-hint--visible', 'activity-button-hint--hidden');
        }
        else { 
          toggleClass(activityButtonHint,"activity-button-hint--hidden","activity-button-hint--visible");
        }
      }
      // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
      
    }
  }
  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
  else {
    if (resource.activityArray[i].type === "code-box"){
      return false;
    }
    else {
      let nodes = document.querySelectorAll('.activity-node:not([id^="activity-node-' + (i + 1) + '"])');
      nodes.forEach(function(node) {
        // Apply the desired class to each node
        toggleClass(node,"activity-node--not-clicked","activity-node--clicked");
        node.classList.remove("activity-node--visible");
      });
      setTimeout(bringNodesBack,1000);
      function bringNodesBack(){
        nodes.forEach(function(node) {
          // Apply the desired class to each node
          toggleClass(node,"activity-node--clicked","activity-node--not-clicked");
        });
      }
      toggleClass(activity, "state-display-none", "state-display-block");
      typeof Sound !== 'undefined' && Sound.event('activity.open');
      typeof Sound !== 'undefined' && Sound.event('activity.openWhoosh');
      fadeMapLoop(true);
      showActivityCloseButtons();
      setTimeout(toggleClass, 600, activityModal, "activity-modal--close", "activity-modal--open");
      setTimeout(addTopBackgroundImage,2000);
      function addTopBackgroundImage(){
        activityModalContentContainerTop.style.backgroundImage = "url(resource/" + resourceTheme + "/assets/activity/background/" + resource.activityArray[activityArrayIndex-1].assets.activityBackground + ")";
      }
      /* setTimeout(toggleClass, 150, activityBlackout, "activity-blackout--close", "activity-blackout--open"); */
      if (settings.hints === "No" || resource.activityArray[i].state === "complete"){
        toggleClass(activityButtonHint, 'activity-button-hint--visible', 'activity-button-hint--hidden');
      }
      else { 
        toggleClass(activityButtonHint,"activity-button-hint--hidden","activity-button-hint--visible");
      }
    }
  }
  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

}
function closeActivityModal(){
  typeof Sound !== 'undefined' && Sound.event('activity.closeWhoosh');
  typeof Sound !== 'undefined' && Sound.stopVocalize();  // a character still talking stops with the modal
  fadeMapLoop(false);
  toggleClass(activityModal, "activity-modal--open", "activity-modal--close");
  activityModal.classList.add("activity-modal--closing");  // its pop-out (css/home.css)
  /* toggleClass(activityBlackout, "activity-blackout--open", "activity-blackout--close"); */

  // Nothing inside the modal changes until the pop-out has finished: on slow devices
  // (Chromebooks) it starts late, and fixed timers cut it off and removed the NPC scene
  // while it was still on screen, flashing the activity behind it. The modal stays over
  // the map (invisible, still catching taps) until this runs, so if animationend never
  // arrives (tab hidden, device asleep), the fallback timer runs it instead.
  let tornDown = false;
  function finishClosingActivity(){
    if (tornDown) return;
    tornDown = true;
    activityModal.removeEventListener("animationend", onPopOutEnd);
    clearTimeout(fallbackTimer);
    toggleClass(activity, "state-display-block", "state-display-none");
    scrollToTop(activityModalWrapper);
    if (openState.hint === true){
      openHintModal('closingActivity');
    }
    clearActivity();
  }
  function onPopOutEnd(e){
    // the pop-out, or the plain fade under reduced motion; not a child's animation
    if (e.target !== activityModal) return;
    if (e.animationName !== "activity-modal-pop-out" && e.animationName !== "activity-modal-fade-out") return;
    finishClosingActivity();
  }
  activityModal.addEventListener("animationend", onPopOutEnd);
  const fallbackTimer = setTimeout(finishClosingActivity, 500);

  setTimeout(removeTopBackgroundImage,2000);
  function removeTopBackgroundImage(){
    activityModalContentContainerTop.style.backgroundImage = "none";
  }
  toggleClass(activityButtonDone, "activity-button-done--open","activity-button-done--close");
  toggleClass(activityModalContentContainer, 'activity-modal-content-container--right', 'activity-modal-content-container--left');
  toggleClass(activityModalContentContainerToggle, 'activity-modal-content-container-toggle--bottom', 'activity-modal-content-container-toggle--top');
}

// draw activity
function drawActivity(i){

  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
  if (resource.challengeArray){
    if (resource.challengeArray[i].info.type !== "code-box") {
      let hint = resource.challengeArray[i].info.hint.text;
      let highlightedHint = hint.replace(/\[(.*?)\]/g, '<span class="hint-text--highlight">$1</span>');
      activityModalHintText.innerHTML = highlightedHint;
      // fix whatever the fuck is happening with the cryptogram
      /*
      let activityType = resource.challengeArray[i-1].info.type; 
      switch (activityType) {
        case "cryptogram":
            drawActivity_cryptogram(i);
            break;
      }
      */
    }
  }
  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
  else {
    if (resource.activityArray[i-1].type !== "code-box") {
      let hint = resource.activityArray[i-1].hint;
      let highlightedHint = hint.replace(/\[(.*?)\]/g, '<span class="hint-text--highlight">$1</span>');
      activityModalHintText.innerHTML = highlightedHint;
      let activityType = resource.activityArray[i-1].type; 
      switch (activityType) {
        case "cryptogram":
            drawActivity_cryptogram(i);
            break;
      }
    }
  }
  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

}

// clear activity
function clearActivity(){
  const activityModal = document.querySelector(".activity-modal");
  const childrenToRemove = activityModal.querySelectorAll(":not(.scroll-up):not(.activity-modal-hint-button):not(.activity-modal-hint-container):not(.activity-modal-hint-wrapper):not(.machine-column):not(.machine-column-right):not(.machine-column-left):not(.machine-container):not(.activity-modal-screen):not(.activity-modal-code-machine):not(.activity-modal-wrapper):not(.activity-modal-content-container):not(.activity-modal-content-container-top):not(.activity-modal-content-container-bottom):not(.activity-modal-content-container-toggle):not(.button-close-modal):not(.activity-button-done):not(.activity-button-hint):not(.activity-modal-hint):not(.activity-modal-hint-text):not(.keyboard):not(.keyboard-row):not(.keyboard-button)");
  childrenToRemove.forEach(child => child.remove());
}

