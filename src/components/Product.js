import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { Link, Outlet } from "react-router-dom";
function Product({ item }) {
  const [hoverEffect, setHoverEffect] = useState(" opacity-0");

  const HandleEffect = () => {
    setHoverEffect(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  };
  const HandleEffectExit = () => {
    setHoverEffect(" opacity-0");
  };

  const icons =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center cursor-pointer m-2.5 hover:bg-[#442C2E] hover:text-white hover:scale-[1.1] ease-in-out duration-150";
  return (
    <Link to="/ProductPage">
      <div
        className="flex flex-1 items-center justify-center min-w-[250px] 
    min-h-[350px] overflow-hidden rounded-[1rem] shadow-lg m-2 relative"
        onMouseEnter={HandleEffect}
        onMouseLeave={HandleEffectExit}
      >
        <img src={item.src} alt="" className="object-cover h-[22rem]" />
        <div
          className={
            `flex items-center justify-center w-full h-full absolute ease-in duration-150` +
            hoverEffect
          }
        >
          <div className={icons}>
            <AddShoppingCartIcon />
          </div>
          <div className={icons}>
            <FavoriteBorderIcon />
          </div>
          <div className={icons}>
            <ShareIcon />
          </div>
        </div>
      </div>
      <Outlet />
    </Link>
  );
}

export default Product;
