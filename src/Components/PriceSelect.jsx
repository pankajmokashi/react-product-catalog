import { useContext } from "react";
import { AppContext } from "../context/ProductsContext";

function PriceSelect() {
  const { sortByPrice, setSortByPrice } = useContext(AppContext);

  return (
    <select
      value={sortByPrice}
      onChange={(e) => setSortByPrice(e.target.value)}
      className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
    >
      <option value="Sort" disabled>
        Sort
      </option>
      <option value="Low To High">Low To High</option>
      <option value="High To Low">High To Low</option>
    </select>
  );
}

export default PriceSelect;
