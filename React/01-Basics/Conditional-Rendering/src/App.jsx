import "./App.css";
import Item from "./components/Item";

function App() {
  return (
    <>
      <Item isPacked={false} name="Apples" />
      <Item isPacked={true} name="Banana" />
      <Item isPacked={false} name="Grapes" />
      <Item isPacked={true} name="WaterMelon" />
    </>
  );
}

export default App;
