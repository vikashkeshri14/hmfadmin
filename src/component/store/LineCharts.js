import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
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

export default function LineCharts(props) {
  const [data, setData] = useState([
    {
      name: "Jan",
      amount: 0,
      month: 1,
    },
    {
      name: "Feb",
      amount: 0,
      month: 2,
    },
    {
      name: "Mar",
      amount: 0,
      month: 3,
    },
    {
      name: "Apr",
      amount: 0,
      month: 4,
    },
    {
      name: "May",
      amount: 0,
      month: 5,
    },
    {
      name: "Jun",
      amount: 0,
      month: 6,
    },
    {
      name: "Jul",
      amount: 0,
      month: 7,
    },
    {
      name: "Aug",
      amount: 0,
      month: 8,
    },
    {
      name: "Sep",
      amount: 0,
      month: 9,
    },
    {
      name: "Oct",
      amount: 0,
      month: 10,
    },
    {
      name: "Nov",
      amount: 0,
      month: 11,
    },
    {
      name: "Dec",
      amount: 0,
      month: 12,
    },
  ]);
  const [status, setStatus] = useState("1");
  useEffect(() => {
    getStoreById(props.storeId, "1");
  }, [props]);
  const getStoreById = async (id, statusVal) => {
    const obj = {
      storeId: id,
      statusCode: statusVal,
      from: "2022-11-01",
      to: "2023-04-15",
    };

    let params = {
      url: apiList.getStoreIncommimgOrderReportByRange,
      body: obj,
    };
    let response = await ApiService.postData(params);
    if (response.result.length > 0) {
      let lineChart = [
        {
          name: "Jan",
          amount: 0,
          month: 1,
        },
        {
          name: "Feb",
          amount: 0,
          month: 2,
        },
        {
          name: "Mar",
          amount: 0,
          month: 3,
        },
        {
          name: "Apr",
          amount: 0,
          month: 4,
        },
        {
          name: "May",
          amount: 0,
          month: 5,
        },
        {
          name: "Jun",
          amount: 0,
          month: 6,
        },
        {
          name: "Jul",
          amount: 0,
          month: 7,
        },
        {
          name: "Aug",
          amount: 0,
          month: 8,
        },
        {
          name: "Sep",
          amount: 0,
          month: 9,
        },
        {
          name: "Oct",
          amount: 0,
          month: 10,
        },
        {
          name: "Nov",
          amount: 0,
          month: 11,
        },
        {
          name: "Dec",
          amount: 0,
          month: 12,
        },
      ];
      // console.log(lineChart[3].amount);
      response.result.map((dataVal, i) => {
        lineChart[dataVal.month - 1].amount = dataVal.total;
      });
      setData((data) => lineChart);
      console.log(lineChart);
    } else {
      let lineChart = [
        {
          name: "Jan",
          amount: 0,
          month: 1,
        },
        {
          name: "Feb",
          amount: 0,
          month: 2,
        },
        {
          name: "Mar",
          amount: 0,
          month: 3,
        },
        {
          name: "Apr",
          amount: 0,
          month: 4,
        },
        {
          name: "May",
          amount: 0,
          month: 5,
        },
        {
          name: "Jun",
          amount: 0,
          month: 6,
        },
        {
          name: "Jul",
          amount: 0,
          month: 7,
        },
        {
          name: "Aug",
          amount: 0,
          month: 8,
        },
        {
          name: "Sep",
          amount: 0,
          month: 9,
        },
        {
          name: "Oct",
          amount: 0,
          month: 10,
        },
        {
          name: "Nov",
          amount: 0,
          month: 11,
        },
        {
          name: "Dec",
          amount: 0,
          month: 12,
        },
      ];
      setData((data) => lineChart);
    }
  };
  return (
    <>
      <div className="col-xl-3 col-md-6 col-12 p-[10px] border-l-[1px]">
        <div className="text-[#959494] flex justify-end text-[18px] font-sstbold pt-[10px]">
          <fieldset className="form-group w-[100%] h-[57px] bg-[#F9F9F9]">
            <select
              onChange={(e) => {
                getStoreById(props.storeId, e.target.value);
              }}
              style={{
                background: `url(${config.domainUrl}/panel/app-assets/images/dropdown.png) no-repeat 16px`,
              }}
              className="form-control bg-[#F9F9F9] h-[57px]"
              id="basicSelect"
            >
              <option attr="total-order" value="1">
                إجمالي الطلبات
              </option>
              <option attr="paid-order" value="2">
                الطلبات المدفوعة
              </option>
              <option attr="application-accepted" value="3">
                الطلبات المقبولة
              </option>
              <option attr="reject-application-before-accept" value="4">
                الطلبات المرفوضة قبل الإتفاق
              </option>
              <option attr="reject-application-after-accept" value="5">
                الطلبات المرفوضة بعد الإتفاق
              </option>
              <option attr="pending-order" value="6">
                الطلبات المعلقة
              </option>
            </select>
          </fieldset>
        </div>
        <div className="position-relative has-icon-right">
          <div className="absolute top-[20px] left-0">
            <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
          </div>
          <input
            type="number"
            id="contact-info-icon"
            className="form-control text-[16px] font-sstroman h-[57px] border-0 bg-[#F9F9F9] rounded-[6px]"
            name="contact-icon"
            placeholder="16/12/2022 - 16/12/2022"
          />
        </div>
      </div>
      <div className="col-xl-9 col-md-6 col-12 p-[10px]">
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

              <Tooltip />

              <Line
                type="monotone"
                dataKey="amount"
                stroke="#FF9800"
                activeDot={{ r: 1 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
