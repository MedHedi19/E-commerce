import { useEffect, useMemo, useState } from "react";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfno";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";
import { userRequest } from "../requestMethods";

export default function Home() {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "FEB",
      "MAR",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="flex-[4]">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="flex m-5">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
