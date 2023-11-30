import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function CounterChanger() {
  const [input, setInput] = useState(0)
    const dispatch = useDispatch()

    const add = () => {
        dispatch({type: "PLUS", payload: input})
    }

    const subtract = () => {
        dispatch({type: "MINUS", payload: input})
    }

  return (
    <div style={{border: "1px solid blue"}}>
      <input defaultValue={input} onChange={e => setInput(+e.target.value)} type="number" />
      <button onClick={add}>+</button> 
      <button onClick={subtract}>-</button>
      <button onClick={() => {
        dispatch({type: "RESTART"})
      }}>RESET</button> 

    </div>
  )
}
