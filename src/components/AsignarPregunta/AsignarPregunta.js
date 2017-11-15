//Importar componentes React
import React from 'react';


class AsignarPregunta extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dimension : 'ambiental',
        }
    
    }
    
    
    render (){
        return(
        <div className="container">
            
            <h4 className="col-form-label">Asignar Preguntas</h4>
            <form onSubmit={this.handleSubmit}>

            <div className="form-group">
                <label className="col-form-label">Dimension:</label>
                <select className="form-control custom-select" value={this.state.dimension} onChange={this.handleDimension}>
                    
                    <option value="ambiental">Ambiental</option>
                    <option value="social">Social</option>
                    <option value="economica">Economica</option>
                </select>
                <small id="namehelp" className="form-text text-muted">Dimensión</small>
            </div>

            </form>

            <div>
                <table className="table table-hover table-responsive-sm">
                <thead>
                    <tr>
                    <th scope="col">Tema relevante</th>
                    <th scope="col">Pregunta</th>
                    <th scope="col">Grupo interes</th>
                    <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Transparencia y lucha contra corrupción</td>
                        <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor odio sodales tortor congue, ac rhoncus turpis blandit. Quisque a tellus id lorem posuere condimentum. Nunc non ligula est. Donec ultricies felis ut ligula luctus, nec feugiat ante mattis. Aenean urna augue, viverra at dictum quis, efficitur sit amet magna.
                        </td>
                        <td>Socios, Comunidades</td>
                        <td>
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" defaultChecked/>
                                  <span className="custom-control-indicator"></span>
                                  <span className="custom-control-description">Activo</span>
                            </label>
                        </td>
                    </tr>

                    <tr>
                        <td>Comunicación y atención</td>
                        <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor odio sodales tortor congue, ac rhoncus turpis blandit. Quisque a tellus id lorem posuere condimentum. Nunc non ligula est. Donec ultricies felis ut ligula luctus, nec feugiat ante mattis. Aenean urna augue, viverra at dictum quis, efficitur sit amet magna.
                        </td>
                        <td>Clientes</td>
                        <td>
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" defaultChecked/>
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description">Activo</span>
                            </label>
                        </td>
                    </tr>

                    <tr>
                    <td>Responsabilidad con la comunidad</td>
                        <td>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor odio sodales tortor congue, ac rhoncus turpis blandit. Quisque a tellus id lorem posuere condimentum. Nunc non ligula est. Donec ultricies felis ut ligula luctus, nec feugiat ante mattis. Aenean urna augue, viverra at dictum quis, efficitur sit amet magna.
                        </td>
                        <td>Comunidades</td>
                        <td>
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" defaultChecked/>
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description">Activo</span>
                            </label>
                        </td>
                    </tr>

                </tbody>
                </table>
            </div>

            <div className="d-flex justify-content-center">
                    <div className="col-sm-6 text-center">
                        <button type="submit" className="btn btn-success">Publicar preguntas</button>
                    </div>

            </div>

        </div>
        )
    }

    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
    }

    handleDimension = (e) =>{
        this.setState({
            dimension: e.target.value
        })
    }
}


export default AsignarPregunta;