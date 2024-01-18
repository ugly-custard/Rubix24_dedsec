import React from 'react'
import WaterRequest from './WaterRequest'
import './styles/MyRequests.css'

function MyRequests() {
  return (
    <div className='my__requests'>
        <h1>MyRequests</h1>
        <WaterRequest
        location="Delhi"
        userCount="5"
        userName="John Doe"
        status="Pending"
        ngo="NGO"
        />
        <WaterRequest
        location="Delhi"
        userCount="5"
        userName="John Doe"
        status="Pending"
        ngo="NGO"
        />
        <WaterRequest
        location="Delhi"
        userCount="5"
        userName="John Doe"
        status="Pending"
        ngo="NGO"
        />
    </div>
  )
}

export default MyRequests