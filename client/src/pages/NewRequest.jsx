import React, { useState } from 'react';
import "../styles/NewRequest.css"

function NewRequest() {
    const [username, setUsername] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform submit request logic here
    };

    return (
        <div className="form-container">
            <h1>Request Form</h1>
            <form onSubmit={handleSubmit} className="request-form">
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
                    Address Line 1:
                    <input
                        type="text"
                        value={addressLine1}
                        onChange={(e) => setAddressLine1(e.target.value)}
                        className="form-input"
                    />
                </label>
                <br />
                <label className="form-label">
                    Address Line 2:
                    <input
                        type="text"
                        value={addressLine2}
                        onChange={(e) => setAddressLine2(e.target.value)}
                        className="form-input"
                    />
                </label>
                <br />
                <label className="form-label">
                    City:
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="form-input"
                    />
                </label>
                <br />
                <label className="form-label">
                    State:
                    <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="form-input"
                    />
                </label>
                <br />
                <label className="form-label">
                    Postal Code:
                    <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="form-input"
                    />
                </label>
                <br />
                <label className="form-label">
                    Country:
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
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