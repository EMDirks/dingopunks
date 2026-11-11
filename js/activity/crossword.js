// store user inputs
let crosswordUserInputs = [];

// auto-advance: starting on a lettered cell (A, B, C...) moves focus through that word's
// empty cells as you type; starting anywhere else (or clicking away) turns it off
let crosswordActiveWord = null;      // the inputs of the word being typed, in order
let crosswordAutoFocusing = false;   // true while we move focus ourselves

function focusNextCrosswordWordCell(inputElement){
  const word = crosswordActiveWord;
  const index = word ? word.indexOf(inputElement) : -1;
  if (index === -1) return;
  const next = word.slice(index + 1).find(cell => cell.value === '');
  if (!next) {
    crosswordActiveWord = null;
    if (activeInput__codeInput === inputElement) activeInput__codeInput = null;
    return;
  }
  crosswordAutoFocusing = true;
  next.focus({ preventScroll: true });
  crosswordAutoFocusing = false;
  activeInput__codeInput = next;
}

// the software keyboard registers its handlers once per drawn activity, so one press can
// call this several times; the debounce collapses them so we only move one cell
const debouncedFocusNextCrosswordWordCell = debounce(focusNextCrosswordWordCell, 10);

function drawCrossword(activityIndex){

  if (gameMode === "preview"){
    machineContainer.classList.add("state-pointer-events-none");
  }

  let activityCrossword;

  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
  if (resource.challengeArray){

    // create alias
    activityCrossword = resource.challengeArray[activityArrayIndex].questions.contentArray;

  }
  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
  else {

    // create alias
    activityCrossword = resource.activityArray[activityArrayIndex-1].content.crossword;
 
  }
  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

  // create elements: question
  let machineItemCrosswordQuestions = createElement("div", ["machine-item-crossword-questions", "machine-item"], machineColumnLeft);
  let machineTitle = createElement('p',['machine-title'],machineItemCrosswordQuestions);
  machineTitle.textContent = activityCrossword.title;
  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
  if (resource.challengeArray){
    for (let i = 0; i < activityCrossword.paragraph.length; i++) {
        let crosswordQuestion = createElement('p', ['machine-paragraph', 'machine-paragraph-crossword'], machineItemCrosswordQuestions);
        crosswordQuestion.innerHTML = styleText(activityCrossword.paragraph[i]);
        if (i < activityCrossword.paragraph.length - 1) {
            machineItemCrosswordQuestions.appendChild(crosswordQuestion);
            machineItemCrosswordQuestions.appendChild(document.createElement('br'));
        } else {
            machineItemCrosswordQuestions.appendChild(crosswordQuestion);
        }
    }
  }

  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
  else {
    for (let i = 0; i < activityCrossword.paragraph.length; i++) {
      let crosswordQuestion = createElement('p',['machine-paragraph', 'machine-paragraph-crossword'],machineItemCrosswordQuestions);
      crosswordQuestion.textContent = activityCrossword.paragraph[i];
    }
  } 
  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

  // create elements: puzzle
  let machineItemCrosswordPuzzle = createElement("div", ["machine-item-crossword-puzzle", "machine-item"], machineColumnRight);
  let machineCrosswordTable = createElement("table", ["machine-crossword-table"], machineItemCrosswordPuzzle);
  const crosswordInputGrid = [];
  for (let i = 0; i <  activityCrossword.puzzle.length; i++) {
    crosswordInputGrid[i] = [];
    const rowIsAllEmpty = activityCrossword.puzzle[i].every(cell => cell === "0");
    const rowClasses = rowIsAllEmpty
      ? ["machine-crossword-row", "machine-crossword-row--all-empty"]
      : ["machine-crossword-row"];
    let machineCrosswordRow = createElement("tr", rowClasses, machineCrosswordTable);
    for (let j = 0; j <  activityCrossword.puzzle[i].length; j++) {
      let machineCrosswordCell = createElement("td", ["machine-crossword-cell"], machineCrosswordRow);
      if ( activityCrossword.puzzle[i][j] !== "0") {
        let machineCrosswordInput = createElement("input",["machine-crossword-input","machine-crossword-cell-filled","input-functionality-default"],machineCrosswordCell);
        machineCrosswordInput.type = "text";
        machineCrosswordInput.maxLength = 1;
        crosswordInputGrid[i][j] = machineCrosswordInput;
        const regex = /\((.+)\)/;
        const match =  activityCrossword.puzzle[i][j].match(regex);
        if (match) {
          let machineCrosswordLabelVisible = createElement("p",["machine-crossword-label-visible", "number"],machineCrosswordCell);
          machineCrosswordLabelVisible.textContent = match[1];
        }
        
        if ( activityCrossword.puzzle[i][j].includes("1") ||  activityCrossword.puzzle[i][j].includes("2") ||  activityCrossword.puzzle[i][j].includes("3") ||  activityCrossword.puzzle[i][j].includes("4") ||  activityCrossword.puzzle[i][j].includes("5") ||  activityCrossword.puzzle[i][j].includes("6")) {
          machineCrosswordInput.classList.add("machine-crossword-cell-red");
          let machineCrosswordLabelHidden = createElement("p",["machine-crossword-label-hidden"],machineCrosswordCell);
          if (match) {
            machineCrosswordLabelHidden.textContent =  activityCrossword.puzzle[i][j].charAt(3);
          }
          else {
             machineCrosswordLabelHidden.textContent =  activityCrossword.puzzle[i][j].charAt(0);
          }
        }   
        
        // set hardware keyboard functionality
        setHardwareKeyboardFunctionality(machineCrosswordInput,"machine-crossword-input","machine-crossword-table",activityIndex,i,j); 
        
        // load user inputs
        machineCrosswordInput.value = userInput["crossword" + activityIndex]["row" + i][j];

        // gameMode: preview
        if (gameMode === "preview") {
          let cleanedPuzzle = cleanPuzzle(activityCrossword.puzzle);
          function cleanPuzzle(puzzle) {
            return puzzle.map(row => 
                row.map(cell => 
                    cell.replace(/\([A-Z]\)|[0-9]/gi, '').trim()
                )
            );
          }     
          machineCrosswordInput.value = cleanedPuzzle[i][j];
        }
        

      }
      else { 
        machineCrosswordCell.classList.add("machine-crossword-cell-empty");
      }
    
    }
  }

  setCrosswordAutoAdvance(activityCrossword.puzzle, crosswordInputGrid);

  checkIfCrosswordIsFilled();

  // set software keyboard functionality
  setSoftwareKeyboardFunctionality("machine-crossword-input","machine-crossword-table",activityIndex);
  
}

