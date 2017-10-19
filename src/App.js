//Importar componentes React
import React, { Component } from 'react';
//Importar componente de Rutas
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom';

//Importar componente Dimension 
import  Dimension  from './components/Dimension'
//Importar componente Cobertura 
import  Cobertura  from './components/Cobertura'
//Importar componente TemaRelevante 
import  TemaRelevante  from './components/TemaRelevante'
//Importar componente GrupoInteres
import  GrupoInteres  from './components/GrupoInteres'


//Importar Estilos 
import './App.css';

class App extends Component {
  render (){
    return (
    <Router>
      <div style={{color:'teal'}}> 
        Panel de rutas de la aplicación
        <div>
          <Link to="/grupointeres">Grupo Interes</Link>
          <br/>
          <Link to="/dimension">Dimension</Link>
          <br/>
          <Link to="/cobertura">Cobertura</Link>
          <br/>
          <Link to="/temarelevante">TemaRelevante</Link>
          <br/>
        </div>
        <Route path="/grupointeres" component= {GrupoInteres} />
        <Route exact path="/dimension" component= {Dimension} />
        <Route path="/cobertura" component= {Cobertura} />
        <Route path="/temarelevante" component= {TemaRelevante} />
      </div>
    </Router>
    );
  }
}


export default App;
