import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard';

function App() {

  const loggedIn = true;

  return (
    <>
      {loggedIn && <Dashboard/>}
    </>
  )
}

export default App
