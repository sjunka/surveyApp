//Importar componentes React
import React from 'react';

class Dimension extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nombre : '',
            descripcion : ''
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
                    <div className="col-sm-6 text-left">
                        <button type="button" className="btn btn-danger">Cancelar</button>

                    </div>
                </div>

            </form>
        </div>
        )
    }

    handleSubmit = (e) => {
        console.log(this.state);
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

}


export default Dimension;