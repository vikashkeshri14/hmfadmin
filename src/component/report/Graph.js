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
  const [status, setStatus] = useState("1");
  useEffect(() => {
    graphChange(status);
  }, []);
  const graphChange = async (status) => {
    setLoading(true);
    setStatus(status);
    let obj = {
      status: "all",
    };
    if (status == "1") {
      obj = {
        status: "1",
      };

      let params = { url: apiList.getReportByHr, body: obj };
      let response = await ApiService.postData(params);
      if (response) {
        let valres = [];
        let res = response.result;
        for (let i = 0; i < response.result.length; i++) {
          valres.push({ name: "report", number: res[i].cnt });
        }

        setData(valres);
        setLoading(false);
      }
    } else if (status == "2") {
      obj = {
        status: "2",
      };
      let params = { url: apiList.getReportByHr, body: obj };
      let response = await ApiService.postData(params);

      if (response) {
        let valres = [];
        let res = response.result;
        for (let i = 0; i < response.result.length; i++) {
          valres.push({ name: "report", number: res[i].cnt });
        }
        setData(valres);
        setLoading(false);
      }
    } else if (status == "3") {
      obj = {
        status: "3",
      };
      let params = { url: apiList.getReportByHr, body: obj };
      let response = await ApiService.postData(params);

      if (response) {
        let valres = [];
        let res = response.result;
        for (let i = 0; i < response.result.length; i++) {
          valres.push({ name: "report", number: res[i].cnt });
        }
        setData(valres);
        setLoading(false);
      }
    } else if (status == "4") {
      obj = {
        status: 4,
      };
      let params = { url: apiList.getReportByHr, body: obj };
      let response = await ApiService.postData(params);
      //console.log(response);
      if (response) {
        let valres = [];
        let res = response.result;
        for (let i = 0; i < response.result.length; i++) {
          valres.push({ name: "report", number: res[i].cnt });
        }
        setData(valres);
        setLoading(false);
      }
    } else if (status == "5") {
      obj = {
        status: 5,
      };
      let params = { url: apiList.getReportByHr, body: obj };
      let response = await ApiService.postData(params);
      //console.log(response);
      if (response) {
        let valres = [];
        let res = response.result;
        for (let i = 0; i < response.result.length; i++) {
          valres.push({ name: "report", number: res[i].cnt });
        }
        setData(valres);
        setLoading(false);
      }
    } else if (status == "6") {
      obj = {
        status: 6,
      };
      let params = { url: apiList.getReportByHr, body: obj };
      let response = await ApiService.postData(params);
      if (response) {
        let valres = [];
        let res = response.result;
        for (let i = 0; i < response.result.length; i++) {
          valres.push({ name: "report", number: res[i].cnt });
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
            <option attr="total-report" value="1">
              عدد البلاغات
            </option>
            <option attr="report-solved" value="2">
              عدد البلاغات المحلولة
            </option>
            <option attr="pending-report" value="3">
              عدد البلاغات المعلقة
            </option>
            <option attr="store-reports" value="4">
              عدد بلاغات المتاجر
            </option>
            <option attr="user-reports" value="5">
              عدد بلاغات المستخدمين
            </option>
            <option attr="report-on-product" value="6">
              عدد بلاغات المنتجات
            </option>
          </select>
        </fieldset>
      </div>
      <ResponsiveContainer width="100%" className="mt-[30px]" height="100%">
        <AreaChart
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
            stroke="#E80000"
            fill="rgb(232,0, 0, 0.16)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
