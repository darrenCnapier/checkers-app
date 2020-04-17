import React from 'react';
import Piece from './Piece';
import { useBoardInfo } from './../context/BoardContext';
import { useUserInput } from '../context/UserInputContext';

export default function Square({ coords, col, row }) {
  const { selectMe, makeMove } = useBoardInfo();
  const { topColor, shape } = useUserInput().userState;
  const { top, bottom, nextMoves, selectedPiece } = useBoardInfo().boardState;

  // Array.prototype.includes() is not my preferred method, but knowing the data size
  // of the arrays was minimal, it made for a decent trade off in terms of simplicity

  const isTop = top.includes(coords);
  const isBottom = bottom.includes(coords);
  const inNextMoves = nextMoves.includes(coords);

  const topOrBottom = isTop ? 'top' : isBottom ? 'bottom' : '';
  const possible = inNextMoves ? 'possible-move' : '';
  const squareColor = (col + row) % 2 === 0 ? 'black' : 'white';

  const bottomColor = topColor === 'red' ? 'black' : 'red';
  const pieceColor = isTop ? topColor : isBottom ? bottomColor : '';
  const selected = coords === selectedPiece ? 'selected' : '';

  return (
    <div
      className={`square ${squareColor} ${possible}`}
      onClick={() => {
        if (inNextMoves) makeMove(coords);
        selectMe(coords, topOrBottom);
      }}>
      {(isTop || isBottom) && (
        <Piece coords={coords} color={pieceColor} selected={selected} shape={shape} />
      )}

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
