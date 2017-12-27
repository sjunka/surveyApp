import React from 'react';

const pstyle = {
    marginBottom: 0
}
const PreguntaList = (props) => (
    <div>
         <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12">

                    <div className="card mb-2">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                             <p style={pstyle}><strong>Tema Relevante:</strong> {props.temarelevante_name}</p>
                             <p style={pstyle}><strong>Dimensión:</strong> {props.categoria}</p>
                             <p style={pstyle}><strong>Tipo:</strong> {props.tipoPregunta}</p>
                             
                        </div>

                        <div className="card-footer">
                            
                            <div className="d-flex justify-content-center">
                                <div className="col-sm-4 text-right">
                                    <button 
                                    type="submit" 
                                    className="btn btn-success btn-sm"
                                    onClick={props.edit}>Editar</button>

                                </div>
                                <div className="col-sm-4 text-left mb-2">
                                    <button 
                                    type="button" 
                                    className="btn btn-danger btn-sm"
                                    onClick={props.delete}
                                    >Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
);

export default PreguntaList;