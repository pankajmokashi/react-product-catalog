import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

function ProductList({ products }) {
  const navigate = useNavigate();

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-2 sm:mt-6 grid grid-cols-1 gap-x-6 gap-y-12 xm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="group relative">
              <img
                loading="lazy"
                alt={product.name}
                src={product.image}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-2 text-sm xm:text-xs sm:text-sm flex justify-between">
                <h3 className="text-gray-700">{product.name}</h3>
                <p className="font-medium text-gray-900">$ {product.price}</p>
              </div>
              <div className="mt-3">
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="w-full py-2 text-sm bg-black text-white rounded-lg group-hover:opacity-75"
                >
                  View Details
                </button>
              </div>
            </div>
          </Link>
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
