//Importar componentes React
import React from 'react';

//Importar Axios
import axios from 'axios';


class ListarPreguntas extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            preguntas : [{}]
        }
    
        /*const url = 'http://190.85.67.146/TEST/MATERIALIDAD/api/';*/
    
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
    }


    
    render (){
        return(
            <div className="container">
            <h4 className="col-form-label">Listado de preguntas</h4>
            <ul className="list-group">
                {this.state.preguntas.map( (pregunta) => 
                    <li className="list-group-item" key={pregunta.Id}>{pregunta.Name}</li>
                )}
            </ul>
        </div>
        )
    }


}


export default ListarPreguntas;