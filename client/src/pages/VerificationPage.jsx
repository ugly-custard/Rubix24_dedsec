import React from 'react'
import WaterRequestVerify from '../components/WaterRequestVerify'

function VerificationPage() {
    const verificationId = "abcd1234"
    return (
        <div>
            <h1>Verification Page</h1>
            <p>Verification id: {verificationId}</p>
            {/* need a similar table thing here */}
            <WaterRequestVerify
                location='1234 Main St'
                userCount='5'
                userName='John Doe'
                status='Pending'
            />
            <WaterRequestVerify
                location='1234 Main St'
                userCount='5'
                userName='John Doe'
                status='Pending'
            />
            <WaterRequestVerify
                location='1234 Main St'
                userCount='5'
                userName='John Doe'
                status='Pending'
            />
        </div>
    )
}

export default VerificationPage