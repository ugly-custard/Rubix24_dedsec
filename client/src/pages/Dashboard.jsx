import React, { useEffect, useState } from 'react'
import WaterRequest from '../components/WaterRequest'



function Dashboard() {

  const [waterRequests, setWaterRequests] = useState([])

  const getWaterRequests = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/request");
      const jsonData = await response.json();
      setWaterRequests(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getWaterRequests();
  }, [])

  const ngo_id = "abcd1234"
  const ngo_name = "NGO1"

  return (
    <div className='Dashboard'>
      <h1>Dashboard</h1>

      <p>
        ngo id: {ngo_id}
      </p>

      <p>ngo name: {ngo_name}</p>

      <h1>water requests</h1>

      <div className=''>
        {waterRequests.map(waterRequests => {

          return (
            <WaterRequest
              key={waterRequests.req_id}
              location={waterRequests.location}
              userCount={waterRequests.n_people}
              userName={waterRequests.username}
              status={waterRequests.status}
            />
          )
        })}
        <WaterRequest
          location='1234 Main St'
          userCount='5'
          userName='John Doe'
          status='Pending'
          campaign='held'
        />
        <WaterRequest
          location='1234 Main St'
          userCount='5'
          userName='John Doe'
          status='Pending'
          campaign='left'
        />
        <WaterRequest
          location='1234 Main St'
          userCount='5'
          userName='John Doe'
          status='Pending'
          campaign='held'
        />
      </div>

    </div>
  )
}

export default Dashboard