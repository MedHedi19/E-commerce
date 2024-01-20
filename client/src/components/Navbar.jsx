import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div
      className={`h-[60px] ${mobile({ height: "50px" })}
    `}
    >
      <div
        className={`py-[10px] px-[20px] flex items-center justify-between  ${mobile(
          { padding: "10px 0px" }
        )}`}
      >
        <div className="flex-1 flex items-center">
          <span
            className={`text-[14px] cursor-pointer   ${mobile({
              display: "none",
            })}`}
          >
            EN
          </span>
          <div className="border-[0.5px] border-solid border-gray-500 items-center ml-[25px] p-[5px]">
            <input
              className={`border-none   ${mobile({ width: "50px" })}`}
              placeholder="Search"
            />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="flex-1 text-center">
          <Link to="/">
            <h1 className={`font-bold  ${mobile({ fontSize: "24px" })}`}>
              LAMA.
            </h1>
          </Link>
        </div>
        <div
          className={`flex-1 flex items-center justify-end ${mobile({
            flex: 2,
            justifyContent: "center",
          })}
`}
        >
          <Link to="/register">
            <div
              className={`text-[14px] cursor-pointer ml-[25px] ${mobile({
                fontSize: "12px",
                marginLeft: "10px",
              })}`}
            >
              REGISTER
            </div>
          </Link>
          <Link to="/login">
            <div
              className={`text-[14px] cursor-pointer ml-[25px] ${mobile({
                fontSize: "12px",
                marginLeft: "10px",
              })}`}
            >
              SIGN IN
            </div>
          </Link>
          <Link to="/cart">
            <div
              className={`text-[14px] cursor-pointer ml-[25px] ${mobile({
                fontSize: "12px",
                marginLeft: "10px",
              })}
`}
            >
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
