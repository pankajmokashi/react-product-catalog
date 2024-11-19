import { useContext } from "react";
import ProductList from "../Components/ProductList";
import Searchbar from "../Components/Searchbar";
import { AppContext } from "../context/ProductsContext";
import PriceSort from "../Components/PriceSort";
import CategoryFilter from "../Components/CategoryFilter";
import FilterSlider from "../Components/FilterSlider";
import Loading from "../Components/Loading";

function Products() {
  const {
    products,
    searchValue,
    sortByPrice,
    selectedCategories,
    clearFilters,
  } = useContext(AppContext);
  let filteredData = products;

  const isLoading = filteredData.length === 0;

  // Apply search filter
  filteredData = products.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
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
              {isLoading ? (
                <div className="mt-20 flex justify-center">
                  <Loading />
                </div>
              ) : filteredData ? (
                <div className="min-h-[400px]">
                  <ProductList products={filteredData} />
                </div>
              ) : (
                <h2 className="text-center mt-20 text-lg">No Products</h2>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Products;
