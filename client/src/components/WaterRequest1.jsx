import React, { useState } from 'react';
import './styles/WaterRequest.css';

const WaterRequest1 = (props) => {

  const rowClassName = props.campaign === 'held' ? 'table-row-green' : 'table-row-yellow';



  return (
    <tr className={rowClassName}>
      <td className='table-cell'>{props.location}</td>
      <td className='table-cell'>{props.userCount}</td>
      <td className='table-cell'>{props.userName}</td>
      <td className='table-cell'>{props.status}</td>
      <td className='table-cell'>{props.campaign}</td>
    </tr>
  );
}

export default WaterRequest1;