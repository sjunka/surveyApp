//Importar componentes React
import React, { Component } from 'react';

//Importar componente Axios
import axios from '../../axios-orders';
//import PreguntaList component
import PreguntaList from '../../components/Pregunta/PreguntaList';



class Pregunta extends Component {
    constructor(props){
        super(props)
        this.state = {
            preguntas : []
        }
    
    }

    componentDidMount () {
        
        axios.get( '/Pregunta' )
            .then( response => {
                console.log("la respuesta del server es:", response);
                
                const preguntasUpdated = [];
                
                for (let key in response.data){
                    preguntasUpdated.push({
                        ...response.data[key],
                        id: key
                    });

                }
                this.setState( { preguntas: preguntasUpdated } );

                console.log(this.state.preguntas);
            })
            .catch( error => {
                console.log(error);
            });

            
    }   



    
    render (){

        
            let preguntas = this.state.preguntas.map( pregunta => {
                return (
                    <PreguntaList
                        key={pregunta.Id}
                        name={pregunta.Name}
                        description={pregunta.descripcion}
                        type= {pregunta.TipoPreguntaDesc}
                        temarelevante={pregunta.TemaRelevante.Name}
                        dimension={pregunta.TemaRelevante.Categoria}
                        edit={() => this.preguntaSelectedHandler(pregunta.id)} 
                        delete={() => this.preguntaDeletedHandler(pregunta.id)}
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
                            <h3 className="p-2">Preguntas</h3>
                        </div>
                    </div>
                </div>

                <section >
               
                {preguntas}
                </section>

            </div>
        );
    }

    preguntaDeletedHandler = (id) => {
        console.log(id);
        
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        } );;
    }


    preguntaSelectedHandler = (id) => {
        console.log(id);
    }

    

    goCreateHandler = () => {
        this.props.history.push('/pregunta/new');
    }

    goBackHandler = () => {
        this.props.history.goBack();
    }
   
}



export default Pregunta;