// Puzzle snapping, shared by puzzle.js and dynamic.js's puzzle type. Every puzzle
// has the same 3x3 solved layout (the answer key's), skinned differently. A piece
// dropped inside the grid snaps to the nearest slot with a click; dropped on a
// taken slot, it swaps with the piece there, which moves to where the dragged
// piece started. A piece dropped outside the grid stays loose, for staging.
// Positions are % of the activity area, as the drag code sets them.
const PUZZLE_SLOT_X = [15, 37.25, 59.5];
const PUZZLE_SLOT_Y = [14, 34.25, 54.5];
const PUZZLE_SLOTS = PUZZLE_SLOT_Y.flatMap(function(y) {
  return PUZZLE_SLOT_X.map(function(x) { return { x: x, y: y }; });
});
// Half the slot spacing: anywhere over the grid snaps, only outside it stays loose.
const PUZZLE_SNAP_RANGE_X = (PUZZLE_SLOT_X[1] - PUZZLE_SLOT_X[0]) / 2;
const PUZZLE_SNAP_RANGE_Y = (PUZZLE_SLOT_Y[1] - PUZZLE_SLOT_Y[0]) / 2;
const PUZZLE_SNAP_MS = 90; // matches .puzzle-piece--snapping's glide in activity.css

function puzzlePiecePosition(piece) {
  return { x: parseFloat(piece.style.left) || 0, y: parseFloat(piece.style.top) || 0 };
}

function placePuzzlePiece(piece, x, y) {
  piece.classList.add('puzzle-piece--snapping');
  clearTimeout(piece.puzzleSnapTimer);
  piece.puzzleSnapTimer = setTimeout(function() {
    piece.classList.remove('puzzle-piece--snapping');
  }, PUZZLE_SNAP_MS);
  piece.style.left = x + '%';
  piece.style.top = y + '%';
}

// piece: the piece just dropped. pieces: every piece in this puzzle. from: where
// its drag started. save(piece, x, y) stores a piece's new position.
function snapPuzzlePiece(piece, pieces, from, save) {
  const at = puzzlePiecePosition(piece);
  let slot = null;
  let bestDistance = Infinity;
  PUZZLE_SLOTS.forEach(function(candidate) {
    const dx = Math.abs(at.x - candidate.x);
    const dy = Math.abs(at.y - candidate.y);
    if (dx <= PUZZLE_SNAP_RANGE_X && dy <= PUZZLE_SNAP_RANGE_Y && dx + dy < bestDistance) {
      bestDistance = dx + dy;
      slot = candidate;
    }
  });

  if (!slot) {
    save(piece, at.x, at.y);
    return;
  }

  const occupant = pieces.find(function(other) {
    if (other === piece) return false;
    const otherAt = puzzlePiecePosition(other);
    return Math.abs(otherAt.x - slot.x) < 0.5 && Math.abs(otherAt.y - slot.y) < 0.5;
  });
  if (occupant) {
    placePuzzlePiece(occupant, from.x, from.y);
    save(occupant, from.x, from.y);
  }

  placePuzzlePiece(piece, slot.x, slot.y);
  save(piece, slot.x, slot.y);
  typeof Sound !== 'undefined' && Sound.event('puzzle.snap');
}

// The pile: on a puzzle's first open, every piece lands in a haphazard stack in the
// bottom-right corner, so kids start with the pieces in one place. pilePuzzlePieces
// sets where they rest (and is all a page without the activity scene ever shows);
// flyInPuzzlePieces, run when the scene's START reveals the puzzle, flies them in
// from off the right edge, one after another, under one card-fan sound.
const PUZZLE_PILE_X = [66, 74];       // left, % (pieces are 25% wide, so 75 is the edge)
const PUZZLE_PILE_Y = [61, 73];       // top, %
const PUZZLE_PILE_TILT = 8;           // degrees either way; straightens when picked up
const PUZZLE_FLY_AFTER_START_MS = 350; // after START's 300ms hold, as the intro view slides away (scene.js)
const PUZZLE_FLY_MS = 220;            // each piece's flight
const PUZZLE_FLY_STAGGER_MS = 65;     // between one piece setting off and the next
const PUZZLE_FLY_EASING = 'cubic-bezier(0.2, 0.9, 0.35, 1.12)'; // fast, then a hair past and back: the hit

function randomBetween(range) {
  return range[0] + Math.random() * (range[1] - range[0]);
}

function puzzlePieceTilt(piece) {
  return parseFloat(piece.style.rotate) || 0;
}

