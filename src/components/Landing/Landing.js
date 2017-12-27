import React, { Component } from 'react';

//import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'




class Landing extends Component {
    state = {
    }

    render () {
        return (
            <div>

                <header id="showcase" className="container mx-auto">
                <div className="row">
                    <div className="col text-center">
                    <h1>Bienvenido al módulo de mejora continua</h1>
                    <p>
                        Esté modulo es una herramienta tecnológica que facilita mediante el apoyo
                        sistémico la creación de preguntas relacionadas al modelo GRI-4. 
                    </p>

                    <div className="mx-auto">
                    <Link className="btn btn-info " to='/login'>Ingresar</Link>
                    </div>
                    
                    </div>
                    
                </div>
                </header>

            
            </div>
        );
    }
}

export default Landing;