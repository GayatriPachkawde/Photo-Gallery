import React from "react";

const Button = (props) => {
  return (
    <>
      {props.msg.length > 0 ? <p>{props.msg}</p> : null}
      <button onClick={props.clicked}>
        {props.btn}{" "}
        {props.msg.length > 0 ? (
          <i className="fa fa-plus" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-undo" aria-hidden="true"></i>
        )}
      </button>
    </>
  );
};

export default Button;
