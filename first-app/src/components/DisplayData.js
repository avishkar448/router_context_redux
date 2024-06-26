import React from 'react'
import { useData } from './DataContext'

function DisplayData() {
    const {data,loading}=useData()
  return (
    <div>
        {loading ? ( 
            <>
                <p>Loading</p>
            </>
        ):( 
            <> 
                {data.map(item=>( 
                    <h4 key={item.id}>{item.title}</h4>
                ))}
            </>
        )}
    </div>
  )
}

export default DisplayData