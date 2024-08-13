module.exports = 
`import axios from 'axios';

// Set the base URL for the API
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.example.com';

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example function to get data from an endpoint
export const fetchData = async () => {
  try {
    const response = await api.get('/endpoint');
    return response.data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

export default api;
`