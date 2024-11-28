import { useState } from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductDetails({ product }) {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="w-full py-2 text-xs xm:text-sm font-medium rounded-lg border border-black hover:bg-black hover:text-white"
      >
        View Details
      </button>
      {show && (
        <div className="modal z-10">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="absolute mx-auto max-w-screen-md top-10 bottom-10 left-2 sm:left-10 right-2 sm:right-10 bg-white text-black rounded-xl p-2 py-16 sm:p-16">
            <div className="w-full h-full overflow-auto">
              <Product product={product} />
            </div>
            <div className="absolute top-0 right-0 sm:right-2 m-2 flex items-center">
              <button
                onClick={toggleModal}
                className="p-2 hover:bg-slate-200 rounded-lg"
              >
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="#000000"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetails;
