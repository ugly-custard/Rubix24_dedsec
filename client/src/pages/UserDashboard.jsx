import React from 'react'
import DashCard from '../components/DashCard'
import WaterRequest from '../components/WaterRequest'

const UserDashboard = () => {
  data = [
    '1. Efficient Water Use: Use a bucket while bathing instead of running the shower to save water. Install water-efficient appliances like low-flow toilets and aerated faucets to reduce water consumption.',
    '2. Rainwater Harvesting: Install gutters on rooftops to collect rainwater. Direct the collected rainwater into storage tanks for later use in gardens or for cleaning purposes.',
    "3. Leak Detection and Repair: Periodically check for any dripping faucets and repair them immediately using a wrench or plumber's tape. Inspect pipes for visible leaks and fix them using pipe sealant or by tightening joints.",
    '4. Afforestation and Watershed Management: Plant native trees and shrubs in your area to promote soil health and groundwater recharge. Work with your neighbors to create check dams or small structures to slow down water runoff during rains.',
  ]
  return (
    <div className="">
      <div>UserDashboard</div>
      <div className="">
        <DashCard title="Water Conservation" data={data} />
        <WaterRequest
          location="1234 Main St"
          userCount="5"
          userName="John Doe"
          status="Pending"
        />
        <WaterRequest
          location="1234 Main St"
          userCount="5"
          userName="John Doe"
          status="Pending"
        />
      </div>
    </div>
  )
}

export default UserDashboard
