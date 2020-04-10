import React from 'react'

export default function UserInputContainer({resize, size}) {
  return (
    <div className='user-inputs'>
      <form onChange={(e)=> resize(e)}>
        <label>Choose Board Width</label>
        <input type='number' name='boardSize' min={5} max={16} value={size} defaultValue={8}></input>
      </form>
    </div>
  )
}
