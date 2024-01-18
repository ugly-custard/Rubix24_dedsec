import React, { useState } from 'react';
import "../styles/NewRequest.css"

function NewRequest() {
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform submit request logic here
    };

    return (
        <div className="form-container">
            <h1>Request Form</h1>
            <form onSubmit={handleSubmit} className="request-form">
                <label className="form-label">
                    User ID:
                    <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="form-input"
                    />
                </label>
                <br />
                <label className="form-label">
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-input"
                    />
                </label>
                <br />
                <label className="form-label">
                    Number of People:
                    <input
                        type="number"
                        value={numberOfPeople}
                        onChange={(e) => setNumberOfPeople(e.target.value)}
                        className="form-input"
                    />
                </label>
                <br />
                <label className="form-label">
                    Location:
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="form-input"
                    />
                </label>
                <br />
                <button type="submit" className="submit-button">Submit Request</button>
            </form>
        </div>
    );
}

export default NewRequest;