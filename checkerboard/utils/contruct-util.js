export function boardBuild(boardDim) {
  
  const board = [];
  const top = [];
  const bottom = [];
  for (let i = 0; i < boardDim; i += 1) {
    const row = [];
    for (let j = 0; j < boardDim; j += 1) {
      if (i < 2) {
        top.push(`${i}${j}`);
      } else if (i >= boardDim - 2) {
        bottom.push(`${i}${j}`);
      }
      row.push(`${i}${j}`);
    }
    board.push(row);
  }
  return { board, top, bottom };
}
