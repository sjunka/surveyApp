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
            <form onSubmit={this.handleSubmit}>
                    
                <div className="field">
                    <label className="label">Nombre:</label>
                        <div className="control">
                            <input className="input"
                            value={this.state.nombre}
                            onChange={this.handleNombre}
                            type="text" 
                            placeholder="Nombre Dimension"/>
                        </div>
                </div>

                <div className="field">
                        <label className="label">Descripcion:</label>
                        <div className="control">
                            <textarea 
                            className="textarea" 
                            value = {this.state.descripcion}
                            onChange = {this.handleDescripcion}
                            placeholder="Describe la dimension"></textarea>
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

    handleDescripcion = (e) => {
        this.setState ({
            descripcion: e.target.value
        })
    }

}


export default Dimension;