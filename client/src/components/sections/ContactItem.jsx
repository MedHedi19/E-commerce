import React from "react";

function ContactItem(props) {
  return <div className="mb-5 flex items-center">{props.children} </div>;
}

export default ContactItem;
