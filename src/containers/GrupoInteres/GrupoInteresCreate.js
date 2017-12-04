//Importar componentes React
import React from 'react';

//Importar componente Axios
import axios from '../../axios-orders';



class GrupoInteres extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nombre : '',
            descripcion : ''
        }
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    
    
    
    render (){
        return(
        <div className="container">
            <div className="col-sm12">
            <h4 className="col-form-label">Grupo de Interés</h4>
            <form >
                    
                <div className="form-group">
                    <label className="col-form-label" htmlFor="nombre">Nombre:</label>
                            <input 
                            type="text" 
                            className="form-control"
                            placeholder="Grupo de Interés"
                            name="nombre"
                            value={this.state.nombre}
                            onChange={this.handleInputChange}
                            />
                            <small  className="form-text text-muted">Nombre del grupo de Interés</small>
                </div>

                <div className="form-group">
                    <label  className="col-form-label" htmlFor="Descripcion">Descripción:</label>
                    <div>
                        <textarea 
                        className="form-control"
                        name="descripcion"
                        value = {this.state.descripcion}
                        onChange = {this.handleInputChange}
                        placeholder="Descripción grupo de Interés">
                        </textarea>
                        <small  className="form-text text-muted">Descripción del grupo de Interés</small>
                    </div>
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
        )
    }

    handleSubmit = (e) => {
        console.log(this.state);
        const GrupoInteres = {
            Name : this.state.nombre,
            descripcion   : this.state.descripcion

        }
               
        axios.post('/GrupoInteres', GrupoInteres)
        .then(response => 
            this.setState({
                nombre : '',
                descripcion : ''
            })    
        )
        .catch(error => console.log(error));
        e.preventDefault();
        console.log(GrupoInteres);
        
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


export default GrupoInteres;