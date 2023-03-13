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
    <div className="h-[281px]">
      <div className="flex border-b-[1px] mb-[10px]">
        <div className="flex-col w-[33.3%]">
          <div className="p-[5px] text-[#959494] text-[18px] font-sstbold">
            الالتزامات المدفوعة و المعلقة
          </div>
          <div>
            <div className="position-relative has-icon-right">
              <div className="absolute top-[20px] left-0">
                <i className="ficon bx bxs-calendar text-[20px] pl-[10px]"></i>
              </div>
              <input
                type="number"
                id="contact-info-icon"
                className="form-control text-[16px] font-sstroman h-[58px] border-0  rounded-[6px]"
                name="contact-icon"
                placeholder="16/12/2022 - 16/12/2022"
              />
            </div>
          </div>
        </div>
        <div className="flex-col justify-center self-center w-[33.4%]">
          <div className="flex justify-center">
            <div className="h-[10px] w-[10px] rounded-[5px] bg-[#E80000] mt-[5px] ml-[10px]"></div>
            <div className="text-[#484848] text-[14px] font-sstroman ">
              الالتزامات المعلقة
            </div>
          </div>
          <div className="flex justify-center">
            <div className="h-[10px] w-[10px] rounded-[5px] bg-[#60BA62] mt-[7px] mr-[10px] ml-[10px]"></div>
            <div className="text-[#484848] text-[14px] font-sstroman ">
              الالتزامات المدفوعة
            </div>
          </div>
        </div>
        <div className="w-[33.3%] flex pl-[20px] justify-end">
          <button className="text-[16px]  p-[8px] self-center justify-center text-[#ffffff] font-sstbold bg-[#FF9800] rounded-[3px]">
            تنزل التقرير
          </button>
        </div>
      </div>
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
          <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
