//Importar componentes React
import React from 'react';

//Importar Axios
import axios from 'axios';


class ListarTemasRelevantes extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            temasrelevantes: [{}]
        }
    
        
    
        //traer temas relevantes
        axios.get('http://190.85.67.146/TEST/MATERIALIDAD/api/TemaRelevante')
        .then( (response) => {
            this.setState({
                temasrelevantes : response.data
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
                <h4 className="col-form-label">Listado de Temas Relevantes</h4>

                <div className="card mb-3" >
                    <div className="card-body">
                        <h5 className="card-title">Transparencia y lucha contra corrupción</h5>
                        <h6 className="card-subtitle mb-2 ">Ambiental</h6>
                        <p className="card-text mb-0">Externa - Contratista</p>
                        <p className="card-text mb-0">Externa - Comunidades</p>
                        <small className="text-muted"><a href="#">Editar</a></small>
                    </div>
                </div>

                <div className="card mb-3" >
                    <div className="card-body">
                        <h5 className="card-title">Comunicación y atención</h5>
                        <h6 className="card-subtitle mb-2">Social</h6>
                        <p className="card-text mb-0">Interna - Socios</p>
                        <small className="text-muted"><a href="#">Editar</a></small>
                    </div>
                </div>
                        
                <div className="card mb-3" >
                    <div className="card-body">
                        <h5 className="card-title">Responsabilidad con la comunidad</h5>
                        <h6 className="card-subtitle mb-2 ">Ambiental</h6>
                        <p className="card-text mb-0">Interna - Comunidades</p>
                        <small className="text-muted"><a href="#">Editar</a></small>
                    </div>
                </div>

                {this.state.temasrelevantes.map( (temarelevante) => 
                        <div className="card mb-3" >
                        <div className="card-body">
                            <h5 className="card-title">{temarelevante.Name}</h5>
                            <h6 className="card-subtitle mb-2 ">{temarelevante.Active}</h6>
                            <p className="card-text mb-0">{temarelevante.Number}</p>
                            <small className="text-muted"><a href="#">Editar</a></small>
                        </div>
                    </div>    
                        
                    )}
                

            </div>
        )
    }


}


export default ListarTemasRelevantes;