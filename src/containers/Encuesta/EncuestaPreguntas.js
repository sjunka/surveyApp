//Importar componentes React
import React, { Component } from "react";

//Importar componente Axios
import axios from "../../axios-orders";

import PreguntaEncuesta from "../../components/Pregunta/PreguntaEncuesta";

class Filter extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="col-form-label">Buscar pregunta:</label>
        <input
          className="form-control"
          type="text"
          onKeyUp={event => this.props.onTextChange(event.target.value)}
        />
      </div>
    );
  }
}

class EncuestaPreguntas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preguntas: [],
      filterString: "",
      idEncuesta: "",
      encuestaColeccion: []
    };
  }

  componentDidMount() {
    axios
      .get("/Pregunta")
      .then(response => {
        const preguntasUpdated = [];

        for (let key in response.data) {
          preguntasUpdated.push({
            ...response.data[key],
            id: key
          });
        }

        console.log("las preguntas de la bd son :", preguntasUpdated);

        const recibirIdEncuesta = this.props.match.params.idEncuesta;

        this.setState({
          preguntas: preguntasUpdated,
          idEncuesta: recibirIdEncuesta
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  agregarPreguntaEncuesta = (idPregunta, idEncuesta) => {
    console.log(idPregunta, idEncuesta);

    let preguntaEnq = [...this.state.encuestaColeccion];

    let agregarPreguntanueva = {
      Pregunta: {
        Id: idPregunta
      },
      Encuesta: {
        Id: idEncuesta
      }
    };

    preguntaEnq.push(agregarPreguntanueva);

    this.setState({ encuestaColeccion: preguntaEnq });

    console.log(this.state.encuestaColeccion);
  };

  removerPreguntaEncuesta = (idPregunta, idEncuesta) => {
    console.log(idPregunta);
  };

  render() {
    return (
      <div className="container">
        <h4 className="col-form-label">Asignar Preguntas</h4>
        <Filter
          onTextChange={text => {
            this.setState({ filterString: text });
          }}
        />

        {this.state.preguntas
          .filter(pregunta => {
            return pregunta.Name.toLowerCase().includes(
              this.state.filterString.toLocaleLowerCase()
            );
          })
          .map(pregunta => {
            return (
              <PreguntaEncuesta
                key={pregunta.Id}
                id={pregunta.Id}
                preguntaName={pregunta.Name}
                temaReveName={pregunta.TemaRelevante.Name}
                temaReleveCategory={pregunta.TemaRelevante.Categoria.Name}
                preguntaType={pregunta.TipoPreguntaDesc}
                grupoInteres={pregunta.GruposIntereres}
                agregarPregunta={() => {
                  this.agregarPreguntaEncuesta(
                    pregunta.Id,
                    this.state.idEncuesta
                  );
                }}
                removerPregunta={() => {
                  this.removerPreguntaEncuesta(pregunta.Id);
                }}
              />
            );
          })}
        <div className="d-flex justify-content-center mt-3">
          <div className="col-sm-6 text-center mb-2">
            <button type="submit" className="btn btn-success">
              Publicar preguntas
            </button>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
  };

  handleDimension = e => {
    this.setState({
      dimension: e.target.value
    });
    console.log(this.state.dimension);
  };
}

export default EncuestaPreguntas;
