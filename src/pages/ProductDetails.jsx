import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

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
      </main>
    </div>
  );
}

ProductDetails.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductDetails;
