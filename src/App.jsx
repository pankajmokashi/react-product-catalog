import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { AppProvider } from "./context/ProductsContext";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import products from "./assets/products.json";

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <AppProvider>
                <Products products={products} />
              </AppProvider>
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetails products={products} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
