import { useContext } from "react";
import { AppContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";

function CartList() {
  const { cartData, setCartData, removeFromCart } = useContext(AppContext);

  // Increase product quantity
  const increaseQuantity = (productId) => {
    setCartData((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease product quantity
  const decreaseQuantity = (productId) => {
    setCartData(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove item if quantity reaches 0
    );
  };

  return (
    <div>
      {cartData.map((product) => (
        <div key={product.id} className="mb-8">
          <div className="grid grid-cols-5 gap-4 sm:gap-8">
            <div className="col-span-2 xm:p-4 xm:border xm:border-slate-300 rounded-lg">
              <Link to={`/product/${product.id}`}>
                <img
                  loading="lazy"
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full rounded-lg hover:scale-105"
                />
              </Link>
            </div>
            <div className="col-span-3 py-0 xm:py-4">
              <div className="text-sm xm:text-base sm:text-lg font-bold">
                {product.name}
              </div>
              <div className="text-xs sm:text-base font-medium">
                ${product.price}
              </div>
              <div className="flex items-center gap-2 mt-2 sm:mt-3">
                <button
                  disabled={product.quantity === 1}
                  onClick={() => decreaseQuantity(product.id)}
                  className={`border p-[1px] sm:p-[2px] border-slate-400 cursor-pointer rounded ${
                    product.quantity === 1 ? "bg-gray-200" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <div className="px-0.5 sm:px-1.5 text-sm sm:text-base">
                  {product.quantity}
                </div>
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="border p-[1px] sm:p-[2px] border-slate-400 cursor-pointer rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3 h-3 sm:w-4 sm:h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>

              <div className="hidden xm:block mt-2 sm:mt-4">
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="w-full max-w-48 text-xs sm:text-sm py-2 bg-black text-white rounded-lg hover:opacity-80"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
          <div className="xm:hidden mt-1.5">
            <button
              onClick={() => removeFromCart(product.id)}
              className="w-full text-xs sm:text-sm py-2 bg-black text-white rounded-lg hover:opacity-80"
            >
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartList;
