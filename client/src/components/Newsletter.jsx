import { Send } from "@material-ui/icons";
import React from "react";
import { mobile } from "../responsive";

function Newsletter() {
  return (
    <div className="h-[60vh] bg-[#fcf5f5] flex items-center justify-center flex-col">
      <h1 className="text-7xl mb-5">Newsletter</h1>
      <div
        className={`text-2xl font-light mb-5 ${mobile({
          textAlign: "center",
        })}`}
      >
        Get timely updates from your favorite products.
      </div>
      <div
        className={`w-2/4 h-10 bg-white flex justify-between border border-solid border-light-gray-300 ${mobile(
          {
            width: "80%",
          }
        )}`}
      >
        <input className="border-none flex-1 pl-5" placeholder="Your email" />
        <button className="flex-1 border-none bg-teal-400 text-white">
          <Send />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
