import { useEffect,useState } from "react";
import axios from 'axios'

export default function useEmail(){ 
    const [email,setEmail]=useState([])

    const getEmail =async ()=>{ 
        try {
            const response =await axios.get(`https://jsonplaceholder.typicode.com/users`)
            const emails=response.data.map(user => user.email)

            setEmail(emails)

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{ 
        getEmail()
    },[]);

    return email;
}