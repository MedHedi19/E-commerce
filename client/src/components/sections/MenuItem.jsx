import React from "react";
import { mobile } from "../../responsive";

function MenuItem(props) {
  return (
    <div
      className={`text-sm cursor-auto ml-[25px]  ${mobile({
        fontSize: "12px",
        marginLeft: "10px",
      })}`}
    >
      {props.children}
    </div>
  );
}

export default MenuItem;
