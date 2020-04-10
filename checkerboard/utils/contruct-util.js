export function boardBuild (boardDim) {
  const board = [];
  for (let i = 0; i < boardDim; i += 1) {
    const row = [];
    for (let j = 0; j < boardDim; j += 1) {
      row.push(`${i}${j}`)
    }
    board.push(row);
  }
  return board;
}