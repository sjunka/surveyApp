//Importar componentes React
import React, { Component } from 'react';

//Importar componente Axios
import axios from '../../axios-orders';

//import CoberturaList component
//import Dimensionlist from '../../components/Dimension/DimensionList';
import CoberturaList from '../../components/Cobertura/CoberturaList';



class Cobertura extends Component {
    constructor(props){
        super(props)
        this.state = {
            coberturas : []
        }
    
    }

componentDidMount () {
    
    axios.get( '/Cobertura' )
        .then( response => {
            console.log("la respuesta del server es:", response);
            
            const coberturasUpdated = [];
            
            for (let key in response.data){
                coberturasUpdated.push({
                    ...response.data[key],
                    id: key
                });

            }
            this.setState( { coberturas: coberturasUpdated } );

            console.log(this.state.coberturas);
        })
        .catch( error => {
            console.log(error);
        } );

        
    }



    
    render (){

        
            let coberturas = this.state.coberturas.map( cobertura => {
                return (
                    <CoberturaList
                        key={cobertura.Id}
                        name={cobertura.Name}
                        tipo={cobertura.TipoCoberturaDesc}
                        edit={() => this.coberturaSelectedHandler(cobertura.Id)} 
                        delete={() => this.coberturaDeletedHandler(cobertura.Id)}
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
                {coberturas}
                </section>

            </div>
        );
    }

    coberturaDeletedHandler = (id) => {
        console.log(id);
        
        axios.delete('http://192.168.2.107/TEST/MATERIALIDAD/API/Cobertura/' + id)
        .then(response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        } );;
    }


    coberturaSelectedHandler = (id) => {
        console.log(id);
    }

    

    goCreateHandler = () => {
        this.props.history.push('/cobertura/new');
    }

    goBackHandler = () => {
        this.props.history.goBack();
    }
   
}



export default Cobertura;