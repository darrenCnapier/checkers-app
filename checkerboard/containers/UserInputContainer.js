import React from 'react';
import { useUserInput } from '../context/UserInputContext';

export default function UserInputContainer() {
  const { changeColor, changeShape, updateSize } = useUserInput();
  // const {boardSize} = useUserInput().userState
  return (
    <div className='user-inputs'>
      <div className='toggle-inputs'>
        <form onChange={(e) => updateSize(e)}>
          <label>Choose Board Size </label>
          <input type='number' defaultValue={8} min={4} max={16}></input>
        </form>
        <form onChange={() => changeColor()}>
          <p>Top Player Color</p>
          <input type='radio' id='red' value='red' name='color' defaultChecked></input>
          <label>Red</label>
          <input type='radio' id='black' value='black' name='color'></input>
          <label>Black</label>
        </form>
        <form onChange={() => changeShape()}>
          <p>Piece Shapes</p>
          <input
            type='radio'
            id='circle'
            value='circle'
            name='shape'
            defaultChecked></input>
          <label htmlFor='circle'>Round</label>
          <input type='radio' id='square' value='square' name='shape'></input>
          <label htmlFor='square'>Square</label>
        </form>
      </div>
      <div className='buttons'>
        <button onClick={() => save()}>Save Game</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
      <style jsx>{`
        .user-inputs {
          height: auto;
          min-height: 60px;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        form,
        .buttons {
          margin: 0px 4px;
          text-align: center;
          align-self: center;
        }
        .toggle-inputs {
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </div>
  );
}
