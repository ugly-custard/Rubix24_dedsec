import React from 'react'
import './styles/WaterRequest.css'
import { Link } from 'react-router-dom'

const WaterRequest = (props) => {
  return (
    <div className='card'>
    <div className='requestCard'>
        <h2>Location: {props.location}</h2>
        <p>For People: {props.userCount}</p>
        <span>By: {props.username}</span>
        <span>Status: {props.status}</span>
        <span> Ngo: {props.ngo}</span>
        <Link to="/VerifyInfo"><button className='verify'>Verify</button></Link>
    </div>
    
    </div>
  )
}

export default WaterRequest