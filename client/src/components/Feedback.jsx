import React, { useState } from 'react'
import './styles/Feedback.css'

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
          <div>
            <label>Rubric 1:</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star} className="star-label">
                  <input
                    type="radio"
                    name="rubric1"
                    value={star}
                    checked={star === rubric1}
                    onChange={handleSubmit}
                  />
                  <span className={`star ${star <= rubric1 ? 'selected' : ''}`}>
                    &#9733;
                  </span>
                </label>
              ))}
            </div>
            {/* <fieldset class="rating">
              <input type="radio" id="star5" name="rating" value="5" />
              <label for="star5" title="Rocks!">
                5 stars
              </label>
              <input type="radio" id="star4" name="rating" value="4" />
              <label for="star4" title="Pretty good">
                4 stars
              </label>
              <input type="radio" id="star3" name="rating" value="3" />
              <label for="star3" title="Meh">
                3 stars
              </label>
              <input type="radio" id="star2" name="rating" value="2" />
              <label for="star2" title="Kinda bad">
                2 stars
              </label>
              <input type="radio" id="star1" name="rating" value="1" />
              <label for="star1" title="Sucks big time">
                1 star
              </label>
            </fieldset> */}
            {/* }// <input
            //   type="number"
            //   min="1"
            //   max="5"
            //   value={rubric1}
            //   onChange={(e) => setRubric1(e.target.value)}
            // /> */}
          </div>

          <div>
            <label>Rubric 2:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rubric2}
              onChange={(e) => setRubric2(e.target.value)}
            />
          </div>

          <div>
            <label>Rubric 3:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rubric3}
              onChange={(e) => setRubric3(e.target.value)}
            />
          </div>

          <div>
            <label>Rubric 4:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rubric4}
              onChange={(e) => setRubric4(e.target.value)}
            />
          </div>

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
