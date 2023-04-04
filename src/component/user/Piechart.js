import React, { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
export default function Piechart(props) {
  const [user, setUser] = useState(0);
  const [store, setStore] = useState(0);
  const [data, setData] = useState([
    { name: "User", value: 800 },
    { name: "Store", value: 300 },
  ]);
  useEffect(() => {
    console.log(props.user);
    if (props.user && props.store) {
      setUser(props.user);
      setStore(props.store);
      setData([
        { name: "User", value: props.user },
        { name: "Store", value: props.store },
      ]);
    } else {
      setUser(0);
      setStore(0);
      setData([
        { name: "User", value: 0 },
        { name: "Store", value: 0 },
      ]);
    }
  }, [props]);
  const COLORS = ["#60BA62", "#FF9800"];
  return (
    <PieChart width={100} height={100}>
      <Pie
        data={data}
        innerRadius={40}
        outerRadius={50}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
