import React, { useState } from 'react';
import '../styles/VerifyInfo.css'; // Import the CSS file

function VerifyInfo() {

    const [waterSources, setWaterSources] = useState('');
    const [groundWaterPresent, setGroundWaterPresent] = useState(false);
    const [projectType, setProjectType] = useState('');
    const [ngo, setNgo] = useState('');
    const [reportInfo, setReportInfo] = useState('');

    const handleVerify = () => {
        console.log(waterSources);
        console.log(groundWaterPresent);
        console.log(projectType);
        console.log(ngo);
        console.log(reportInfo);
    };

    return (
        <div className="verify-info">
            <h1 className="title">Verification Info</h1>
            <form className="form">
                <label className="label">
                    Water Sources Nearby:
                    <input
                        className="input"
                        type="text"
                        value={waterSources}
                        onChange={(e) => setWaterSources(e.target.value)}
                    />
                </label>
                <br />
                <label className="label1">
                    Ground Water Present:
                    <input
                        className="radio"
                        type="radio"
                        checked={groundWaterPresent}
                        onChange={() => setGroundWaterPresent(!groundWaterPresent)}
                    />
                    Yes
                    <input
                        className="radio"
                        type="radio"
                        checked={!groundWaterPresent}
                        onChange={() => setGroundWaterPresent(!groundWaterPresent)}
                    />
                    No
                </label>
                <label className="label1">
                    Type of Project:
                    <input
                        className="radio"
                        type="radio"
                        checked={groundWaterPresent}
                        onChange={() => setGroundWaterPresent(!groundWaterPresent)}
                    />
                    Contamination
                    <input
                        className="radio"
                        type="radio"
                        checked={!groundWaterPresent}
                        onChange={() => setGroundWaterPresent(!groundWaterPresent)}
                    />
                    Build Project
                </label>
                <br />
                <label className="label">
                    Project Type:
                    <select
                        className="select"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                    >
                        <option value="">Select</option>
                        <option value="Type 1">Type 1</option>
                        <option value="Type 2">Type 2</option>
                        <option value="Type 3">Type 3</option>
                    </select>
                </label>
                <br />
                <label className="label">
                    NGO:
                    <select className="select" value={ngo} onChange={(e) => setNgo(e.target.value)}>
                        <option value="">Select</option>
                        <option value="NGO 1">NGO 1</option>
                        <option value="NGO 2">NGO 2</option>
                        <option value="NGO 3">NGO 3</option>
                    </select>
                </label>
                <br />
                <label className="label">
                    Report Info:
                    <input
                        className="report-info"
                        type="text"
                        value={reportInfo}
                        onChange={(e) => setReportInfo(e.target.value)}
                    />
                </label>
                <br />
                <button className="button" type="button" onClick={handleVerify}>
                    Verify
                </button>
            </form>
        </div>
    );
}

export default VerifyInfo;