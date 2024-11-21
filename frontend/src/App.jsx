import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'


import Signup from "./Pages/Signup.jsx"
import Login from "./Pages/Login.jsx"
import Home from "./Pages/Home.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </div>
    </>
  )
}

export default App