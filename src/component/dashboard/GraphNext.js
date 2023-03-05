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
export default function GraphNext(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [range, setRange] = useState("30");
  useEffect(() => {
    graphChange("1", props.range);
    setRange(props.range);
    console.log(props.range);
  }, [props]);
  const graphChange = async (status, rang) => {
    setLoading(true);
    let obj = {
      range: rang,
      status: "1",
    };

    if (status == "1") {
      obj = {
        range: rang,
        status: "1",
      };
      let params = { url: apiList.getNumberOfCommitment, body: obj };
      let response = await ApiService.postData(params);

      if (response) {
        let valres = [];
        let res = response.result;
        for (let i = 0; i < response.result.length; i++) {
          valres.push({ name: "Order " + res[i].hr, order: res[i].cnt });
        }
        setData(valres);
        setLoading(false);
      }
    } else {
      obj = {
        range: rang,
        status: "0",
      };
      console.log(obj);
      let params = { url: apiList.getNumberOfCommitment, body: obj };
      let response = await ApiService.postData(params);

      if (response) {
        let valres = [];
        let res = response.result;
        for (let i = 0; i < response.result.length; i++) {
          valres.push({ name: "Order " + res[i].hr, order: res[i].cnt });
        }
        setData(valres);
        setLoading(false);
      }
    }
  };
  return (
    <div className=" h-[230px] relative">
      {loading && (
        <div className="absolute left-[50%] top-[50%]">
          <Squares />
        </div>
      )}
      <div className="text-[#959494] flex justify-end text-[18px] font-sstbold pt-[10px] pl-[10px] ">
        <fieldset className="form-group w-[100%] h-[57px] bg-[#F9F9F9]">
          <select
            onChange={(e) => {
              graphChange(e.target.value, range);
            }}
            style={{
              background:
                "url('../panel/app-assets/images/dropdown.png') no-repeat 16px",
            }}
            className="form-control bg-[#F9F9F9] h-[57px]"
            id="basicSelect"
          >
            <option attr="paid commitment" value="1">
              الالتزامات المدفوعة
            </option>
            <option attr="unpaid commitment" value="0">
              الالتزامات المعلقة
            </option>
          </select>
        </fieldset>
      </div>
      <ResponsiveContainer width="100%" className="mt-[40px]" height="100%">
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
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="order"
            stroke="#60BA62"
            fill="#60BA62"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
