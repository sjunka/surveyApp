//Importar componentes React
import React from 'react';

//Importar Axios
import axios from 'axios';

//Importar Checkbox
import Checkbox from '../../components/UI/CheckBox/Checkbox';



const items = [
    'Todos los grupos de interes',
    'Accionista e inversionitas',
    'Clientes',
    'Contratatistas y sus empleados',
    'Socios',
    'Sociedad y comunidad',
  ];


class Pregunta extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            descripcion : '',
            temarelevante: 1,
            tipo : 1,
            grupointeres:[]
        }
    }

        componentWillMount = () => {
            this.selectedCheckboxes = new Set();
          }
        
          toggleCheckbox = label => {
            if (this.selectedCheckboxes.has(label)) {
              this.selectedCheckboxes.delete(label);
            } else {
              this.selectedCheckboxes.add(label);
            }
          }
        
          
        
          createCheckbox = label => (
            <Checkbox
              label={label}
              handleCheckboxChange={this.toggleCheckbox}
              key={label}
            />
          )
        
          createCheckboxes = () => (
            items.map(this.createCheckbox)
          )
       



    

    
    
    
    render (){
        return(
        <div className="container">
            <h4 className="col-form-label">Pregunta</h4>
            <form onSubmit={this.handleSubmit}>


            <div className="form-group">
                <label>Descripción:</label>
                <div className="">
                    <textarea 
                    className="form-control"
                    value = {this.state.descripcion}
                    onChange = {this.handleDescripcion}
                    placeholder="">
                    </textarea>
                    <small id="namehelp" className="form-text text-muted">Descripción de pregunta</small>
                </div>
            </div>
                    

            <div className="form-group">
                <label className="col-form-label">Tema Relevante::</label>
                <select className="form-control custom-select" value={this.state.temarelevante} onChange={this.handleTemaRelevante}>
                    <option value="1">Derechos Humanos</option>
                    <option value="2">Productos limpios </option>
                    <option value="3">Biodiversidad</option>
                    <option value="4">Innovación y tecnología</option>
                </select>
                <small id="namehelp" className="form-text text-muted">Tema Relevante</small>
            </div>
            


            <div className="form-group">
                <label className="col-form-label">Tipo Pregunta:</label>
                <select  className="form-control custom-select" value={this.state.tipo} onChange={this.handleTipo}>
                    <option value="1">Abierta</option>
                    <option value="2">Cerrada</option>
                </select>
                <small id="namehelp" className="form-text text-muted">Tipo</small>
            </div>

            <div className="custom-controls-stacked">
                <label className="col-form-label">Grupo de Interés:</label>

                {this.createCheckboxes()}

            </div>



            <div className="d-flex justify-content-center">
            <div className="col-sm-6 text-right">
                <button type="submit" className="btn btn-success">Guardar</button>

            </div>
            <div className="col-sm-6 text-left">
                <button type="button" className="btn btn-danger">Cancelar</button>

            </div>
        </div>
            </form>
        </div>
        )
    }

    


    handleSubmit = (e) => {

        let gruposInteresSeleccionados = [];

        for (const checkbox of this.selectedCheckboxes) {
            gruposInteresSeleccionados.push(checkbox);
            console.log(gruposInteresSeleccionados);
          }

        this.setState({
            grupointeres: gruposInteresSeleccionados
        })

        console.log(this.state.grupointeres);

        let preguntaPost = {
            "TipoPregunta": this.state.tipo,
                "TemaRelevante": {
                    "Id": this.state.temarelevante
                },
                "GruposInteres": [
                    this.state.grupointeres
                ],
                "Name": this.state.descripcion
        }

            let url = 'http://190.85.67.146/TEST/MATERIALIDAD/api/Pregunta/CreateDeepGin';

         //traer preguntas
         axios.post(url,preguntaPost )
        .then( (response) => {
            console.log(response);  
        })  
        .catch(function (error) {
          console.log(error, preguntaPost);
        });


        e.preventDefault();
    }

    handleDescripcion = (e) => {
        this.setState ({
            descripcion: e.target.value
        })
    }

    handleDimension = (e) =>{
        this.setState({
            dimension: e.target.value
        })
    }

    handleTemaRelevante = (e) =>{
        this.setState({
            temarelevante: e.target.value

        })
    }

    handleTipo = (e) => {
        this.setState ({
            tipo: e.target.value
        })
    }

}


export default Pregunta;