import React, { useReducer, useMemo, useContext } from 'react';

const UserContext = React.createContext();

const initialUserState = {
  boardSize: 8,
  shape: 'circle',
  topColor: 'red',
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
      let newSize = action.payload;
      if (newSize < 4) {
        newSize = 4;
      } else if (newSize >= 16) {
        newSize = 16;
      }
      return {
        ...userState,
        boardSize: newSize
      };
    }
    case 'SHAPE': {
      const newShape = shape === 'circle' ? 'cube' : 'circle';
      return {
        ...userState,
        shape: newShape,
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
  const updateSize = (e) => dispatch({ type: 'SIZE', payload: e.target.value });
  const changeShape = () => dispatch({ type: 'SHAPE' });
  const changeColor = () => dispatch({ type: 'COLOR' });

  return {
    userState,
    dispatch,
    updateSize,
    changeShape,
    changeColor,
  };
}

function UserInfoProvider(props) {
  const [userState, dispatch] = useReducer(userStateReducer, initialUserState);
  const value = useMemo(() => [userState, dispatch], [userState]);

  return <UserContext.Provider value={value} {...props} />;
}

export { UserInfoProvider, useUserInput };
