import './App.css'
import './index.css'
import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Layout/Navbar'
import { Routes , Route } from 'react-router-dom'
function App() {
  return (
    <main className='min-h-screen flex flex-col'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </main>
  )
}

export default App
