import axios from 'axios';

const api = axios.create({
    baseURL:'https://localhost:7214'
})

export default api;