//Importar componentes React
import React from 'react';
//Importar componente Axios
import axios from '../../axios-orders';


class Dimension extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dimension: {
                nombre : null,
                descripcion : null
            }
        }
    
    }
    
    
    render (){
        return(
        <div className="container">
            
            <h4 className="col-form-label">Dimension</h4>
            <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <label className="col-form-label">Nombre:</label>
                        <div className="">
                            <input className="form-control"
                            value={this.state.nombre}
                            onChange={this.handleNombre}
                            type="text"/>
                            <small id="namehelp" className="form-text text-muted">Nombre de  la dimensión</small>
                        </div>
                </div>

                <div className="form-group">
                        <label className="col-form-label">Descripcion:</label>
                        <div className="">
                            <textarea 
                            className="form-control" 
                            value = {this.state.descripcion}
                            onChange = {this.handleDescripcion}>
                            </textarea>
                           <small id="namehelp" className="form-text text-muted">Describle la dimensión</small>
                        </div>
                    </div>

                <div className="d-flex justify-content-center">
                    <div className="col-sm-6 text-right">
                        <button type="submit" className="btn btn-success">Guardar</button>

                    </div>
                    <div className="col-sm-6 text-left mb-2">
                        <button type="button" className="btn btn-danger">Cancelar</button>

                    </div>
                </div>

            </form>

         </div>
        )
    }

    handleSubmit = (e) => {
        console.log(this.state);
        const dimension = {
            nombre : this.state.nombre,
            descripcion : this.state.descripcion
        }
        axios.post('/dimension.json',dimension)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        e.preventDefault();
    }

    handleNombre = (e) => {
        this.setState ({
            nombre: e.target.value
        })
    }

    handleDescripcion = (e) => {
        this.setState ({
            descripcion: e.target.value 
        })
    }

    componentDidMount () {
        axios.get( 'https://sigmamaterialidad.firebaseio.com/dimension.json' )
            .then( response => {
                console.log("la respuesta del server es:", response);
                this.setState({
                    dimension: response.data 
                });
            })
            .catch( error => {
                console.log(error);
            } );
    }

}


export default Dimension;