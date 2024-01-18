import React from 'react'
import './styles/CreateRequest.css'
import {Link} from 'react-router-dom'

function CreateRequest() {
  return (
    <div className='create__request'>
        <h1>CreateRequest</h1>
        <Link to="/newRequest"><button>New Request</button></Link>
    </div>
  )
}

export default CreateRequest