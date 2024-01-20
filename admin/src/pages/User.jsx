import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="flex-[4] p-5">
      <div className="flex items-center justify-between">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="w-[80px] border-none p-[5px] bg-[teal] rounded-[5px] cursor-pointer text-white text-[16px]">
            Create
          </button>
        </Link>
      </div>
      <div className="flex mt-5">
        <div className="flex-[1] p-5 shadow-[0_0_15px_-10px_rgba(0,0,0,0.75)]">
          <div className="flex items-center">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <div className="flex flex-col ml-5">
              <span className="font-[600]">Anna Becker</span>
              <span className="font-[300]">Software Engineer</span>
            </div>
          </div>
          <div className="mt-5">
            <span className="text-[14px] font-[600] text-[#afaaaa]">
              Account Details
            </span>
            <div className="flex items-center my-5 mx-0 text-[#444]">
              <PermIdentity className="text-[16px]" />
              <span className="ml-2.5">annabeck99</span>
            </div>
            <div className="flex items-center my-5 mx-0 text-[#444]">
              <CalendarToday className="text-[16px]" />
              <span className="ml-2.5">10.12.1999</span>
            </div>
            <span className="text-[14px] font-[600] text-[#afaaaa]">
              Contact Details
            </span>
            <div className="flex items-center my-5 mx-0 text-[#444]">
              <PhoneAndroid className="text-[16px]" />
              <span className="ml-2.5">+1 123 456 67</span>
            </div>
            <div className="flex items-center my-5 mx-0 text-[#444]">
              <MailOutline className="text-[16px]" />
              <span className="ml-2.5">annabeck99@gmail.com</span>
            </div>
            <div className="flex items-center my-5 mx-0 text-[#444]">
              <LocationSearching className="text-[16px]" />
              <span className="ml-2.5">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="flex-[2] p-5 ml-5 shadow-[0_0_15px_-10px_rgba(0,0,0,0.75)]">
          <span className="text-[24px] fon-[600]">Edit</span>
          <form className="flex justify-between mt-5">
            <div className="userUpdateLeft">
              <div className="flex flex-col mt-2.5">
                <label className="mb-[5px] text-[14px]">Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="border-none w-[250px] h-[30px] border-[1px] border-solid border-[gray] "
                />
              </div>
              <div className="flex flex-col mt-2.5">
                <label className="mb-[5px] text-[14px]">Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="border-none w-[250px] h-[30px] border-[1px] border-solid border-[gray] "
                />
              </div>
              <div className="flex flex-col mt-2.5">
                <label className="mb-[5px] text-[14px]">Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="border-none w-[250px] h-[30px] border-[1px] border-solid border-[gray] "
                />
              </div>
              <div className="flex flex-col mt-2.5">
                <label className="mb-[5px] text-[14px]">Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="border-none w-[250px] h-[30px] border-[1px] border-solid border-[gray] "
                />
              </div>
              <div className="flex flex-col mt-2.5">
                <label className="mb-[5px] text-[14px]">Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="border-none w-[250px] h-[30px] border-[1px] border-solid border-[gray] "
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center">
                <img
                  className="w-[100px] h-[100px] rounded-[10px] object-cover mr-5"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="cursor-pointer" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="rounded-[5px] border-none p-[5px] cursor-pointer bg-[#00008b] text-[white] font-[600]">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
