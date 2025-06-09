import axios from 'axios'

const API = axios.create({ baseURL: import.meta.env.VITE_BACKEND_BASE_URL });
API.defaults.withCredentials = true;


export default API;