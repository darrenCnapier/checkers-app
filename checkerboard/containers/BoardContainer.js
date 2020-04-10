import React, { useEffect } from 'react';
import Board from './../components/Board';
import { useUserInput } from './../context/UserInputContext';
import { useBoardInfo } from './../context/BoardContext';

export default function BoardContainer() {
  const { boardSize } = useUserInput().userState;
  const { buildBoard } = useBoardInfo();
  const { board } = useBoardInfo().boardState;

  console.log('boardSize on frontend', boardSize);

  useEffect(() => {
    buildBoard(boardSize);
  }, [boardSize]);

  if (!board || !board.length) {
    buildBoard(boardSize);
  }

  return (
    <div>
      <Board />

      <style jsx>{`
        .board-container {
          width: 100%;
          min-height: 420px;
          margin: 0px auto;
          background-color: black;
        }
      `}</style>
    </div>
  );
}
