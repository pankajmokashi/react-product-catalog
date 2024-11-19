import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/ProductsContext";

function Header() {
  const { cartData } = useContext(AppContext);
  const navigate = useNavigate();

  const totalProducts = cartData.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="bg-black text-white">
      <header className="mx-auto max-w-screen-2xl px-4 xm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4">
          <div>
            <h1
              onClick={() => navigate("/")}
              className="text-2xl sm:text-4xl font-bold cursor-pointer"
            >
              CATALOG
            </h1>
          </div>

          <div>
            <button
              type="button"
              onClick={() => navigate("/cart")}
              className="p-2 relative rounded-md hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 sm:w-8 sm:h-8"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
              <span className="absolute text-[11px] top-[11px] right-[18px] sm:top-[12px] sm:right-[20px] sm:text-[12px] text-black font-bold">
                {totalProducts}
              </span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
