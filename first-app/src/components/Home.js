import React from 'react'
import { useAuth } from './AuthContext'

function Home() {
    const {user,login,logout}=useAuth()
  return (
    <div>
        {user ?(
            <>
                <h2>Welcome {user.username}</h2>
                <button onClick={logout}>logout</button>
            </>
        ):(
            <>
                <h2>Please login</h2>
                <button onClick={()=>login({username:'Hardik'})}>login</button>
            </>
        )}
    </div>
  )
}

export default Home