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
export default function Graph(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [range, setRange] = useState("30");
  useEffect(() => {
    getData(props.range);
    setRange(props.range);
  }, [props]);
  const getData = async (rangeval) => {
    const obj = {
      range: rangeval,
      status: "all",
    };

    let params = { url: apiList.numberOfOrderByStatus, body: obj };
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
  const graphChange = async (status) => {
    setLoading(true);
    let obj = {
      range: range,
      status: "all",
    };
    if (status == "all") {
      obj = {
        range: range,
        status: "all",
      };

      let params = { url: apiList.numberOfOrderByStatus, body: obj };
      let response = await ApiService.postData(params);
      console.log(response);
      if (response) {
        let valres = [];
        let res = response.result;
        for (let i = 0; i < response.result.length; i++) {
          valres.push({ name: "order", number: res[i].cnt });
        }
        setData(valres);
        setLoading(false);
      }
    } else if (status == "1") {
      obj = {
        range: range,
        status: "1",
      };
      let params = { url: apiList.numberOfOrderByStatus, body: obj };
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
    } else if (status == "2") {
      obj = {
        range: range,
      };
      let params = { url: apiList.numberOfPaidOrderByRange, body: obj };
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
    } else if (status == "3") {
      obj = {
        range: range,
        status: 0,
      };
      let params = { url: apiList.numberOfOrderByStatus, body: obj };
      let response = await ApiService.postData(params);
      //console.log(response);
      if (response) {
        let valres = [];
        let res = response.result;
        for (let i = 0; i < response.result.length; i++) {
          valres.push({ name: "order", number: res[i].cnt });
        }
        setData(valres);
        setLoading(false);
      }
    } else if (status == "4") {
      obj = {
        range: range,
        status: -1,
      };
      let params = { url: apiList.numberOfRejectedOrderByRange, body: obj };
      let response = await ApiService.postData(params);
      //console.log(response);
      if (response) {
        let valres = [];
        let res = response.result;
        for (let i = 0; i < response.result.length; i++) {
          valres.push({ name: "order", number: res[i].cnt });
        }
        setData(valres);
        setLoading(false);
      }
    } else if (status == "5") {
      obj = {
        range: range,
        status: 1,
      };
      let params = { url: apiList.numberOfRejectedOrderByRange, body: obj };
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
    }
  };
  return (
    <div className="relative  h-[313px] p-[10px]">
      <div className="text-[#959494] flex justify-end text-[18px] font-sstbold pt-[10px] pl-[10px] ">
        <fieldset className="form-group w-[100%] h-[57px] bg-[#F9F9F9]">
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
            <option attr="all request" value="all">
              عدد الطلبات
            </option>
            <option attr="accepted order" value="1">
              عدد الطلبات المقبولة
            </option>
            <option attr="number of paid order" value="2">
              عدد الطلبات المدفوعة
            </option>
            <option attr="number of pending order" value="3">
              عدد الطلبات المعلقة
            </option>
            <option
              attr="The number of rejected requests before the agreement"
              value="4"
            >
              عدد الطلبات المرفوضة قبل الإتفاق
            </option>
            <option
              attr="The number of requests rejected after the agreement"
              value="5"
            >
              عدد الطلبات المرفوضة بعد الإتفاق
            </option>
          </select>
        </fieldset>
      </div>
      {loading && (
        <div className="absolute left-[50%] top-[50%]">
          <Squares />
        </div>
      )}
      <ResponsiveContainer width="100%" className="mt-[200px]" height="100%">
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
            stroke="#FF9800"
            fill="rgb(255,152, 0, 0.16)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
