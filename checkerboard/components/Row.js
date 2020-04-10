import React from 'react'
import Square from './Square'

export default function Row({contents, rownumber}) {

  return (
    <div className='row'>
      {contents.map((squareNum, i)=> {
        return <Square coords={squareNum} col={i} row={rownumber} key={i}/>
      })}
      <style jsx>
        {`
          .row {
            min-height: 50px;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
        `}
      </style>
    </div>
  )
}
