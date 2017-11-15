//Importar componentes React
import React from 'react';

//Importar Axios
import axios from 'axios';


class ListarTemasRelevantes extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            temasrelevantes: [{
                Id: '',
                Name: '',
                Active:'',
                Number:''
            }]
        }
    
        
    
        //traer temas relevantes
        axios.get('http://190.85.67.146/TEST/MATERIALIDAD/api/TemaRelevante')
        .then( (response) => {
            this.setState({
                temasrelevantes : response.data
            })
            console.log(this.state.temasrelevantes);  
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    
    
    render (){
        
        return(
            
            <div className="container">
                <h4 className="col-form-label">Listado de Temas Relevantes</h4>

                {this.state.temasrelevantes.map( (temarelevante) => 

                <div className="card mb-3" key={temarelevante.Id}>
                    <div className="card-body">
                        <h6 className="card-title">{temarelevante.Name}</h6>
                        <h6 className="card-subtitle mb-2 ">{temarelevante.Dimension}</h6>
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


export default ListarTemasRelevantes;