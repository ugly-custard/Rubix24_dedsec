import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import UserDashboard from './pages/UserDashboard'
import Login from './pages/Login'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import NewRequest from './pages/NewRequest'

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/newRequest" element={<NewRequest />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
