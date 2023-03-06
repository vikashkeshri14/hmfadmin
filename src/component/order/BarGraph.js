import React, { useEffect, useState } from "react";
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
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
export default function BarGraph() {
  const [data, setData] = useState([]);
  useEffect(() => {
    numberOfAccpetedAndPaidByHr();
  }, []);
  const numberOfAccpetedAndPaidByHr = async () => {
    let params = { url: apiList.numberOfAccpetedAndPaidByHr };
    let response = await ApiService.postData(params);
    let paid = response.resultsPaid;
    let accept = response.resultsAccept.map((data, i) => {
      let obj = paid.find((o) => o.hr === data.hr);
      if (obj) {
        data.paid = obj.paid;
      } else {
        data.paid = 0;
      }

      return data;
    });
    setData(accept);
  };

  return (
    <>
      <div className="text-[24px] p-[5px] text-[#959494] font-sstbold">
        مقارنة بين الطلبات المقبولة و الطلبات المدفوعة
      </div>

      <div className="h-[550px] p-[10px]">
        <ResponsiveContainer width="100%">
          <BarChart
            width={500}
            height={250}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />

            <Tooltip />

            <Bar dataKey="cnt" fill="#60BA62" />
            <Bar dataKey="paid" fill="#AAD0AB" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
