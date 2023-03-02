import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import FoodMenu from "./Pages/FoodMenu";
import FoodPage from "./Pages/FoodPage";
import { CartProvider } from "react-use-cart";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<FoodMenu />} />
        <Route path="foodpage" element={<FoodPage />} />
      </Routes>
      <CartProvider>
        <Cart />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
