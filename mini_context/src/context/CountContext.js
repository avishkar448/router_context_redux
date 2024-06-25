import {createContext,useContext,useState} from 'react'
//import { ThemeContext } from './ThemeContext'

export const CountContext = createContext()

export const CountProvider=({children})=>{ 
    const [count,setCount] =useState(0)

    const counter =()=>{ 
        const add= count +1
        setCount(add)
    }

    return( 
        <CountContext.Provider value={{count,counter}}>
            {children}
        </CountContext.Provider>
    )
}

export const useCount =()=>{ 
    return useContext(CountContext)
}