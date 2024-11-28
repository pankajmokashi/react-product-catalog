import { useContext } from "react";
import ProductList from "../Components/ProductList";
import Searchbar from "../Components/Searchbar";
import { AppContext } from "../context/ProductsContext";
import FilterSlider from "../Components/FilterSlider";
import Loading from "../Components/Loading";
import PriceSelect from "../Components/PriceSelect";
import CategorySelect from "../Components/CategorySelect";

function Products() {
  const { products, searchValue, sortByPrice, selectedCategories } =
    useContext(AppContext);
  let filteredData = products;

  const isLoading = filteredData.length === 0;

  // Apply search filter
  filteredData = products.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Apply sorting (if any)
  if (sortByPrice != "Sort") {
    filteredData = filteredData.sort((a, b) =>
      sortByPrice === "Low To High" ? a.price - b.price : b.price - a.price
    );
  }

  // Apply category filter
  if (selectedCategories.length > 0) {
    filteredData = filteredData.filter((item) =>
      selectedCategories.includes(item.category.toLowerCase())
    );
  }

  return (
    <div className="bg-gray-100">
      <main className="mx-auto max-w-screen-2xl px-4 xm:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-6 pt-12">
          <div className="flex items-center justify-between pb-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Products
            </h1>
            <div className="hidden md:flex max-w-72 items-center gap-2">
              <Searchbar />
            </div>
            <div className="md:hidden">
              <FilterSlider />
            </div>
          </div>
          <div className="flex items-center justify-end md:justify-between">
            <div className="hidden md:block">
              <CategorySelect />
            </div>
            <div className="flex items-center">
              <div className="hidden md:block mr-2">
                <PriceSelect />
              </div>
              <div className="flex md:hidden w-full items-center gap-2">
                <Searchbar />
              </div>
            </div>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-4">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          {/* Product grid */}
          <div className="">
            {isLoading ? (
              <div className="mt-20 flex justify-center">
                <Loading />
              </div>
            ) : filteredData.length > 0 ? (
              <div className="min-h-[400px]">
                <ProductList products={filteredData} />
              </div>
            ) : (
              <h2 className="text-center mt-20 text-lg">No Products</h2>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Products;
