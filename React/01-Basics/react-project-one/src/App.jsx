import "./App.css";
import UserCard from "./components/UserCard";
import avatar1 from "./assets/avatar1.png";
import avatar2 from "./assets/avatar2.png";
import avatar3 from "./assets/avatar3.png";

// App is the first things that is displayed in the project by defualt.
// Added in the Main.jsx to be displayed in the root element
function App() {
  // const [count, setCount] = useState(0);

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
      </div>
    </>
  );
}

export default App;
