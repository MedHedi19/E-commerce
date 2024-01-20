import { useEffect, useState } from "react";
import { format } from "timeago.js";
import { userRequest } from "../requestMethods";

export default function WidgetLg() {
  const buttonColor = (status) => {
    const color =
      status === "pending"
        ? "2a7ade"
        : status === "declined"
        ? "d95087"
        : status === "approved"
        ? "3bb077"
        : "";
    return color;
  };

  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        const userRes = await userRequest.get("users");
        setOrders(res.data);
        setUsers(userRes.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);
  return (
    <div className="flex-[2] p-5 shadow-[0_0_15px_-10px_rgba(0,0,0,0.75)]">
      <h3 className="font-[600] text-[22px]">Latest transactions</h3>
      <table className="w-[100%] border-spacing-[20px]	">
        <tbody>
          <tr className="widgetLgTr">
            <th className="text-left">Customer</th>
            <th className="text-left">Date</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Status</th>
          </tr>
          {orders.map((order) => (
            <tr key={order._id} className="widgetLgTr">
              <td className="flex items-center font-[600]">
                <span className="widgetLgName">
                  {users.find((user) => order.userId === user._id)?.username ||
                    "err"}
                </span>
              </td>
              <td className="font-[300]">{format(order.createdAt)}</td>
              <td className="font-[300]">{order.amount}</td>
              <td className="widgetLgStatus">
                <button
                  className={`py-[5px] px-[7px] border-none rounded-[10px] bg-[#ebf1fe] text-[#${buttonColor(
                    order.status
                  )}]`}
                >
                  {order.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
