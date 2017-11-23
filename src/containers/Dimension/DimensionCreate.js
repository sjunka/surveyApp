//Importar componentes React
import React, { Component } from 'react';

//Importar componente Axios
import axios from '../../axios-orders';



class DimensionCreate extends Component {
    constructor(props){
        super(props)
        this.state = {
            nombre : '',
            descripcion : '', 
        }
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    render (){
        return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                         <h4>Dimensión</h4>
                        <form>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Nombre</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Nombre dimensión"
                                name="nombre"
                                onChange={this.handleInputChange}
                                value={this.state.nombre}
                                />
                                <small className="form-text text-muted">Ej: Ambiental</small>
                            </div>


                            <div className="form-group">
                                <label htmlFor="descripcion">Descripcion</label>
                                <textarea 
                                className="form-control" 
                                rows="3"
                                name="descripcion"
                                onChange={this.handleInputChange}
                                value={this.state.descripcion}
                                />
                            </div>

                        
                            <div className="d-flex justify-content-center">
                                <div className="col-sm-6 text-right">
                                    
                                    <button 
                                        type="button" 
                                        className="btn btn-success btn-sm"
                                        onClick = {this.handleSubmit}
                                        >Guardar</button>
                                </div>
                                <div className="col-sm-6 text-left">

                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                        onClick={this.goBackHandler} 
                                        >Cancelar
                                    </button>        

                                </div>
                            </div>

                           

                            
                             
                            </form>




                        </div>
                    </div>
                </div>


        );
    }

    handleSubmit = (e) => {
        console.log(this.state);
        const dimension = {
            nombre : this.state.nombre,
            descripcion : this.state.descripcion
        }
        
        axios.post('https://sigmamaterialidad.firebaseio.com/dimension.json',dimension)
        .then(response => 
            this.setState({
                nombre : '',
                descripcion : ''
            })    
        )
        .catch(error => console.log(error));
        e.preventDefault();
        
    }

    goBackHandler = () => {
        this.props.history.goBack();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
   
}



export default DimensionCreate;