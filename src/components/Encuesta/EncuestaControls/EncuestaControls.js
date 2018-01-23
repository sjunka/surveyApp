import React, { Component } from "react";

class EncuestaControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idGrupoInteres: ""
    };
  }

  handleChange = event => {
    this.setState({ idGrupoInteres: event.target.value }, () => {
      console.log("salio de handle", this.state.idGrupoInteres);
    });
  };

  render() {
    return (
      <div>
        <div className="">
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
                        this.props.grupoInteresSingular(
                          this.state.idGrupoInteres
                        )
                      }
                    >
                      Compartir
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-sm-10 col-md-8">
                  {this.props.linkEncuesta ? (
                    <h6>{this.props.linkEncuesta}</h6>
                  ) : null}
                </div>
                <div className="col-sm-2 col-md-4 mb-2">
                  <button className={"btn btn-info btn-sm"}>
                    <i className="fa fa-share" aria-hidden="true" />
                    <span className="pl-1">Copiar link</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="col-sm-6 text-right">
            <button
              type="submit"
              className="btn btn-success btn-sm"
              onClick={this.props.asignarPreguntas}
            >
              Editar Preguntas
            </button>
          </div>
          <div className="col-sm-6 text-left">
            <button
              type="submit"
              className="btn btn-danger btn-sm"
              onClick={this.props.asignarPreguntas}
            >
              Eliminar
            </button>
          </div>
        </div>

        <div className="container">
          <div className="row" />

          <div className="row mt-2" />
        </div>
      </div>
    );
  }
}

export default EncuestaControls;
