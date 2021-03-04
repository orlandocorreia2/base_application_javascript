import axios from 'axios';

const api = axios.create({
  baseURL: '192.168.0.150:3000',
});

export default api;
