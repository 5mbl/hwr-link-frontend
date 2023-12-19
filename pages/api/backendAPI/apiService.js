// apiService.js
const BASE_URL = 'https://hwr-link-backend.onrender.com'; // Replace with your Flask server URL

export const shortenUrl = async (originalUrl) => {
    try {
        const formData = new FormData();
        formData.append('url', originalUrl);

        const response = await fetch(`${BASE_URL}/shorten_url`, {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        return data.message;  // Assuming 'message' contains the 'shortID'
    } catch (error) {
        console.error('Error while shortening URL:', error);
        throw error;
    }
};

// In your apiService.js or equivalent file

// Function to get the click count for a given short_id
export const getClickCount = async (shortId) => {
    try {
        const response = await fetch(`${BASE_URL}/get/clicks/${shortId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; // The backend should return an object with a clickCount property


    } catch (error) {
        console.error('Error fetching click count:', error);
        throw error; // Re-throw the error to handle it in the component
    }
};

