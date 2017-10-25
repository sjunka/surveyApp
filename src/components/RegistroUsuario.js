//Importar componentes React
import React from 'react';

class RegistroUsuario extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tipodococumento : 'cedula',
            documento: '',
            nombres : '',
            apellidos: '',
            email: '',
            numerocontacto:'',
            genero: 'Masculino',
            escolaridad: 'Sin escolaridad'
        }
    
    }
    
    
    render (){
        return(
        <div className="container">
            <h4 className="col-form-label">Registro</h4>
            <form onSubmit={this.handleSubmit}>


            <div className="form-group">
                <label className="col-form-label">Tipo de documento:</label>
                <select  className="form-control custom-select" value={this.state.tipodococumento} onChange={this.handleTipoDococumento}>
                    <option value="cc">Cedula</option>
                    <option value="pasaporte">Pasaporte</option>
                </select>
            </div>


            <div className="form-group">
                <label className="col-form-label">Documento:</label>

                <div className="">
                        <input className="form-control"
                        value={this.state.documento}
                        onChange={this.handleDococumento}
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
                <label className="col-form-label">Correo Electronico:</label>
                    <div className="">
                        <input className="form-control"
                        value={this.state.email}
                        onChange={this.handleEmail}
                        type="email"/>
                    </div>
            </div>
               
            <div className="form-group">
                <label className="col-form-label">Numero de contacto:</label>
                    <div className="">
                        <input className="form-control"
                        value={this.state.numerocontacto}
                        onChange={this.handleNumeroContacto}
                        type="tel"/>
                    </div>
            </div>

            <div className="form-group">
                <label className="col-form-label">Genero:</label>
                <select  className="form-control custom-select" value={this.state.genero} onChange={this.handleGenero}>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
            </div>

            <div className="form-group">
                <label className="col-form-label">Rango edad:</label>
                <select  className="form-control custom-select" value={this.state.rangoedad} onChange={this.handleRangoEdad}>
                    <option value="<25">Menor de 25</option>
                    <option value=">26<=35">Entre 26 y 35</option>
                    <option value="<35>=45">Entre 36 y 45</option>
                    <option value=">46">Mayor de 46</option>
                </select>
            </div>

            <div className="form-group">
                <label className="col-form-label">Escolaridad:</label>
                <select  className="form-control custom-select" value={this.state.escolaridad} onChange={this.handleEscolaridad}>
                    <option value="Sin escolaridad">Sin escolaridad</option>
                    <option value="primaria">Primaria</option>
                    <option value="secundaria">Secundaria</option>
                    <option value="profesional">Profesional</option>
                    <option value="especialización">Especialización</option>
                    <option value="maestria">Maestria</option>
                    <option value=">doctorado">Doctorado</option>
                </select>
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
        console.log(this.state);
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
}


export default RegistroUsuario;