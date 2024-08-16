import "./App.css";
import HomeRouter from "./components/HomeRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="app">
      <HomeRouter />
      <ToastContainer />
    </div>
  );
}

export default App;
