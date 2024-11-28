import PropTypes from "prop-types";
import { AppContext } from "../context/ProductsContext";
import { useContext } from "react";

function Product({ product }) {
  const { addToCart } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center mx-auto">
      <div>
        <div className="mb-6">
          <h2 className="text-xl xm:text-2xl sm:text-3xl font-bold mb-2">
            {product.name}
          </h2>
          <span className="px-6 pt-1 pb-2 bg-gray-200 rounded-lg text-sm font-medium text-slate-700">
            {product.category}
          </span>
        </div>
        <div className="w-full xm:max-w-md md:max-w-full p-4 flex flex-col justify-center md:flex-row gap-8">
          <div className="mx-auto max-w-[300px] h-full overflow-hidden rounded-md">
            <img
              loading="lazy"
              alt={product.name}
              src={product.image}
              className="w-full h-full shadow-lg hover:scale-110 transition-all"
            />
          </div>
          <div className="max-w-sm md:pl-8 pb-8">
            <div className="text-base sm:text-lg xm:text-xl font-bold mb-2">
              ${product.price}
            </div>
            <p className="text-xs xm:text-sm sm:text-base mb-2 sm:mb-4 text-gray-600">
              {product.description}
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => addToCart(product)}
                className="w-full py-2 text-xs sm:text-sm font-medium rounded-md border border-black hover:bg-black hover:text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
