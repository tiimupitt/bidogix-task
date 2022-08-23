import { Outlet, Link } from "react-router-dom";
import ShopLogo from "assets/images/svg/ShopLogo";

function App() {
  return (
    <div className="w-screen h-screen">


      {/* header / navbar */}
      <nav className="flex fixed  z-20 ">
        <div className="flex absolute w-screen top-0 left-0 h-20 backdrop-filter backdrop-blur-md bg-white bg-opacity-50">
          <div className="bg-gradient-to-r from-primary to-blue-300 via-amber-500 w-full min-h-max flex-grow opacity-30" />
        </div>

        <div className="w-32 aspect-square z-10">
          <ShopLogo />
        </div>

        <div className="p-3 z-30">
          <h1 className="text-gray-900 uppercase font-normal tracking-wider text-2xl">Museum Shop</h1>
        </div>


        {/* <Link to='/browse-products' className="text-white">Browse art</Link> */}
        {/* <Link to='/single-product' /> */}


      </nav>
      {/* padding */}
      {/* <div className="h-20" /> */}

      <Outlet />

    </div>
  );
}

export default App;
