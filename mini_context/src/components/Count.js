import React from 'react'
import { useCount } from '../context/CountContext'

const Count = () => {
    const {count,counter}=useCount()
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={counter}>click</button>
    </div>
  )
}

export default Count
