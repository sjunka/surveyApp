//Importar paquetes React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//Importar Estilos
import './index.css';

//Importar componentes
import App from './App';

//Adding Chat library to window.object
window.Highcharts = require('highcharts');

//Wrapping App component into BrowserRouter for routing the aplication
const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

//Render app variable as Root component
ReactDOM.render(app, document.getElementById('root'));