// Places pieces in the pile, stacked in a shuffled order (so the top of the pile
// gives nothing away), and marks them for the fly-in. save(piece, x, y) as above.
function pilePuzzlePieces(pieces, save, zIndexBase) {
  const order = pieces.slice().sort(function() { return Math.random() - 0.5; });
  order.forEach(function(piece, k) {
    const x = randomBetween(PUZZLE_PILE_X);
    const y = randomBetween(PUZZLE_PILE_Y);
    piece.style.left = x + '%';
    piece.style.top = y + '%';
    piece.style.rotate = ((Math.random() * 2 - 1) * PUZZLE_PILE_TILT).toFixed(1) + 'deg';
    piece.style.zIndex = zIndexBase + k;
    piece.dataset.puzzleFlyIn = '1';
    save(piece, x, y);
  });
}

// Bottom of the pile first. delay: ms before the first piece sets off.
function flyInPuzzlePieces(pieces, delay) {
  pieces.slice()
    .sort(function(a, b) { return (parseInt(a.style.zIndex) || 0) - (parseInt(b.style.zIndex) || 0); })
    .forEach(function(piece, k) {
      delete piece.dataset.puzzleFlyIn;
      if (!piece.animate) return;
      const tilt = puzzlePieceTilt(piece);
      const start = delay + k * PUZZLE_FLY_STAGGER_MS;
      piece.animate([
        { translate: '260% ' + Math.round(Math.random() * 60 - 30) + '%', rotate: (tilt + 25) + 'deg' },
        { translate: '0 0', rotate: tilt + 'deg' },
      ], { duration: PUZZLE_FLY_MS, delay: start, easing: PUZZLE_FLY_EASING, fill: 'backwards' });
    });
  if (pieces.length) {
    setTimeout(function() {
      typeof Sound !== 'undefined' && Sound.event('puzzle.flyIn');
    }, delay);
  }
}

// A piece picked up mid-flight lands at once; any piece picked up straightens and
// plays the multiple choice sound.
function liftPuzzlePiece(piece) {
  typeof Sound !== 'undefined' && Sound.event('puzzle.pickUp');
  if (piece.getAnimations) piece.getAnimations().forEach(function(a) { a.finish(); });
  piece.style.rotate = '';
}

// Answer key: every piece in its solved slot.
function placePuzzlePieceSolved(piece, i) {
  const slot = PUZZLE_SLOTS[i];
  if (!slot) return;
  piece.style.left = slot.x + '%';
  piece.style.top = slot.y + '%';
}

