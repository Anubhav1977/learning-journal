import { Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
// import { routes } from "./Routes/routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <AppRoutes /> */}
      {/* child routes get rendered here */}
      <Outlet />
    </div>
  );
}

export default App;
