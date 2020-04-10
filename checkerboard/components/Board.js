import React from 'react'
import Row from './Row'

export default function Board({board}) {

  const checkerBoard = board.map((row, i) => {
    return <Row contents={row} rownumber={i} key={i}/>});
    
  return (
    <div className='board'>

      {checkerBoard}

      <style jsx>{`
        .board {
          border: 2px solid black;
          height: auto;
          width: auto;
          min-height: 420px;
          min-width: 420px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
