// ShortenUrlPage.js
import React, { useState } from 'react';
import { shortenUrl } from '../api/backendAPI/apiService';
const ShortenUrlPage = () => {
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    const handleShortenClick = async () => {
        try {
            const resultMessage = await shortenUrl(url);
            // Assuming resultMessage is like "Your shortened URL has been successfully shortened. shortID: xyz"
            const shortId = resultMessage.split('shortID: ')[1];
            setShortenedUrl(`https://hwr-link-backend.onrender.com/${shortId}`);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-black mb-6 text-center">Link Shortner</h1>

            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL to shorten"
                className="w-full p-2 border border-gray-300 rounded-md focus:border-black focus:ring-2 focus:ring-red-500"
            />
            <button
                onClick={handleShortenClick}
                className="mt-4 w-full bg-black text-white p-2 rounded-md hover:bg-red-600 transition duration-300"
            >
                Shorten URL
            </button>

            {shortenedUrl &&
                <p className="mt-4 text-black">
                    Shortened URL: <a href={shortenedUrl} className="text-red-500 hover:text-red-600 transition duration-300">{shortenedUrl}</a>
                </p>
            }
        </div>


    );
};


export default ShortenUrlPage;
