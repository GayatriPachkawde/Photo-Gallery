import React from "react";
import "./inputStyle.css";

const UserInput = (props) => {
  return (
    <form>
      <input
        autoFocus
        className="inputField"
        placeholder="Enter Image Source"
        onChange={props.srcchange}
      />
      <br />
      <button type="button" onClick={props.clicked}>
        Submit <i className="fa fa-check" aria-hidden="true"></i>
      </button>
    </form>
  );
};

export default UserInput;
