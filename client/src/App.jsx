import "./App.css";
import HomeRouter from "./components/HomeRouter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
    <div className="app">
      <HomeRouter />
    </div>
    </CartProvider>
  );
}

export default App;
