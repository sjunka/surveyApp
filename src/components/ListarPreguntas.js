//Importar componentes React
import React from 'react';

//Importar Axios
import axios from 'axios';


class ListarPreguntas extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            preguntas : [{}],
            temarelevante: [{}]
        }
    
        
    
        //traer preguntas
        axios.get('http://190.85.67.146/TEST/MATERIALIDAD/api/Pregunta')
        .then( (response) => {
            this.setState({
                preguntas : response.data
            })
            console.log(this.state.preguntas);  
        })
        .catch(function (error) {
          console.log(error);
        });

        //traer temas relevantes
        axios.get('http://190.85.67.146/TEST/MATERIALIDAD/api/TemaRelevante')
        .then( (response) => {
            this.setState({
                temarelevante : response.data
            })
            console.log(this.state.temarelevante);  
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    
    
    render (){
        
        return(
            
            <div className="container">
                <h4 className="col-form-label">Listado de preguntas</h4>

                        
                    {this.state.preguntas.map( (pregunta) => 
                            
                        <div className="card-body pb-0" key={pregunta.Id} >
                            <div className="list-group">
                                <div className="list-group-item list-group-item-action flex-column align-items-start">
                                    <p className="mb-1" >{pregunta.Name}</p>
                                    <small className="text-muted"><a href="#">Editar</a></small>
                                </div>
                            </div>
                        </div>
                    )}
                

            </div>
        )
    }


}


export default ListarPreguntas;