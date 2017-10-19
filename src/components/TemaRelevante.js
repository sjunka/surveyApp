//Importar componentes React
import React from 'react';

class TemaRelevante extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nombre : '',
            dimension : 'ambiental',
            cobertura: ''
        }
    
    }
    
    
    render (){
        return(
        <div className="container">
            <form onSubmit={this.handleSubmit}>
                    
                <div className="field">
                    <label className="label">Nombre:</label>
                        <div className="control">
                            <input className="input"
                            value={this.state.nombre}
                            onChange={this.handleNombre}
                            type="text" 
                            placeholder="Nombre TemaRelevante"/>
                        </div>
                </div>

                <div className="field">
                    <label className="label">Dimension:</label>
                    <div className="control">
                        <div className="select">
                        <select value={this.state.dimension} onChange={this.handleDimension}>
                            <option value="ambiental">Ambiental</option>
                            <option value="social">Social</option>
                            <option value="economica">Economica</option>
                        </select>
                        </div>
                    </div>
                </div>

                
                <div className="field">
                    <label className="label">Cobertura:</label>
                    <div className="control">
                        <label className="checkbox">
                        <input type="checkbox"/>
                        Externa - Contratista 
                        </label>
                        <br/>
                        <label className="checkbox">
                        <input type="checkbox"/>
                        Interna - Comunidad 
                        </label>
                        <br/>
                        <label className="checkbox">
                        <input type="checkbox"/>
                        Interna - Recurso humano
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

    handleDimension = (e) => {
        this.setState ({
            dimension: e.target.value
        })
    }

}


export default TemaRelevante;