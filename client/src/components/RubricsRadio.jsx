import React, { useState } from 'react'
import './styles/Feedback.css'

function RubricsRadio(props) {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle the form submission logic here
  }

  return (
    <div className="rubrics">
      <label className="rubrics-label">{props.label}</label>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star} className="star-label">
            <input
              type="radio"
              name={props.rubricNo}
              value={star}
              checked={star === props.rubricNo}
              onChange={handleSubmit}
            />
            <span
              className={`star ${star <= props.rubricNo ? 'selected' : ''}`}
            >
              &#9733;
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default RubricsRadio
