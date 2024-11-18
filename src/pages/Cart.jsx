import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/ProductsContext";
import CartList from "../Components/CartList";

function Cart() {
  const { cartData } = useContext(AppContext);

  const totalProducts = cartData.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-screen-2xl px-4 xm:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-6 pt-12 flex items-center justify-between">
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
                className="w-4 h-4 sm:w-6 sm:h-6"
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
          <div className="text-lg sm:text-2xl font-medium">
            Total items = {totalProducts}
          </div>
        </div>
        <div className="w-full sm:px-8 py-8 sm:py-16">
          {cartData.length > 0 ? (
            <div className="mx-auto max-w-lg">
              <CartList />
              <div className="flex justify-center pt-4 sm:pt-8">
                <button className="w-full max-w-md text-center bg-blue-500 text-white font-semibold py-2 rounded-lg hover:scale-95">
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <div>No products added to cart</div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Cart;