function drawPuzzle() {

  if (gameMode === "preview" && dragAndDropEdit === false){
    machineContainer.classList.add("state-pointer-events-none");
  }

  let activityPuzzle;
  let pieceArray;
  let textStyle;

  // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
  if (resource.challengeArray){
    activityPuzzle = resource.challengeArray[activityArrayIndex].activity;
    pieceArray = activityPuzzle.item.piece;
    textStyle = activityPuzzle.style.text.paragraph;
  }
  // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
  else {
    activityPuzzle = resource.activityArray[activityArrayIndex-1].content.puzzle;
    pieceArray = activityPuzzle.piece;
    textStyle = activityPuzzle.style.text.puzzle;
  }

  // create container
  const puzzleContainer = createElement('div',['puzzle-container'],activityModalContentContainerTop);
  const pieces = [];

  function savePiece(piece, x, y) {
    userInput.puzzlePosition[pieces.indexOf(piece)] = { x: x + "%", y: y + "%", r: puzzlePieceTilt(piece) };
  }
  let pileFirstOpen = false;

  // create elements inside container
  for (let i = 0; i < pieceArray.length; i++) {
    let activityPuzzlePiece = createElement("div", ["activity-puzzle-piece", "draggable", activityPuzzle.style.material], puzzleContainer);
    pieces.push(activityPuzzlePiece);
    if (activityPuzzle.style.arrangement === '3-vertical-rows'){
      activityPuzzlePiece.style.backgroundImage = "url(resource/" + resourceTheme + "/assets/activity/alternate/puzzle/3-vertical-rows/" + pieceArray[i].image + ")";
    }
    else {
      activityPuzzlePiece.style.backgroundImage = "url(resource/" + resourceTheme + "/assets/activity/puzzle/" + pieceArray[i].image + ")";
    }
    let activityPuzzlePieceText = createElement("p", ["activity-puzzle-piece-text", textStyle], activityPuzzlePiece);
    activityPuzzlePieceText.innerHTML = pieceArray[i].text.replace(/\[(\w+)\]/g, '<span class="puzzle-text-highlight">$1</span>');

    // save and load user inputs
    if (gameMode === "preview"){
      if (dragAndDropEdit === false){
        document.querySelectorAll('.draggable').forEach(function(el) {
          el.classList.add('state-pointer-events-none');
        });
      }
      placePuzzlePieceSolved(activityPuzzlePiece, i);
    }
    else {
      if (userInput.puzzlePosition[i]) {
        activityPuzzlePiece.style.left = userInput.puzzlePosition[i].x;
        activityPuzzlePiece.style.top = userInput.puzzlePosition[i].y;
        if (userInput.puzzlePosition[i].r) activityPuzzlePiece.style.rotate = userInput.puzzlePosition[i].r + "deg";
      } else {
        pileFirstOpen = true; // piled once every piece exists, below
      }
    }

    // set drag functionality
    let isDragging = false;
    let hasMoved = false;
    let dragFrom;
    let initialX;
    let initialY;

    document.addEventListener("mousedown", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseleave", dragEnd);

    activityPuzzlePiece.addEventListener("touchstart", dragStart, { passive: false });
    activityPuzzlePiece.addEventListener("touchend", dragEnd, { passive: false });
    activityPuzzlePiece.addEventListener("touchmove", drag, { passive: false });
    activityPuzzlePiece.addEventListener("touchcancel", dragEnd, { passive: false });

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - activityPuzzlePiece.getBoundingClientRect().left;
        initialY = e.touches[0].clientY - activityPuzzlePiece.getBoundingClientRect().top;
      } else {
        initialX = e.clientX - activityPuzzlePiece.getBoundingClientRect().left;
        initialY = e.clientY - activityPuzzlePiece.getBoundingClientRect().top;
      }
      if (e.target === activityPuzzlePiece) {
        const draggableElements = document.querySelectorAll('.draggable');
        let maxZIndex = 0;
        draggableElements.forEach(function(el) {
          const zIndex = parseInt(el.style.zIndex);
          if (!isNaN(zIndex) && zIndex > maxZIndex) {
            maxZIndex = zIndex;
          }
        });
        activityPuzzlePiece.style.zIndex = maxZIndex + 1;
        activityPuzzlePiece.classList.remove('puzzle-piece--snapping');
        liftPuzzlePiece(activityPuzzlePiece);
        dragFrom = puzzlePiecePosition(activityPuzzlePiece);
        hasMoved = false;
        isDragging = true;
      }
    }
    function dragEnd(e) {
      toggleClass(activityModalWrapper, "overflow-y-hidden", "overflow-y-scroll");
      const wasDragged = isDragging && hasMoved;
      isDragging = false;
      hasMoved = false;

      // save user inputs (read from the piece: a swap can move it without a drag)
      if (wasDragged) {
        snapPuzzlePiece(activityPuzzlePiece, pieces, dragFrom, savePiece);
      } else {
        const at = puzzlePiecePosition(activityPuzzlePiece);
        savePiece(activityPuzzlePiece, at.x, at.y);
      }
    }
    function drag(e) {
      if (isDragging) {
        toggleClass(activityModalWrapper, "overflow-y-scroll", "overflow-y-hidden");
        e.preventDefault();
        let currentX;
        let currentY;
        if (e.type === "touchmove") {
          currentX = (e.touches[0].clientX - activityModalContentContainerTop.getBoundingClientRect().left - initialX) / activityModalContentContainerTop.offsetWidth * 100;
          currentY = (e.touches[0].clientY - activityModalContentContainerTop.getBoundingClientRect().top - initialY) / activityModalContentContainerTop.offsetHeight * 100;
        } else {
          currentX = (e.clientX - activityModalContentContainerTop.getBoundingClientRect().left - initialX) / activityModalContentContainerTop.offsetWidth * 100;
          currentY = (e.clientY - activityModalContentContainerTop.getBoundingClientRect().top - initialY) / activityModalContentContainerTop.offsetHeight * 100;
        }
        const pieceWidth = activityPuzzlePiece.offsetWidth / activityModalContentContainerTop.offsetWidth * 100;
        const pieceHeight = activityPuzzlePiece.offsetHeight / activityModalContentContainerTop.offsetHeight * 100;
        const minX = 0;
        const minY = 0;
        const maxX = 100 - pieceWidth;
        const maxY = 100 - pieceHeight;
        currentX = Math.max(minX, Math.min(currentX, maxX));
        currentY = Math.max(minY, Math.min(currentY, maxY));
        activityPuzzlePiece.style.left = currentX + "%";
        activityPuzzlePiece.style.top = currentY + "%";
        hasMoved = true;
      }
    }

  }

  if (pileFirstOpen) {
    pilePuzzlePieces(pieces, savePiece, 1);
  }

}
