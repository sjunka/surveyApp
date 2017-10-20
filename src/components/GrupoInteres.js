//Importar componentes React
import React from 'react';

class GrupoInteres extends React.Component {
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
            <div className="col-sm12">

            <h4 className="col-form-label">Grupo de Interes</h4>

            <form onSubmit={this.handleSubmit}>
                    
                <div className="form-group">
                    <label className="col-form-label">Nombre:</label>
                            <input className="form-control"
                            value={this.state.nombre}
                            onChange={this.handleNombre}
                            type="text" 
                            />
                            <small id="namehelp" className="form-text text-muted">Nombre del grupo de interes</small>
                </div>

                <div className="form-group">
                    <label>Descripcion:</label>
                    <br/>
                    <div className="">
                        <textarea 
                        className="form-control"
                        rows = "6"
                        cols = "34" 
                        value = {this.state.descripcion}
                        onChange = {this.handleDescripcion}
                        placeholder="">
                        </textarea>
                        <small id="namehelp" className="form-text text-muted">Descripción del grupo de interes</small>
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


export default GrupoInteres;