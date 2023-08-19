function VerifyLegalQueenMove(
  boardState,
  queenCurrentPosition,
  targetPosition
) {
  const [currRow, currCol] = queenCurrentPosition; // Current position of the queen
  const [targetRow, targetCol] = targetPosition; // Target position the queen will move to
  const [start_i, start_j] = [currRow - 1, currCol - 1]; //to find the starting point of the square

  // to pass to the square whose center is the queen
  for (let i = start_i; i < start_i + 3; i++)
    for (let j = start_j; j < start_j + 3; j++) {
      if (i <= 7 && j <= 7)
        if (i >= 0 && j >= 0)
          if (!(i === currRow && j === currCol))
            if (boardState[i][j] === 0)
              if (i === targetRow && j === targetCol)
                // Checking if the cell is within the chessboard
                // Making sure the cell is not the current queen's position
                // Checking if the cell is empty
                // The target should be an empty cell, adjacent to the queen's position by one step
                return true; // If all conditions are met, the move is valid
    }
  return false; // If all conditions are not met, the move is invalid
}

const boardState = [
  [0, 0, 0, 0, 0, 0, 0, 0], // Row 0
  [0, 0, 0, 0, 0, 0, 0, 0], // Row 1
  [0, 0, 0, 0, 0, 0, 0, 0], // Row 2
  [0, 0, 0, 0, 0, 0, 0, 0], // Row 3
  [0, 0, 0, 5, 0, 0, 0, 0], // Row 4  --> 5 is queen
  [0, 0, 0, 0, 1, 0, 0, 0], // Row 5
  [0, 0, 0, 0, 0, 0, 0, 0], // Row 6
  [0, 0, 0, 0, 0, 0, 0, 0], // Row 7
];

const queenCurrentPosition = [4, 3]; // Queen's position
const targetPosition1 = [3, 3]; // Unoccupied and adjacent to the queen, a valid move
const targetPosition2 = [5, 4]; // Occupied by a pawn, an invalid move
const targetPosition3 = [2, 5]; // Far away, requires more than one step, an invalid move

console.log(
  VerifyLegalQueenMove(boardState, queenCurrentPosition, targetPosition1)
); // Output: true
console.log(
  VerifyLegalQueenMove(boardState, queenCurrentPosition, targetPosition2)
); // Output: false
console.log(
  VerifyLegalQueenMove(boardState, queenCurrentPosition, targetPosition3)
); // Output: false
