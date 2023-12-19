// CheckClicksPage.js
import React, { useState } from 'react';
import { getClickCount } from '../api/backendAPI/apiService';

const CheckClicksPage = () => {
    const [shortId, setShortId] = useState('');
    const [clickCount, setClickCount] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {
            const result = await getClickCount(shortId);
            setClickCount(result.clickCount); // Access the clickCount property of the result object
            console.log(result)
            setError(''); // Clear any previous errors
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to retrieve click count. Please make sure the URL is correct.');
            setClickCount(null); // Reset click count in case of error
        }
    };

    return (
        <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-black mb-6 text-center">Check Clicks</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="text"
                    value={shortId}
                    onChange={(e) => setShortId(e.target.value)}
                    placeholder="Enter shortened ID"
                    className="w-full p-2 border border-gray-300 rounded-md focus:border-black focus:ring-2 focus:ring-red-500 mb-4"
                />
                <button
                    type="submit"
                    className="w-full bg-black text-white p-2 rounded-md hover:bg-red-600 transition duration-300"
                >
                    Check Clicks
                </button>
            </form>

            {clickCount !== null && (
                <p className="mt-4 text-black">
                    Click Count: <span className="font-bold">{clickCount}</span>
                </p>
            )}

            {error && (
                <p className="mt-4 text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default CheckClicksPage;
