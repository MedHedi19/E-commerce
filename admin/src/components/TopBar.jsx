import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";

export default function TopBar() {
  return (
    <div className="w-[100%] h-[50px] bg-[white] sticky top-0  z-50">
      <div className="h-[100%] py-0 px-5 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-bold text-[30px] text-[darkblue] cursor-pointer">
            lamaadmin
          </span>
        </div>
        <div className="flex items-center">
          <div className="relative cursor-pointer mr-2.5 text-[#555]">
            <NotificationsNone />
            <span className="h-[15px] w-[15px] absolute top-[-5px] right-0 bg-[red] text-[white] rounded-[50%]  flex items-center justify-center text-[10px]">
              2
            </span>
          </div>
          <div className="relative cursor-pointer mr-2.5 text-[#555]">
            <Language />
            <span className="h-[15px] w-[15px] absolute top-[-5px] right-0 bg-[red] text-[white] rounded-[50%]  flex items-center justify-center text-[10px]">
              2
            </span>
          </div>
          <div className="relative cursor-pointer mr-2.5 text-[#555]">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="w-[40px] h-[40px] rounded-[50%] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
