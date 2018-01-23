import React from "react";

const goBackButton = props => {
  return (
    <div className="row mb-2">
      <div className="col align-self-start">
        <button
          type="button"
          className="btn btn-outline-info btn-sm"
          onClick={props.goBackHandler}
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default goBackButton;
