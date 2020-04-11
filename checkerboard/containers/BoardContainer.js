import React, { useEffect } from 'react';
import Board from './../components/Board';
import { useUserInput } from './../context/UserInputContext';
import { useBoardInfo } from './../context/BoardContext';

export default function BoardContainer() {
  const { restoreUser } = useUserInput();
  const { boardSize } = useUserInput().userState;
  const { buildBoard, restoreBoard } = useBoardInfo();
  const { board } = useBoardInfo().boardState;

  useEffect(() => {
    buildBoard(boardSize);
  }, [boardSize]);

  useEffect(() => {
    // checking to see if game had been saved
    const savedUser = localStorage.getItem('USER');
    const savedBoard = localStorage.getItem('BOARD');
    if (savedUser && savedBoard) {
      //restore functionality
      restoreUser(JSON.parse(savedUser));
      setTimeout(() => {
        restoreBoard(JSON.parse(savedBoard));
      }, 0);
    }
  }, []);
  //if board has not rendered, RENDER the BOARD!
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
