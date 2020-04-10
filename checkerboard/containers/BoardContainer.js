import React from 'react'
import Board from './../components/Board'
import {boardBuild} from './../utils/contruct-util'

export default function BoardContainer({size}) {
  const board  = boardBuild(size);

  return (
    <div>
      
      <Board board={board}/>

      <style jsx>{`
        .board-container {
          width: 100%;
          min-height: 420px;
          margin: 0px auto;
          background-color: black;
        }
      `}</style>
    </div>
  )
}
