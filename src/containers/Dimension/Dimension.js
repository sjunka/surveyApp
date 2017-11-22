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
                    />
                    
                );
            });

        
    
        
        return (
            <div>
                <div className="col-sm-12 text-left mb-2">
                    <button 
                    type="button" 
                    className="btn btn-outline-info btn-sm"
                    onClick = {() => this.dimensionGoBackHandler()}
                    >Volver</button>
                </div>

                <div className="col-sm-12 text-right mb-2">
                    <button 
                    type="button" 
                    className="btn btn-outline-info btn-sm"
                    onClick = {() => this.dimensionGoBackHandler()}
                    >Crear</button>
                </div>

                <section >
                {dimensiones}
                </section>

            </div>
        );
    }

    handleSubmit = (e) => {
        console.log(this.state);
        const dimension = {
            nombre : this.state.nombre,
            descripcion : this.state.descripcion
        }
        axios.post('/dimension.json',dimension)
        .then(response => console.log(response))
        .catch(error => console.log(error));
        e.preventDefault();
    }


    dimensionSelectedHandler = (id) => {
        console.log(id);
    }

    dimensionGoBackHandler = () => {
        this.props.history.goBack();
    }
   
}

/* const updatedDimensions = dimensiones.map( dimension => {
                return {
                        ...dimension
                       }
            } );
*/

export default Dimension;