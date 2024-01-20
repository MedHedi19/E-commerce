import { Button } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { userRequest } from "../requestMethods";
import { mobile } from "../responsive";

const KEY = process.env.REACT_APP_STRIPE;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripToken, setStripToken] = useState(null);
  const onToken = (token) => {
    setStripToken(token);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripToken.id,
          amount: 500,
        });
        console.log(res.status);
        console.log(res.err);
        navigate("/success", { data: res.data });
      } catch (err) {
        console.log(err);
      }
    };
    stripToken && cart.total >= 1 && makeRequest();
  }, [stripToken, cart.total, navigate]);

  return (
    <div>
      <Navbar />
      <Announcement />
      <div className={`p-5 ${mobile({ padding: "10px" })}`}>
        <h1 className="font-light text-center">YOUR BAG</h1>
        <div className="flex items-center justify-between p-5">
          <TopButton>CONTINUE SHOPPING</TopButton>
          <div className={`  ${mobile({ display: "none" })}`}>
            <span className="underline cursor-pointer my-0 mx-2.5">
              Shopping Bag(2)
            </span>
            <span className="underline cursor-pointer my-0 mx-2.5">
              Your Wishlist (0)
            </span>
          </div>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </div>

        <div
          className={`flex justify-between ${mobile({
            flexDirection: "column",
          })}`}
        >
          <div className="flex-[3]">
            {cart.products.map((product, key) => (
              <div
                key={key + 1}
                className={`flex justify-between   ${mobile({
                  flexDirection: "column",
                })}`}
              >
                <div className="flex-[2] flex">
                  <img className="w-[200px]" alt="..." src={product.img} />
                  <div className="p-5 flex flex-col justify-around">
                    <span>
                      <b>Product:</b> {product.title}
                    </span>
                    <span>
                      <b>ID:</b> {product._id}
                    </span>
                    <ProductColor color={product.color} />
                    <span>
                      <b>Size:</b> {product.size}
                    </span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="flex items-center mb-5">
                    <Add />
                    <div
                      className={`text-[24px] m-[5px] ${mobile({
                        margin: "5px 15px",
                      })}`}
                    >
                      {product.quantity}
                    </div>
                    <Remove />
                  </div>
                  <div
                    className={`font-extralight text-3xl ${mobile({
                      marginBottom: "20px",
                    })}`}
                  >
                    $ {product.price * product.quantity}
                  </div>
                </div>
              </div>
            ))}
            <hr className="bg-[#eee] border-none h-[1px]" />
          </div>
          <div className="flex-1 border-[0.5px] border-solid border-[lightgray] rounded-[10px] p-5 h-[50vh]">
            <h1 className="font-extralight">ORDER SUMMARY</h1>
            <SummaryItem>
              <span>Subtotal</span>
              <span>$ {cart.total}</span>
            </SummaryItem>
            <SummaryItem>
              <span>Estimated Shipping</span>
              <span>$ 5.90</span>
            </SummaryItem>
            <SummaryItem>
              <span>Shipping Discount</span>
              <span>$ -5.90</span>
            </SummaryItem>
            <SummaryItem type="total">
              <span>Total</span>
              <span>$ {cart.total}</span>
            </SummaryItem>
            <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
