import React from "react";

const pstyle = {
  marginBottom: 0
};

const preguntaEncuesta = props => {
  return (
    <div className="mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.preguntaName}</h5>
          <p style={pstyle}>
            <strong>Tema Relevante:</strong> {props.temaReveName}
          </p>
          <p style={pstyle}>
            <strong>Dimensión:</strong> {props.temaReleveCategory}
          </p>
          <p style={pstyle}>
            <strong>Tipo:</strong> {props.preguntaType}
          </p>
          <p style={pstyle}>
            <strong>Grupo Interes:</strong> {props.grupoInteres}
          </p>
        </div>

        <div className="card-footer">
          <div className="d-flex justify-content-center">
            <div className="col-sm-4 text-right">
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={props.agregarPregunta}
              >
                Agregar
              </button>
            </div>
            <div className="col-sm-4 text-left mb-2">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={props.removerPregunta}
              >
                Remover
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default preguntaEncuesta;
