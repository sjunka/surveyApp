//Importar componentes React
import React, { Component } from 'react';
//Importar componente de Rutas
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom';
//Importar componente Dimension 
import  Dimension  from './components/Dimension'

//Importar Estilos 
import './App.css';

class App extends Component {
  render (){
    return (
    <Router>
      <div>
        <div>
          <Link to="/dimension">Dimension</Link>
          <br/>
        </div>
        <Route exact path="/dimension" component= {Dimension} />
      </div>
    </Router>
    );
  }
}


export default App;
