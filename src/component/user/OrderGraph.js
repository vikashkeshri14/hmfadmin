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
export default function OrderGraph(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(props.userId);
  }, [props]);
  const getData = async (id) => {
    const obj = {
      "userId": id,
      "from": "2022-11-01",
      "to": "2023-04-15"
    };
    let params = { url: apiList.allOrderByHrUserId, body: obj };
    let response = await ApiService.postData(params);

    if (response) {
      let valres = [];
      let res = response.result;
      for (let i = 0; i < response.result.length; i++) {
        valres.push({ name: "order", number: res[i].cnt });
      }
      setData(valres);
      setLoading(false);
    }
  };
  return (
    <div className=" h-[80px] p-[10px]">
      {loading && (
        <div className="absolute left-[50%] top-[50%]">
          <Squares />
        </div>
      )}
      <ResponsiveContainer width="100%" className="mt-[120px]" height="100%">
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
          <Tooltip />
          <Area
            type="monotone"
            dataKey="number"
            stroke="#60BA62"
            fill="rgb(96,186, 98, 0.24)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
