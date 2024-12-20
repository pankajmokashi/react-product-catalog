import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { AppProvider } from "./context/ProductsContext";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import "./App.css";

export default function App() {
  return (
    <div>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AppProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}
