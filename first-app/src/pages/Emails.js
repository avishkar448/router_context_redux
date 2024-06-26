import React from 'react'
import useEmail from '../hooks/useEmail'

const Emails = () => {
    const emails =useEmail()
  return (
    <div>
      <div>
        {emails?.map((email,index)=>(
          <h4 key={index}>{email}</h4>  
        ))}
      </div>
    </div>
  )
}

export default Emails
