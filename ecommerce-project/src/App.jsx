import { Routes, Route } from "react-router";

import { HomePage } from "./pages/HomePage";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { TrackingPage } from "./pages/TrackingPage";
import { OrdersPage } from "./pages/OrdersPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="Tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
