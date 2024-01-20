import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import { mobile } from "../responsive";
import ContactItem from "./sections/ContactItem";
import ListItem from "./sections/ListItem";
import SocialIcon from "./sections/SocialIcon";

function Footer() {
  return (
    <div className={`flex ${mobile({ flexDirection: "column" })}  `}>
      <div className="flex flex-1 flex-col p-5 ">
        <h1>LAMA.</h1>
        <p className="my-5 mx-0">
          {" "}
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="flex">
          <SocialIcon color="#3B599">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
        </div>
      </div>
      <div className={`flex-1 p-5 ${mobile({ display: "none" })}`}>
        <div className="mb-[30px]">Useful Links</div>
        <ul className="m-0 p-0 list-none flex flex-wrap">
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </ul>
      </div>
      <div className={`flex-1 p-5 ${mobile({ backgroundColor: "#fff8f8" })}`}>
        <div className="mb-[30px]">Contact</div>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78 Tobinchester
          98336
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev
          Tobinchester 98336
        </ContactItem>
        <img
          className="w-2/4"
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="payment"
        />
      </div>
    </div>
  );
}

export default Footer;
