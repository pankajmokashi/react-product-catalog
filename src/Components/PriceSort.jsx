import { useContext, useState } from "react";
import { AppContext } from "../context/ProductsContext";

const priceSort = ["Low To high", "High To Low"];

function PriceSort() {
  const [open, setOpen] = useState(false);
  const { sortByPrice, setSortByPrice } = useContext(AppContext);

  return (
    <div className="border-t border-gray-200 p-4 lg:border-0">
      <h3 className="-mx-2 -my-3 flow-root">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
        >
          <span className="font-medium text-gray-900">Sort By Price</span>
          <span className="ml-6 flex items-center">
            {!open && (
              <svg
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                data-slot="icon"
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
            )}
            {open && (
              <svg
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </button>
      </h3>

      {open && (
        <div className="pt-4 pb-2 space-y-4">
          {priceSort.map((item) => {
            const id = item.replace(/\s+/g, "-").toLowerCase();
            return (
              <div key={id} className="flex items-center">
                <input
                  name="sort-by-price"
                  id={id}
                  type="radio"
                  value={item}
                  checked={sortByPrice === item}
                  onChange={(e) => setSortByPrice(e.target.value)}
                  className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor={id}
                  className="ml-3 min-w-0 text-sm flex-1 text-gray-500"
                >
                  {item}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PriceSort;
