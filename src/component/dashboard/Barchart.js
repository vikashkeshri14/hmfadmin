import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Barchart() {
  const data = [
    { name: "1", uv: 300, pv: 456 },
    { name: "2", uv: 100, pv: 230 },

    { name: "5", uv: 100, pv: 321 },
    { name: "6", uv: 9, pv: 235 },
    { name: "7", uv: 53, pv: 267 },

    { name: "12", uv: 43, pv: 45 },

    { name: "19", uv: 222, pv: 366 },
    { name: "20", uv: 372, pv: 486 },
    { name: "21", uv: 182, pv: 512 },
    { name: "22", uv: 164, pv: 302 },
    { name: "23", uv: 316, pv: 425 },
    { name: "24", uv: 131, pv: 467 },

    { name: "32", uv: 154, pv: 33 },
    { name: "33", uv: 205, pv: 354 },
    { name: "34", uv: 70, pv: 258 },
  ];
  return (
    <div className="h-[400px]">
      <ResponsiveContainer
        className="flex justify-center "
        width="100%"
        height="100%"
      >
        <BarChart
          className="self-center justify-center"
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 5,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />

          <Bar dataKey="pv" fill="#E80000" width="0" />
          <Bar dataKey="uv" fill="#60BA62" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
