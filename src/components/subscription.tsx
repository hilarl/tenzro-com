"use client";

import React, { useState } from 'react';

const SubscriptionForm = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate email address
        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        // Replace with your SendGrid API key and list ID
        const apiKey = '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';
        const listId = 'c7eaaa1d-dfaa-4d4c-bb79-8d71508592f3';

        const data = {
            contacts: [
                {
                    email: email,
                },
            ],
        };

        try {
            const response = await fetch(`https://api.sendgrid.com/v3/marketing/lists/${listId}/contacts`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data, null, 2), // Correctly stringify the JSON data
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.errors[0].message);
            }

            setSuccessMessage('You have successfully subscribed!');
            setEmail('');
        } catch (error) {
            setErrorMessage(`Error subscribing: ${error.message}`);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <button type="submit">Subscribe</button>
        </form>
    );
};

export default SubscriptionForm;
