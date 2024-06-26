import React,{useState,useEffect} from 'react'

function Hooks1() {
  const [count,setCount]=useState(0)

  useEffect(()=>{ 
    document.title=`User clicked ${count} times`
  })

  return (
    <>
      <div>CounterApp</div>
      <h3>User click on button for {count} times</h3>

      <button onClick={()=>setCount(count+1)}> Click</button>
    </>
  )
}

export default Hooks1
/*

Common React Hooks:

    useState: Allows functional components to manage local state.
    useEffect: Enables performing side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.
    useContext: Provides access to a context object created by the React.createContext function.
    useReducer: An alternative to useState for managing more complex state logic.
    useCallback: Memoizes functions to prevent unnecessary re-renders in child components.
    useMemo: Memoizes the result of expensive computations to prevent re-computation on every render.
    useRef: Creates a mutable ref object to persist values across renders without causing re-renders.
    useLayoutEffect: Similar to useEffect, but it fires synchronously after all DOM mutations.
*/