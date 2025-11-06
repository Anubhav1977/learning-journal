import "./App.css";
import UserCard from "./components/UserCard";

// App is the first things that is displayed in the project by defualt.
// Added in the Main.jsx to be displayed in the root element
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}

export default App;
