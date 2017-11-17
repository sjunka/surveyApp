import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sigmamaterialidad.firebaseio.com/'
});

export default instance;