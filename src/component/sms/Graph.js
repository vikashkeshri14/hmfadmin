import React, { useEffect, useState } from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import { Squares } from "react-activity";
import "react-activity/dist/library.css";
export default function Graph() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    graphChange();
  }, []);
  const graphChange = async () => {
    let params = { url: apiList.getSmsByHr };
    let response = await ApiService.getData(params);
    if (response) {
      let valres = [];
      let res = response.result;
      for (let i = 0; i < response.result.length; i++) {
        valres.push({ name: "sms", number: res[i].cnt });
      }

      setData(valres);
      setLoading(false);
    }
  };
  return (
    <div className=" h-[165px] p-[10px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area
            type="monotone"
            dataKey="number"
            stroke="#E80000"
            fill="rgb(232,0, 0, 0.16)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
