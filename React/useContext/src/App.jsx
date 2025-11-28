import { createContext, useState } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Toolbar />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
export { ThemeContext };
