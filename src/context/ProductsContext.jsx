import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create the context
const AppContext = createContext();

// Create the provider component
const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortByPrice, setSortByPrice] = useState("Sort");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  // fetch products from https://designer.mocky.io/design
  useEffect(() => {
    const url = `https://run.mocky.io/v3/ed766f71-aa0f-4551-a3ac-500672c1cbab`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }, []);

  // Initialize cart from localStorage on page load
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartData"));
    if (savedCart) {
      setCartData(savedCart);
    }
  }, []);

  // Save cartData to localStorage when it changes
  useEffect(() => {
    if (cartData.length > 0) {
      localStorage.setItem("cartData", JSON.stringify(cartData));
    } else {
      localStorage.removeItem("cartData");
    }
  }, [cartData]);

  // clear filter states
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
