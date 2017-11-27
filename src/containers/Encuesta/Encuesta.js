//Importar componentes React
import React from 'react';

//Importar componentes AsignarPregunta
import EncuestaPreguntas from './EncuestaPreguntas.js';

class Encuesta extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nombre : '',
            descripcion : '',
            periodoinicio: '',
            periodofin: ''
        }
    
    }
    
    
    render (){
        return(
        <div className="container">
            
            <h4 className="col-form-label">Encuesta</h4>
            <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <label className="col-form-label">Nombre:</label>
                        <div className="">
                            <input className="form-control"
                            value={this.state.nombre}
                            onChange={this.handleNombre}
                            type="text"/>
                            <small id="namehelp" className="form-text text-muted">Nombre de  la encuesta</small>
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
                           <small id="namehelp" className="form-text text-muted">Describle la encuesta</small>
                        </div>
                </div>

                <div className="form-group">
                        <label className="col-form-label">Fecha Inicio:</label>
                        <input type="date" name="periodoinicio"
                            className="form-control" 
                            value = {this.state.periodoinicio}
                            onChange = {this.handlePeriodoInicio}/>
                </div>

                <div className="form-group">
                        <label className="col-form-label">Fecha Final:</label>
                        <input type="date" name="periodofin"
                            className="form-control" 
                            value = {this.state.periodofin}
                            onChange = {this.handlePeriodoFin}/>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="col-sm-6 text-center">
                        <button type="submit" className="btn btn-success">Crear Encuesta</button>
                    </div>

                </div>

            </form>
            <EncuestaPreguntas/>
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

    handlePeriodoInicio = (e) =>{
        this.setState({
            periodoinicio: e.target.value 
        })
    }

    handlePeriodoFin = (e) => {
        this.setState({
            periodofin: e.target.value
        })
    }

}


export default Encuesta;