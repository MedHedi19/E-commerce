import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        console.log(res.data);
        setPerc((res.data[1]?.total * 100) / res.data[0]?.total - 100);
      } catch (err) {
        console.log(err);
      }
    };
    getIncome();
  }, []);
  return (
    <div className="w-[100%] flex justify-between">
      <div className="flex-[1] my-0 mx-5 rounded-[10px] cursor-pointer shadow-[0_0_15px_-10px_rgba(0, 0, 0, 0.75)]">
        <span className="text-[20px]">Revenue</span>
        <div className="my-2.5 mx-0 flex items-center">
          <span className="text-[30px] font-[600]">${income[1]?.total}</span>
          <span className="flex items-center ml-5">
            %{Math.floor(perc)}
            {perc < 0 ? (
              <ArrowDownward className="text-[14px] ml-[5px] text-[red] " />
            ) : (
              <ArrowUpward className="text-[14px] ml-[5px] text-[green]" />
            )}
          </span>
        </div>
        <span className="text-[15px] text-gray">Compared to last month</span>
      </div>
      <div className="flex-[1] my-0 mx-5 rounded-[10px] cursor-pointer shadow-[0_0_15px_-10px_rgba(0, 0, 0, 0.75)]">
        <span className="text-[20px]">Sales</span>
        <div className="my-2.5 mx-0 flex items-center">
          <span className="text-[30px] font-[600]">$4,415</span>
          <span className="flex items-center ml-5">
            -1.4 <ArrowDownward className="text-[14px] ml-[5px] text-[red] " />
          </span>
        </div>
        <span className="text-[15px] text-gray">Compared to last month</span>
      </div>
      <div className="flex-[1] my-0 mx-5 rounded-[10px] cursor-pointer shadow-[0_0_15px_-10px_rgba(0, 0, 0, 0.75)]">
        <span className="text-[20px]">Cost</span>
        <div className="my-2.5 mx-0 flex items-center">
          <span className="text-[30px] font-[600]">$2,225</span>
          <span className="flex items-center ml-5">
            +2.4 <ArrowUpward className="text-[14px] ml-[5px] text-[green]" />
          </span>
        </div>
        <span className="text-[15px] text-gray">Compared to last month</span>
      </div>
    </div>
  );
}
