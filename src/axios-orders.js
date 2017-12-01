import axios from 'axios';

const instance = axios.create({
    //baseURL: 'https://sigmamaterialidad.firebaseio.com/'
    baseURL: 'http://190.85.67.146/TEST/MATERIALIDAD/API',
    

});

export default instance;