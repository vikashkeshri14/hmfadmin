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
  const [range, setRange] = useState("30");
  useEffect(() => {
    graphChange('all');
  }, []);

  const graphChange = async (status) => {
    setLoading(true);
    let obj = {
      status: "all",
    };
    if (status == "0") {
      obj = {
        status: "1",
      };
    } else if (status == '2') {
      obj = {
        status: "2",
      };
    } else if (status == '3') {
      obj = {
        status: "3",
      };
    } else {
      obj = {
        status: "all",
      };
    }
    let params = { url: apiList.banByStatusByHr, body: obj };
    let response = await ApiService.postData(params);

    if (response) {
      let valres = [];
      let res = response.result;
      for (let i = 0; i < response.result.length; i++) {
        valres.push({ name: "user", number: res[i].cnt });
      }
      setData(valres);
      setLoading(false);
    }



  };
  return (
    <div className=" h-[145px] mt-[10px] p-[20px] pb-[10px]">
      <div className="text-[#959494] flex justify-end text-[18px] font-sstbold pt-[10px] pl-[20px] ">
        <fieldset className="form-group w-[50%] h-[57px] bg-[#F9F9F9]">
          <select
            onChange={(e) => {
              graphChange(e.target.value);
            }}
            style={{
              background:
                "url('../panel/app-assets/images/dropdown.png') no-repeat 16px",
            }}
            className="form-control bg-[#F9F9F9] h-[57px]"
            id="basicSelect"
          >
            <option at="total no of ban" value="1" >إجمالي عدد المحظورين</option>
            <option at='temporarily ban' value="0">المحظورين مؤقتاً</option>
            <option at="completely ban" value="2">المحظورين كلياً</option>
            <option at="deleted" value="3">المحذوفين</option>
          </select>
        </fieldset>
      </div>
      {loading && (
        <div className="absolute left-[50%] top-[50%]">
          <Squares />
        </div>
      )}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          height={80}
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
