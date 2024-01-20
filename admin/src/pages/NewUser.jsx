export default function NewUser() {
  return (
    <div className="flex-[4]">
      <h1 className="newUserTitle">New User</h1>
      <form className="flex flex-wrap">
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-[14px] font-[600] text-[#979696]">
            Username
          </label>
          <input
            classname="h-5 p-2.5 border-solid border-[1px] border-[gray] rounded-[5px]"
            type="text"
            placeholder="john"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-[14px] font-[600] text-[#979696]">
            Full Name
          </label>
          <input
            classname="h-5 p-2.5 border-solid border-[1px] border-[gray] rounded-[5px]"
            type="text"
            placeholder="John Smith"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-[14px] font-[600] text-[#979696]">
            Email
          </label>
          <input
            classname="h-5 p-2.5 border-solid border-[1px] border-[gray] rounded-[5px]"
            type="email"
            placeholder="john@gmail.com"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-[14px] font-[600] text-[#979696]">
            Password
          </label>
          <input
            classname="h-5 p-2.5 border-solid border-[1px] border-[gray] rounded-[5px]"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-[14px] font-[600] text-[#979696]">
            Phone
          </label>
          <input
            classname="h-5 p-2.5 border-solid border-[1px] border-[gray] rounded-[5px]"
            type="text"
            placeholder="+1 123 456 78"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-[14px] font-[600] text-[#979696]">
            Address
          </label>
          <input
            classname="h-5 p-2.5 border-solid border-[1px] border-[gray] rounded-[5px]"
            type="text"
            placeholder="New York | USA"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-[14px] font-[600] text-[#979696]">
            Gender
          </label>
          <div>
            <input
              className="mt-[15px]"
              type="radio"
              name="gender"
              id="male"
              value="male"
            />
            <label className="m-2.5 font-[18px] text-[#555]" for="male">
              Male
            </label>
            <input
              className="mt-[15px]"
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <label className="m-2.5 text-[18px] text-[#555]" for="female">
              Female
            </label>
            <input
              className="mt-[15px]"
              type="radio"
              name="gender"
              id="other"
              value="other"
            />
            <label className="m-2.5 font-[18px] text-[#555]" for="other">
              Other
            </label>
          </div>
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label className="mb-2.5 text-[14px] font-[600] text-[#979696]">
            Active
          </label>
          <select className="h-[40px] rounded-[5px]" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="w-[200px] border-none bg-[#00008b] text-white py-[7px] px-[10px] font-[600] rounded-[10px] mt-[30px] cursor-pointer">
          Create
        </button>
      </form>
    </div>
  );
}
