import React, { useEffect, useState } from 'react'
import WaterRequest1 from './WaterRequest1'
import './styles/MyRequests.css'

//needs to be mapped using key and onclick open page with status

function MyRequests() {

  const [waterRequests, setWaterRequests] = useState([])

  const fetchRequests = async () => {

    try {
      const authtoken = JSON.parse(localStorage.getItem("user")).authtoken
      const data = { authtoken: authtoken }
      const response = await fetch(`http://localhost:5000/api/request/getrequestforuser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(res => res.json());


      setWaterRequests(response);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchRequests()
  }, [])


  return (
    <div className='my__requests'>
      <h1>MyRequests</h1>
      {waterRequests.length > 0 && waterRequests.map(request => {

        return (
          <WaterRequest1
            key={request.req_id}
            location={request.location}
            userCount={request.n_people}
            username={request.username}
            status={request.status}
            ngo="NGO"
          />
        )
      })}

    </div>
  );
}

export default MyRequests;