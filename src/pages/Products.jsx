import { useContext } from "react";
import CategoryFilter from "../Components/CategoryFilter";
import FilterSlider from "../Components/FilterSlider";
import PriceSort from "../Components/PriceSort";
import ProductList from "../Components/ProductList";
import Searchbar from "../Components/Searchbar";
import products from "../assets/products.json";
import { AppContext } from "../context/ProductsContext";

function Products() {
  const { searchValue, sortByPrice, selectedCategories, clearFilters } =
    useContext(AppContext);
  let filteredData = products;

  // Apply search filter
  filteredData = products.filter(
    (item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Apply sorting (if any)
  if (sortByPrice) {
    filteredData = filteredData.sort((a, b) =>
      sortByPrice === "Low To high" ? a.price - b.price : b.price - a.price
    );
  }

  // Apply category filter
  if (selectedCategories.length > 0) {
    filteredData = filteredData.filter((item) =>
      selectedCategories.includes(item.category.toLowerCase())
    );
  }

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-screen-2xl px-4 xm:px-6 lg:px-8">
        <div className="flex justify-between border-b border-gray-200 pb-6 pt-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Products
          </h1>
          <div className="flex items-center">
            <div className="hidden lg:flex min-w-72 gap-2 justify-between">
              <Searchbar />
            </div>
            <FilterSlider />
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-4">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <div className="hidden lg:block">
              <h3 className="sr-only">Categories</h3>
              <CategoryFilter />
              <div className="border-t"></div>
              <PriceSort />
              <div className="text-gray-600 p-4 lg:border-0">
                <span onClick={clearFilters} className="cursor-pointer">
                  clear
                </span>
              </div>
            </div>

            {/* Product grid */}
            <div className="lg:col-span-3">
              <ProductList products={filteredData} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Products;
