import './App.css'

// 2- reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'

// 4- navigating bteween pages
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <h1>React router</h1>
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App
