//Importar componentes React
import React from 'react';

//Importar componente Axios
import axios from '../../axios-orders';

const pstyle = {
    marginBottom: 0
}

class EncuestaPreguntas extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            preguntas : [],
        }
    
    }


    componentDidMount () {
        
        axios.get( '/Pregunta' )
            .then( response => {
                console.log("la respuesta del server es:", response);

                const preguntasUpdated = [];
                
                for (let key in response.data){
                    preguntasUpdated.push({
                        ...response.data[key],
                        id: key
                    });

                }

                console.log(preguntasUpdated);
                
               this.setState( {
                    preguntas: preguntasUpdated
                 } );

                console.log(this.state.preguntas);
            })
            .catch( error => {
                console.log(error);
            });

            
    }  
    
    
    render (){
        return(
        <div className="container">
            
            <h4 className="col-form-label">Asignar Preguntas</h4>
            <form onSubmit={this.handleSubmit}>

            <div className="form-group">
                <label className="col-form-label">Dimensión:</label>
                <select className="form-control custom-select" value={this.state.dimension} onChange={this.handleDimension}>
                    
                    <option value="ambiental">Ambiental</option>
                    <option value="social">Social</option>
                    <option value="economica">Economica</option>
                </select>
                <small id="namehelp" className="form-text text-muted">Dimensión</small>
            </div>

            </form>

            {this.state.preguntas.map(pregunta =>{
                return (
                        <div key="pregunta.Id" className="mb-4">
                            <div className="card">
                                <div className="card-header">

                                <div className="text-center">
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" defaultChecked />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description">Activo</span>
                                </label>

                                </div>
                                    
                                </div>
                                <div className="card-body">
                                <h5 className="card-title">{pregunta.Name}</h5>
                                <p style={pstyle}><strong>Tema Relevante:</strong> {pregunta.TemaRelevante.Name}</p>
                                <p style={pstyle}><strong>Dimensión:</strong> {pregunta.TemaRelevante.Categoria.Name}</p>
                                <p style={pstyle}><strong>Tipo:</strong> {pregunta.TipoPreguntaDesc}</p>
                                <p style={pstyle}><strong>Grupo Interes:</strong> {pregunta.GruposIntereres}</p>
                                
                            </div>
                            </div>
                        </div>
                    
            )})}

            <div className="d-flex justify-content-center mt-3">
                    <div className="col-sm-6 text-center mb-2">
                        <button type="submit" className="btn btn-success">Publicar preguntas</button>
                    </div>

            </div>

        </div>
        )
    }

    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
    }

    handleDimension = (e) =>{
        this.setState({
            dimension: e.target.value
        })
    }
}


export default EncuestaPreguntas;