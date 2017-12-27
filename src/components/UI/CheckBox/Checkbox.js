import React, { Component } from 'react';


var question = { label: "Apples", name: "q1", value: "apples" };


class CheckboxInput extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        checked: this.props.checked || false
      }
  
    }
    
    handleClick = (e)=> {
      this.setState({
        checked: e.target.checked
        });

      }

  render(){



    return(
      <label>
        <input type="checkbox"
          name={this.props.name}
          checked={this.state.checked}
          onClick={this.handleClick.bind(this)}
          value={this.props.value} />
          {this.props.label}
      </label>
      );

  

  
  };
  
}




export default CheckboxInput;