import React,{useState,useContext} from 'react'
import UserAuth from '../context/UserAuth';

function UserInfo() {
    const [username,setUsername] = useState("");
    const {nm,setNm}=useContext(UserAuth)

    const handleSubmit=(e)=>{ 
        e.preventDefault();
        setNm({username})
    }
  return (
    <div>
        <h2>Username</h2>
        <input type="text" value={username} 
        onChange={(e)=> setUsername(e.target.value)} 
        placeholder='username'/>
        <br />
        <button onClick={handleSubmit}>click</button>
        <div>
            <h2>Welcome! {nm.username}</h2>
        </div>
    </div>
  )
}

export default UserInfo