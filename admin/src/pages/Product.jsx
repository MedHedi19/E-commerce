import { Publish } from "@material-ui/icons";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Chart from "../components/Chart";
import { userRequest } from "../requestMethods";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const MONTHS = useMemo(
    () => [
      "Jan",
      "FEB",
      "MAR",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get(`orders/income?pid=${productId}`);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.data.map((item, index) =>
          setPStats((prev) => [
            ...prev,
            {
              name: MONTHS[item._id - 1],
              "Active User": item.total,
              id: index,
            },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className="flex-[4] p-5">
      <div className="flex items-center justify-between">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="w-[80px] border-none p-[5px] bg-[teal] text-white border-[5px] text-[16px] cursor-pointer">
            Create
          </button>
        </Link>
      </div>
      <div className="flex">
        <div className="flex-[1]">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="flex-[1] p-5 m-5 shadow-[0_0_15px_-10px_rgba(0,0,0,0.75)]">
          <div className="flex items-center">
            <img
              src={product.img}
              alt=""
              className="w-[40px] h-[40px] border-[50%] object-cover mr-5"
            />
            <span className="font-[600]">{product.title}</span>
          </div>
          <div className="mt-2.5">
            <div className="w-[150px] flex justify-between">
              <span className="productInfoKey">id:</span>
              <span className="font-[300]">{product._id}</span>
            </div>
            <div className="w-[150px] flex justify-between">
              <span className="productInfoKey">sales:</span>
              <span className="font-[300]">5123</span>
            </div>

            <div className="w-[150px] flex justify-between">
              <span className="productInfoKey">in stock:</span>
              <span className="font-[300]">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 m-5 shadow-[0_0_15px_-10px_rgba(0,0,0,0.75)]">
        <form className="flex justify-between">
          <div className="flex flex-col">
            <label className="text-[black]">Product Name</label>
            <input
              className="mb-5 p-[5px] border-b-2 border-gray-500 "
              type="text"
              placeholder={product.title}
            />
            <label className="text-[black]">Product Description</label>
            <input
              className="mb-5 p-[5px] border-b-2 border-gray-500 "
              type="text"
              placeholder={product.desc}
            />
            <label className="text-[black]">Price</label>
            <input
              className="mb-5 p-[5px] border-b-2 border-gray-500 "
              type="text"
              placeholder={product.price}
            />
            <label className="text-[black]">In Stock</label>
            <select className="mb-5" name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="flex flex-col justify-around">
            <div className="flex items-center">
              <img
                src={product.img}
                alt=""
                className="w-[100px] h-[100px] border-[1px] border-blue-500 object-cover mr-5"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="border-none p-[5px] border-[5px] bg-[darkblue] text-white font-[600] cursor-pointer">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
