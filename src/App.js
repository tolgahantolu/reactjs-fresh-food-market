import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
