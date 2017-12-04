//Importar componentes React
import React from 'react';

class TemaRelevante extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nombre : '',
            dimension : [],
            cobertura: []
        }
    
    }
    
    
    render (){
        return(
        <div className="container">
            <h4 className="col-form-label">Tema Relevante</h4>
            <form onSubmit={this.handleSubmit}>
                
                
                <div className="form-group">
                    <label className="col-form-label">Nombre:</label>
                        <input className="form-control"
                        value={this.state.nombre}
                        onChange={this.handleNombre}
                        type="text"/>
                        <small id="namehelp" className="form-text text-muted">Nombre tema relevante</small>
                </div>    


                <div className="form-group">
                    <label className="col-form-label">Dimension:</label>
                    <select  className="form-control custom-select" value={this.state.dimension} onChange={this.handleDimension}>
                        <option value="null">Escoger dimension:</option>
                        <option value="ambiental">Ambiental</option>
                        <option value="social">Social</option>
                        <option value="economica">Economica</option>
                    </select>
                    <small id="namehelp" className="form-text text-muted">Dimensión</small>
                </div>
         

                <div className="custom-controls-stacked">
                <label className="col-form-label">Cobertura:</label>
                    <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input"/>
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">Externa - Contratista</span>
                    </label>

                    <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input"/>
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">Interna - Comunidad</span>
                    </label>

                    <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input"/>
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">Interna - Recurso humano</span>
                    </label>

                    <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input"/>
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">Externa - Comunidades</span>
                    </label>
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

    handleDimension = (e) => {
        this.setState ({
            dimension: e.target.value
        })
    }

}


export default TemaRelevante;