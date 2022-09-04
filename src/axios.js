import axios from "axios";
import { ENDPOINT } from './urls'

const instance = axios.create({
    baseURL: ENDPOINT.host,
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config;
})

export default instance;