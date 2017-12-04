//Importar componentes React
import React, { Component } from 'react';

//Importar componente Axios
import axios from '../../axios-orders';




class TemaRelevante extends Component {
    constructor(props){
        super(props)
        this.state = {
            dimensiones : [],
            coberturas : []
        }
    
    }



    
    render (){
        
        return (
            <div>
                <div className="container">

                    <div className="row mb-2">
                        <div className="col align-self-start">
            
                            <button 
                            type="button" 
                            className="btn btn-outline-info btn-sm"
                            onClick = {this.goBackHandler}
                            >Volver</button>

                           
            
                        </div>
            
                        <div className="col align-self-end text-right">
                        
                            <button 
                            type="button" 
                            className="btn btn-outline-info btn-sm "
                            onClick = {this.goCreateHandler}
                            >Crear</button>
                                
            
                        </div>
                    </div>
                </div>

                <section >
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            aqui van mis temas relevantes

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }

    dimensionDeletedHandler = (id) => {
        console.log(id);
        
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        } );;
    }


    dimensionSelectedHandler = (id) => {
        console.log(id);
    }

    

    goCreateHandler = () => {
        this.props.history.push('/temarelevante/new');
    }

    goBackHandler = () => {
        this.props.history.goBack();
    }
   
}



export default TemaRelevante;