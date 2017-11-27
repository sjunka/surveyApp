//Importar componentes React
import React, { Component } from 'react';

//Importar componente Axios
import axios from '../../axios-orders';

//Importar componente Grafica
import { ScatterChart } from 'react-chartkick';




class Resultado extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    
    }

componentDidMount () {
        
    }



    
    render (){
        return (
            <div className="container">
                <div className="row fluid">
                    <div className="col-sm-12">
                    <h4>Resultados de la encuesta:</h4>
                    <ScatterChart 
  /*                  data={[[1, 2], [2, 2.5], [3, 3], [4, 2.5], [5, 3],[5, 3],[6, 2.5],[7, 3],[8, 2.5],[9, 3.5],[10, 3.5]]}   */
                    data = {[
                            {"name":"Asunto Relevante", 
                             "data": {"1": 2, "2": 2.5, "3":3, "4":3.5, "5":3.5, "6":3, "7":2, "8":2.5, "9":3 , "10":3    }}

                            ]}


                    
                    xtitle="Asuntos Relevantes" 
                    ytitle="Calificación" />
                    </div>

                    <div className="col-sm-12">
                        <h4>Listado de temas relevantes</h4>

                        <ul className="list-group">

                        <li className="list-group-item d-flex justify-content-between align-items-center">

                                <span className="badge badge-primary badge-pill">Identificador</span>
                                <strong>Nombre asunto relevante </strong>  
                                <span className="badge badge-success badge-pill">Calificación</span>
                        </li>






                            <li className="list-group-item d-flex justify-content-between align-items-center">

                                <span className="badge badge-primary badge-pill">1</span>
                                Derechos humanos
                                <span className="badge badge-success badge-pill">2</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between align-items-center">

                                <span className="badge badge-primary badge-pill">2</span>
                                Productos Limpios
                                <span className="badge badge-success badge-pill">2.5</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between align-items-center">

                                <span className="badge badge-primary badge-pill">3</span>
                                Biodiversidad
                                <span className="badge badge-success badge-pill">3</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between align-items-center">

                                <span className="badge badge-primary badge-pill">4</span>
                                Innovación y tecnología
                                <span className="badge badge-success badge-pill">3.5</span>
                            </li>


                            </ul>
                    </div>

                </div>
            </div>
        )
    }

   
   
}



export default Resultado;