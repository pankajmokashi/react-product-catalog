import { useContext } from "react";
import { AppContext } from "../context/ProductsContext";

function Searchbar() {
  const { searchValue, setSearchValue } = useContext(AppContext);

  return (
    <>
      <input
        type="text"
        name="search-product"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search..."
        className="px-3 py-2 flex-grow rounded-md bg-black text-white outline-none"
      />
    </>
  );
}

export default Searchbar;
