//Importar componentes React
import React from 'react';

//Importar componente Axios
import axios from '../../axios-orders';



class Usuario extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tipodococumento : 1,
            documento: '',
            nombres : '',
            apellidos: '',
            email: '',
            numerocontacto:'',
            genero: 1,
            rangoedad:1,
            nombreEmpresa: '',
            escolaridad: 2,
            latitud: 0.0,
            longitud: 0.0
        }
    
    }
    
    
    render (){
        return(
        <div className="container">
            <h4 className="col-form-label">Registro de Usuario</h4>
            <form onSubmit={this.handleSubmit}>


            <div className="form-group">
                <label className="col-form-label">Tipo de documento:</label>
                <select  className="form-control custom-select" 
                value={this.state.tipodococumento} 
                onChange={this.handleTipoDococumento}>
                    <option value="1">Cédula</option>
                    <option value="2">Pasaporte</option>
                </select>
            </div>


            <div className="form-group">
                <label className="col-form-label">Documento:</label>

                <div className="">
                    <input className="form-control"
                    value={this.state.documento}
                    onChange={this.handleDococumento}
                    placeholder="123456789 sin espacios o puntos"
                    type="number"/>
                </div>

            </div>
    
    
            <div className="form-group">
                <label className="col-form-label">Nombres:</label>
                    <div className="">
                        <input className="form-control"
                        value={this.state.nombres}
                        onChange={this.handleNombres}
                        type="text"/>
                    </div>
            </div>


            <div className="form-group">
                <label className="col-form-label">Apellidos:</label>
                    <div className="">
                        <input className="form-control"
                        value={this.state.apellidos}
                        onChange={this.handleApellidos}
                        type="text"/>
                    </div>
            </div>


            <div className="form-group">
                <label className="col-form-label">Correo Electrónico:</label>
                    <div className="">
                        <input className="form-control"
                        value={this.state.email}
                        onChange={this.handleEmail}
                        placeholder="ejemplo@ejemplo.com"
                        type="email"/>
                    </div>
            </div>
               
            <div className="form-group">
                <label className="col-form-label">Número celular:</label>
                    <div className="">
                        <input className="form-control"
                        value={this.state.numerocontacto}
                        onChange={this.handleNumeroContacto}
                        placeholder= "Sin espacios o guiones"
                        type="tel"/>
                    </div>
            </div>

            <div className="form-group">
                <label className="col-form-label">Género:</label>
                <select  className="form-control custom-select" value={this.state.genero} onChange={this.handleGenero}>
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
                    <option value="3">Otro</option>
                </select>
            </div>

            <div className="form-group">
                <label className="col-form-label">Rango edad:</label>
                <select  className="form-control custom-select" value={this.state.rangoedad} onChange={this.handleRangoEdad}>
                    <option value="1">Menor de 25</option>
                    <option value="2">Entre 26 y 35</option>
                    <option value="3">Entre 36 y 45</option>
                    <option value="4">Mayor de 46</option>
                </select>
            </div>

            <div className="form-group">
                <label className="col-form-label">Escolaridad:</label>
                <select  className="form-control custom-select" value={this.state.escolaridad} 
                onChange={this.handleEscolaridad}>
                    <option value="1">Sin escolaridad</option>
                    <option value="2">Primaria</option>
                    <option value="3">Secundaria</option>
                    <option value="4">Profesional</option>
                    <option value="5">Especialización</option>
                    <option value="6">Maestria</option>
                    <option value="7">Doctorado</option>
                </select>
            </div>

            <div className="form-group">
                <label className="col-form-label">Empresa:</label>
                    <div className="">
                        <input className="form-control"
                        value={this.state.nombreEmpresa}
                        onChange={this.handleNombreEmpresa}
                        type="text"/>
                    </div>
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
        //console.log(this.state);
        const usuario = {
            TipoDocumento: this.state.tipodococumento,

            NumeroDocumento: this.state.documento,

            Nombre: this.state.nombres,

            Apellido: this.state.apellidos,

            EMail: this.state.email,

            NumeroCelular: this.state.numerocontacto,

            Genero: this.state.genero,

            Edad: this.state.rangoedad,

            NombreEmpresa: this.state.nombreEmpresa,

            Latitud: this.state.latitud,

            Longitud: this.state.longitud
            }

        console.log(usuario);
        
        axios.post('/UsuarioEncuesta',usuario)
        .then(response => 
            this.setState({
                nombre : '',
                dimension : '',
                cobertura : ''
            })    
        )
        .catch(error => console.log(error));
        e.preventDefault();

    }

    handleTipoDococumento = (e) => {
        this.setState ({
            tipodococumento: e.target.value
        })
    }

    handleNombres = (e) => {
        this.setState ({
            nombres: e.target.value
        })
    }

    handleApellidos = (e) => {
        this.setState({
            apellidos: e.target.value
        })
    }

    handleDococumento = (e) => {
        this.setState({
            documento: e.target.value 
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value 
        })
    }

    handleNumeroContacto = (e) => {
        this.setState({
            numerocontacto: e.target.value
        })
    }

    handleGenero = (e) => {
        this.setState({
            genero: e.target.value
        })
    }

    handleRangoEdad = (e) => {
        this.setState({
            rangoedad: e.target.value
        })
    }

    handleEscolaridad = (e) => {
        this.setState({
            escolaridad: e.target.value
        })
    }

    handleNombreEmpresa = (e) => {
        this.setState({
            nombreEmpresa: e.target.value
        })
    }
}


export default Usuario;