//******************************
//  Import componentes React   *
//******************************
import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';


//******************************
// Import Containers(HOC) y Components 
//******************************

import Layout from './hoc/Layout/Layout';

//******************************
// Import Internal Components 
//******************************

import  Landing  from './components/Landing/Landing';

import  Inicio  from './components/Inicio/Inicio';

import  Dimension  from './containers/Dimension/Dimension';
import  DimensionCreate  from './containers/Dimension/DimensionCreate';

import  TemaRelevante  from './containers/TemaRelevante/TemaRelevante';

import  Cobertura  from './containers/Cobertura/Cobertura';
import  CoberturaCreate  from './containers/Cobertura/CoberturaCreate';

import  GrupoInteres  from './containers/GrupoInteres/GrupoInteres';

import  Pregunta  from './containers/Pregunta/Pregunta';

import Usuario from './containers/Usuario/Usuario';

import Encuesta from './containers/Encuesta/Encuesta';

import Resultado from './containers/Resultado/Resultado';



//Importar Estilos 
//import './App.css';

  class App extends Component {
    render () {
      return (
        <div>
          <Layout>
            <Switch>
            <Route exact path="/"  component={Landing} />
            <Route exact path="/inicio"  component={Inicio} />

            <Route exact path="/dimension" component= {Dimension} />
            <Route exact path="/cobertura" component= {Cobertura} />
            
            <Route exact path="/cobertura/new"   component= {CoberturaCreate} />
            <Route exact path="/dimension/new" component= {DimensionCreate} />

            <Route exact path="/temarelevante" component= {TemaRelevante} />

            <Route exact path="/grupointeres" component= {GrupoInteres} />

            <Route exact path="/pregunta" component= {Pregunta} />

            <Route exact path="/usuario" component= {Usuario} />

            <Route exact path="/encuesta" component= {Encuesta} />

            <Route exact path="/resultado" component= {Resultado} />

            
            </Switch>
          </Layout>
        </div>
      );
    }
  }



export default App;
