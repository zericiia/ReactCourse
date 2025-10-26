import { Routes, Route } from "react-router";

import { HomePage } from "./pages/HomePage";
import { Checkout } from "./pages/Checkout";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<div>hello from checkout</div>} />
    </Routes>
  );
}

export default App;
