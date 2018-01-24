import React from "react";

const pstyle = {
  marginBottom: 0
};

const EncuestaList = props => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p style={pstyle}>
                <strong>Descripcion:</strong> {props.description}
              </p>
              <p style={pstyle}>
                <strong>Fecha Inicio:</strong> {props.inicialdate}
              </p>
              <p style={pstyle}>
                <strong>Fecha Final:</strong> {props.enddate}
              </p>
            </div>

            <div className="card-footer">
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-info btn-sm"
                  onClick={props.asignarPreguntas}
                >
                  Editar Encuesta
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EncuestaList;
