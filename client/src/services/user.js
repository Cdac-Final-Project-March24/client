import axios from 'axios'
import config from '../config'
import instance from '../axiosInstance';

export async function login(email, password) {
    const body = { email, password };
    try {
        const response = await axios.post(`${config.url}/user/signin`, body);
        const status = response.status;
        return { ...response.data, status };
    } catch (e) {
        console.log(e);
        const status = e.response.status;
        const message = e.response.data.message;
        return { message, status };
    }
}

export async function register(name, email, password, mobileNumber, address, city, state, country, zip, latitude, longitude) {
    const role = "ROLE_CUSTOMER";
    const body = { name, email, password, mobileNumber, role, address, city, state, country, zip, longitude, latitude };
    console.log(body);
    try {
        const response = await axios.post(`${config.url}/user/register`, body);
        const status = response.status;
        return { ...response.data, status };
    } catch (e) {
        console.log(e);
        const status = e.response.status;
        const message = e.response.data.message;
        return { message, status };
    }
}