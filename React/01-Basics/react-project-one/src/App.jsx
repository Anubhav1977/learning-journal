import "./App.css";
import UserCard from "./components/UserCard";
import avatar1 from "./assets/avatar1.png";
import avatar2 from "./assets/avatar2.png";
import avatar3 from "./assets/avatar3.png";
import Card from "./components/Card";
import Button from "./components/Button";
import { useState } from "react";

// App is the first things that is displayed in the project by defualt.
// Added in the Main.jsx to be displayed in the root element
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  // Its called a "JSX" file because we can write javascript in html like code..
  return (
    <>
      <h1 id="title">Users</h1>
      <div className="container">
        <UserCard
          name="Anubhav Garg"
          desc="This is Anubhav garg"
          img={avatar1}
          style={{ "background-color": "lightblue" }}
        />
        <UserCard
          name="Ankit Kumar"
          desc="This is Ankit Kumar"
          img={avatar2}
          style={{ "background-color": "lightgreen" }}
        />
        <UserCard
          name="Ritik Chaudhary"
          desc="This is Ritik Chaudhary"
          style={{ "background-color": "lightgrey" }}
          img={avatar3}
        />
        <Card>
          <h2>This is a card</h2>
        </Card>
      </div>
      <div>
        <Button handleClick={handleClick} text="Click Me">
          <h1>{count}</h1>
        </Button>
      </div>
    </>
  );
}

export default App;
