//Listado de encuestas

//Importar componentes React
import React, { Component } from "react";

//Importar componente Axios
import axios from "../../axios-orders";

//import PreguntaList component
import EncuestaList from "../../components/Encuesta/EncuestaList";

class Encuesta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encuestas: []
    };
  }

  componentDidMount() {
    axios
      .get("/Encuesta")
      .then(response => {
        console.log("la respuesta del server es:", response);

        const encuestasUpdated = [];

        for (let key in response.data) {
          encuestasUpdated.push({
            ...response.data[key],
            id: key
          });
        }
        this.setState({ encuestas: encuestasUpdated });

        console.log(this.state.encuestas);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let encuestas = this.state.encuestas.map(encuesta => {
      return (
        <EncuestaList
          key={encuesta.Id}
          name={encuesta.Name}
          description={encuesta.Introduccion}
          inicialdate={encuesta.FechaInicio}
          enddate={encuesta.FechaFin}
          asignarPreguntas={() => this.encuestaSelectedHandler(encuesta.Id)}
        />
      );
    });

    return (
      <div>
        <div className="container">
          <div className="row mb-2">
            <div className="col align-self-start">
              <button
                type="button"
                className="btn btn-outline-info btn-sm"
                onClick={this.goBackHandler}
              >
                Volver
              </button>
            </div>

            <div className="col align-self-end text-right">
              <button
                type="button"
                className="btn btn-outline-info btn-sm "
                onClick={this.goCreateHandler}
              >
                Crear
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="p-2">Encuestas</h3>
            </div>
          </div>
        </div>

        <section>{encuestas}</section>
      </div>
    );
  }

  encuestaDeletedHandler = id => {
    console.log(id);

    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  encuestaSelectedHandler = id => {
    console.log(id);
    this.props.history.push("/encuesta/edit/" + id);
  };

  goCreateHandler = () => {
    this.props.history.push("/encuesta/new");
  };

  goBackHandler = () => {};
}

export default Encuesta;
