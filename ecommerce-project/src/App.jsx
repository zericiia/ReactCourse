import { Routes, Route } from "react-router";

import { HomePage } from "./pages/HomePage";
import { Checkout } from "./pages/CheckoutPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<Checkout />} />
      {/* <Route path="orders" element={<Orders />} /> */}
      {/* <Route path="Tracking" element={<Tracking />} /> */}
    </Routes>
  );
}

export default App;
