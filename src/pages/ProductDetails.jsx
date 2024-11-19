import { Link, useParams } from "react-router-dom";
import Product from "../Components/Product";
import { useContext } from "react";
import { AppContext } from "../context/ProductsContext";
import Loading from "../Components/Loading";

function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(AppContext);
  const product = products.find((p) => p.id === parseInt(id));

  const isLoading = products.length === 0;

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-screen-2xl px-4 xm:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-6 pt-12">
          <button>
            <Link
              to="/"
              className="px-4 py-2 flex gap-2 bg-black text-white rounded hover:opacity-80"
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
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              <span className="font-medium hidden sm:inline">
                Back to Products
              </span>
            </Link>
          </button>
        </div>
        {isLoading ? (
          <div className="mt-20 flex justify-center">
            <Loading />
          </div>
        ) : product ? (
          <div className="min-h-[400px]">
            <Product product={product} />
          </div>
        ) : (
          <h2 className="text-center mt-20 text-lg">Product not found</h2>
        )}
      </main>
    </div>
  );
}

export default ProductDetails;
