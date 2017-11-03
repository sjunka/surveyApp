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
//Importar componente Registro Usuario
import  RegistroUsuario  from './components/RegistroUsuario'
//Importar componente Encuesta
import  Encuesta  from './components/Encuesta'
//Importar componente ListarPreguntas
import  ListarPreguntas  from './components/ListarPreguntas'
//Importar componente ListarTemasRelevantes
import  ListarTemasRelevantes  from './components/ListarTemasRelevantes'


//Importar Estilos 
import './App.css';

class App extends Component {
  render (){
    return (
           
      <Router>
        <div> 
      <nav className="navbar navbar-dark bg-info">
          <a className="navbar-brand" href="/">Ejercicio Materialidad</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

          <li className="nav-item dropdown">
            
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
              Crear Pregunta
            </a>

            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/grupointeres">Grupo Interes</Link>  
              <Link className="dropdown-item" to="/dimension">Dimension</Link>  
              <Link className="dropdown-item" to="/cobertura">Cobertura</Link>
              <Link className="dropdown-item" to="/temarelevante">TemaRelevante</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/pregunta">Pregunta</Link>
            </div>

          </li>
              
              
          <li className="nav-item">
             <Link className="nav-link" to="/registrousuario">Registro Encuestado</Link>
          </li>          

          <li className="nav-item">
             <Link className="nav-link" to="/encuesta">Crear Encuesta</Link>
          </li>


          <li className="nav-item dropdown">
            
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
              Menu Listar
            </a>

            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/listarpreguntas">Preguntas</Link>  
              <Link className="dropdown-item" to="/listartemasrelevantes">Tema Relevante</Link>  
            </div>

          </li>





          </ul>
        </div>
      </nav>
          
          
          <Route path="/grupointeres" component= {GrupoInteres} />
          <Route exact path="/dimension" component= {Dimension} />
          <Route path="/cobertura" component= {Cobertura} />
          <Route path="/temarelevante" component= {TemaRelevante} />
          <Route path="/pregunta" component= {Pregunta} />
          <Route path="/registrousuario" component= {RegistroUsuario} />
          <Route path="/encuesta" component= {Encuesta} />
          <Route path="/listarpreguntas" component= {ListarPreguntas} />
          <Route path="/listartemasrelevantes" component= {ListarTemasRelevantes} />
          
        </div>
      </Router>
    );
  }
}


export default App;
