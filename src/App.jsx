import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { AppProvider } from "./context/ProductsContext";
import Products from "./pages/Products";

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
                <Products />
              </AppProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
