// import axios from 'axios'
// import config from '../config'
import axios from '../axiosInstance';

export async function login(email, password) {
    const body = { email, password };
    try {
        const response = await axios.post(`/user/signin`, body);
        const status = response.status;
        return { ...response.data, status };
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function register(name, email, password, mobileNumber, address, city, state, country, zip, latitude, longitude) {
    const role = "ROLE_CUSTOMER";
    const body = { name, email, password, mobileNumber, role, address, city, state, country, zip, longitude, latitude };
    console.log(body);
    const response = await axios.post(`/user/register`, body);
    const status = response.status;
    return { ...response.data, status };
}