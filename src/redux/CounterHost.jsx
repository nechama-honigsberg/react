import React from 'react'
import CounterChanger from './CounterChanger'
import CounterViewer from './CounterViewer'

export default function CounterHost() {
  return (
    <div>
      <CounterChanger />
      <CounterViewer />
    </div>
  )
}
