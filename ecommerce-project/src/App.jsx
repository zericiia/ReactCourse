import { Routes, Route } from "react-router";

import { HomePage } from "./pages/HomePage";
import { CheckoutPAge } from "./pages/CheckoutPage";
import { TrackingPage } from "./pages/TrackingPage";
import { OrdersPage } from "./pages/OrdersPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPAge />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="Tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
