/////////////
// draw scene
/////////////

function drawScene(activityArrayIndex) {

  let activitySceneButtonText;
  let playerImage;
  let dialogueText;
  let playerName;

  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
  if (resource.challengeArray){

    if (resource.challengeArray[activityArrayIndex].info.type !== "code-box") {

      // modify scene based on state
      if (resource.challengeArray[activityArrayIndex].info.state === "incomplete") {
  
        // set player text

        if (gameMode === "preview"){
          playerImage = '';
          playerName = '';
          activitySceneButtonText = '';
        }
        else {
          for (let j = 0; j < characterArray.length; j++) {
            if ("name" in characterArray[j] && characterArray[j].name === playerCharacters[playerCharacterIndex]) {

              let startDialogueOptions = characterArray[j].dialogue.start;
              let randomStartDialogue = startDialogueOptions[Math.floor(Math.random() * startDialogueOptions.length)];
              activitySceneButtonText = randomStartDialogue;

              playerImage = characterArray[j].asset;
              playerName = characterArray[j].name;
            }
          }
          if (playerCharacterIndex < playerCharacters.length-1){
            playerCharacterIndex = playerCharacterIndex+1;    
          } 
          else {
            playerCharacterIndex = 0;
          }
        }

  
        // set character tex
        dialogueText = resource.challengeArray[activityArrayIndex].intro.dialogue.incomplete;  
      }
      if (resource.challengeArray[activityArrayIndex].info.state === "complete") {
      
        // set player text
        if (gameMode === "preview"){
          playerImage = '';
          playerName = '';
          activitySceneButtonText = ''
        }
        else {
          for (let j = 0; j < characterArray.length; j++) {
            if ("name" in characterArray[j] && characterArray[j].name === playerCharacters[playerCharacterIndex]) {

              let okayDialogueOptions = characterArray[j].dialogue.okay;
              let randomOkayDialogue = okayDialogueOptions[Math.floor(Math.random() * okayDialogueOptions.length)];
              activitySceneButtonText = randomOkayDialogue;

              playerImage = characterArray[j].asset;
              playerName = characterArray[j].name;
            }
          }
          if (playerCharacterIndex < playerCharacters.length-1){
            playerCharacterIndex = playerCharacterIndex+1;    
          } 
          else {
            playerCharacterIndex = 0;
          }
        }

  
        // set character tex
        dialogueText = resource.challengeArray[activityArrayIndex].intro.dialogue.complete;
      }
  
      // create elements
    
      const activitySceneWrapper = createElement('div', ['activity-scene-wrapper'], activityModal);
      const activitySceneContainer = createElement('div', ['activity-scene-container', 'activity-scene-container--open'], activitySceneWrapper);
      const activityScenedialogueWrapper = createElement('div', ['activity-scene-dialogue-wrapper', 'activity-scene-dialogue-wrapper--close'], activitySceneContainer);
      const activitySceneDialogueTrail = createElement('div', ['activity-scene-dialogue-trail'], activityScenedialogueWrapper);
      const activitySceneCharacterName = createElement('p', ['activity-scene-character-name',], activityScenedialogueWrapper);
      const activityScenedialogue = createElement('p', ['activity-scene-dialogue'], activityScenedialogueWrapper);
      let activitySceneTopic;
      if (resource.challengeArray[activityArrayIndex].info.state === "incomplete") {
        activitySceneTopic = createElement('p', ['activity-scene-topic', 'activity-scene-topic--hidden'], activityScenedialogueWrapper);
      }
      const activitySceneButton = createElement('div', ['activity-scene-button', 'activity-scene-button--close'], activitySceneContainer);
      const activitySceneButtonStart = createElement('button', ['activity-scene-button-start', 'activity-scene-button-start--hidden'], activitySceneContainer);
      const activitySceneCharacter = createElement('div', ['activity-scene-character', 'activity-scene-character--hidden'], activitySceneContainer);
      const activitySceneBackground = createElement('div', ['activity-scene-background'], activitySceneContainer);
      const activityScenePlayerFrame = createElement('div', ['activity-scene-player-frame', 'activity-scene-player-frame--hidden'], activitySceneContainer);
      const activityScenePlayer = createElement('div', ['activity-scene-player', 'activity-scene-player--close'], activitySceneContainer);
      const activityScenePlayerName = createElement('p', ['activity-scene-player-name'], activitySceneButton);
      const activityScenePlayerText = createElement('p', ['activity-scene-player-text'], activitySceneButton);
      const activitySceneDialogueTrailPlayer = createElement('div', ['activity-scene-dialogue-trail-player'], activitySceneButton);
      if (gameMode === "preview"){
        activitySceneButton.classList.add("state-display-none");
      }
  
      setIpadActiveState(activitySceneButtonStart);
  
      // modify elements
      setTimeout(slideInSceneCharacter, 1000, activitySceneCharacter);
      setTimeout(openSceneDialogue, 1300, activityScenedialogueWrapper);  // 300ms after the character, like the player's box
      activitySceneButtonStart.addEventListener('click', myFunction);
      let sceneStarted = false;
      function myFunction() {
        if (sceneStarted) return; // a second tap during the hold would slide out and whoosh twice
        sceneStarted = true;
        toggleClass(activitySceneButtonStart, "activity-scene-button-start--visible", "activity-scene-button-start--hidden"); // shrinks away during the hold
        const startHold = 300; // the press lands before the intro view slides out
        setTimeout(toggleClass, startHold, activitySceneContainer, "activity-scene-container--open", "activity-scene-container--close");
        typeof Sound !== 'undefined' && Sound.event('scene.startWhoosh');
        setTimeout(toggleClass, startHold + 500, activitySceneWrapper, null, 'state-display-none');
        setTimeout(toggleClass, startHold + 500, activityModalContentContainerToggle, "activity-modal-content-container-toggle--hidden", "activity-modal-content-container-toggle--visible");
        if (gameMode !== "preview"){
          const draggableElements = document.querySelectorAll('.drag-and-drop');
          draggableElements.forEach(function(el) {
            el.classList.add('draggable--hidden');
            setTimeout(makeVisible, startHold + 500);
            function makeVisible(){
              toggleClass(el,"draggable--hidden","draggable--visible");
            }
          });
        }

      }
      activityScenePlayer.style.backgroundImage = 'url(assets/player/' + playerImage + ')';
      /* activitySceneBackground.style.backgroundImage = `url(assets/resource/activity/${resource.activityArray[activityArrayIndex-1].assets.sceneBackground})`; */
      activitySceneCharacter.style.backgroundImage =     "url(resource/" + resourceTheme + "/assets/activity/character/" + resource.challengeArray[activityArrayIndex].intro.asset + ")";
      activitySceneCharacterName.textContent = resource.challengeArray[activityArrayIndex].intro.character.toUpperCase();
      activityScenePlayerName.textContent = playerName.toUpperCase();
      if (resource.challengeArray[activityArrayIndex].info.state === "incomplete") {
        activitySceneTopic.textContent = resource.challengeArray[activityArrayIndex].info.education.topic;
      }
      activitySceneButtonStart.textContent = "START";
      if (gameMode === "preview"){
        activitySceneButtonStart.textContent = "NEXT";
      }
      /* activitySceneInstructions.innerHTML = "<strong>Directions:</strong> " + resource.activityArray[activityArrayIndex-1].instructions; */

      let delay__sceneButton = 300;  // the player's turn, after the character's text (was 500, moved with delay__addText2)
      let delay__addText = 700;
      let delay__addText2 = 600;  // + delay__addText3: the character's text starts at 1600ms, just after its box lands (was 800)
      let delay__addText3 = 1000;
      let delay__sceneTopic = 1700;
      let delay__closeButton = 2000;

      // gameMode: preview
      if (gameMode === "preview"){
        typewriterDelay = 5;
        activityScenePlayerFrame.classList.add("state-display-none");
      }
  
      // open scene button when text is finished
      let activitySceneButtonTimer = (dialogueText.length * typewriterDelay) + delay__sceneButton;
      let activitySceneStartButtonTimer = (activitySceneButtonText.length * typewriterDelay);
      /* setTimeout(toggleClass, activitySceneButtonTimer + 500, activitySceneInstructions, "opacity-0", "opacity-1"); */
      if (resource.challengeArray[activityArrayIndex].info.state === "incomplete") {
        setTimeout(toggleClass, activitySceneButtonTimer + delay__sceneTopic, activitySceneTopic, "activity-scene-topic--hidden", "activity-scene-topic--visible");
      }
      setTimeout(toggleClass, activitySceneButtonTimer + delay__sceneTopic, activityScenePlayerFrame, "activity-scene-player-frame--hidden", "activity-scene-player-frame--visible");
      /* setTimeout(toggleClass, activitySceneButtonTimer + 1100, activitySceneCharacter, null, "activity-scene-character--pushed-left"); */
      setTimeout(toggleClass, activitySceneButtonTimer + delay__sceneTopic, activityScenePlayer, "activity-scene-player--close", "activity-scene-player--open");
      if (gameMode !== "preview") setTimeout(playScenePlayerIn, activitySceneButtonTimer + delay__sceneTopic);
      setTimeout(toggleClass, activitySceneButtonTimer + delay__sceneTopic, activitySceneCharacter, null, "activity-scene-characater--blackout");
      setTimeout(toggleClass, activitySceneButtonTimer + delay__closeButton, activitySceneButton, "activity-scene-button--close", "activity-scene-button--open");
      setTimeout(toggleClass, activitySceneButtonTimer + delay__closeButton + activitySceneStartButtonTimer, activitySceneButtonStart, "activity-scene-button-start--hidden", "activity-scene-button-start--visible");
  
      setTimeout(addText, delay__addText2, dialogueText, activityScenedialogue, resource.challengeArray[activityArrayIndex].intro.asset);
      // The player's text types from delay__addText + delay__addText3 but its box only opens at
      // delay__closeButton, so the player's voice waits for the box.
      const playerVoiceDelay = delay__closeButton - (delay__addText + delay__addText3);
      setTimeout(addText, activitySceneButtonTimer + delay__addText, activitySceneButtonText, activityScenePlayerText, playerImage, 'player', playerVoiceDelay);
      // add text typewriter-style. voiceKey: the speaking character's portrait file; a character
      // with a voice in SOUND_CONFIG.characterVoices plays one sound per line in place of the blips.
      // voiceTable: the characterVoices table to look in ('player' for the player's reply).
      // voiceDelay: ms added to the voice's own delay, for text that types before its box shows.
      function addText(text, element, voiceKey, voiceTable = resourceTheme, voiceDelay = 0){
        let voiced = false;
        for (let i = 0; i < text.length; i++) {
          const characterSpan = document.createElement('span');
          characterSpan.innerText = text[i];
          characterSpan.style.opacity = 0;
          setTimeout(addText,delay__addText3);
          function addText(){
              setTimeout(() => {
                  characterSpan.style.opacity = 1;
                  // Text from a closed activity keeps typing off-screen; keep it silent.
                  const onScreen = characterSpan.isConnected && characterSpan.offsetParent !== null;
                  if (i === 0 && onScreen && element === activityScenedialogue) {
                    popSceneCharacter(activitySceneCharacter);
                  }
                  if (i === 0 && onScreen && element === activityScenePlayerText) {
                    // the player's reply types before its box opens, so pop with its voice
                    setTimeout(popSceneCharacter, voiceDelay, activityScenePlayer);
                  }
                  if (i === 0 && voiceKey !== undefined && onScreen) {
                    voiced = typeof Sound !== 'undefined' && Sound.voice(voiceTable, voiceKey, voiceDelay, text.length * typewriterDelay - voiceDelay) === true;
                  }
                  if (!voiced && onScreen) {
                    typeof Sound !== 'undefined' && Sound.event('dialogue.letter', text[i]);
                  }
              }, i * typewriterDelay);
          }
          element.appendChild(characterSpan);
        }
      }
    }
  }
  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
  else {
    if (resource.activityArray[activityArrayIndex-1].type !== "code-box") {

      // modify scene based on state
      if (resource.activityArray[activityArrayIndex-1].state === "incomplete") {
  
        if (gameMode === "preview"){
          playerImage = '';
          playerName = '';
          activitySceneButtonText = '';
        }
        else {
          for (let j = 0; j < characterArray.length; j++) {
            if ("name" in characterArray[j] && characterArray[j].name === playerCharacters[playerCharacterIndex]) {

              let startDialogueOptions = characterArray[j].dialogue.start;
              let randomStartDialogue = startDialogueOptions[Math.floor(Math.random() * startDialogueOptions.length)];
              activitySceneButtonText = randomStartDialogue;

              playerImage = characterArray[j].asset;
              playerName = characterArray[j].name;
            }
          }
          if (playerCharacterIndex < playerCharacters.length-1){
            playerCharacterIndex = playerCharacterIndex+1;    
          } 
          else {
            playerCharacterIndex = 0;
          }
        }

  
        // set character tex
        dialogueText = resource.activityArray[activityArrayIndex-1].dialogue.incomplete;
        
      }
      if (resource.activityArray[activityArrayIndex-1].state === "complete") {
      
        // set player text
        for (let j = 0; j < characterArray.length; j++) {
          if ("name" in characterArray[j] && characterArray[j].name === playerCharacters[playerCharacterIndex]) {

              let okayDialogueOptions = characterArray[j].dialogue.okay;
              let randomOkayDialogue = okayDialogueOptions[Math.floor(Math.random() * okayDialogueOptions.length)];
              activitySceneButtonText = randomOkayDialogue;

            playerImage = characterArray[j].asset;
            playerName = characterArray[j].name;
          }
        }
        if (playerCharacterIndex < playerCharacters.length-1){
          playerCharacterIndex = playerCharacterIndex+1;    
        } 
        else {
          playerCharacterIndex = 0;
        }
  
        // set character tex
        dialogueText = resource.activityArray[activityArrayIndex-1].dialogue.complete;
      }
  
      // create elements
      const activitySceneWrapper = createElement('div', ['activity-scene-wrapper'], activityModal);
      const activitySceneContainer = createElement('div', ['activity-scene-container', 'activity-scene-container--open'], activitySceneWrapper);
      const activityScenedialogueWrapper = createElement('div', ['activity-scene-dialogue-wrapper', 'activity-scene-dialogue-wrapper--close'], activitySceneContainer);
      const activitySceneDialogueTrail = createElement('div', ['activity-scene-dialogue-trail'], activityScenedialogueWrapper);
      const activitySceneCharacterName = createElement('p', ['activity-scene-character-name',], activityScenedialogueWrapper);
      const activityScenedialogue = createElement('p', ['activity-scene-dialogue'], activityScenedialogueWrapper);
      let activitySceneTopic;
      if (resource.activityArray[activityArrayIndex-1].state === "incomplete") {
        activitySceneTopic = createElement('p', ['activity-scene-topic', 'activity-scene-topic--hidden'], activityScenedialogueWrapper);
      }
      const activitySceneButton = createElement('div', ['activity-scene-button', 'activity-scene-button--close'], activitySceneContainer);
      const activitySceneCharacter = createElement('div', ['activity-scene-character', 'activity-scene-character--hidden'], activitySceneContainer);
      const activitySceneBackground = createElement('div', ['activity-scene-background'], activitySceneContainer);
      const activityScenePlayerFrame = createElement('div', ['activity-scene-player-frame', 'activity-scene-player-frame--hidden'], activitySceneContainer);
      const activityScenePlayer = createElement('div', ['activity-scene-player', 'activity-scene-player--close'], activitySceneContainer);
      const activityScenePlayerName = createElement('p', ['activity-scene-player-name'], activitySceneButton);
      const activityScenePlayerText = createElement('p', ['activity-scene-player-text'], activitySceneButton);
      const activitySceneDialogueTrailPlayer = createElement('div', ['activity-scene-dialogue-trail-player'], activitySceneButton);
      const activitySceneButtonStart = createElement('button', ['activity-scene-button-start', 'activity-scene-button-start--hidden'], activitySceneContainer);
      setIpadActiveState(activitySceneButtonStart);
      if (gameMode === "preview"){
        activitySceneButton.classList.add("state-display-none");
      }
  
  
      // modify elements
      setTimeout(slideInSceneCharacter, 1000, activitySceneCharacter);
      setTimeout(openSceneDialogue, 1300, activityScenedialogueWrapper);  // 300ms after the character, like the player's box
      activitySceneButtonStart.addEventListener('click', myFunction);
      let sceneStarted = false;
      function myFunction() {
        if (sceneStarted) return; // a second tap during the hold would slide out and whoosh twice
        sceneStarted = true;
        toggleClass(activitySceneButtonStart, "activity-scene-button-start--visible", "activity-scene-button-start--hidden"); // shrinks away during the hold
        const startHold = 300; // the press lands before the intro view slides out
        setTimeout(toggleClass, startHold, activitySceneContainer, "activity-scene-container--open", "activity-scene-container--close");
        typeof Sound !== 'undefined' && Sound.event('scene.startWhoosh');
        setTimeout(toggleClass, startHold + 500, activitySceneWrapper, null, 'state-display-none');
        setTimeout(toggleClass, startHold + 500, activityModalContentContainerToggle, "activity-modal-content-container-toggle--hidden", "activity-modal-content-container-toggle--visible");
        if (gameMode !== "preview"){
          const draggableElements = document.querySelectorAll('.draggable');
          draggableElements.forEach(function(el) {
            el.classList.add('draggable--hidden');
            setTimeout(makeVisible, startHold + 400);
            function makeVisible(){
              toggleClass(el,"draggable--hidden","draggable--visible");
            }
          });
        }
      }
      activityScenePlayer.style.backgroundImage = 'url(assets/player/' + playerImage + ')';
      /* activitySceneBackground.style.backgroundImage = `url(assets/resource/activity/${resource.activityArray[activityArrayIndex-1].assets.sceneBackground})`; */
      activitySceneCharacter.style.backgroundImage =     "url(resource/" + resourceTheme + "/assets/activity/character/" + resource.activityArray[activityArrayIndex-1].assets.characterShopkeeper + ")";
      activitySceneCharacterName.textContent = resource.activityArray[activityArrayIndex-1].characterName.toUpperCase();
      activityScenePlayerName.textContent = playerName.toUpperCase();
      if (resource.activityArray[activityArrayIndex-1].state === "incomplete") {
        activitySceneTopic.textContent = resource.activityArray[activityArrayIndex-1].topic;
      }
      activitySceneButtonStart.textContent = "START";
      if (gameMode === "preview"){
        activitySceneButtonStart.textContent = "NEXT";
      }
      /* activitySceneInstructions.innerHTML = "<strong>Directions:</strong> " + resource.activityArray[activityArrayIndex-1].instructions; */

      // gameMode: preview
      if (gameMode === "preview"){
        typewriterDelay = 5;
        activityScenePlayerFrame.classList.add("state-display-none");
      }
  
      // open scene button when text is finished
      let activitySceneButtonTimer = (dialogueText.length * typewriterDelay) + 300;  // was 500, moved with the character's text
      let activitySceneStartButtonTimer = (activitySceneButtonText.length * typewriterDelay);
      /* setTimeout(toggleClass, activitySceneButtonTimer + 500, activitySceneInstructions, "opacity-0", "opacity-1"); */
      if (resource.activityArray[activityArrayIndex-1].state === "incomplete") {
        setTimeout(toggleClass, activitySceneButtonTimer + 1700, activitySceneTopic, "activity-scene-topic--hidden", "activity-scene-topic--visible");
      }
      setTimeout(toggleClass, activitySceneButtonTimer + 1700, activityScenePlayerFrame, "activity-scene-player-frame--hidden", "activity-scene-player-frame--visible");
      /* setTimeout(toggleClass, activitySceneButtonTimer + 1100, activitySceneCharacter, null, "activity-scene-character--pushed-left"); */
      setTimeout(toggleClass, activitySceneButtonTimer + 1700, activityScenePlayer, "activity-scene-player--close", "activity-scene-player--open");
      if (gameMode !== "preview") setTimeout(playScenePlayerIn, activitySceneButtonTimer + 1700);
      setTimeout(toggleClass, activitySceneButtonTimer + 1700, activitySceneCharacter, null, "activity-scene-characater--blackout");
      setTimeout(toggleClass, activitySceneButtonTimer + 2000, activitySceneButton, "activity-scene-button--close", "activity-scene-button--open");
      setTimeout(toggleClass, activitySceneButtonTimer + 2000 + activitySceneStartButtonTimer, activitySceneButtonStart, "activity-scene-button-start--hidden", "activity-scene-button-start--visible");
  
      setTimeout(addText, 600, dialogueText, activityScenedialogue,  // types from 1600ms, just after its box lands (was 800)
        resource.activityArray[activityArrayIndex-1].assets.characterShopkeeper);
      // The player's text types from +1700 but its box only opens at +2000, so the voice waits 300ms for it.
      setTimeout(addText, activitySceneButtonTimer + 700, activitySceneButtonText, activityScenePlayerText, playerImage, 'player', 300);
      // add text typewriter-style. voiceKey: the speaking character's portrait file; a character
      // with a voice in SOUND_CONFIG.characterVoices plays one sound per line in place of the blips.
      // voiceTable: the characterVoices table to look in ('player' for the player's reply).
      // voiceDelay: ms added to the voice's own delay, for text that types before its box shows.
      function addText(text, element, voiceKey, voiceTable = resourceTheme, voiceDelay = 0){
        let voiced = false;
        for (let i = 0; i < text.length; i++) {
          const characterSpan = document.createElement('span');
          characterSpan.innerText = text[i];
          characterSpan.style.opacity = 0;
          setTimeout(addText,1000);
          function addText(){
              setTimeout(() => {
                  characterSpan.style.opacity = 1;
                  // Text from a closed activity keeps typing off-screen; keep it silent.
                  const onScreen = characterSpan.isConnected && characterSpan.offsetParent !== null;
                  if (i === 0 && onScreen && element === activityScenedialogue) {
                    popSceneCharacter(activitySceneCharacter);
                  }
                  if (i === 0 && onScreen && element === activityScenePlayerText) {
                    // the player's reply types before its box opens, so pop with its voice
                    setTimeout(popSceneCharacter, voiceDelay, activityScenePlayer);
                  }
                  if (i === 0 && voiceKey !== undefined && onScreen) {
                    voiced = typeof Sound !== 'undefined' && Sound.voice(voiceTable, voiceKey, voiceDelay, text.length * typewriterDelay - voiceDelay) === true;
                  }
                  if (!voiced && onScreen) {
                    typeof Sound !== 'undefined' && Sound.event('dialogue.letter', text[i]);
                  }
              }, i * typewriterDelay);
          }
          element.appendChild(characterSpan);
        }
      }
    }
  }
  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌



}


// Slides an activity scene's character in from off screen and plays its whoosh.
function slideInSceneCharacter(character) {
  toggleClass(character, "activity-scene-character--hidden", "activity-scene-character--visible");
  typeof Sound !== 'undefined' && Sound.event('scene.characterIn');
}

// Pops an activity scene's character or player as its line starts, like a cutscene speaker's popOnSpeak.
function popSceneCharacter(character) {
  character.classList.remove('activity-scene-pop');
  void character.offsetWidth; // restart the pop if it is still running
  character.classList.add('activity-scene-pop');
}

// The player's graphic sliding in from off screen.
function playScenePlayerIn() {
  typeof Sound !== 'undefined' && Sound.event('scene.playerIn');
}

// Opens an activity scene's dialogue box and plays its sound.
function openSceneDialogue(wrapper) {
  toggleClass(wrapper, "activity-scene-dialogue-wrapper--close", "activity-scene-dialogue-wrapper--open");
  typeof Sound !== 'undefined' && Sound.event('scene.open');
}
