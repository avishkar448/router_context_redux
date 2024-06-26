import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function ThemeButton() {
    const {theme,toogleTheme}=useContext(ThemeContext)
  return (
    <>
    <div style={{background:theme==='light' ?'#fff' :'#333',color:theme==='light' ?'#000' :'#fff',
        margin:'auto'
    }}>
        <h1>I am Ironman</h1>
    <button
    onClick={toogleTheme}
    style={{background:theme==='light' ? '#fff':'#333',
        color:theme==='light' ?'#000' :'#fff',
        padding:'10px 20px',
        border:theme==='light' ?'1px solid black':'1px solid white',
        borderRadius:'5px'
    }}> 
        Toggle theme
    </button>
    </div>
    </>
    
  )
}

export default ThemeButton