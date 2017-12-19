//Importar componentes React
import React, { Component } from 'react';

//Importar componente Axios
import axios from '../../axios-orders';

//Importar componente TemaRelevanteLista para listar los temas
import TemaRelevanteList from '../../components/TemaRelevante/TemaRelevanteList';




class TemaRelevante extends Component {
    constructor(props){
        super(props)
        this.state = {
            temasrelevantes : []
        }
    
    }

    componentDidMount () {
        
        axios.get( '/TemaRelevante' )
            .then( response => {
                console.log("la respuesta del server es:", response);
                
                const temasrelevantesUpdated = [];
                
                for (let key in response.data){
                    temasrelevantesUpdated.push({
                        ...response.data[key],
                        id: key
                    });
    
                }
                this.setState( { temasrelevantes : temasrelevantesUpdated } );
    
                console.log(this.state.temasrelevantes);
            })
            .catch( error => {
                console.log(error);
            } );
    
            
        }



    
    render (){

        let temasrelevantes = this.state.temasrelevantes.map( temarelevante => {
            return (
                <TemaRelevanteList
                    key={temarelevante.Id}
                    name={temarelevante.Name}
                    dimension={temarelevante.Categoria.Name}
                    edit={() => this.temarelevanteSelectedHandler(temarelevante.Id)} 
                    delete={() => this.temarelevanteDeletedHandler(temarelevante.Id)}
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

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="p-2">Temas relevantes</h3>
                        </div>
                    </div>
                </div>

                <section >
                    {temasrelevantes}
                </section>

            </div>
        );
    }

    temarelevanteDeletedHandler = (id) => {
        console.log(id);
        
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        } );;
    }


    temarelevanteSelectedHandler = (id) => {
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