function VerifyLegalQueenMove(
  boardState,
  queenCurrentPosistion,
  targetPosition
) {
  const [currentRow, currentCol] = queenCurrentPosistion;
  const [targetRow, targetCol] = targetPosition;

  // If the target position is occupied by an opponent's piece, the queen cannot reach it
  if (boardState[targetRow][targetCol] === 1) return false;

  // If the target position is the same as the queen's current position, it's invalid as the queen can't move to the same spot
  if (currentRow === targetRow && currentCol === targetCol) return false;

  if (currentRow === targetRow) {
    // Moving horizontally, checking if the target is to the right or left of the queen
    const minCol = Math.min(currentCol, targetCol);
    const maxCol = Math.max(currentCol, targetCol);
    for (let col = minCol + 1; col <= maxCol; col++)
      if (boardState[currentRow][col] === 1) return false;
  }

  if (currentCol === targetCol) {
    // Moving vertically, checking if the target is above or below the queen
    const minRow = Math.min(currentRow, targetRow);
    const maxRow = Math.max(currentRow, targetRow);
    for (let row = minRow + 1; row < maxRow; row++)
      if (boardState[row][currentCol] === 1) return false;
  } else if (
    Math.abs(currentRow - targetRow) === Math.abs(currentCol - targetCol)
  ) {
    // Moving diagonally
    const rowDirection = targetRow > currentRow ? 1 : -1;
    const colDirection = targetCol > currentCol ? 1 : -1;

    let row = currentRow + rowDirection;
    let col = currentCol + colDirection;
    while (true) {
      if (boardState[row][col] === 1) return false;

      if (row === targetRow && col === targetCol) break;

      row += rowDirection;
      col += colDirection;
    }
  }

  return true; // The queen can legally move to the target position
}

// Example
const boardState = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const queenCurrentPosistion = [3, 3];
const targetPosition1 = [7, 3];
const targetPosition2 = [2, 4];
const targetPosition3 = [0, 6];

console.log(
  VerifyLegalQueenMove(boardState, queenCurrentPosistion, targetPosition1)
); // Output: false
console.log(
  VerifyLegalQueenMove(boardState, queenCurrentPosistion, targetPosition2)
); // Output: true
console.log(
  VerifyLegalQueenMove(boardState, queenCurrentPosistion, targetPosition3)
); // Output: false
