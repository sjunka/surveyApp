//Importar componentes React
import React from 'react';

//Importar Axios
import axios from 'axios';


class ListarPreguntas extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            preguntas : [{
                Activo: '',
                Description: '',
                Id:'',
                Name:'',
                TemaRelevante:{
                    Active:'',
                    Id:'',
                    Name:'',
                    Number:''
                }
            }],
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

                    <div className="card mb-3" key={pregunta.Id}>
                        <div className="card-body">
                            <h6 className="card-title">{pregunta.Name}</h6>
                            <h6 className="card-subtitle mb-2 ">{pregunta.TemaRelevante.Name}</h6>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center">
                                <div className="col-sm-6 text-right">
                                <button type="button" className="btn btn-success btn-sm">Editar</button>
                                </div>
                            <div className="col-sm-6 text-left">
                                <button type="button" className="btn btn-danger btn-sm">Eliminar</button>
                            </div>
                    </div>
                        </div>
                    </div>    
                     
                    )}
                

            </div>
        )
    }


}


export default ListarPreguntas;