//Importar componentes React
import React, { Component } from 'react';

//Importar componente Axios
import axios from '../../axios-orders';


//import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            id : ''
        }
    
    }

    render () {
        return (
            <div className="container py-3">    
                <div className="row">
                    <div className="col-md-12">
                    <h2 className="text-center text-black mb-4">Inicio de sesión</h2>
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <span className="anchor"></span>
                            <div className="card rounded">
                                <div className="card-header">
                                    <h5 className="mb-0">Ingreso al sistema</h5>
                                </div>
                                <div className="card-body">
                                    <form className="form" role="form" autoComplete="off" >

                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input 
                                            type="email" 
                                            className="form-control form-control-lg rounded-0" 
                                            name="email" 
                                            id="email" 
                                            required=""/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="cedula">Cédula</label>
                                            <input 
                                            type="text" 
                                            className="form-control form-control-lg rounded-0" 
                                            name="cedula" 
                                            id="cedula" 
                                            required=""/>
                                        </div>

                                        <div>
                                            <label className="custom-control custom-checkbox">
                                            <input 
                                            type="checkbox" 
                                            className="custom-control-input"
                                            defaultChecked/>
                                            <span className="custom-control-indicator"></span>
                                            <span className="custom-control-description small">Recordar mis credenciales</span>
                                            </label>
                                        </div>

                                        <Link className="btn btn-info btn-sm float-right " to='/inicio'>Ingresar</Link>

                                        {/*
                                        <button type="button" className="btn btn-success btn-sm float-right">Ingresar</button>
                                        */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        )
    }
   
}



export default Login;