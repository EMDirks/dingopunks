// Column sort snapping, for dynamic.js's drag-and-drop challenges with columns.
// Each column is an ordered stack: cards sit top-down from the column's top, one
// under the other at their own heights, so columns can hold any number of cards
// of any height. A card dropped over a column goes into the stack where it was
// dropped (above the first card, between two, or at the end), and while it's
// dragged over a column the cards there part to show where it will land. A card
// dropped outside every column stays loose, for staging. A card dropped on a
// column with no room for it swaps with the card it's over, which goes where the
// dragged card came from; if either card wouldn't fit after the swap, the dragged
// card goes back to where it was picked up, with the error sound.
// Positions are % of the activity area, as the drag code sets them. The order is
// what's saved (userInput.puzzleN.sortColumns), so stacks are rebuilt at the
// cards' current heights on every open and resize.

// Stacks follow their on-screen column: each card is centred in its column, and
// the stack starts SORT_HEADER_GAP under the column's header label, wherever
// the header ends (a long header that wraps pushes the stack down with it).
const SORT_HEADER_GAP = 1.05; // % of the area's height between a column's header and its first card (8px at a 1440px-wide site)
const SORT_CARD_GAP = 0.39;   // % of the area's height between stacked cards (3px at a 1440px-wide site)
// A dragged card takes a neighbour's place once its middle passes this far into
// the neighbour (0.5: the neighbour's middle), the same going up or down.
const SORT_SWAP_POINT = 0.5;

// The pile for sort cards (board.pile): right-aligned in the bottom-right corner
// whatever the card's size. Gaps are measured from the tilted card's outermost
// corner, so no card touches the area's edges; the first number is the least.
const SORT_PILE_RIGHT = [1.75, 6.5]; // % between the card's right corner and the area's right edge
const SORT_PILE_BOTTOM = [3, 8];  // % between the card's low corner and the area's bottom edge
// The down arrow to the questions (.activity-modal-content-container-toggle) sits
// at 47-53% across, 90-99% down: a piled card over that strip sits above it.
const SORT_PILE_KEEP_CLEAR = { left: 46, right: 54, top: 88 };
// How much higher the pile sits, in % of the area's height, by column count.
const SORT_PILE_LIFT = { 1: 4, 2: 0, 3: 0 };

