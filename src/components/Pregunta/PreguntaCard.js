import React from "react";

const pstyle = {
  marginBottom: 0
};

const preguntaCard = props => {
  return (
    <div className="">
      <div className="card mb-2">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          {/* <p style={pstyle}>
            <strong>Tema Relevante:</strong> {props.temarelevante_name}
          </p>
          <p style={pstyle}>
            <strong>Dimensión:</strong> {props.categoria}
          </p>
          <p style={pstyle}>
            <strong>Tipo:</strong> {props.tipoPregunta}
          </p> */}
          <p style={pstyle}>
            <strong>Grupo Interes: </strong>
            {"Viceprecidencia"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default preguntaCard;
