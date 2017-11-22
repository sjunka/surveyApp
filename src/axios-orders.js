import axios from 'axios';

const instance = axios.create({
    //baseURL: 'https://sigmamaterialidad.firebaseio.com/'
    baseURL: 'http://192.168.2.107/TEST/MATERIALIDAD/API'

});

export default instance;