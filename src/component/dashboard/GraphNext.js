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
    graphChange("1");
    setRange(props.range);
  }, [props]);
  const graphChange = async (status) => {
    setLoading(true);
    let obj = {
      status: "1",
      from: props.from,
      to: props.to,
    };

    if (status == "1") {
      obj = {
        status: "1",
        from: props.from,
        to: props.to,
      };
      let params = { url: apiList.getNumberOfCommitment, body: obj };
      let response = await ApiService.postData(params);

      if (response) {
        let val;

        let valres = [
          { name: "12am", order: 0 },
          { name: "1am", order: 0 },
          { name: "2am", order: 0 },
          { name: "3am", order: 0 },
          { name: "4am", order: 0 },
          { name: "5am", order: 0 },
          { name: "6am", order: 0 },
          { name: "7am", order: 0 },
          { name: "8am", order: 0 },
          { name: "9am", order: 0 },
          { name: "10am", order: 0 },
          { name: "11am", order: 0 },
          { name: "12pm", order: 0 },
          { name: "1pm", order: 0 },
          { name: "2pm", order: 0 },
          { name: "3pm", order: 0 },
          { name: "4pm", order: 0 },
          { name: "5pm", order: 0 },
          { name: "6pm", order: 0 },
          { name: "7pm", order: 0 },
          { name: "8pm", order: 0 },
          { name: "9pm", order: 0 },
          { name: "10pm", order: 0 },
          { name: "11pm", order: 0 },
        ];
        let res = response.result;
        for (let i = 0; i < response.result.length; i++) {
          switch (res[i].hr) {
            case 0:
              val = { name: "12am", order: res[i].cnt };
              valres[0] = val;

              break;
            case 1:
              val = { name: "1am", order: res[i].cnt };
              valres[1] = val;

              break;
            case 2:
              val = { name: "1am", order: res[i].cnt };
              valres[2] = val;

              break;
            case 3:
              val = { name: "3am", order: res[i].cnt };
              valres[3] = val;

              break;
            case 4:
              val = { name: "4am", order: res[i].cnt };
              valres[4] = val;

              break;
            case 5:
              val = { name: "5am", order: res[i].cnt };
              valres[5] = val;

              break;
            case 6:
              val = { name: "6am", order: res[i].cnt };
              valres[6] = val;

              break;
            case 7:
              val = { name: "7am", order: res[i].cnt };
              valres[7] = val;

              break;
            case 8:
              val = { name: "8am", order: res[i].cnt };
              valres[8] = val;

              break;
            case 9:
              val = { name: "9am", order: res[i].cnt };
              valres[9] = val;

              break;
            case 10:
              val = { name: "10am", order: res[i].cnt };
              valres[10] = val;

              break;
            case 11:
              val = { name: "11am", order: res[i].cnt };
              valres[11] = val;

              break;
            case 12:
              val = { name: "12pm", order: res[i].cnt };
              valres[12] = val;

              break;
            case 13:
              val = { name: "1pm", order: res[i].cnt };
              valres[13] = val;

              break;
            case 14:
              val = { name: "2pm", order: res[i].cnt };
              valres[14] = val;

              break;

            case 15:
              val = { name: "3pm", order: res[i].cnt };
              valres[15] = val;

              break;

            case 16:
              val = { name: "4pm", order: res[i].cnt };
              valres[16] = val;

              break;

            case 17:
              val = { name: "5pm", order: res[i].cnt };
              valres[17] = val;

              break;

            case 18:
              val = { name: "6pm", order: res[i].cnt };
              valres[18] = val;

              break;

            case 19:
              val = { name: "7pm", order: res[i].cnt };
              valres[19] = val;

              break;
            case 20:
              val = { name: "8pm", order: res[i].cnt };
              valres[20] = val;

              break;
            case 21:
              val = { name: "9pm", order: res[i].cnt };
              valres[21] = val;

              break;
            case 22:
              val = { name: "10pm", order: res[i].cnt };
              valres[22] = val;

              break;
            case 23:
              val = { name: "11pm", order: res[i].cnt };
              valres[23] = val;

              break;

            default:
              break;
          }
        }
        setData(valres);
        setLoading(false);
      }
    } else {
      obj = {
        status: "0",
        from: props.from,
        to: props.to,
      };
      let params = { url: apiList.getNumberOfCommitment, body: obj };
      let response = await ApiService.postData(params);

      if (response) {
        let val;

        let valres = [
          { name: "12am", order: 0 },
          { name: "1am", order: 0 },
          { name: "2am", order: 0 },
          { name: "3am", order: 0 },
          { name: "4am", order: 0 },
          { name: "5am", order: 0 },
          { name: "6am", order: 0 },
          { name: "7am", order: 0 },
          { name: "8am", order: 0 },
          { name: "9am", order: 0 },
          { name: "10am", order: 0 },
          { name: "11am", order: 0 },
          { name: "12pm", order: 0 },
          { name: "1pm", order: 0 },
          { name: "2pm", order: 0 },
          { name: "3pm", order: 0 },
          { name: "4pm", order: 0 },
          { name: "5pm", order: 0 },
          { name: "6pm", order: 0 },
          { name: "7pm", order: 0 },
          { name: "8pm", order: 0 },
          { name: "9pm", order: 0 },
          { name: "10pm", order: 0 },
          { name: "11pm", order: 0 },
        ];
        let res = response.result;
        for (let i = 0; i < response.result.length; i++) {
          switch (res[i].hr) {
            case 0:
              val = { name: "12am", order: res[i].cnt };
              valres[0] = val;

              break;
            case 1:
              val = { name: "1am", order: res[i].cnt };
              valres[1] = val;

              break;
            case 2:
              val = { name: "1am", order: res[i].cnt };
              valres[2] = val;

              break;
            case 3:
              val = { name: "3am", order: res[i].cnt };
              valres[3] = val;

              break;
            case 4:
              val = { name: "4am", order: res[i].cnt };
              valres[4] = val;

              break;
            case 5:
              val = { name: "5am", order: res[i].cnt };
              valres[5] = val;

              break;
            case 6:
              val = { name: "6am", order: res[i].cnt };
              valres[6] = val;

              break;
            case 7:
              val = { name: "7am", order: res[i].cnt };
              valres[7] = val;

              break;
            case 8:
              val = { name: "8am", order: res[i].cnt };
              valres[8] = val;

              break;
            case 9:
              val = { name: "9am", order: res[i].cnt };
              valres[9] = val;

              break;
            case 10:
              val = { name: "10am", order: res[i].cnt };
              valres[10] = val;

              break;
            case 11:
              val = { name: "11am", order: res[i].cnt };
              valres[11] = val;

              break;
            case 12:
              val = { name: "12pm", order: res[i].cnt };
              valres[12] = val;

              break;
            case 13:
              val = { name: "1pm", order: res[i].cnt };
              valres[13] = val;

              break;
            case 14:
              val = { name: "2pm", order: res[i].cnt };
              valres[14] = val;

              break;

            case 15:
              val = { name: "3pm", order: res[i].cnt };
              valres[15] = val;

              break;

            case 16:
              val = { name: "4pm", order: res[i].cnt };
              valres[16] = val;

              break;

            case 17:
              val = { name: "5pm", order: res[i].cnt };
              valres[17] = val;

              break;

            case 18:
              val = { name: "6pm", order: res[i].cnt };
              valres[18] = val;

              break;

            case 19:
              val = { name: "7pm", order: res[i].cnt };
              valres[19] = val;

              break;
            case 20:
              val = { name: "8pm", order: res[i].cnt };
              valres[20] = val;

              break;
            case 21:
              val = { name: "9pm", order: res[i].cnt };
              valres[21] = val;

              break;
            case 22:
              val = { name: "10pm", order: res[i].cnt };
              valres[22] = val;

              break;
            case 23:
              val = { name: "11pm", order: res[i].cnt };
              valres[23] = val;

              break;

            default:
              break;
          }
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
