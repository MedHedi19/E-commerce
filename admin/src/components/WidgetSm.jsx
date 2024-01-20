import { Avatar } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="flex-[1] p-5 mr-5 shadow-[0_0_15px_-10px_rgba(0,0,0,0.75)]">
      <span className="text-[22px] font-[600]">New Join Members</span>
      <ul className="m-0 p-0 list-none">
        {users.map((user) => (
          <li
            key={user._id}
            className="flex items-center justify-between my-5 mx-0"
          >
            {user.img ? (
              <img
                src={user.img}
                alt=""
                className="w-[40px] h-[40px] rounded-[50%] object-cover"
              />
            ) : (
              <Avatar src="/broken-image.jpg" />
            )}
            <div className="flex flex-col">
              <span className="font-[600]">{user.username}</span>
            </div>
            <button className="flex items-center border-none rounded-[10px] py-[7px] px-[10px] bg-[#eeeef7] text-[#555] cursor-pointer">
              <Visibility className="text-[16px] mr-[5px]" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
