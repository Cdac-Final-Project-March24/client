import axios from 'axios';
import config from './config';

const instance = axios.create({
    baseURL: config.url,
});

instance.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;

export default instance;