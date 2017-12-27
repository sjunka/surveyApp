//Importar componentes React
import React, { Component } from 'react';

//Importar componente Axios
import axios from '../../axios-orders';

//import PreguntaList component
import UsuarioList from '../../components/Usuario/UsuarioList';



class Usuario extends Component {
    constructor(props){
        super(props)
        this.state = {
            usuarios : []
        }
    
    }

  



    componentDidMount () {
        
        axios.get( '/UsuarioEncuesta' )
            .then( response => {
                console.log("la respuesta del server es:", response);

                const usuariosUpdated = [];
                
                for (let key in response.data){
                    usuariosUpdated.push({
                        ...response.data[key],
                        id: key
                    });

                }

                
               this.setState( {
                    usuarios: usuariosUpdated
                 } );

                console.log(this.state.usuarios);
            })
            .catch( error => {
                console.log(error);
            });

            
    }   



    
    render (){

        
            let usuarios = this.state.usuarios.map( usuario => {
                return (
                    
                    <UsuarioList
                        key={usuario.Id}

                        nombre={usuario.Nombre}

                        apellido={usuario.Apellido}

                        tipoDocumento={usuario.TipoDocumentoDesc}

                        email={usuario.EMail}

                        numeroCelular={usuario.NumeroCelular}

                        empresa={usuario.NombreEmpresa}

                        grupoInteres={usuario.GrupoInteres.Name}
                        
                        
                        
                        edit={() => this.usuarioSelectedHandler(usuario.Id)} 
                        delete={() => this.usuarioDeletedHandler(usuario.Id)}
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
                            <h3 className="p-2">Usuarios del sistema</h3>
                        </div>
                    </div>
                </div>

                <section >
               
                {usuarios}

                </section>

            </div>
        );
    }

    usuarioDeletedHandler = (id) => {
        console.log(id);
        
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => {
            console.log(response);
        })
        .catch( error => {
            console.log(error);
        } );;
    }


    usuarioSelectedHandler = (id) => {
        console.log(id);
    }

    

    goCreateHandler = () => {
        this.props.history.push('/usuario/new');
    }

    goBackHandler = () => {
        this.props.history.goBack();
    }
   
}



export default Usuario;