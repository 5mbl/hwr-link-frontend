// CheckClicksPage.js
import React, { useState } from 'react';
import { getClickCount } from '../api/backendAPI/apiService';

const CheckClicksPage = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [clickCount, setClickCount] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const shortId = inputUrl.split('/').pop(); // Extrahiert die ID aus der URL

        if (!shortId) {
            setError('Bitte geben Sie eine gültige gekürzte URL ein.');
            setClickCount(null);
            return;
        }

        try {
            const response = await getClickCount(shortId);
            if (response.clickCount !== undefined) {
                setClickCount(response.clickCount); // Speichert nur den clickCount-Wert
                setError('');
            } else {
                throw new Error('Invalid response format');
            }
        } catch (err) {
            console.error('Fehler beim Abrufen der Klickanzahl:', err);
            setError('Fehler beim Abrufen der Klickanzahl. Bitte überprüfen Sie die URL.');
            setClickCount(null);
        }
    };



    return (
        <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-black mb-6 text-center">Check Clicks</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="text"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
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
