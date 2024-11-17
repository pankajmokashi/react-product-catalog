import PropTypes from "prop-types";
import { createContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Create the provider component
const AppProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  function clearFilters() {
    setSearchValue("");
    setSortByPrice("");
    setSelectedCategories([]);
  }

  // Return the provider with the context values
  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        sortByPrice,
        setSortByPrice,
        selectedCategories,
        setSelectedCategories,
        clearFilters,
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