// give each lettered cell the inputs of the word it starts, and pick the word up on focus
function setCrosswordAutoAdvance(puzzle, inputGrid){
  crosswordActiveWord = null;
  const isLetter = (i, j) => i >= 0 && j >= 0 && i < puzzle.length && j < puzzle[i].length && puzzle[i][j] !== "0";

  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      const input = inputGrid[i][j];
      if (!input) continue;

      let wordCells = null;
      if (/^\(.+\)/.test(puzzle[i][j])) {
        // the word runs the way this cell starts one: blank before it, letter after it
        let di = 0, dj = 0;
        if (!isLetter(i, j - 1) && isLetter(i, j + 1)) dj = 1;
        else if (!isLetter(i - 1, j) && isLetter(i + 1, j)) di = 1;
        if (di || dj) {
          wordCells = [];
          for (let r = i, c = j; isLetter(r, c); r += di, c += dj) wordCells.push(inputGrid[r][c]);
        }
      }

      input.addEventListener('focus', () => {
        if (crosswordAutoFocusing) return;
        crosswordActiveWord = wordCells;
      });
    }
  }
}

// check if filled
function checkIfCrosswordIsFilled(focusCodeInput){
  var filledCells = document.querySelectorAll('.machine-crossword-cell-filled');
  var allFilled = true;
  for (var i = 0; i < filledCells.length; i++) {
    if (!filledCells[i].value) {
      allFilled = false;
      break;
      
    }
  }
  if (allFilled) {
    setTimeout(bringInInputs,100,focusCodeInput);
  } else {
    return false;
  }
}

