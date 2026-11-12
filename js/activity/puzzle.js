// Puzzle snapping, shared by puzzle.js and dynamic.js's puzzle type. Every puzzle
// has the same 3x3 solved layout (the answer key's), skinned differently. A piece
// dropped inside the grid snaps to the nearest slot with a click; dropped on a
// taken slot, it swaps with the piece there, which moves to where the dragged
// piece started. A piece dropped outside the grid stays loose, for staging.
// Positions are % of the activity area, as the drag code sets them.
// Pieces overlap their neighbours so the tabs interlock. When the piece size
// changes (dynamic.css, activity.css), scale the spacing with it to keep the fit:
// these are the original [15, 37.25, 59.5] / [14, 34.25, 54.5] grown 0.5% with
// the pieces, around the grid's middle.
const PUZZLE_SLOT_X = [14.83, 37.19, 59.55];
const PUZZLE_SLOT_Y = [13.84, 34.19, 54.54];
const PUZZLE_SLOTS = PUZZLE_SLOT_Y.flatMap(function(y) {
  return PUZZLE_SLOT_X.map(function(x) { return { x: x, y: y }; });
});

// Per background art: moves the whole grid so it sits on the frame drawn in the
// challenge's activity background (resource/<theme>/assets/activity/background/).
// Keyed '<theme>/<file>'. x and y are % of the activity area, + is right and down.
// A background not listed uses the grid as is. To tune one: on localhost, pick it
// in the debug panel's Puzzle menu (opens its answer key), nudge with the arrow
// keys (Shift for bigger steps), then Copy and paste the line here.
const PUZZLE_GRID_OFFSETS = {
  'escape-the-midnight-mall/the-candy-cave-2.png': { x: -0.4, y: 0 },
  'escape-the-midnight-mall/zeeb-plex.png': { x: -0.5, y: 0.25 },
  'pickles-playground/banana-gunk-jr.png': { x: -0.4, y: 0.05 },
  'beehive-blitz/basil-rabbit-2.png': { x: -0.5, y: -0.05 },
  'beehive-blitz/sunny-snap.png': { x: 0, y: 1.35 },
  'camp-calamari/chef-gumbo-2.png': { x: -0.45, y: 0.2 },
  'camp-calamari/madame-mystica.png': { x: 0.6, y: 1.3 },
  'the-hasty-harvest/camp-gnomad.png': { x: -0.3, y: 0.3 },
  'the-yeti-and-the-yam/fishbeard.png': { x: -0.3, y: 0.1 },
  'the-yeti-and-the-yam/pippo-fizzlepop-2.png': { x: -0.4, y: -0.1 },
  'rainbow-rescue/sunny-snap.png': { x: -0.3, y: 0.4 },
};

// The open challenge's background, as a PUZZLE_GRID_OFFSETS key.
function puzzleBackgroundKey() {
  let file;
  if (resource.challengeArray) {
    const challenge = resource.challengeArray[activityArrayIndex];
    file = challenge && challenge.activity && challenge.activity.info.asset;
    if (file && typeof file === 'object') file = file.path;
  } else {
    const activity = resource.activityArray[activityArrayIndex - 1];
    file = activity && activity.assets && activity.assets.activityBackground;
  }
  return resourceTheme + '/' + file;
}

// The open challenge's slots: PUZZLE_SLOTS moved by its background's offset.
function puzzleSlots() {
  const offset = PUZZLE_GRID_OFFSETS[puzzleBackgroundKey()];
  if (!offset) return PUZZLE_SLOTS;
  return PUZZLE_SLOTS.map(function(slot) {
    return { x: slot.x + (offset.x || 0), y: slot.y + (offset.y || 0) };
  });
}
// Half the slot spacing: anywhere over the grid snaps, only outside it stays loose.
const PUZZLE_SNAP_RANGE_X = (PUZZLE_SLOT_X[1] - PUZZLE_SLOT_X[0]) / 2;
const PUZZLE_SNAP_RANGE_Y = (PUZZLE_SLOT_Y[1] - PUZZLE_SLOT_Y[0]) / 2;
const PUZZLE_SNAP_MS = 90; // matches .puzzle-piece--snapping's glide in activity.css

// Drag maths for puzzle pieces and drag-and-drop blocks, in % of the activity area.
// The finger is measured against the area's on-screen box, and the piece's grab
// offset from its layout position (offsetLeft/Top: untouched by its tilt or any
// transform). Mixing on-screen pixels with offsetWidth broke on short landscape
// screens, where .site-container is scaled to 0.8, and pieces jumped on pick-up.
function dragPointInArea(e, area) {
  const point = e.touches ? e.touches[0] : e;
  const box = area.getBoundingClientRect();
  return {
    x: (point.clientX - box.left) / box.width * 100,
    y: (point.clientY - box.top) / box.height * 100,
  };
}

// Where the finger is on the piece, as an offset from the piece's top-left.
function dragGrabOffset(e, piece, area) {
  const point = dragPointInArea(e, area);
  return {
    x: point.x - piece.offsetLeft / area.offsetWidth * 100,
    y: point.y - piece.offsetTop / area.offsetHeight * 100,
  };
}

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
  puzzleSlots().forEach(function(candidate) {
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

// Answer key: every piece in its solved slot. data-puzzle-slot lets the debug
// panel move the pieces as it nudges the grid.
function placePuzzlePieceSolved(piece, i) {
  const slot = puzzleSlots()[i];
  if (!slot) return;
  piece.dataset.puzzleSlot = i;
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
    let grab; // finger's offset on the piece, % of the activity area (dragGrabOffset)

    document.addEventListener("mousedown", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseleave", dragEnd);

    activityPuzzlePiece.addEventListener("touchstart", dragStart, { passive: false });
    activityPuzzlePiece.addEventListener("touchend", dragEnd, { passive: false });
    activityPuzzlePiece.addEventListener("touchmove", drag, { passive: false });
    activityPuzzlePiece.addEventListener("touchcancel", dragEnd, { passive: false });

    function dragStart(e) {
      if (e.target === activityPuzzlePiece) {
        grab = dragGrabOffset(e, activityPuzzlePiece, activityModalContentContainerTop);
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
        const point = dragPointInArea(e, activityModalContentContainerTop);
        currentX = point.x - grab.x;
        currentY = point.y - grab.y;
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
