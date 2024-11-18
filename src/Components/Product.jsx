import PropTypes from "prop-types";

function Product({ product }) {
  return (
    <div className="mx-auto w-full xm:max-w-md md:max-w-full p-4 sm:p-8 lg:px-16 flex flex-col md:flex-row gap-8">
      <div className="h-full">
        <img
          alt={product.name}
          src={product.image}
          className="w-full md:max-w-sm h-full rounded-md mx-auto shadow-lg"
        />
      </div>
      <div className="md:pt-12 md:pl-8 pb-8">
        <h2 className="text-xl xm:text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
          {product.name}
        </h2>
        <p className="text-xs xm:text-sm sm:text-base mb-2 sm:mb-4 max-w-md">
          {product.description}
        </p>
        <div className="text-base sm:text-lg xm:text-xl font-bold mb-4">
          ${product.price}
        </div>
        <div className="flex justify-center">
          <button className="w-full max-w-md py-2 bg-black text-white font-medium rounded-md hover:opacity-80">
            Add to cart
          </button>
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
