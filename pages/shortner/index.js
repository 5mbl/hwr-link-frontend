import React, { useState, useEffect } from 'react';
import { shortenUrl } from '../api/backendAPI/apiService';
import Confetti from 'react-confetti';

const ShortenUrlPage = () => {
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);

    const handleShortenClick = async () => {
        if (!url) {
            alert("Please enter a URL to shorten."); // Simple validation, can be improved
            return;
        }

        try {
            const resultMessage = await shortenUrl(url);
            const shortId = resultMessage.split('shortID: ')[1];
            setShortenedUrl(`hwr.link/${shortId}`);
            setShowConfetti(true);
        } catch (error) {
            console.log('Error:', error);
            alert("Failed to shorten the URL."); // User feedback
        }
    };

    useEffect(() => {
        if (showConfetti) {
            const timer = setTimeout(() => setShowConfetti(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [showConfetti]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shortenedUrl);
        alert("URL copied to clipboard!"); // Feedback to user
    };

    return (
        <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
            {showConfetti && <Confetti />}
            <h1 className="text-3xl font-bold text-black mb-4 text-center">Link Shortener</h1>
            <p className="text-gray-600 text-center mb-4">Shorten your links quickly and easily.</p>

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

            {shortenedUrl && (
                <div className="mt-4 text-black">
                    <p>Short URL: <a href={`https://${shortenedUrl}`} className="text-red-500 hover:text-red-600 transition duration-300">{shortenedUrl}</a></p>
                    <button
                        onClick={copyToClipboard}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm"
                    >
                        Copy
                    </button>
                </div>
            )}
            {/* Tutorial Section */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-center mb-6">How to Use</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center">
                        <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center mr-3">1</div>
                        <p>Enter the URL you wish to shorten in the text field above.</p>
                    </div>
                    <div className="flex items-center">
                        <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center mr-3">2</div>
                        <p>Click the Shorten URL button to generate a shortened link.</p>
                    </div>
                    <div className="flex items-center">
                        <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center mr-3">3 </div>
                        <p>Use the Copy button to easily copy the shortened URL to your clipboard.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortenUrlPage;
