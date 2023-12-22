// CheckClicksPage.js
import React, { useState } from 'react';
import { getClickCount } from '../api/backendAPI/apiService';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const CheckClicksPage = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [clickCount, setClickCount] = useState(null);
    const [error, setError] = useState('');
    const [chartData, setChartData] = useState({});

    const updateChartData = (clickCount) => {
        setChartData({
            labels: ['Clicks'],
            datasets: [
                {
                    label: 'Number of Clicks',
                    data: [clickCount],
                    backgroundColor: ['rgba(54, 162, 235, 0.6)'],
                },
            ],
        });
    };


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
                updateChartData(response.clickCount);

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
                    placeholder="Enter shortened link"
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
            {/* Chart display */}
            {clickCount !== null && (
                <div className="mt-4">
                    <Bar data={chartData} />
                </div>
            )}
            {/* Tutorial Section for Check Stats Page */}
            <div className="mt-10">
                <h2 className="text-2xl font-bold text-center mb-6">How to Check Stats</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center">
                        <div className="rounded-full bg-green-500 text-white w-8 h-8 flex items-center justify-center mr-3">1</div>
                        <p>Enter the shortened URL or its ID in the provided text field.</p>
                    </div>
                    <div className="flex items-center">
                        <div className="rounded-full bg-green-500 text-white w-8 h-8 flex items-center justify-center mr-3">2</div>
                        <p>Click the Check Stats button to view the statistics of the URL.</p>
                    </div>
                    <div className="flex items-center">
                        <div className="rounded-full bg-green-500 text-white w-8 h-8 flex items-center justify-center mr-3">3</div>
                        <p>Review the displayed information, such as click count and referral sources.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckClicksPage;
