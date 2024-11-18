import { useContext, useState } from "react";
import { AppContext } from "../context/ProductsContext";

const categoryFilters = [
  "electronics",
  "jewellery",
  "men's clothing",
  "women's clothing",
];

function CategoryFilter() {
  const [open, setOpen] = useState(false);
  const { selectedCategories, setSelectedCategories } = useContext(AppContext);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories((prev) => [...prev, value]);
    } else {
      setSelectedCategories((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <div className="border-gray-200 p-4 lg:border-0">
      <h3 className="-mx-2 -my-3 flow-root">
        <button
          type="button"
          className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
        >
          <span className="font-medium text-gray-900">Category</span>
          <span className="ml-6 flex items-center">
            {!open && (
              <svg
                onClick={() => setOpen(true)}
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
                onClick={() => setOpen(false)}
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
        <div className="pt-4 space-y-4">
          {categoryFilters.map((category) => (
            <div key={category} className="flex items-center">
              <input
                name="category[]"
                id={category}
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={handleCheckboxChange}
                className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor={category}
                className="ml-3 min-w-0 text-sm flex-1 text-gray-500 capitalize"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryFilter;
