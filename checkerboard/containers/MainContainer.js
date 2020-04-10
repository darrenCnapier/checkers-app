import React, {useState} from 'react'
import BoardContainer from './BoardContainer'
import UserContainer from './UserInputContainer'

export default function MainContainer() {
  const [boardSize, setBoardSize] = useState(8)

  const updateSize = (e) => {
    setBoardSize(e.target.value)
  }

  return (
    <div className='container'>

      <UserContainer resize={updateSize} size={boardSize}/>
      <BoardContainer size={boardSize}/>
      <style jsx>{`
        .container {
          min-height: 420px;
          height: auto;
        }
      `}</style>
    </div>
  )
}
