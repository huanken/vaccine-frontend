import axios from 'axios';
import Storage from '../Storage/Storage';
import { Redirect } from 'react-router-dom';

const axiosClient = axios.create({
    baseURL: `https://vaccination-management.herokuapp.com/api/v1`,
    // timeout: 5000,  default is `0` (no timeout);
    // responseType: 'json'
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    // attach token to header if exists
    const token = Storage.getToken();
    if (token !== null && token !== undefined) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});



axiosClient.interceptors.response.use((response) => {
    
    if (response && response.data !== undefined) {
        // only get data
        return response.data;
    }

    return response;
}, (error) => {

    if (error.response) {
        throw error.response;
    }

    if (error.request) {
        throw error.request;
    }

    // if (error.response.data.status === 401) {
    //     <Redirect
    //     to={{
    //         pathname: "/auth/sign-in"
    //     }}
    //     />
    //         throw error.response;
    // }

    // Handle errors
    throw error;
});

export default axiosClient;