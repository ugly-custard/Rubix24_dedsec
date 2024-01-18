import React, { useState } from 'react'
import './styles/Feedback.css'
import RubricsRadio from './RubricsRadio'

function Feedback() {
  const [rubric1, setRubric1] = useState(0)
  const [rubric2, setRubric2] = useState(0)
  const [rubric3, setRubric3] = useState(0)
  const [rubric4, setRubric4] = useState(0)
  const [detailedFeedback, setDetailedFeedback] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle the form submission logic here
  }

  return (
    <>
      <div className="feedback">
        <h2>Give Your Feedback</h2>
        <form action="#" onSubmit={handleSubmit} className="feedbackForm">
          <RubricsRadio label="Rubric 1:" rubricNo="rubric1" />
          <RubricsRadio label="Rubric 2:" rubricNo="rubric2" />
          <RubricsRadio label="Rubric 3:" rubricNo="rubric3" />
          <RubricsRadio label="Rubric 4:" rubricNo="rubric4" />

          <div>
            <label>Detailed Feedback:</label>
            <textarea
              value={detailedFeedback}
              onChange={(e) => setDetailedFeedback(e.target.value)}
            />
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </>
  )
}

export default Feedback
