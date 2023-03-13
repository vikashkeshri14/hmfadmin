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
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="h-[275px] p-[10px]">
        <div className="flex border-b-[1px] mb-[30px]">
          <div className="flex-col w-[70%]">
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
          <div className="w-[30%] flex justify-center">
            <button className="text-[16px] p-[8px] self-center justify-center text-[#ffffff] font-sstbold bg-[#FF9800] rounded-[3px]">
              تنزل التقرير
            </button>
          </div>
        </div>

        <ResponsiveContainer width="100%">
          <BarChart
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

            <Bar dataKey="pv" fill="#60BA62" />
            <Bar dataKey="uv" fill="#E80000" />
          </BarChart>
        </ResponsiveContainer>

      </div>
    </>
  );
}
