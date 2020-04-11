import React from 'react';
import { useBoardInfo } from './../context/BoardContext';
import { useUserInput } from './../context/UserInputContext';

export default function Piece({ coords }) {
  const { topColor, shape } = useUserInput().userState;
  const { top, bottom, selectedPiece } = useBoardInfo().boardState;

  const isTop = top.includes(coords);
  const isBottom = bottom.includes(coords);

  const bottomColor = topColor === 'red' ? 'black' : 'red';
  const myColor = isTop ? topColor : isBottom ? bottomColor : '';

  // conditional check on whether it should be considered a piece
  const piece = isTop || isBottom ? 'piece' : '';
  // if piece selected, on click render yellow border
  let selected = coords === selectedPiece ? 'selected' : '';


  // opted to go the route of the conditional rendering grabbing props for the conditionals

  return (
    <div className={`${piece} ${shape} ${myColor} ${selected}`}>
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
