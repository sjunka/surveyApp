//Importar componentes React
import React, { Component } from 'react';

//Importar componente Axios
import axios from '../../axios-orders';



class CoberturaCreate extends Component {
    constructor(props){
        super(props)
        this.state = {
            nombre : '',
            tipo : '1', 
        }
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    render (){
        return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                         <h4>Cobertura</h4>
                        <form>

                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nombre cobertura"
                                name="nombre"
                                onChange={this.handleInputChange}
                                value={this.state.nombre}
                                />
                                <small className="form-text text-muted">Ej: Vicepresidencia de mercadeo</small>
                            </div>


                            <div className="form-group">
                                <label className="col-form-label">Tipo de cobertura:</label>
                                <select  
                                className="form-control custom-select" 
                                value={this.state.tipo}
                                name="tipo" 
                                onChange={this.handleInputChange}>
                                    <option value="1">Interna</option>
                                    <option value="2">Externa</option>
                                </select>
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
        const cobertura = {
            Active:true,
            Id:9,
            Name:this.state.nombre,
            Number:null,
            TipoCobertura: this.state.tipo.toString(),
            TipoCoberturaDesc: "Interna",
            id:"0"
        }
        
        axios.post('http://192.168.2.107/TEST/MATERIALIDAD/API/Cobertura', cobertura)
        .then(response => 
            this.setState({
                nombre : '',
                tipo : '1'
            })    
        )
        .catch(error => console.log(error));
        e.preventDefault();
        console.log(cobertura);
        
    }

    goBackHandler = () => {
        this.props.history.goBack();
    }

    handleInputChange(event) {
        const target = event.target;
        
        const value = target.type === 'select' ? target.checked : target.value;
        
        const name = target.name;
    
        this.setState({
          [name]: value
        });

    
      }
   
}



export default CoberturaCreate;