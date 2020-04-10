import React, { useContext, useReducer, useMemo } from 'react';
import { boardBuild } from './../utils/contruct-util';

const BoardContext = React.createContext();

const initialBoardState = {
  turn: 'top',
  top: [],
  bottom: [],
  board: [],
};

function boardReducer(boardState, action) {
  const { turn, top, bottom, board } = boardState;

  console.log(action.type, 'payload', action.payload);

  switch (action.type) {
    case 'BUILD': {
      const { size } = action.payload;
      console.log('size', size)
      const onlyBoard = boardBuild(size);
      console.log('board afer build', onlyBoard)
      const newBoard = onlyBoard.board;
      const newTop = onlyBoard.top;
      const newBottom = onlyBoard.bottom;
      console.log('newboard', newBoard)
      return {
        ...boardState,
        top: newTop,
        bottom: newBottom,
        board: newBoard,
      };
    }
    default: {
      throw new Error(`Unsupported action type ${action.type}`);
    }
  }
}

function useBoardInfo() {
  const context = useContext(BoardContext);
  if (!context) throw new Error('Must access useBoardInfo inside BoardContext');
  const [boardState, dispatch] = context;

  const buildBoard = (size) => {
    dispatch({ type: 'BUILD', payload: { size } });
  };

  return {
    boardState,
    dispatch,
    buildBoard,
  };
}

function BoardContextProvider(props) {
  const [boardState, dispatch] = useReducer(boardReducer, initialBoardState);
  const value = useMemo(() => [boardState, dispatch], [boardState]);

  return <BoardContext.Provider value={value} {...props} />;
}

export { BoardContextProvider, useBoardInfo };
