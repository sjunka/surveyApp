//Importar componentes React
import React from 'react';

class Pregunta extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dimension:'',
            temarelevante: '',
            tipo : '',
            descripcion : '',
            grupointeres:''
        }
    
    }
    
    
    render (){
        return(
        <div className="container">
            <form onSubmit={this.handleSubmit}>
                    
            <div className="field">
            <label className="label">Dimension:</label>
                <div className="control">
                    <div className="select">
                    <select value={this.state.tipo} onChange={this.handleTipo}>
                        <option value="ambiental">Ambiental</option>
                        <option value="social">Social</option>
                        <option value="economica">Economica</option>
                    </select>
                    </div>
                </div>
            </div>

            <div className="field">
            <label className="label">Tema Relevante:</label>
                <div className="control">
                    <div className="select">
                    <select value={this.state.tipo} onChange={this.handleTipo}>
                        <option value="tema1">Derechos Humanos</option>
                        <option value="tema2">Productos limpios </option>
                        <option value="tema3">Biodiversidad</option>
                        <option value="tema4">Innovación y tecnología</option>
                    </select>
                    </div>
                </div>
            </div>
                
            <div className="field">
            <label className="label">Tipo Pregunta:</label>
                <div className="control">
                    <div className="select">
                    <select value={this.state.tipo} onChange={this.handleTipo}>
                        <option value="abierta">Abierta</option>
                        <option value="cerrada">Cerrada</option>
                    </select>
                    </div>
                </div>
            </div>        

            <div className="field">
                <label className="label">Descripcion:</label>
                <div className="control">
                    <textarea 
                    className="textarea" 
                    value = {this.state.descripcion}
                    onChange = {this.handleDescripcion}
                    placeholder="Escribir pregunta"></textarea>
                </div>
            </div>
            
            <div className="field">
                <label className="label">Grupo de Interes:</label>
                <div className="control">
                    <label className="checkbox">
                    <input type="checkbox"/>
                    Accionista e inversionitas 
                    </label>

                    <br/>
                    <label className="checkbox">
                    <input type="checkbox"/>
                    Clientes
                    </label>

                    <br/>
                    <label className="checkbox">
                    <input type="checkbox"/>
                    Contratatistas y sus empleados
                    </label>
                    <br/>

                    <label className="checkbox">
                    <input type="checkbox"/>
                    Socios
                    </label>
                    
                    <br/>
                    <label className="checkbox">
                    <input type="checkbox"/>
                    Sociedad y comunidad
                    </label>
                    <br/>

                </div>
            </div>


                <input type="submit"
                    className="button is-link"
                    value="Guardar"/>

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


export default Pregunta;