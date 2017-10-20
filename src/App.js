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
//Importar componente Pregunta
import  Pregunta  from './components/Pregunta'


//Importar Estilos 
import './App.css';

class App extends Component {
  render (){
    return (
           
      <Router>
        <div> 
      <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Sigma Encuestas</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
            
            <Link className="nav-link" to="/grupointeres">Grupo Interes</Link>
            </li>

            <li className="nav-item">
            
            <Link className="nav-link" to="/dimension">Dimension</Link>
            
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/cobertura">Cobertura</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/temarelevante">TemaRelevante</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link" to="/pregunta">Pregunta</Link>
            
            </li>
          </ul>
        </div>
      </nav>
          
          <Route path="/grupointeres" component= {GrupoInteres} />
          <Route exact path="/dimension" component= {Dimension} />
          <Route path="/cobertura" component= {Cobertura} />
          <Route path="/temarelevante" component= {TemaRelevante} />
          <Route path="/pregunta" component= {Pregunta} />
        </div>
      </Router>
    );
  }
}


export default App;
