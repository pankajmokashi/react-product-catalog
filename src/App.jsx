import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { AppProvider } from "./context/ProductsContext";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

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
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}
