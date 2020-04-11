import React from 'react';
import Piece from './Piece';
import { useBoardInfo } from './../context/BoardContext';

export default function Square({ coords, col, row }) {
  const { selectMe, makeMove } = useBoardInfo();
  const { top, bottom, nextMoves } = useBoardInfo().boardState;

  // Array.prototype.includes() is not my preferred method, but knowing the data size
  // of the arrays was minimal, it made for a decent trade off in terms of simplicity 
  
  const isTop = top.includes(coords);
  const isBottom = bottom.includes(coords);
  const inNextMoves = nextMoves.includes(coords);

  const topOrBottom = isTop ? 'top' : isBottom ? 'bottom' : null;
  const possible = inNextMoves ? 'possible-move' : null;

  return (
    <div
      className={`square ${(col + row) % 2 === 0 ? 'black' : 'white'} ${possible}`}
      onClick={() => {
        if (inNextMoves) makeMove(coords);
        selectMe(coords, topOrBottom);
      }}>
      <Piece coords={coords} />

      <style jsx>{`
        .square {
          display: flex;
          flex-direction: row;
          justify-content: center;
          height: 50px;
          width: 50px;
          border: 1px solid black;
          padding: auto;
          align-items: center;
        }
        .white {
          background-color: white;
        }
        .black {
          background-color: black;
        }
        .possible-move {
          background-color: lightblue;
        }
      `}</style>
    </div>
  );
}
