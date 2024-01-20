import { useState } from "react";
import { useLocation } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, SetFilters] = useState({});
  const [sort, SetSorts] = useState("newest");
  const Reset = (e) => {
    SetFilters({});
  };
  const handleFilters = (e) => {
    const value = e.target.value;
    SetFilters({ ...filters, [e.target.name]: value });
  };
  return (
    <div>
      <Navbar />
      <Announcement />
      <h1 className="m-5 text-[30px]">{cat}</h1>
      <div className="flex justify-between">
        <div
          className={`m-5   ${mobile({
            width: "0px 20px",
            display: "flex",
            flexDirection: "column",
          })}`}
        >
          <span
            className={`text-[20px] font-600 mr-5 ${mobile({
              marginRight: "0px",
            })}`}
          >
            Filter Products:
          </span>
          <select
            onChange={handleFilters}
            name="color"
            className={`p-2.5 mr-5 ${mobile({ margin: "10px 0px" })}`}
          >
            <option disabled>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select
            onChange={handleFilters}
            name="size"
            className={`p-2.5 mr-5 ${mobile({ margin: "10px 0px" })}`}
          >
            <option disabled>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <button className="text-[20px] font-600" onClick={Reset}>
            Reset
          </button>
        </div>
        <div
          className={`m-5   ${mobile({
            width: "0px 20px",
            display: "flex",
            flexDirection: "column",
          })}`}
        >
          <span
            className={`text-[20px] font-600 mr-5 ${mobile({
              marginRight: "0px",
            })}`}
          >
            Sort Products:
          </span>
          <select
            className={`p-2.5 mr-5   ${mobile({ margin: "10px 0px" })}`}
            onChange={(e) => SetSorts(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
