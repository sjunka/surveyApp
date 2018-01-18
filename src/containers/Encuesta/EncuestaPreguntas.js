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
      filterString: ""
    };
  }

  componentDidMount() {
    axios
      .get("/Pregunta")
      .then(response => {
        console.log("la respuesta del server es:", response);

        const preguntasUpdated = [];

        for (let key in response.data) {
          preguntasUpdated.push({
            ...response.data[key],
            id: key
          });
        }

        console.log(preguntasUpdated);

        this.setState({
          preguntas: preguntasUpdated
        });

        console.log(this.state.preguntas);
      })
      .catch(error => {
        console.log(error);
      });
  }

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
