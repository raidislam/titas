import axios from 'axios';

const API_BASE_URL = 'http://116.193.222.198:8090';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getMembers = () => {
    return api.get('/members');
};
