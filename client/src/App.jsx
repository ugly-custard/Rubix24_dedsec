import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import UserDashboard from './pages/UserDashboard'

function App() {
  const loggedIn = true

  return (
    <>
      {/* <Login  /> */}
      <UserDashboard />
    </>
  )
}

export default App
