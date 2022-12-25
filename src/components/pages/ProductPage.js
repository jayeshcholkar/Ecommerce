import React from "react";
import { Link } from "react-router-dom";
import Email from "../Email";
import Navbar from "../Navbar";
import Notification from "../Notification";


const ProductPage = () => {

const Colors = ' rounded-full w-[2rem] h-[2rem] border-2 hover:border-black/30 ease-in duration-100'

  return (
    <div>
       <Notification /> 
      <Navbar />
      <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
            className="rounded-[1rem] hover:scale-[1.02] ease-in duration-100"
            alt="product_image"
          />
        </div>
        <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">
            Cream Hoody Orignal
          </h1>
          <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
          The cold won’t bother you anymore when you wear one of our jackets and sweaters.
           They’re made of the most durable materials and are superbly
            dense to keep you warm even on the coldest nights
          </p>
          <div className="flex flex-col place-self-start">
            <p className="mt-7 text-3xl">
              Price: <b>499rs/-</b>
            </p>

            <div className="colors flex mt-7 text-2xl gap-2">
              Colors
              <div className={ `bg-red-600` + Colors}></div>
              <div className= {` bg-blue-600` + Colors}></div>
              <div className={` bg-yellow-400 `+ Colors}></div>
            </div>

            <div className="mt-7 text-2xl">
              Size
              <select className="border-[2px] border-silver rounded-md ml-5">
                <option selected>Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
            </div>
            <div className="mt-7">
              {/* <Counter /> */}
            </div>
          </div>

          <Link to="/Address" className="text-white bg-[#1f1e20] rounded-[1rem] hover:bg-orange-700/50  hover:text-black ease-in duration-100 shadow-md mt-[30px] p-3 mb-3">
            Buy Now
          </Link>
        </div>
      </div>
      <Email />
    </div>
  );
};

export default ProductPage;