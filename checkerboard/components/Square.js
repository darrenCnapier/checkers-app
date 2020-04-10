import React from 'react'

export default function Square({coords, col, row}) {
  console.log('coords', coords)
  return (
    <div
      className={`square ${(col + row) % 2 === 0 ? 'black' : 'white'}`}>
        
        <style jsx>{`
        .square {
          display: flex;
          flex-direction: row;
          justify-content: center;
          height: 50px;
          width: 50px;
          border: 1px solid black;
          padding: auto;
          align-items: center;
        }
        .white {
          background-color: white;
        }
        .black {
          background-color: black;
        }
      `}</style>
    </div>
  )
}
