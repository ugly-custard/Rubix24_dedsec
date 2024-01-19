import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import UserDashboard from './UserDashboard'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  const navigate = useNavigate()

  const [role, setRole] = useState(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    if (!user) {
      navigate('/login')
    } else {
      setRole(user.role)
    }
  }, [])
  return (
    <>
      <Navbar />
      {role === 'ngo' ? <Dashboard /> : <UserDashboard />}
    </>
  )
}

export default Home
