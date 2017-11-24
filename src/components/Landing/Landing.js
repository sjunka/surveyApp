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
                                <h4 className="card-title">Dimensión</h4>
                                <p className="card-text">
                                    Menu para crear o editar dimensiones.
                                </p>
                                <Link className="btn btn-primary" to='/dimension'>Ver más</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="card mb-2">
                                <div className="card-body">
                                <h4 className="card-title">Cobertura</h4>
                                <p className="card-text">
                                Menu para crear o editar coberturas.
                                </p>
                                <Link className="btn btn-primary" to='/cobertura'>Ver más</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="card mb-2">
                                <div className="card-body">
                                <h4 className="card-title">Tema Relevante</h4>
                                <p className="card-text">
                                Menu para crear o editar temas relevantes.
                                </p>
                                <Link className="btn btn-primary" to='/temarelevante'>Ver más</Link>
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