import { createContext, useState } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar";
import ChildC from "./components/ChildC";
import ChildA from "./components/ChildA";

// Step1 : Create Context
const ThemeContext = createContext();
const UserContext = createContext();
// Step2 : Wrap all the child inside the provider
// Step3 : pass value
// Step4 : Consume the context inside the consumer child

function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState({ name: "Anubhav" });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Toolbar />
      </ThemeContext.Provider>
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </div>
  );
}

export default App;
export { ThemeContext, UserContext };
