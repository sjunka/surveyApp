import React, { Component } from 'react';

//import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'

//import clasess from './Landing.css'



class Landing extends Component {
    state = {
    }

    render () {
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-6">
                    <div className="card mb-2">
                        <div className="card-body">
                        <h4 className="card-title">Dimension</h4>
                        <p className="card-text">
                            Menu para crear o editar Dimensiones.
                        </p>
                        <Link className="btn btn-primary" to='/dimension'>Ver Mas</Link>
                        </div>
                    </div>
                    </div>

                    <div className="col-sm-6">
                    <div className="card mb-2">
                        <div className="card-body">
                        <h4 className="card-title">Cobertura</h4>
                        <p className="card-text">
                        Menu para crear o editar Coberturas
                        </p>
                        <a href="/dimension" className="btn btn-primary">Listar</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Landing;