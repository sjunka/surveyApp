//Importar componentes React
import React from "react";

//Importar componente Axios
import axios from "../../axios-orders";

class Encuesta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduccion: "",
      nombre: "",
      fechaFin: "",
      fechaInicio: ""
    };
  }

  render() {
    return (
      <div className="container">
        <h4 className="col-form-label">Encuesta</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-form-label">Nombre:</label>
            <div className="">
              <input
                className="form-control"
                value={this.state.nombre}
                onChange={this.handleNombre}
                type="text"
              />
              <small id="namehelp" className="form-text text-muted">
                Nombre de la encuesta
              </small>
            </div>
          </div>

          <div className="form-group">
            <label className="col-form-label">Descripción:</label>
            <div className="">
              <textarea
                className="form-control"
                value={this.state.introduccion}
                onChange={this.handleDescripcion}
              />
              <small id="namehelp" className="form-text text-muted">
                Describe la encuesta
              </small>
            </div>
          </div>

          <div className="form-group">
            <label className="col-form-label">Fecha Inicio:</label>
            <input
              type="date"
              name="fechaInicio"
              className="form-control"
              value={this.state.fechaInicio}
              onChange={this.handlePeriodoInicio}
            />
          </div>

          <div className="form-group">
            <label className="col-form-label">Fecha Final:</label>
            <input
              type="date"
              name="fechaFin"
              className="form-control"
              value={this.state.fechaFin}
              onChange={this.handlePeriodoFin}
            />
          </div>

          <div className="d-flex justify-content-center">
            <div className="col-sm-6 text-center mb-3">
              <button type="submit" className="btn btn-success">
                Crear Encuesta
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit = e => {
    const encuesta = {
      Introduccion: this.state.introduccion,
      FechaInicio: this.state.fechaInicio,
      FechaFin: this.state.fechaFin,
      FechaInicioReporte: this.state.fechaInicio,
      FechaFinReporte: this.state.fechaFin,
      RutaImagen: " ",
      Name: this.state.nombre
    };

    console.log(encuesta);

    axios
      .post("/Encuesta", encuesta)
      .then(response =>
        this.setState({
          name: "",
          introduccion: ""
        })
      )
      .catch(error => console.log(error));
    e.preventDefault();
  };

  handleNombre = e => {
    this.setState({
      nombre: e.target.value
    });
  };

  handleDescripcion = e => {
    this.setState({
      introduccion: e.target.value
    });
  };

  handlePeriodoInicio = e => {
    this.setState({
      fechaInicio: e.target.value
    });
  };

  handlePeriodoFin = e => {
    this.setState({
      fechaFin: e.target.value
    });
  };
}

export default Encuesta;
