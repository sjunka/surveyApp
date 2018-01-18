//Importar componentes React
import React from "react";

//Importar componente Axios
import axios from "../../axios-orders";

class TemaRelevante extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      dimension: 1,
      cobertura: null
    };
  }

  componentDidMount() {
    axios
      .get("/Cobertura")
      .then(response => {
        // console.log("COBERTURA:", response);

        const coberturasUpdate = [];

        for (let key in response.data) {
          coberturasUpdate.push({
            ...response.data[key],
            id: key
          });
        }
        this.setState({ cobertura: coberturasUpdate });
      })
      .catch(error => {
        console.log(error);
      });

    // axios.get( 'https://sigmamaterialidad.firebaseio.com/dimension.json' )
    // .then( response => {
    //     // console.log("DIMENSION:", response);

    //     const dimensionesUpdated = [];

    //     for (let key in response.data){
    //         dimensionesUpdated.push({
    //             ...response.data[key],
    //             id: key
    //         });

    //     }
    //     this.setState( { dimension: dimensionesUpdated } );

    // })
    // .catch( error => {
    //     console.log(error);
    // });
  }

  render() {
    //console.log(this.state.cobertura);
    // let checkboxes = null;

    // if (this.state.cobertura === !null){

    //     checkboxes = this.state.cobertura.map((cob => {
    //         return (
    //             <Checkbox
    //                 name = {cob.Name}

    //                 label = {cob.Name}
    //                 key = {cob.Id}
    //                 value = {cob.Name}
    //             ></Checkbox>
    //         )
    //     }));
    // }

    return (
      <div className="container">
        <h4 className="col-form-label">Tema Relevante</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-form-label" htmlFor="nombre">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre Tema Relevante"
              name="nombre"
              onChange={this.handleInputChange.bind(this)}
              value={this.state.nombre}
            />
            <small id="namehelp" className="form-text text-muted">
              Nombre tema relevante
            </small>
          </div>

          <div className="form-group">
            <label className="col-form-label">Dimensión:</label>
            <select
              className="form-control custom-select"
              value={this.state.dimension}
              onChange={this.handleInputChange.bind(this)}
              name="dimension"
            >
              <option value="1">Social</option>
              <option value="2">Economica</option>
              <option value="3">Ambiental</option>
            </select>
            <small id="namehelp" className="form-text text-muted">
              Dimensión
            </small>
          </div>

          <div className="custom-controls-stacked">
            <label className="col-form-label">Cobertura:</label>

            {this.state.cobertura && this.state.cobertura.Name}
          </div>

          <div className="d-flex justify-content-center">
            <div className="col-sm-6 text-right">
              <button type="submit" className="btn btn-success">
                Guardar
              </button>
            </div>
            <div className="col-sm-6 text-left">
              <button type="button" className="btn btn-danger">
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit = e => {
    console.log(this.state);
    const temarelevante = {
      Name: this.state.nombre,
      Categoria: {
        Name: this.state.dimension
      },
      Cobertura: [
        {
          Id: this.state.cobertura.Id
        }
      ]
    };

    console.log(temarelevante);

    axios
      .post("/TemaRelevante", temarelevante)
      .then(response =>
        this.setState({
          nombre: "",
          dimension: "",
          cobertura: ""
        })
      )
      .catch(error => console.log(error));
    e.preventDefault();
  };

  handleInputChange(event) {
    const target = event.target;

    const value = target.type === "select" ? target.checked : target.value;

    const name = target.name;

    this.setState({
      [name]: value
    });
  }
}

export default TemaRelevante;
