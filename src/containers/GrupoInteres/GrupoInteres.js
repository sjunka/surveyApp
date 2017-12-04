//Importar componentes React
import React, { Component } from 'react';

//Importar componente Axios
import axios from '../../axios-orders';

import GrupoInteresList from '../../components/GrupoInteres/GrupoInteresList';



class Cobertura extends Component {
    constructor(props){
        super(props)
        this.state = {
            gruposdeinteres : []
        }
    
    }

componentDidMount () {
    
    axios.get( '/GrupoInteres' )
        .then( response => {
            console.log("la respuesta del server es:", response);
            
            const gruposdeinteresUpdated = [];
            
            for (let key in response.data){
                gruposdeinteresUpdated.push({
                    ...response.data[key],
                    id: key
                });

            }
            this.setState( { gruposdeinteres: gruposdeinteresUpdated } );

            console.log(this.state.gruposdeinteres);
        })
        .catch( error => {
            console.log(error);
        } );

        
    }


    componentDidUpdate() {
        
        axios.get( '/GrupoInteres' )
        .then( response => {
            console.log("la respuesta del server es:", response);
            
            const gruposdeinteresUpdated = [];
            
            for (let key in response.data){
                gruposdeinteresUpdated.push({
                    ...response.data[key],
                    id: key
                });

            }
            this.setState( { gruposdeinteres: gruposdeinteresUpdated } );

            console.log(this.state.gruposdeinteres);
        })
        .catch( error => {
            console.log(error);
        } );
        
    }


    
    render (){

        
            let gruposdeinteres = this.state.gruposdeinteres.map( grupointeres => {
                return (
                    <GrupoInteresList
                        key={grupointeres.Id}
                        name={grupointeres.Name}
                        edit={() => this.grupointeresSelectedHandler(grupointeres.Id)} 
                        delete={() => this.grupointeresDeletedHandler(grupointeres.Id)}
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
                {gruposdeinteres}
                </section>

            </div>
        );
    }

    grupointeresDeletedHandler = (id) => {
        
        const idgrupodeinteres = id.toString();
        console.log(idgrupodeinteres);
        
        axios.delete(`/GrupoInteres/${idgrupodeinteres}`)
        .then(response => {
            console.log('la cobertura se elimino correctamente',response);
        })
        .catch( error => {
            console.log('error la cobertura no pudo ser borrada por el suguiente motivo: ',error);
        } );;
    }


    grupointeresSelectedHandler = (id) => {
        console.log(id);
    }

    

    goCreateHandler = () => {
        this.props.history.push('/grupointeres/new');
    }

    goBackHandler = () => {
        this.props.history.goBack();
    }
   
}



export default Cobertura;