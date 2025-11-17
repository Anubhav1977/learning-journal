import { useState } from "react";
import "./App.css";
import Panel from "./components/Panel";

function App() {
  const [panelId, setPanelId] = useState(null);
  return (
    <>
      <div className="container">
        <h2 id="name">Virat Kohli</h2>
        <div id="img-container">
          <img
            id="vk-img"
            src="https://i.pinimg.com/736x/c4/65/82/c46582ce47545bbd39cbea2866a07807.jpg"
            alt="virat-Kohli"
          />
        </div>
        <Panel
          id="about"
          title="About"
          isActive={panelId === "about"}
          onToggle={() => {
            setPanelId(panelId === "about" ? null : "about");
          }}
        >
          Virat Kohli is a former Indian national cricket team captain, widely
          considered one of the greatest batsmen of his generation. Known for
          his aggressive batting and exceptional chasing ability, he has broken
          numerous records across all formats of the game. He is also noted for
          instilling a stronger fitness culture in Indian cricket during his
          captaincy.
        </Panel>
        <Panel
          id="records"
          title="ODI Records"
          isActive={panelId === "records"}
          onToggle={() => {
            setPanelId(panelId === "records" ? null : "records");
          }}
        >
          <div>
            <ul>
              <li>Most centuries in ODI history (51).</li>
              <li>
                Fastest batsman to reach 8,000, 9,000, 10,000, 11,000, 12,000,
                13,000, and 14,000 runs.
              </li>
              <li>Most centuries in successful run-chases (27).</li>
              <li>
                Most runs scored in a single edition of an ODI World Cup (765
                runs in 2023).
              </li>
            </ul>
          </div>
        </Panel>
      </div>
    </>
  );
}

export default App;
