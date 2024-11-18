import PropTypes from "prop-types";
import { createContext, useState } from "react";
import products from "../assets/products.json";
import { useNavigate } from "react-router-dom";

// Create the context
const AppContext = createContext();

// Create the provider component
const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  function clearFilters() {
    setSearchValue("");
    setSortByPrice("");
    setSelectedCategories([]);
  }

  // Add product to cart
  function addToCart(product) {
    setCartData((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    navigate("/cart");
  }

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCartData((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Return the provider with the context values
  return (
    <AppContext.Provider
      value={{
        products,
        searchValue,
        setSearchValue,
        sortByPrice,
        setSortByPrice,
        selectedCategories,
        setSelectedCategories,
        clearFilters,
        cartData,
        setCartData,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired, // Define children as a required node
};

export { AppContext, AppProvider };
