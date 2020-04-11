// Custom context providers => Ken C Dodds, is a big fan of this approach if looking
// to build ContextProviders. It offers a cleaner look.

// Coupled with useReducer and useMemo, should help in eliminating some re-rendering 
// when not necessary as it memoizes state.


import React, { useContext, useReducer, useMemo } from 'react';
import { boardBuild } from './../utils/contruct-util';
import { useUserInput } from './UserInputContext';

const BoardContext = React.createContext();

const initialBoardState = {
  turn: 'top',
  selectedPiece: null,
  top: [],
  bottom: [],
  nextMoves: [],
  board: [],
};

function boardReducer(boardState, action) {
  const { turn, selectedPiece, top, bottom, nextMoves, board } = boardState;

  switch (action.type) {
    case 'BUILD': {
      const { size } = action.payload;
      const onlyBoard = boardBuild(size);
      const newBoard = onlyBoard.board;
      const newTop = onlyBoard.top;
      const newBottom = onlyBoard.bottom;

      return {
        ...boardState,
        top: newTop,
        bottom: newBottom,
        board: newBoard,
      };
    }
    case 'SELECT': {
      const { coords, piece } = action.payload;
      let i, j, newSelection, moveL, moveR;
      const newNextMoves = [];

      if (piece !== turn) return { ...boardState };
      else {
        newSelection = coords;
        i = +coords[0];
        j = +coords[1];
        if (piece === 'top') {
          moveL = `${i + 1}${j - 1}`;
          moveR = `${i + 1}${j + 1}`;
        } else if (piece === 'bottom') {
          moveL = `${i - 1}${j - 1}`;
          moveR = `${i - 1}${j + 1}`;
        }
        if (!top.includes(moveL) && !bottom.includes(moveL)) {
          newNextMoves.push(moveL);
        }
        if (!top.includes(moveR) && !bottom.includes(moveR)) {
          newNextMoves.push(moveR);
        }
        return {
          ...boardState,
          nextMoves: newNextMoves,
          selectedPiece: newSelection,
        };
      }
    }
    case 'MOVE': {
      const { coords } = action.payload;
      let newTop, newBottom, newTurn;
      newTurn = turn === 'top' ? 'bottom' : 'top';

      if (turn === 'top') {
        newTop = top.filter((pos) => pos !== selectedPiece);
        newTop.push(coords);
        newBottom = bottom;
      } else {
        newTop = top;
        newBottom = bottom.filter((pos) => pos !== selectedPiece);
        newBottom.push(coords);
      }

      return {
        ...boardState,
        top: newTop,
        bottom: newBottom,
        turn: newTurn,
        selectedPiece: null,
        nextMoves: [],
      };
    }
    case 'RESTORE': {
      const { board } = action.payload;
      return {
        ...board,
      };
    }
    default: {
      throw new Error(`Unsupported action type ${action.type}`);
    }
  }
}

function useBoardInfo() {
  const { save, reset } = useUserInput().userState;
  const { endSave, endReset } = useUserInput();

  const context = useContext(BoardContext);
  if (!context) throw new Error('Must access useBoardInfo inside BoardContext');
  const [boardState, dispatch] = context;

  const buildBoard = (size) => {
    dispatch({ type: 'BUILD', payload: { size } });
  };
  const selectMe = (coords, piece) =>
    dispatch({ type: 'SELECT', payload: { coords, piece } });
  const makeMove = (coords) => {
    dispatch({ type: 'MOVE', payload: { coords } });
  };
  const restoreBoard = (board) => dispatch({ type: 'RESTORE', payload: { board } });
  if (save) {
    endSave();
    localStorage.setItem('BOARD', JSON.stringify(boardState));
  }
  if (reset) {
    endReset();
    dispatch({ type: 'BUILD', payload: { size: 8 } });
  }

  return {
    boardState,
    dispatch,
    buildBoard,
    selectMe,
    makeMove,
    restoreBoard,
  };
}

function BoardContextProvider(props) {
  const [boardState, dispatch] = useReducer(boardReducer, initialBoardState);
  const value = useMemo(() => [boardState, dispatch], [boardState]);

  return <BoardContext.Provider value={value} {...props} />;
}

export { BoardContextProvider, useBoardInfo };
