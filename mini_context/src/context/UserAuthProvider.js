import React ,{useState} from 'react'
import UserAuth from './UserAuth'

const UserAuthProvider = ({children}) => {
    const [nm,setNm]=useState("")
  return (
    <UserAuth.Provider value={{nm,setNm}}> 
        {children}
    </UserAuth.Provider>
  )
}

export default UserAuthProvider
