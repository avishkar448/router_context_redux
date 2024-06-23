import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemedComponent = () => {
    const {theme,toggleTheme} =useContext(ThemeContext)
  return (
    <div>
      <header>
        <h1>{`Current Theme: ${theme}`}</h1>
        <button onClick={toggleTheme}>{theme=== 'light' ? (
          <>
          change to dark
          </>
        ):(
          <>
          change to light
          </>
        )}</button>
      </header>
    </div>
  )
}

export default ThemedComponent;
