import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../context/ProductsContext";

function ProductList({ products }) {
  const { addToCart } = useContext(AppContext);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-2 sm:mt-6 grid grid-cols-1 gap-x-6 gap-y-12 xm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-2xl p-4 rounded-lg">
            <div className="overflow-hidden rounded-md">
              <img
                loading="lazy"
                alt={product.name}
                src={product.image}
                className="aspect-square w-full bg-gray-200 object-cover hover:scale-110 lg:aspect-auto lg:h-80"
              />
            </div>
            <div className="mt-2 text-sm xm:text-xs sm:text-sm flex justify-between">
              <h3 className="text-gray-700">{product.name}</h3>
              <p className="font-medium text-gray-900">$ {product.price}</p>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <button className="w-full py-2 text-sm rounded-lg border border-black hover:bg-black hover:text-white">
                View Details
              </button>
              <button
                onClick={() => addToCart(product)}
                className="w-full py-2 text-sm rounded-lg border border-black hover:bg-black hover:text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;
