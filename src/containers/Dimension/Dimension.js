//Importar componentes React
import React, { Component } from 'react';

//Importar componente Axios
import axios from '../../axios-orders';
//import DimensionList component
import Dimensionlist from '../../components/Dimension/DimensionList';



class Dimension extends Component {
    constructor(props){
        super(props)
        this.state = {
            dimensiones : []
        }
    
    }

componentDidMount () {
    
    axios.get( 'https://sigmamaterialidad.firebaseio.com/dimension.json' )
        .then( response => {
            console.log("la respuesta del server es:", response);
            
            const dimensionesUpdated = [];
            
            for (let key in response.data){
                dimensionesUpdated.push({
                    ...response.data[key],
                    id: key
                });

            }
            this.setState( { dimensiones: dimensionesUpdated } );

            console.log(this.state.dimensiones);
        })
        .catch( error => {
            console.log(error);
        } );

        
    }



    
    render (){

        
            let dimensiones = this.state.dimensiones.map( dimension => {
                return (
                    <Dimensionlist
                        key={dimension.id}
                        name={dimension.nombre}
                        description={dimension.descripcion}
                        edit={() => this.dimensionSelectedHandler(dimension.id)} 
                        delete={() => this.dimensionDeletedHandler(dimension.id)}
                    />
                    
                );
            });

        
    
        
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
                {dimensiones}
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
        this.props.history.push('/dimension/new');
    }

    goBackHandler = () => {
        this.props.history.goBack();
    }
   
}



export default Dimension;