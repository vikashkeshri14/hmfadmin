import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
export default function Piechart() {
  const data = [
    { name: "Group A", value: 800 },
    { name: "Group B", value: 300 },
  ];
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
