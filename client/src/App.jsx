import "./App.css";
import HomeRouter from "./components/HomeRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
    <div className="app">
      <HomeRouter />
      <ToastContainer />
    </div>
    </CartProvider>
  );
}

export default App;
