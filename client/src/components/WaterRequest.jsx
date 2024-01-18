import React, { useState } from 'react';
import './styles/WaterRequest.css';

const WaterRequest = (props) => {

  const rowClassName = props.campaign === 'held' ? 'table-row-green' : 'table-row-yellow';

  const handleClick = () => {
    props.campaign('left')
  };

  return (
    <tr className={rowClassName}>
      <td className='table-cell'>{props.location}</td>
      <td className='table-cell'>{props.userCount}</td>
      <td className='table-cell'>{props.userName}</td>
      <td className='table-cell'>{props.status}</td>
      <td className='table-cell'>{props.campaign}</td>
      <td className='table-cell'><button onClick={handleClick}>Campaigning done</button></td>
    </tr>
  );
}

export default WaterRequest;