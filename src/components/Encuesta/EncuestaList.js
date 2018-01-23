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
              <button
                className="btn btn-primary "
                type="button"
                onClick={props.showControls}
              >
                Abrir herramientas
              </button>
              {props.show ? (
                <ul className="list-group mt-2">
                  <li className="list-group-item">
                    <button
                      type="submit"
                      className="btn btn-success btn-sm"
                      onClick={props.asignarPreguntas}
                    >
                      Asignar Preguntas
                    </button>
                  </li>
                  <li className="list-group-item">
                    <button
                      type="button"
                      className="btn btn-warning btn-sm"
                      onClick={props.delete}
                    >
                      Editar Preguntas
                    </button>
                  </li>
                  <li className="list-group-item">
                    <button
                      type="submit"
                      className="btn btn-info btn-sm"
                      onClick={props.show}
                    >
                      Compartir Link
                    </button>
                  </li>
                  <li className="list-group-item">
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={props.delete}
                    >
                      Eliminar Encuesta
                    </button>
                  </li>
                </ul>
              ) : null}
              <div className="d-flex justify-content-center">
                <div className="col-sm-4 text-left" />
                <div className="col-sm-4 text-right mb-2" />
              </div>

              <div className="d-flex justify-content-center">
                <div className="col-sm-4 text-left mb-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EncuestaList;
