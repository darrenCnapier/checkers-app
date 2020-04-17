// Custom context providers => Ken C Dodds, is a big fan of this approach if looking
// to build ContextProviders. It offers a cleaner look.

// Coupled with useReducer and useMemo, should help in eliminating some re-rendering
// when not necessary as it memoizes state.

import React, { useReducer, useMemo, useContext } from 'react';

const UserContext = React.createContext();

const initialUserState = {
  boardSize: 8,
  shape: 'circle',
  topColor: 'red',
  save: false,
  reset: false,
};

function userStateReducer(userState, action) {
  const { boardSize, shape, topColor } = userState;

  switch (action.type) {
    case 'COLOR': {
      const newColor = topColor === 'red' ? 'black' : 'red';
      return {
        ...userState,
        topColor: newColor,
      };
    }
    case 'SIZE': {
      const { size } = action.payload;
      let newSize = size;
      if (newSize < 4) {
        newSize = 4;
      } else if (newSize >= 16) {
        newSize = 16;
      }
      return {
        ...userState,
        boardSize: newSize,
        reset: false,
      };
    }
    case 'SHAPE': {
      const newShape = shape === 'circle' ? 'cube' : 'circle';
      return {
        ...userState,
        shape: newShape,
      };
    }
    case 'SAVE': {
      localStorage.setItem('USER', JSON.stringify(userState));
      return {
        ...userState,
        save: true,
      };
    }
    case 'SAVED': {
      return {
        ...userState,
        save: false,
      };
    }
    case 'RESET': {
      localStorage.removeItem('USER');
      localStorage.removeItem('BOARD');
      //just to ensure it is all gone
      localStorage.clear();
      return {
        boardSize: 8,
        shape: 'circle',
        topColor: 'red',
        save: false,
        reset: true,
      };
    }
    case 'RESTORE': {
      const { user } = action.payload;
      return {
        ...user,
        reset: false,
        save: false,
      };
    }
    case 'END': {
      return {
        boardSize: 8,
        shape: 'circle',
        topColor: 'red',
        save: false,
        reset: false,
      };
    }
    default: {
      throw new Error(`Unsupported action type ${action.type}`);
    }
  }
}

function useUserInput() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('Must access useUserInput from inside UserContextProvider');
  }
  const [userState, dispatch] = context;
  const updateSize = (e) => dispatch({ type: 'SIZE', payload: { size: e.target.value } });
  const changeShape = () => dispatch({ type: 'SHAPE' });
  const changeColor = () => dispatch({ type: 'COLOR' });
  const save = () => dispatch({ type: 'SAVE' });
  const endSave = () => dispatch({ type: 'SAVED' });
  const reset = () => dispatch({ type: 'RESET' });
  const endReset = () => dispatch({ type: 'END' });
  const restoreUser = (user) => dispatch({ type: 'RESTORE', payload: { user } });

  return {
    userState,
    dispatch,
    updateSize,
    changeShape,
    changeColor,
    save,
    endSave,
    reset,
    endReset,
    restoreUser,
  };
}

function UserInfoProvider(props) {
  const [userState, dispatch] = useReducer(userStateReducer, initialUserState);
  const value = useMemo(() => [userState, dispatch], [userState]);

  return <UserContext.Provider value={value} {...props} />;
}

export { UserInfoProvider, useUserInput };
