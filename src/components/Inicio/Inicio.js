import React, { Component } from 'react';

import { Link } from 'react-router-dom'




class Inicio extends Component {
    state = {
    }

    render () {
        return (
            <div>
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 mb-2 text-cemter">
                        <h4>Seleccione módulo correspondiente</h4>
                        </div>

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

                        <div className="col-sm-6">
                            <div className="card mb-2">
                                <div className="card-body">
                                <h4 className="card-title">Grupo de interes</h4>
                                <p className="card-text">
                                Menu para crear o editar Grupo de interes.
                                </p>
                                <Link className="btn btn-primary" to='/grupodeinteres'>Ver más</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="card mb-2">
                                <div className="card-body">
                                <h4 className="card-title">Preguntas</h4>
                                <p className="card-text">
                                Menu para crear o editar Preguntas.
                                </p>
                                <Link className="btn btn-primary" to='/pregunta'>Ver más</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="card mb-2">
                                <div className="card-body">
                                <h4 className="card-title">Usuarios</h4>
                                <p className="card-text">
                                Menu para listar Usuarios.
                                </p>
                                <Link className="btn btn-primary" to='/usuario'>Ver más</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="card mb-2">
                                <div className="card-body">
                                <h4 className="card-title">Encuestas</h4>
                                <p className="card-text">
                                Menu para listar Encuestas.
                                </p>
                                <Link className="btn btn-primary" to='/encuesta'>Ver más</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Inicio;