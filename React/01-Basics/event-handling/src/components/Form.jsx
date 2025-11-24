import React from "react";

function Form() {
  return (
    <form
      id="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Form Submitted");
      }}
    >
      <label htmlFor="name" id="name">
        Name:{" "}
      </label>
      <input type="text" name="name" id="name" /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
