//******************************
//  Import componentes React   *
//******************************
import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

//******************************
// Import Containers(HOC) y Components
//******************************

import Layout from "./hoc/Layout/Layout";

//******************************
// Import Internal Components
//******************************

import Landing from "./components/Landing/Landing";

import Inicio from "./components/Inicio/Inicio";

import Login from "./containers/Login/Login";

import Dimension from "./containers/Dimension/Dimension";
import DimensionCreate from "./containers/Dimension/DimensionCreate";

import Cobertura from "./containers/Cobertura/Cobertura";
import CoberturaCreate from "./containers/Cobertura/CoberturaCreate";

import GrupoInteres from "./containers/GrupoInteres/GrupoInteres";
import GrupoInteresCreate from "./containers/GrupoInteres/GrupoInteresCreate";

import TemaRelevante from "./containers/TemaRelevante/TemaRelevante";
import TemaRelevanteCreate from "./containers/TemaRelevante/TemaRelevanteCreate";

import Pregunta from "./containers/Pregunta/Pregunta";
import PreguntaCreate from "./containers/Pregunta/PreguntaCreate";

import Usuario from "./containers/Usuario/Usuario";
import UsuarioCreate from "./containers/Usuario/UsuarioCreate";

import Encuesta from "./containers/Encuesta/Encuesta";
import EncuestaCreate from "./containers/Encuesta/EncuestaCreate";
import EncuestaPreguntas from "./containers/Encuesta/EncuestaPreguntas";
import EncuestaEdit from "./containers/Encuesta/EncuestaEdit";

import Resultado from "./containers/Resultado/Resultado";

//Importar Estilos
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={Landing} />

            <Route exact path="/login" component={Login} />

            <Route exact path="/inicio" component={Inicio} />

            <Route exact path="/dimension" component={Dimension} />
            <Route exact path="/cobertura" component={Cobertura} />

            <Route exact path="/cobertura/new" component={CoberturaCreate} />
            <Route exact path="/dimension/new" component={DimensionCreate} />

            <Route exact path="/temarelevante" component={TemaRelevante} />
            <Route
              exact
              path="/temarelevante/new"
              component={TemaRelevanteCreate}
            />

            <Route exact path="/grupointeres" component={GrupoInteres} />
            <Route
              exact
              path="/grupointeres/new"
              component={GrupoInteresCreate}
            />

            <Route exact path="/pregunta" component={Pregunta} />
            <Route exact path="/pregunta/new" component={PreguntaCreate} />

            <Route exact path="/usuario" component={Usuario} />
            <Route exact path="/usuario/new" component={UsuarioCreate} />

            <Route exact path="/encuesta" component={Encuesta} />
            <Route exact path="/encuesta/new" component={EncuestaCreate} />
            <Route
              exact
              path="/encuesta/asignarpreguntas/:idEncuesta"
              component={EncuestaPreguntas}
            />

            <Route
              exact
              path="/encuesta/edit/:idEncuesta"
              component={EncuestaEdit}
            />

            <Route exact path="/resultado" component={Resultado} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
