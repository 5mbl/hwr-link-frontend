import React, { useState, useEffect } from 'react';
import { getLiveUrlList } from '../api/backendAPI/apiService';

const LiveUrlsPage = () => {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const liveUrls = await getLiveUrlList();
                console.log(liveUrls)
                setUrls(liveUrls);
            } catch (error) {
                console.error('Error fetching live URLs:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold text-center text-red-400 mb-10">Live Shortened URLs</h1>
            <p className="text-center text-gray-400 mb-10">Created by anonymous HWR students</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {urls.map((url, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                        <p className="text-lg">Original: <a href={url.original_url} className="text-blue-300 hover:text-blue-500" target="_blank" rel="noopener noreferrer">{url.original_url}</a></p>
                        <p className="text-lg">Shortened: <a href={`https://${url.id}`} className="text-red-400 hover:text-red-600" target="_blank" rel="noopener noreferrer">{'hwr.link/' + url.id}</a></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveUrlsPage;
