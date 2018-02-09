import React, { Component } from "react";

//Importar componente toast
import { ToastContainer, toast } from "react-toastify";

class EncuestaControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idGrupoInteres: "",
      linkEncuesta: this.props.linkEncuesta
    };
  }

  copiarLinkEncuestaClipboard = () => {
    var copyText = document.getElementById("linkEncuesta");
    copyText.select();
    document.execCommand("Copy");
    this.mensajePantalla();
  };

  mensajePantalla = () => {
    let text = "Encuesta copiada ";
    let autoclose = 3000;
    toast.info(text, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: autoclose
    });
  };

  handleChange = event => {
    this.setState({ idGrupoInteres: event.target.value }, () => {
      console.log("salio de handle", this.state.idGrupoInteres);
    });
  };

  handleLinkEncuestaChange = e => {
    this.setState({ linkEncuesta: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="card border-info mb-3">
          <div className="card-body text-info">
            <h5 className="card-title">
              Selecciona el grupo de interes a compartir:
            </h5>

            <div className="row col-sm-12">
              {this.props.gruposInteres.length > 0 && (
                <div className="input-group ">
                  <select
                    onChange={e => this.handleChange(e)}
                    value={this.state.idGrupoInteres}
                    className="custom-select mr-2"
                  >
                    <option defaultValue>Escoge grupo de interes</option>

                    {this.props.gruposInteres.map(grupoInteres => {
                      return (
                        <option key={grupoInteres.id} value={grupoInteres.Id}>
                          {grupoInteres.Name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              )}

              <div className="row mt-2">
                <div className="col-sm-12">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={e =>
                      this.props.grupoInteresSingular(this.state.idGrupoInteres)
                    }
                  >
                    Generar
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-12 mt-2">
                {this.props.linkEncuesta ? (
                  <div>
                    <h6>Link para compartir es: </h6>
                    <input
                      id={"linkEncuesta"}
                      className="form-control mb-2"
                      type="text"
                      value={this.props.linkEncuesta}
                      onChange={this.handleLinkEncuestaChange}
                    />
                  </div>
                ) : null}
              </div>

              <div className="col-sm-12 col-md-12 mt-2">
                <button
                  onClick={this.copiarLinkEncuestaClipboard}
                  className={"btn btn-info btn-sm"}
                >
                  <i className="fa fa-share" />
                  <span className="pl-1">Copiar link</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4 p-2">
              <button
                type="submit"
                className="btn btn-success btn-sm"
                onClick={this.props.asignarPreguntas}
              >
                Asignar Preguntas
              </button>
            </div>
            <div className="col-sm-4 col-md-4 p-2">
              <button
                type="submit"
                className="btn btn-warning btn-sm"
                //onClick={this.props.asignarPreguntas}
              >
                Editar Preguntas
              </button>
            </div>
            <div className="col-sm-4 col-md-4 p-2">
              <button
                type="submit"
                className="btn btn-danger btn-sm"
                onClick={this.props.eliminarEncuesta}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row" />

          <div className="row mt-2" />
        </div>
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default EncuestaControls;
