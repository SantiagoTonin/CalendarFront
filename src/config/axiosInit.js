import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const apiConnect = axios.create({
    baseURL,
});

export default apiConnect;
