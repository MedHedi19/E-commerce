import { Link } from "react-router-dom";
import { mobile } from "../responsive";

import React from "react";

function CategoryItem({ item }) {
  return (
    <div className="flex-1 m-1 h-[70vh] relative ">
      <Link to={`/products/${item.cat}`}>
        <img
          className={`h-full object-cover	w-full ${mobile({ height: "20vh" })}`}
          src={item.img}
          alt="...."
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-white mb-5">{item.title}</h1>
          <button className="border-none p-2.5 bg-white text-gray-700 cursor-pointer font-semibold">
            SHOP NOW
          </button>
        </div>
      </Link>
    </div>
  );
}

export default CategoryItem;
