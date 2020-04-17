import React from 'react';

export default function Piece({ color, selected, shape }) {
  return (
    <div className={`piece ${shape} ${color} ${selected}`}>
      <style jsx>{`
        .piece {
          z-index: 20;
          height: 80%;
          width: 80%;
        }
        .black {
          background-color: black;
          border: 1px solid darkgray;
        }
        .red {
          background-color: red;
          border: 1px solid darkgray;
        }
        .circle {
          border-radius: 50px;
        }
        .cube {
          height: 80%;
          width: 80%;
        }
        .selected {
          border: 3px solid #dcff73;
        }
      `}</style>
    </div>
  );
}
