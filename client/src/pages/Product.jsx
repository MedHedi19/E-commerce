import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
import { mobile } from "../responsive";

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const [clickedColors, setClickedColors] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`products/find/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleChoseColor = (c) => {
    setColor(c);
    setClickedColors((prevClickedColors) => {
      if (prevClickedColors.includes(c)) {
        return prevClickedColors.filter((color) => color !== c);
      } else {
        return [...prevClickedColors, c];
      }
    });
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <div>
      <Navbar />
      <Announcement />

      <div
        className={`p-[50px] flex   ${mobile({
          padding: "10px",
          flexDirection: "column",
        })}`}
      >
        <div className="flex-1">
          <img
            className={`w-full h-auto object-cover ${mobile({
              height: "40vh",
            })}`}
            alt="..."
            src={product.img}
          />
        </div>

        <div
          className={`flex-1 py-0 px-[50px] ${mobile({ padding: "10px" })}
`}
        >
          <h1 className="font-extralight">{product.title}</h1>
          <p className="my-5 mx-0">{product.desc}</p>
          <span className="font-thin text-sm">${product.price}</span>
          <div
            className={`w-[50%] my-[30px] mx-0 flex justify-between ${mobile({
              width: "100%",
            })}`}
          >
            <div className="flex items-center">
              <span className="text-[20px] font-extralight">Color</span>
              {product.color?.map((c) => (
                <FilterColor
                  className={`${
                    clickedColors.includes(c)
                      ? "border-[4px]	 border-[#545151] border-solid"
                      : ""
                  }`}
                  color={c}
                  key={c}
                  onClick={() => handleChoseColor(c)}
                />
              ))}
            </div>
            <div className="flex items-center">
              <span className="text-[20px] font-extralight">Size</span>
              <select
                onChange={(e) => setSize(e.target.value)}
                className="ml-2.5 p-[5px]"
              >
                {product.size?.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div
            className={`w-[50%] flex items-center justify-between   ${mobile({
              width: "100%",
            })}`}
          >
            <div className="flex items-center font-bold	">
              <Remove onClick={() => handleQuantity("dec")} />
              <span className="w-[30px] h-[30px] rounded-[10px] border-[1px] border-solid border-[teal] flex items-center justify-center my-0 mx-[5px]">
                {quantity}
              </span>
              <Add onClick={() => handleQuantity("asc")} />
            </div>
            <button
              onClick={handleClick}
              className="p-[15px] border-2 border-solid border-[teal] bg-white cursor-pointer font-medium hover:bg-[#f8f4f4]"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
