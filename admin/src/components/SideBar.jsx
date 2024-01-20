import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function SideBar() {
  const [activeItems, setActiveItems] = useState(Array(10).fill(false));

  const handleItemClick = (index) => {
    setActiveItems(index);
  };
  return (
    <div className="flex-[1] h-[calc(100vh-50px)] bg-[#fbfbff] sticky top-[50px]">
      <div className="p-5 text-[#555]">
        <div className="mb-2.5">
          <h3 className="text-[13px] text-[#bbbaba]">Dashboard</h3>
          <ul className="list-none p-[5px]">
            <Link to="/" className="link">
              <li
                onClick={() => handleItemClick(0)}
                className={`
                  p-[5px] cursor-pointer flex items-center rounded-[10px] hover:bg-[#f0f0ff]
                  ${activeItems === 0 ? "bg-[#f0f0ff]" : ""}
                `}
              >
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li
              onClick={() => handleItemClick(1)}
              className={`
                  p-[5px] cursor-pointer flex items-center rounded-[10px] hover:bg-[#f0f0ff]
                  ${activeItems === 1 ? "bg-[#f0f0ff]" : ""}
                `}
            >
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li
              onClick={() => handleItemClick(2)}
              className={`
                  p-[5px] cursor-pointer flex items-center rounded-[10px] hover:bg-[#f0f0ff]
                  ${activeItems === 2 ? "bg-[#f0f0ff]" : ""}
                `}
            >
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="mb-2.5">
          <h3 className="text-[13px] text-[#bbbaba]">Quick Menu</h3>
          <ul className="list-none p-[5px]">
            <Link to="/users" className="link">
              <li
                onClick={() => handleItemClick(3)}
                className={`
                  p-[5px] cursor-pointer flex items-center rounded-[10px] hover:bg-[#f0f0ff]
                  ${activeItems === 3 ? "bg-[#f0f0ff]" : ""}
                `}
              >
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li
                onClick={() => handleItemClick(4)}
                className={`
                  p-[5px] cursor-pointer flex items-center rounded-[10px] hover:bg-[#f0f0ff]
                  ${activeItems === 4 ? "bg-[#f0f0ff]" : ""}
                `}
              >
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li
              onClick={() => handleItemClick(5)}
              className={`
                  p-[5px] cursor-pointer flex items-center rounded-[10px] hover:bg-[#f0f0ff]
                  ${activeItems === 5 ? "bg-[#f0f0ff]" : ""}
                `}
            >
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li
              onClick={() => handleItemClick(6)}
              className={`
                  p-[5px] cursor-pointer flex items-center rounded-[10px] hover:bg-[#f0f0ff]
                  ${activeItems === 6 ? "bg-[#f0f0ff]" : ""}
                `}
            >
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="mb-2.5">
          <h3 className="text-[13px] text-[#bbbaba]">Notifications</h3>
          <ul className="list-none p-[5px]">
            <li
              onClick={() => handleItemClick(7)}
              className={`
                  p-[5px] cursor-pointer flex items-center rounded-[10px] hover:bg-[#f0f0ff]
                  ${activeItems === 7 ? "bg-[#f0f0ff]" : ""}
                `}
            >
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li
              onClick={() => handleItemClick(8)}
              className={`
                  p-[5px] cursor-pointer flex items-center rounded-[10px] hover:bg-[#f0f0ff]
                  ${activeItems === 8 ? "bg-[#f0f0ff]" : ""}
                `}
            >
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li
              onClick={() => handleItemClick(9)}
              className={`
                  p-[5px] cursor-pointer flex items-center rounded-[10px] hover:bg-[#f0f0ff]
                  ${activeItems === 9 ? "bg-[#f0f0ff]" : ""}
                `}
            >
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="mb-2.5">
          <h3 className="text-[13px] text-[#bbbaba]">Staff</h3>
          <ul className="list-none p-[5px]">
            <li
              onClick={() => handleItemClick(10)}
              className={`
                  p-[5px] cursor-pointer flex items-center rounded-[10px] hover:bg-[#f0f0ff]
                  ${activeItems === 10 ? "bg-[#f0f0ff]" : ""}
                `}
            >
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li
              onClick={() => handleItemClick(11)}
              className={`
                  p-[5px] cursor-pointer flex items-center rounded-[10px] hover:bg-[#f0f0ff]
                  ${activeItems === 11 ? "bg-[#f0f0ff]" : ""}
                `}
            >
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li
              onClick={() => handleItemClick(12)}
              className={`
                  p-[5px] cursor-pointer flex items-center rounded-[10px] hover:bg-[#f0f0ff]
                  ${activeItems === 12 ? "bg-[#f0f0ff]" : ""}
                `}
            >
              <Report className="mr-[5px] text-[20px]" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
