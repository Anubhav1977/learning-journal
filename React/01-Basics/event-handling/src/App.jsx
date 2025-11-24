// import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  // const [bgColor, setBgColor] = useState("red");

  function handleClick() {
    alert("button is clicked");
  }

  function handleOnChange(e) {
    console.log(e.target.value);
  }

  function colorChange() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }

  function parentClick() {
    console.log("parent Clicked");
  }

  function childClick(e) {
    // This prevents event bubbling - doesnt triggers all the event in the component tree when clicked on one..
    e.stopPropagation();
    console.log("child Clicked");
  }

  return (
    <div
      id="main-container"
      // style={{ backgroundColor: bgColor, padding: "20px" }}
    >
      <div>
        <button onClick={handleClick}>Click me</button>
        <input type="text" onChange={handleOnChange} />

        {/* Pitfall - this aleart fires when the component renders, not when clicked.. */}
        {/* <button onClick={alert("This is a alert message")}></button> */}
        {/* If you want to define your event handler inline, wrap it in an anonymous function like so: */}
        <button onClick={() => alert("This is a alert message")}>
          Show Alert{" "}
        </button>
      </div>
      <br />
      <br />
      <div id="main-form">
        <Form />
      </div>
      <br />

      {/* This here triggers event bubbling - means all the events in the component tree gets triggerd on clicking one  */}
      {/* stopPropagation = “Don’t let this event go to parent elements.” */}
      <div onClick={parentClick}>
        <button onClick={childClick}>Click me</button>
      </div>
      <br />
      <br />
      <button onClick={colorChange}>Change Color</button>
    </div>
  );
}

export default App;
