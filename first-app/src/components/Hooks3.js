import React,{useState,useMemo} from 'react'

function Hooks3({a,b}) {
    const [count,setCount]=useState(0)

    const expCal=useMemo(()=>{
        return a+b;
    },[a,b])
  return (
    <>
    <div>
    <p>Result of expensive calculation: {expCal}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    </>
  )
}

export default Hooks3