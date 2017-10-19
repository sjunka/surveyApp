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
            <form onSubmit={this.handleSubmit}>
                    
                <div className="field">
                    <label className="label">Nombre:</label>
                        <div className="control">
                            <input className="input"
                            value={this.state.nombre}
                            onChange={this.handleNombre}
                            type="text" 
                            placeholder="Nombre Cobertura"/>
                        </div>
                </div>

                
                <div className="field">
                    <label className="label">Tipo de cobertura:</label>
                    <div className="control">
                        <div className="select">
                        <select value={this.state.tipo} onChange={this.handleTipo}>
                            <option value="interna">Interna</option>
                            <option value="externa">Externa</option>
                        </select>
                        </div>
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


export default Cobertura;