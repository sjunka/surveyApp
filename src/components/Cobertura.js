//Importar componentes React
import React from 'react';

class Cobertura extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nombre : '',
            tipo : 'interna',
        }
    
    }
    
    
    render (){
        return(
        <div className="container">
            <h4 className="col-form-label">Cobertura</h4>
            <form onSubmit={this.handleSubmit}>

            <div className="form-group">
                <label className="col-form-label">Nombre:</label>
                    <div className="">
                        <input className="form-control"
                        value={this.state.nombre}
                        onChange={this.handleNombre}
                        type="text"/>
                        <small id="namehelp" className="form-text text-muted">Nombre de cobertura</small>
                    </div>
            </div>    

               
            <div className="form-group">
                <label className="col-form-label">Tipo de cobertura:</label>
                <select  className="form-control custom-select" value={this.state.tipo} onChange={this.handleTipo}>
                    <option value="interna">Interna</option>
                    <option value="externa">Externa</option>
                </select>
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

    handleTipo = (e) => {
        this.setState ({
            tipo: e.target.value
        })
    }

}


export default Cobertura;