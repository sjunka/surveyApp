import React, { Component } from "react";

//Importar componente Axios
import axios from "../../axios-orders";

import GoBackButton from "../../components/UI/GoBackButton/GoBackButton";
import PreguntaCard from "../../components/Pregunta/PreguntaCard";
import EncuestaControls from "../../components/Encuesta/EncuestaControls/EncuestaControls";

class EncuestaEdit extends Component {
  state = {
    preguntas: [],
    encuestaId: "",
    encuestaName: "",
    encuestaDescripcion: "",
    gruposInteres: [],
    linkEncuesta: ""
  };

  componentDidMount() {
    const recibirIdEncuesta = this.props.match.params.idEncuesta;
    console.log(recibirIdEncuesta);
    axios
      .get("/pregunta/GetByEncuesta/" + recibirIdEncuesta)
      .then(response => {
        console.log("la respuesta del server es:", response);

        const preguntasUpdated = [];

        for (let key in response.data) {
          preguntasUpdated.push({
            ...response.data[key],
            id: key
          });
        }
        this.setState({
          preguntas: preguntasUpdated
        });

        console.log(this.state.preguntas);
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("/Encuesta/" + recibirIdEncuesta)
      .then(response => {
        const encuestaName = {
          name: response.data.Name,
          descripcion: response.data.Introduccion
        };

        this.setState(
          {
            encuestaName: encuestaName.name,
            encuestaDescripcion: encuestaName.descripcion
          },
          () => {
            console.log(this.state.encuestaName);
          }
        );
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("/GrupoInteres")
      .then(response => {
        const gruposInteresBD = [];

        for (let key in response.data) {
          gruposInteresBD.push({
            ...response.data[key],
            id: key
          });
        }

        this.setState(
          {
            gruposInteres: gruposInteresBD
          },
          () => {
            console.log(this.state.gruposInteres);
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  grupoInteresId = grupoInteresId => {
    let idEncuesta = this.state.encuestaId;
    let idGrupoInteres = grupoInteresId;

    this.compartirEncuesta(idEncuesta, idGrupoInteres);
  };

  compartirEncuesta = (idEncuesta, idGrupoInteres) => {
    let linkEncuesta = `http://190.85.67.146:3000/encuesta/survey/${idEncuesta}/${idGrupoInteres}`;
    console.log(linkEncuesta);
    this.setState({ linkEncuesta });
  };

  asignarPreguntas = () => {
    let idEncuestaAsignar = 14;
    this.props.history.push("/encuesta/asignarpreguntas/" + idEncuestaAsignar);
  };
  render() {
    let preguntasDeEncuesta = this.state.preguntas.map(pregunta => {
      return <PreguntaCard key={pregunta.Id} name={pregunta.Name} />;
    });
    return (
      <div className="container">
        <GoBackButton goBack={this.goBackHandler} />
        <div className="row">
          {this.state.encuestaName ? (
            <div className="col-sm-12">
              <h3 className="p-2">{this.state.encuestaName}</h3>
              <p>{this.state.encuestaDescripcion}</p>
            </div>
          ) : null}
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12">
            {
              <EncuestaControls
                gruposInteres={this.state.gruposInteres}
                grupoInteresSingular={this.grupoInteresId}
                linkEncuesta={this.state.linkEncuesta}
                asignarPreguntas={this.asignarPreguntas}
              />
            }
          </div>
          <div className="col-sm-12 col-md-12">
            <p>Preguntas de esta Encuesta:</p>

            {this.state.preguntas.length > 0 ? (
              preguntasDeEncuesta
            ) : (
              <p>Esta encuesta no tiene preguntas disponibles.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default EncuestaEdit;
