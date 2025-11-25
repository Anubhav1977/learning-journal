import "./App.css";
import DataFetcher from "./components/DataFetcher";
import LoggerComponent from "./components/LoggerComponent";
import MultiEffectComponent from "./components/MultiEffectComponent";
import ResizeComponent from "./components/ResizeComponent";
import TimerComponent from "./components/TimerComponent";

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  // first : side-effect function
  // second : cleanup function
  // third : list of dependencies
  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  // Variation 1 : useEffect without dependency or return
  // Runs on evey render
  // useEffect(() => {
  //   alert("I run every time this component renders");
  // });

  // Variation 2 : useEffect with EMPTY dependency array
  // runs ONLY ONCE (on mount)
  // useEffect(() => {
  //   alert("Component mounted");
  // }, []);

  // Variation 3 : useEffect with dependencies
  // runs when those values change
  // useEffect(() => {
  //   alert("Count changed");
  // }, [count]);

  // Variation 4 : multiple dependencies
  // useEffect(() => {
  //   alert("Count/Total changed");
  // }, [count, total]);

  // Variation 5 : Add clean up function
  // useEffect(() => {
  //   alert("Count changed");

  //   return () => {
  //     alert("Count is unmounted from the UI");
  //   };
  // }, [count]);

  return (
    <div>
      {/* <LoggerComponent /> */}
      {/* <TimerComponent /> */}
      {/* <DataFetcher /> */}
      {/* <ResizeComponent /> */}
      <MultiEffectComponent />

      {/* Count : {count}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <br />
      <br />
      Total : {total}
      <br />
      <button
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        Click me
      </button> */}
    </div>
  );
}

export default App;
