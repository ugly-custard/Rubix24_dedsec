import React from 'react'
import WaterRequest from '../components/WaterRequest'



function Dashboard() {

  const getNgos = async () => {
    try {
      const response = await fetch("/api/ngos");
      const jsonData = await response.json();
      setTeachers(jsonData.teachers);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className=''>
      <h1>Dashboard</h1>

      <div className=''>
        <WaterRequest
          location='1234 Main St'
          userCount='5'
          userName='John Doe'
          status='Pending'
        />
        <WaterRequest
          location='1234 Main St'
          userCount='5'
          userName='John Doe'
          status='Pending'
        />
        <WaterRequest
          location='1234 Main St'
          userCount='5'
          userName='John Doe'
          status='Pending'
        />
      </div>

    </div>
  )
}

export default Dashboard