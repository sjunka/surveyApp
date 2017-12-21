import React, { Component } from 'react';

class Checkbox extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">


      <label className="custom-control custom-checkbox">
          <input 
          type="checkbox"
          className="custom-control-input" 
          
          value={label}
          checked={isChecked}
          onChange={this.toggleCheckboxChange}


          />
          <span className="custom-control-indicator"></span>
          <span className="custom-control-description">{label}</span>
      </label>

      </div>
    );
  }
}



export default Checkbox;