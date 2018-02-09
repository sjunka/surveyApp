//Importar componentes React
import React, { Component } from "react";

//Importar React Router
import { Route, Redirect } from "react-router";

//Importar componente Axios
import axios from "../../axios-orders";

//Importar componente toast
import { ToastContainer, toast } from "react-toastify";

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

  componentDidUpdate() {}

  updatePreguntaColeccion = agregarPreguntanueva => {
    //Revisa el id de la pregunta para agregar a la coleccion

    let encuestaColeccionActualizada = [...this.state.encuestaColeccion];

    const preguntaIndex = encuestaColeccionActualizada.findIndex(
      encuestaPregunta =>
        encuestaPregunta.Pregunta.Id === agregarPreguntanueva.Pregunta.Id
    );

    if (preguntaIndex === -1) {
      // Indica que la pregunta no esta en el arreglo
      encuestaColeccionActualizada.push(agregarPreguntanueva);
      this.setState({ encuestaColeccion: encuestaColeccionActualizada }, () => {
        let contador;
        contador = this.enumerarPreguntasColeccion();
        this.notifySucces(contador);
      });

      //Mensaje alerta en pantalla
    } else {
      //Mensaje alerta en pantalla
      let text = "Esta pregunta ya se encuentra la lista";
      let autoclose = 5000;
      this.notifyDuplicate(text, autoclose);
    }
  };

  agregarPreguntaEncuesta = (idPregunta, idEncuesta) => {
    let agregarPreguntanueva = {
      Pregunta: {
        Id: idPregunta
      },
      Encuesta: {
        Id: idEncuesta
      }
    };

    this.updatePreguntaColeccion(agregarPreguntanueva);
  };

  removerPreguntaEncuesta = (idPregunta, idEncuesta, index) => {
    //Elimina una pregunta segun su Id dentro de la encuestaColeccion

    let preguntaParaEliminarId = [...this.state.encuestaColeccion];

    //Validar pregunta.id si exista para el proceso de elimnar
    const arregloValidar = preguntaParaEliminarId.findIndex(
      encuestaPregunta => encuestaPregunta.Pregunta.Id === idPregunta
    );

    if (arregloValidar === -1) {
      let text = "Debes agregar la pregunta primero";
      let autoclose = 5000;
      this.notifyDuplicate(text, autoclose);
      console.log("la pregunta no esta en el arreglo");
    } else {
      //Devuelve arreglo filtrado (remueve la pregunta de la coleccion)
      let nuevaEncuestaColeccion = preguntaParaEliminarId.filter(
        encuestaPregunta => encuestaPregunta.Pregunta.Id !== idPregunta
      );
      this.setState({ encuestaColeccion: nuevaEncuestaColeccion }, () => {
        let contador;
        contador = this.enumerarPreguntasColeccion();
        this.notifyEliminar(contador);
      });
    }
  };

  notifySucces = contador => {
    toast.success(
      `Pregunta agregada  ${contador.preguntasEnColeccion} : ${
        contador.preguntasEnBasedatos
      }`,
      {
        position: toast.POSITION.BOTTOM_CENTER
      }
    );
  };

  notifyEliminar = contador => {
    toast.error(
      `Pregunta eliminada. ${contador.preguntasEnColeccion} : ${
        contador.preguntasEnBasedatos
      }`,
      {
        position: toast.POSITION.BOTTOM_CENTER
      }
    );
  };

  notifyRedirect = () => {
    let text = "Guardando, por favor espera";
    let autoclose = 5000;
    toast.info(text, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: autoclose
    });
  };

  notifyDuplicate = (text, autoclose) => {
    toast.info(text, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: autoclose
    });
  };

  enumerarPreguntasColeccion = () => {
    //Metodo para determinar el length de las coleccion de preguntas y del total de preguntas

    let counter = {};
    let preguntasEnColeccion = [...this.state.encuestaColeccion].length;
    let preguntasEnBasedatos = [...this.state.preguntas].length;

    counter.preguntasEnColeccion = preguntasEnColeccion;
    counter.preguntasEnBasedatos = preguntasEnBasedatos;

    return counter;
  };

  redirect = () => {
    //Metodo para redirigir al usuario al guardar preguntas
    setTimeout(() => {
      this.props.history.push("/encuesta");
    }, 5000);
  };

  render() {
    return (
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
        </div>
        <ToastContainer autoClose={3000} />
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
          .map((pregunta, index) => {
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
                  this.removerPreguntaEncuesta(
                    pregunta.Id,
                    this.state.idEncuesta,
                    index
                  );
                }}
              />
            );
          })}
        <div className="d-flex justify-content-center mt-3">
          <div className="col-sm-6 text-center mb-2">
            <button
              type="submit"
              onClick={() =>
                this.guardarColeccionEncuesta(this.state.encuestaColeccion)
              }
              className="btn btn-success"
            >
              Publicar preguntas
            </button>
          </div>
        </div>
      </div>
    );
  }

  guardarColeccionEncuesta = coleccionEncuesta => {
    console.log(coleccionEncuesta);
    axios
      .post("/PreguntaEncuesta/CreateCollection", coleccionEncuesta)
      .then(response => {
        this.notifyRedirect();
        // this.redirect();
      })
      .catch(error => console.log(error));
  };

  goBackHandler = () => {
    this.props.history.goBack();
  };
}

export default EncuestaPreguntas;
