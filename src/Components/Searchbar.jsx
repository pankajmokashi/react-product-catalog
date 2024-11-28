import { useContext, useState } from "react";
import { AppContext } from "../context/ProductsContext";

function Searchbar() {
  const [value, setValue] = useState("");
  const { setSearchValue } = useContext(AppContext);

  return (
    <>
      <input
        type="text"
        name="search-product"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        className="px-3 py-2 flex-grow rounded-md bg-white border border-black outline-none"
      />
      <button
        onClick={() => setSearchValue(value)}
        className="px-3 py-2 rounded-md border bg-black text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </>
  );
}

export default Searchbar;
