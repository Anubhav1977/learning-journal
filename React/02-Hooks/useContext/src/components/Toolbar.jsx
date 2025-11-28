import React, { useContext } from "react";
import { ThemeContext } from "../App";

function Toolbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    padding: "1rem",
    borderRadius: "8px",
  };

  return (
    <div style={styles}>
      <h3>Current Theme : {theme}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Toolbar;
