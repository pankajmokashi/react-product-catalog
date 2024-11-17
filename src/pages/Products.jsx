import ProductList from "../Components/ProductList";
import products from "../assets/products.json";

function Products() {
  let filteredData = products;

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-screen-2xl px-4 xm:px-6 lg:px-8">
        <div className="flex justify-between border-b border-gray-200 pb-6 pt-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Products
          </h1>
          <div className="flex items-center"></div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-4">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <div className="hidden lg:block"></div>

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
