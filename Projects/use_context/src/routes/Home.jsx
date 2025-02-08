import React, { useContext } from 'react'
import { ThemeContext } from "../context/ThemeContext"

const Home = () => {

  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>The current theme is: {theme}</p>
    </div>
  )
}

export default Home