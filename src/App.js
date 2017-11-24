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

import  Dimension  from './containers/Dimension/Dimension';
import  DimensionCreate  from './containers/Dimension/DimensionCreate';

import  TemaRelevante  from './containers/TemaRelevante/TemaRelevante';

import  Cobertura  from './containers/Cobertura/Cobertura';
import  CoberturaCreate  from './containers/Cobertura/CoberturaCreate';

/*}
import  GrupoInteres  from './components/GrupoInteres';
import  Pregunta  from './components/Pregunta';
import  RegistroUsuario  from './components/RegistroUsuario';
import  Encuesta  from './components/Encuesta';
import  ListarPreguntas  from './components/ListarPreguntas';
import  ListarTemasRelevantes  from './components/ListarTemasRelevantes';
*/

//Importar Estilos 
//import './App.css';

  class App extends Component {
    render () {
      return (
        <div>
          <Layout>
            <Switch>
            <Route path="/" exact component={Landing} />

            <Route exact path="/dimension" component= {Dimension} />
            <Route exact path="/cobertura" component= {Cobertura} />
            
            <Route exact path="/cobertura/new"   component= {CoberturaCreate} />
            <Route exact path="/dimension/new" component= {DimensionCreate} />

            <Route path="/temarelevante" component= {TemaRelevante} />

            
              {/*
              <Route path="/" exact component={Lading} />
              <Route path="/grupointeres" component= {GrupoInteres} />
              <Route exact path="/dimension" component= {Dimension} />
              <Route path="/pregunta" component= {Pregunta} />
              <Route path="/registrousuario" component= {RegistroUsuario} />
              <Route path="/encuesta" component= {Encuesta} />
              <Route path="/listarpreguntas" component= {ListarPreguntas} />
              <Route path="/listartemasrelevantes" component= {ListarTemasRelevantes} />
              */}
            </Switch>
          </Layout>
        </div>
      );
    }
  }



export default App;
