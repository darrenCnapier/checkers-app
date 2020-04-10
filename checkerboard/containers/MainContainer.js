import React, { useState } from 'react';
import BoardContainer from './BoardContainer';
import UserContainer from './UserInputContainer';
import { UserInfoProvider } from './../context/UserInputContext';
import { BoardContextProvider } from './../context/BoardContext';

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
