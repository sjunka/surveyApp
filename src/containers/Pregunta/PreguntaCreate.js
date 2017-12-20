//Importar componentes React
import React from 'react';

//Importar Axios
import axios from 'axios';


class Pregunta extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            descripcion : '',
            dimension:'',
            temarelevante: '',
            tipo : 'Abierta',
            grupointeres:''
        }
    
       



    }

    
    
    
    render (){
        return(
        <div className="container">
            <h4 className="col-form-label">Pregunta</h4>
            <form onSubmit={this.handleSubmit}>


            <div className="form-group">
                <label>Descripcion:</label>
                <div className="">
                    <textarea 
                    className="form-control"
                    value = {this.state.descripcion}
                    onChange = {this.handleDescripcion}
                    placeholder="">
                    </textarea>
                    <small id="namehelp" className="form-text text-muted">Descripción de pregunta</small>
                </div>
            </div>
                    
            <div className="form-group">
                <label className="col-form-label">Dimension:</label>
                <select className="form-control custom-select" value={this.state.dimension} onChange={this.handleDimension}>
                    <option value="null">Escoger dimension:</option>
                    <option value="ambiental">Ambiental</option>
                    <option value="social">Social</option>
                    <option value="economica">Economica</option>
                </select>
                <small id="namehelp" className="form-text text-muted">Dimensión</small>
            </div>

            <div className="form-group">
                <label className="col-form-label">Tema Relevante::</label>
                <select className="form-control custom-select" value={this.state.temarelevante} onChange={this.handleTemaRelevante}>
                    <option value="null">Escoger Tema Relevante</option>
                    <option value="Derechos Humanos">Derechos Humanos</option>
                    <option value="Productos limpios">Productos limpios </option>
                    <option value="Biodiversidad">Biodiversidad</option>
                    <option value="Innovación y tecnología">Innovación y tecnología</option>
                </select>
                <small id="namehelp" className="form-text text-muted">Tema Relevante</small>
            </div>
            


            <div className="form-group">
                <label className="col-form-label">Tipo Pregunta:</label>
                <select  className="form-control custom-select" value={this.state.tipo} onChange={this.handleTipo}>
                    <option value="abierta">Abierta</option>
                    <option value="cerrada">Cerrada</option>
                </select>
                <small id="namehelp" className="form-text text-muted">Tipo</small>
            </div>

            <div className="custom-controls-stacked">
                <label className="col-form-label">Grupo de Interes:</label>

                    <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" defaultChecked/>
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">Todos los grupos de interes</span>
                    </label>

                    <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input"/>
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">Accionista e inversionitas</span>
                    </label>

                    <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input"/>
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">Clientes</span>
                    </label>

                    <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input"/>
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">Contratatistas y sus empleados</span>
                    </label>

                    <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input"/>
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">Socios</span>
                    </label>

                    <label className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input"/>
                        <span className="custom-control-indicator"></span>
                        <span className="custom-control-description">Sociedad y comunidad</span>
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
            let url = 'http://190.85.67.146/TEST/MATERIALIDAD/api/Pregunta';
         //traer preguntas
         axios.post(url, {
             Name: this.state.descripcion,
             TipoPregunta: this.state.tipo,
             TemaRelevante: {
                 Name: this.state.temarelevante,
                 Categoria:{
                     Name:this.state.dimension
                 }
             }
        })
        .then( (response) => {
            console.log(response);  
        })
        .catch(function (error) {
          console.log(error);
        });


        e.preventDefault();
    }

    handleDescripcion = (e) => {
        this.setState ({
            descripcion: e.target.value
        })
    }

    handleDimension = (e) =>{
        this.setState({
            dimension: e.target.value
        })
    }

    handleTemaRelevante = (e) =>{
        this.setState({
            temarelevante: e.target.value

        })
    }

    handleTipo = (e) => {
        this.setState ({
            tipo: e.target.value
        })
    }

}


export default Pregunta;