// The board for one sort challenge. cards: every card, in data order (the index
// is the save index). columns: the on-screen .activity-sort__column elements.
// area: the activity area the cards are positioned in. save(): stores the board.
function createSortBoard(cards, columns, area, save) {
  const columnCount = columns.length;
  const stacks = columns.map(function() { return []; });
  const piled = new Map(); // card -> { right, bottom }: in the first-open pile, not yet picked up
  let dragging = null; // { card, from: {x, y}, origin: {column, index} | null, target }

  function percentX(px) { return px / area.clientWidth * 100; }
  function percentY(px) { return px / area.clientHeight * 100; }
  function cardHeight(card) { return percentY(card.offsetHeight); }
  // A card's margins (.activity-block's 0.5% sides, 0.8% top). left/top place the
  // margin's outer edge, so the visible card sits this far right of and below them.
  function marginLeft(card) { return percentX(parseFloat(getComputedStyle(card).marginLeft) || 0); }
  function marginTop(card) { return percentY(parseFloat(getComputedStyle(card).marginTop) || 0); }
  const gap = function() { return SORT_CARD_GAP; };

  function stackHeight(stack) {
    return stack.reduce(function(sum, card) { return sum + cardHeight(card) + gap(); }, 0);
  }

  // On-screen boxes as a share of the area's on-screen size: right on short
  // landscape screens too, where .site-container is scaled to 0.8.
  function columnBox(column) {
    const box = area.getBoundingClientRect();
    const rect = columns[column].getBoundingClientRect();
    return {
      left: (rect.left - box.left) / box.width * 100,
      right: (rect.right - box.left) / box.width * 100,
      bottom: (rect.bottom - box.top) / box.height * 100,
    };
  }

  // Where a column's stack starts: just under its header label.
  function columnTop(column) {
    const header = columns[column].querySelector('.activity-sort__column__text');
    const box = area.getBoundingClientRect();
    if (!header || !box.height) return 0;
    const bottom = header.getBoundingClientRect().bottom;
    return (bottom - box.top) / box.height * 100 + SORT_HEADER_GAP;
  }

  // A card's left so its visible box sits centred in the column.
  function columnLeft(column, card) {
    const c = columnBox(column);
    return (c.left + c.right) / 2 - percentX(card.offsetWidth) / 2 - marginLeft(card);
  }

  function fits(column, card) {
    // A stack can't run past the bottom of its column (the red drop area).
    return columnTop(column) + stackHeight(stacks[column]) + cardHeight(card) <= columnBox(column).bottom;
  }

  // Lays a column out top-down. space: { index, height } leaves room for the card
  // being dragged. Cards ease into place (.sort-card--stacked in dynamic.css).
  function stack(column, space) {
    let top = columnTop(column);
    stacks[column].forEach(function(card, k) {
      if (space && space.index === k) top += space.height + gap();
      card.classList.add('sort-card--stacked');
      card.style.left = columnLeft(column, card) + '%';
      card.style.top = top - marginTop(card) + '%';
      card.style.rotate = '';
      top += cardHeight(card) + gap();
    });
  }

  // The pile, right-aligned in the corner at each card's current size.
  function layOutPile() {
    piled.forEach(function(spot, card) {
      const width = percentX(card.offsetWidth);
      const height = cardHeight(card);
      // How far a tilted card's corners reach past its straight edges, each side.
      const tilt = Math.abs(parseFloat(card.style.rotate) || 0) * Math.PI / 180;
      const overX = percentX((card.offsetWidth * Math.cos(tilt) + card.offsetHeight * Math.sin(tilt) - card.offsetWidth) / 2);
      const overY = percentY((card.offsetWidth * Math.sin(tilt) + card.offsetHeight * Math.cos(tilt) - card.offsetHeight) / 2);
      const left = 100 - width - overX - spot.right;
      let top = 100 - height - overY - spot.bottom;
      if (left - overX < SORT_PILE_KEEP_CLEAR.right && left + width + overX > SORT_PILE_KEEP_CLEAR.left) {
        top = Math.min(top, SORT_PILE_KEEP_CLEAR.top - height - overY - (spot.bottom - SORT_PILE_BOTTOM[0]));
      }
      top -= SORT_PILE_LIFT[columnCount] || 0;
      // never touching the left or top edge either
      card.style.left = Math.max(overX + SORT_PILE_RIGHT[0], left) + '%';
      card.style.top = Math.max(overY + SORT_PILE_BOTTOM[0], top) + '%';
    });
  }

  // Everything laid out at the current sizes. Skipped until the area has a size:
  // when a challenge is drawn its area is still 0px tall and the cards aren't at
  // their final size, so the size watcher in dynamic.js calls this again once they are.
  function layOut() {
    if (!area.clientHeight || !area.clientWidth) return;
    const space = dragging && dragging.target && dragging.target.fits ? dragging.target : null;
    for (let c = 0; c < columnCount; c++) stack(c, space && space.column === c ? space : null);
    if (piled.size) {
      layOutPile();
      save();
    }
  }

  function columnOf(card) {
    for (let c = 0; c < columnCount; c++) {
      const index = stacks[c].indexOf(card);
      if (index !== -1) return { column: c, index: index };
    }
    return null;
  }

  // The column under the card's centre and where in its stack the card would go,
  // or null. Measured against the cards where they sit on screen, with the space
  // the dragged card has open (dragging.target): the card goes above the first
  // card it hasn't passed SORT_SWAP_POINT of. Measuring the stack closed up
  // instead put every card below the dragged one a card-height too high, so a
  // nudge down swapped it with the card underneath.
  function dropTarget(card) {
    const centerX = (parseFloat(card.style.left) || 0) + marginLeft(card) + percentX(card.offsetWidth) / 2;
    const centerY = (parseFloat(card.style.top) || 0) + marginTop(card) + cardHeight(card) / 2;
    for (let c = 0; c < columnCount; c++) {
      const col = columnBox(c);
      if (centerX < col.left || centerX >= col.right) continue;
      const open = dragging && dragging.target && dragging.target.fits && dragging.target.column === c ? dragging.target : null;
      let index = 0;
      let top = columnTop(c);
      for (; index < stacks[c].length; index++) {
        if (open && open.index === index) top += open.height + gap();
        const height = cardHeight(stacks[c][index]);
        if (centerY < top + height * SORT_SWAP_POINT) break;
        top += height + gap();
      }
      return { column: c, index: index, height: cardHeight(card), fits: fits(c, card) };
    }
    return null;
  }

  // The stacked card in a column that the dragged card is over: the one its centre
  // is on, or the nearest one when the centre is in a gap or below the stack.
  function cardUnder(column, card) {
    const centerY = (parseFloat(card.style.top) || 0) + marginTop(card) + cardHeight(card) / 2;
    let best = -1;
    let bestDistance = Infinity;
    let top = columnTop(column);
    stacks[column].forEach(function(other, k) {
      const height = cardHeight(other);
      const distance = centerY < top ? top - centerY : centerY > top + height ? centerY - top - height : 0;
      if (distance < bestDistance) { best = k; bestDistance = distance; }
      top += height + gap();
    });
    return best;
  }

  // A drop on a full column: the dragged card takes the place of the card it's
  // over, and that card goes where the dragged one came from (its spot in another
  // column, or loose where the drag started). Returns false, changing nothing,
  // when either card wouldn't fit in its new place.
  function swap(card, column, origin, from) {
    if (origin && origin.column === column) return false;
    const index = cardUnder(column, card);
    if (index === -1) return false;
    const other = stacks[column][index];
    const swappedHeight = stackHeight(stacks[column]) - cardHeight(other) + cardHeight(card);
    if (columnTop(column) + swappedHeight > columnBox(column).bottom) return false;
    if (origin && !fits(origin.column, other)) return false;

    stacks[column].splice(index, 1, card);
    card.style.rotate = '';
    stack(column);
    placeSortCard(card);
    if (origin) {
      stacks[origin.column].splice(origin.index, 0, other);
      stack(origin.column);
      placeSortCard(other);
    } else {
      // Loose where the dragged card was, kept inside the area if it's bigger.
      other.classList.remove('sort-card--stacked');
      const x = Math.max(0, Math.min(from.x, 100 - percentX(other.offsetWidth) - 2 * marginLeft(other)));
      const y = Math.max(0, Math.min(from.y, 100 - cardHeight(other) - 2 * marginTop(other)));
      placePuzzlePiece(other, x, y);
    }
    return true;
  }

  function sameTarget(a, b) {
    if (!a || !b) return a === b;
    return a.column === b.column && a.index === b.index && a.fits === b.fits;
  }

  return {
    // Rebuilds the stacks from a save: [[card index, ...] per column], top to bottom.
    load: function(sortColumns) {
      sortColumns.forEach(function(indexes, c) {
        if (!stacks[c]) return;
        indexes.forEach(function(i) { if (cards[i]) stacks[c].push(cards[i]); });
      });
    },

    // Answer key: each card in its correct column, in data order. One-column sorts
    // put everything in the column, whatever correctIndex says: Midnight Mall's
    // Story Elements has none, Pickle's Text Structures has 1 on every card.
    loadAnswers: function(correctIndexes) {
      cards.forEach(function(card, i) {
        const column = columnCount === 1 ? 0 : correctIndexes[i];
        if (stacks[column]) stacks[column].push(card);
      });
    },

    // Every column (and the pile) laid out at the cards' current sizes.
    restack: layOut,

    // First open: the same haphazard pile and fly-in as puzzle pieces
    // (pilePuzzlePieces), right-aligned in the bottom-right corner at each card's
    // size (sort cards are 20-48% wide, much wider than puzzle pieces).
    pile: function(zIndexBase) {
      const order = cards.slice().sort(function() { return Math.random() - 0.5; });
      order.forEach(function(card, k) {
        piled.set(card, { right: randomBetween(SORT_PILE_RIGHT), bottom: randomBetween(SORT_PILE_BOTTOM) });
        card.style.rotate = ((Math.random() * 2 - 1) * PUZZLE_PILE_TILT).toFixed(1) + 'deg';
        card.style.zIndex = zIndexBase + k;
        card.dataset.puzzleFlyIn = '1';
      });
      layOut();
    },

    sortColumns: function() {
      return stacks.map(function(cardsInColumn) {
        return cardsInColumn.map(function(card) { return cards.indexOf(card); });
      });
    },

    // Picked up: out of its column. Its space stays open until it's dragged
    // somewhere else (dragOver), so a tap doesn't jolt the column.
    pickUp: function(card, from) {
      const origin = columnOf(card);
      if (origin) stacks[origin.column].splice(origin.index, 1);
      piled.delete(card);
      card.classList.remove('sort-card--stacked');
      const target = origin ? { column: origin.column, index: origin.index, height: cardHeight(card), fits: true } : null;
      dragging = { card: card, from: from, origin: origin, target: target };
    },

    // Each drag move: the column under the card parts where it would land (and
    // stays shut if it won't fit).
    dragOver: function(card) {
      if (!dragging || dragging.card !== card) return;
      const target = dropTarget(card);
      if (sameTarget(target, dragging.target)) return;
      const previous = dragging.target;
      dragging.target = target;
      if (previous && (!target || previous.column !== target.column)) stack(previous.column);
      if (target) stack(target.column, target.fits ? target : null);
    },

    // Dropped: into the column where it was shown, back where it came from if the
    // column is full, or loose where it is.
    drop: function(card) {
      if (!dragging || dragging.card !== card) return;
      const target = dragging.target; // what the column is showing (dragOver keeps it current)
      const origin = dragging.origin;
      const from = dragging.from;
      dragging = null;

      if (target && target.fits) {
        stacks[target.column].splice(target.index, 0, card);
        card.style.rotate = '';
        stack(target.column);
        placeSortCard(card);
        typeof Sound !== 'undefined' && Sound.event('puzzle.snap');
      } else if (target && swap(card, target.column, origin, from)) {
        typeof Sound !== 'undefined' && Sound.event('puzzle.snap');
      } else if (target) {
        // Full, and no swap fits: back where it was picked up, with the error sound.
        stack(target.column);
        typeof Sound !== 'undefined' && Sound.event('sort.full');
        if (origin) {
          stacks[origin.column].splice(origin.index, 0, card);
          stack(origin.column);
          placeSortCard(card);
        } else {
          placePuzzlePiece(card, from.x, from.y);
        }
      }
      save();
    },
  };
}

// A card's own move into the stack: the puzzle snap's glide, then the stack's ease.
function placeSortCard(card) {
  card.classList.remove('sort-card--stacked');
  placePuzzlePiece(card, parseFloat(card.style.left), parseFloat(card.style.top));
  setTimeout(function() { card.classList.add('sort-card--stacked'); }, PUZZLE_SNAP_MS);
}
