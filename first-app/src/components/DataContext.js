import React,{useContext,useEffect,createContext,useState} from "react";

const DataContext=createContext()
export const useData=()=>useContext(DataContext)

export const DataProvider=({children})=>{ 
    const [data,setData]=useState([])
    const [loading,setloading]=useState(true)

    useEffect(()=>{ 
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then((result)=>{ 
        setData(result)
        setloading(false)
      })
      .catch((error)=>{
        console.log('error fetching data ',error) 
        setloading(false)
      })
    },[])

    return( 
        <DataContext.Provider value={{data,loading}}>
            {children}
        </DataContext.Provider>
    )
}