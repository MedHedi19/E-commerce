import React from "react";

function SocialIcon(props) {
  return (
    <div
      className={`w-10 h-10 rounded-full text-white bg-${props.color} flex items-center justify-center mr-5`}
    >
      {props.children}
    </div>
  );
}
export default SocialIcon;
