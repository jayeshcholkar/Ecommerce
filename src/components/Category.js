import React from "react";
import { Link, Outlet } from "react-router-dom";

function Category({ item }) {

  

  return (
    <div className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative">
      <img src={item.src} alt="" className="w-[100%] object-cover h-[20rem]"/>
      <div className="flex absolute w-[100%] h-[100%] top-0 left-0 
      items-center justify-center flex-col">
        <h2 className="text-white backdrop-blur-sm bg-black/30  font-mono
         text-[23px] rounded-[0.8rem] pr-2 pl-2">{item.title}</h2>
      <Link to="/CategoryPage"  className=" text-black bg-white
       rounded-[0.5rem] shadow-md p-1 mt-3 hover:scale-[1.0] ease-in 
       duration-100 hover:bg-black hover:text-white">See more</Link>
      </div>

      <Outlet/>
    </div>
  );
}

export default Category;
