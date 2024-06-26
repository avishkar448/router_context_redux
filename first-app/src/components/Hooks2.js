import React,{useReducer} from 'react'

const initialState={count:0}

function reducer(state,action){ 
    switch(action.type){ 
        case 'increment':
            return{count: state.count +1}
        case 'decrement':
            return{count: state.count -1}
        default:
            throw new Error()
    }
}

function Hooks2() {
     const [state,dispatch]=useReducer(reducer,initialState)
     //    dispatch is used to send (or "dispatch") an action object to the reducer.
  return (
    <>
        <h3>Count: {state.count}</h3>
        <button onClick={()=>dispatch({type:'increment'})}>+</button>
        <button onClick={()=>dispatch({type:'decrement'})}>-</button>
    </>
  )
}

export default Hooks2