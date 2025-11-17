import React from "react";

function Button(props) {
  return (
    <div>
      <h1>{props.children}</h1>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
}

export default Button;
