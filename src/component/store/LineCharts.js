import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Jan",

    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",

    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",

    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",

    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",

    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",

    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",

    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",

    pv: 4200,
    amt: 2100,
  },
  {
    name: "Sep",

    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct",

    pv: 3400,
    amt: 1900,
  },
  {
    name: "Nov",

    pv: 3900,
    amt: 2200,
  },
  {
    name: "Dec",

    pv: 4000,
    amt: 2300,
  },
];
export default function LineCharts() {
  return (
    <div className="h-[391px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="pv"
            stroke="#FF9800"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
