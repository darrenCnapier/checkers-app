import React from 'react';
import Piece from './Piece';
import { useBoardInfo } from './../context/BoardContext';

export default function Square({ coords, col, row }) {
  const { top, bottom } = useBoardInfo().boardState;

  return (
    <div className={`square ${(col + row) % 2 === 0 ? 'black' : 'white'}`}>
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
      `}</style>
    </div>
  );
}
