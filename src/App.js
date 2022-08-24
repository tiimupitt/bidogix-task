import { Outlet, Link } from "react-router-dom";
import ShopLogo from "assets/images/svg/ShopLogo";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearProducts, addToBasket, removeFromBasket } from 'store/slices/productSlice';
import classNames from "classnames";

function App() {

  const dispatch = useDispatch();
  const { basket } = useSelector(state => state.product);
  const [showBasket, setShowBasket] = useState(false);

  const toggleBasket = () => setShowBasket(!showBasket);

  function basketTotal() {
    let total = 0;
    for (const key in basket) {
      total += basket[key].count;
    }
    return total;
  }

  return (
    <div className="w-screen h-screen">

      {/* header / navbar */}
      <nav className="flex fixed w-full  z-20 ">
        <div className="flex absolute w-screen top-0 left-0 h-20 backdrop-filter backdrop-blur-md bg-white bg-opacity-50">
          <div className="bg-gradient-to-r from-primary to-blue-300 via-amber-500 w-full min-h-max flex-grow opacity-30" />
        </div>

        {/* brand logo */}
        <div className="w-32 aspect-square z-10 shadow-lg rounded-br-2xl overflow-hidden">
          <ShopLogo />
        </div>

        <div className="px-6 z-30 h-20 flex w-full flex-grow justify-between items-center select-none">

          {/* title */}
          <h1 className="text-gray-800 uppercase font-medium tracking-wider text-2xl">Museum Shop</h1>

          {/* open basket button */}
          <div className="relative cursor-pointer" onClick={toggleBasket}>
            {basketTotal() > 0 && <div className="absolute -top-2 -right-2 bg-primary w-5 h-5 flex justify-center items-center rounded-full ">
              <span className="text-sm font-bold">{basketTotal()}</span>
            </div>}
            <AiOutlineShoppingCart className="w-8 h-8 text-gray-800 " />
          </div>
        </div>
      </nav>

      {/* basket */}
      <div className={classNames([
        "p-4 bg-primary top-6 rounded-2xl transition-all duration-100 ml-6 right-6 flex flex-col items-center mt-20 z-30 shadow-2xl fixed text-gray-50",
        showBasket ? 'opacity-100' : 'opacity-0 pointer-events-none'
      ])}>
        <h2 className="font-semibold text-xl" >Your basket ({basketTotal() || 'empty'})</h2>
        <div className="flex flex-col gap-3 mt-4">

          {/* product in basket */}
          {Object.keys(basket).map(key => {
            const { product, count } = basket[key];
            return (
              <div className="flex justify-between items-center w-full gap-6">
                <p>{product.title}</p>
                <div className="flex gap-4 items-center">
                  <p>{count}</p>
                  <div className="bg-gray-100 text-gray-900 flex w-20 cursor-pointer text-2xl font-medium rounded-full divide-x divide-gray-400">
                    <div className="flex-grow flex justify-center items-center" onClick={() => dispatch(addToBasket(product))}>+</div>
                    <div className="flex-grow flex justify-center items-center" onClick={() => dispatch(removeFromBasket(product))}>-</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <Outlet />

    </div>
  );
}

export default App;
