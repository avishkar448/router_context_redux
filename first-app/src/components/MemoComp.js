import React from 'react'

function MemoComp({name}) {
    console.log("Memo component is working")
  return (
    <div>{name}</div>
  )
}

export default MemoComp