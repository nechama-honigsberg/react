import React from 'react'
import { useSelector } from 'react-redux'
export default function CounterViewer() {

  const store = useSelector((store) => store)

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>The Counter is: {store.counter}</h1>

      {store.users.map(user => <h1 key={user.id}>{user.name}</h1>)}
    </div>
  )
}
