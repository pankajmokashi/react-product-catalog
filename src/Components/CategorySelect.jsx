import { useContext } from "react";
import { AppContext } from "../context/ProductsContext";

const categoryFilters = [
  "electronics",
  "jewellery",
  "men's clothing",
  "women's clothing",
];

function CategorySelect() {
  const { selectedCategories, setSelectedCategories } = useContext(AppContext);

  const handleSelect = (category) => {
    if (selectedCategories.includes(category)) {
      // Remove category from selectedCategories
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      // Add category to selectedCategories
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {categoryFilters.map((category) => (
        <div
          key={category}
          onClick={() => handleSelect(category)}
          className={`px-4 py-2 text-sm font-medium border rounded-md capitalize cursor-pointer ${
            selectedCategories.includes(category)
              ? "bg-white"
              : "bg-gray-100 hover:bg-white"
          }`}
        >
          {category}
        </div>
      ))}
    </div>
  );
}

export default CategorySelect;
