import { useContext } from "react";
import { Link } from "react-router-dom";


import { Plus, Eye } from "lucide-react";

import { useCart } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { cart, dispatch } = useCart();
  const { id, image, category, title, price } = product;

  const disabled = cart.some((product) => product.id === id);

  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img
              className='max-h-[160px] group-hover:scale-110 transition duration-300'
              src={image}
              alt=''
            />
          </div>
        </div>
        <div className='border absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button
            disabled={disabled}
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            <div
              className={`flex justify-center items-center text-white w-12 h-12 ${
                disabled ? "bg-gray-200" : "bg-teal-500"
              }`}
            >
              <Plus className='text-3xl' />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'
          >
            <Eye />
          </Link>
        </div>
      </div>
      <div>
        <div className='tex-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>

        <h2 className='font-semibbold'>$ {price}</h2>
      </div>
    </div>
  );
};

export default Product;
