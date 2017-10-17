//Importar componentes React
import React, { Component } from 'react';

//Importar Estilos 
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dimension: '',
      descripcion:''  
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
  }

  handleChange = (e) =>{
    this.setState({
      dimension: this.props.dimension,
      descripcion: this.props.descripcion
    })
  }


  render() {
    return (
      <div className="container">
          <h1 className="title">Dimension</h1>
          <p className="subtitle">
          Modulo para la creacion de una Dimension
        </p>

        <form onSubmit={this.handleSubmit}> 
          <label htmlFor="dimension">Dimension:
          <input type="text" value={this.props.dimension} onChange={this.handleChange}/>

          </label>
          <br/>
          <label htmlFor="descripcion">
          Descripcion:
          <textarea value={this.props.descripcion} onChange={this.handleChange}></textarea>
         
          </label>


          <input type="submit" value="Crear"/>

        </form>

      </div>
    );
  }
}



export default App;
