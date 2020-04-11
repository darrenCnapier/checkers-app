import React, { useState } from 'react';
import BoardContainer from './BoardContainer';
import UserContainer from './UserInputContainer';
import { UserInfoProvider } from './../context/UserInputContext';
import { BoardContextProvider } from './../context/BoardContext';

//realizing the user inputs would be needed for deep rendering, opted to go with
//context providers to eliminate the need to drill props

// once board functionality came into play, realized it would be a necessity (of sorts)
// to have the same functionality for the board => BoardContextProvider 

export default function MainContainer() {
  return (
    <div className='container'>
      <UserInfoProvider>

        <BoardContextProvider>
          <UserContainer />
          <BoardContainer />
        </BoardContextProvider>
        
      </UserInfoProvider>

      <style jsx>{`
        .container {
          min-height: 420px;
          height: auto;
        }
      `}</style>
    </div>
  );
}
