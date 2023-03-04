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
export default function Barchart(props) {
  const [data, setData] = useState([
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
  ]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const obj = {
      range: 30,
    };
    let val;
    let oderdata = data;

    let more = 2;
    let params = { url: apiList.numberOfOrderByRange, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      let valres = response.result;
      for (let i = 0; i < response.result.length; i++) {
        switch (valres[i].hr) {
          case 0:
            if (valres[i].cnt > more) {
              val = { name: "12am", ordermore: valres[i].cnt };
              oderdata[0] = val;
            } else {
              val = { name: "12am", order: valres[i].cnt };
              oderdata[0] = val;
            }

            break;
          case 1:
            if (valres[i].cnt > more) {
              val = { name: "1am", ordermore: valres[i].cnt };
              oderdata[1] = val;
            } else {
              val = { name: "1am", order: valres[i].cnt };
              oderdata[1] = val;
            }

            break;
          case 2:
            if (valres[i].cnt > more) {
              val = { name: "1am", ordermore: valres[i].cnt };
              oderdata[1] = val;
            } else {
              val = { name: "1am", order: valres[i].cnt };
              oderdata[1] = val;
            }

            break;
          case 3:
            if (valres[i].cnt > more) {
              val = { name: "3am", ordermore: valres[i].cnt };
              oderdata[3] = val;
            } else {
              val = { name: "3am", order: valres[i].cnt };
              oderdata[3] = val;
            }

            break;
          case 4:
            if (valres[i].cnt > more) {
              val = { name: "4am", ordermore: valres[i].cnt };
              oderdata[4] = val;
            } else {
              val = { name: "4am", order: valres[i].cnt };
              oderdata[4] = val;
            }

            break;
          case 5:
            if (valres[i].cnt > more) {
              val = { name: "1am", ordermore: valres[i].cnt };
              oderdata[1] = val;
            } else {
              val = { name: "5am", order: valres[i].cnt };
              oderdata[5] = val;
            }

            break;
          case 6:
            if (valres[i].cnt > more) {
              val = { name: "6am", ordermore: valres[i].cnt };
              oderdata[6] = val;
            } else {
              val = { name: "6am", order: valres[i].cnt };
              oderdata[6] = val;
            }

            break;
          case 7:
            if (valres[i].cnt > more) {
              val = { name: "7am", ordermore: valres[i].cnt };
              oderdata[7] = val;
            } else {
              val = { name: "7am", order: valres[i].cnt };
              oderdata[7] = val;
            }

            break;
          case 8:
            if (valres[i].cnt > more) {
              val = { name: "8am", ordermore: valres[i].cnt };
              oderdata[8] = val;
            } else {
              val = { name: "8am", order: valres[i].cnt };
              oderdata[8] = val;
            }

            break;
          case 9:
            if (valres[i].cnt > more) {
              val = { name: "9am", ordermore: valres[i].cnt };
              oderdata[9] = val;
            } else {
              val = { name: "9am", order: valres[i].cnt };
              oderdata[9] = val;
            }

            break;
          case 10:
            if (valres[i].cnt > more) {
              val = { name: "10am", ordermore: valres[i].cnt };
              oderdata[10] = val;
            } else {
              val = { name: "10am", order: valres[i].cnt };
              oderdata[10] = val;
            }

            break;
          case 11:
            if (valres[i].cnt > more) {
              val = { name: "11am", ordermore: valres[i].cnt };
              oderdata[11] = val;
            } else {
              val = { name: "11am", order: valres[i].cnt };
              oderdata[11] = val;
            }

            break;
          case 12:
            if (valres[i].cnt > more) {
              val = { name: "12pm", ordermore: valres[i].cnt };
              oderdata[12] = val;
            } else {
              val = { name: "12pm", order: valres[i].cnt };
              oderdata[12] = val;
            }

            break;
          case 13:
            if (valres[i].cnt > more) {
              val = { name: "1pm", ordermore: valres[i].cnt };
              oderdata[13] = val;
            } else {
              val = { name: "1pm", order: valres[i].cnt };
              oderdata[13] = val;
            }

            break;
          case 14:
            if (valres[i].cnt > more) {
              val = { name: "2pm", ordermore: valres[i].cnt };
              oderdata[14] = val;
            } else {
              val = { name: "2pm", order: valres[i].cnt };
              oderdata[14] = val;
            }

            break;

          case 15:
            if (valres[i].cnt > more) {
              val = { name: "3pm", ordermore: valres[i].cnt };
              oderdata[15] = val;
            } else {
              val = { name: "3pm", order: valres[i].cnt };
              oderdata[15] = val;
            }

            break;

          case 16:
            if (valres[i].cnt > more) {
              val = { name: "4pm", ordermore: valres[i].cnt };
              oderdata[16] = val;
            } else {
              val = { name: "4pm", order: valres[i].cnt };
              oderdata[16] = val;
            }

            break;

          case 17:
            if (valres[i].cnt > more) {
              val = { name: "5pm", ordermore: valres[i].cnt };
              oderdata[17] = val;
            } else {
              val = { name: "5pm", order: valres[i].cnt };
              oderdata[17] = val;
            }

            break;

          case 18:
            if (valres[i].cnt > more) {
              val = { name: "6pm", ordermore: valres[i].cnt };
              oderdata[18] = val;
            } else {
              val = { name: "6pm", order: valres[i].cnt };
              oderdata[18] = val;
            }

            break;

          case 19:
            if (valres[i].cnt > more) {
              val = { name: "7pm", ordermore: valres[i].cnt };
              oderdata[19] = val;
            } else {
              val = { name: "7pm", order: valres[i].cnt };
              oderdata[19] = val;
            }

            break;
          case 20:
            if (valres[i].cnt > more) {
              val = { name: "8pm", ordermore: valres[i].cnt };
              oderdata[20] = val;
            } else {
              val = { name: "8pm", order: valres[i].cnt };
              oderdata[20] = val;
            }

            break;
          case 21:
            if (valres[i].cnt > more) {
              val = { name: "9pm", ordermore: valres[i].cnt };
              oderdata[21] = val;
            } else {
              val = { name: "9pm", order: valres[i].cnt };
              oderdata[21] = val;
            }

            break;
          case 22:
            if (valres[i].cnt > more) {
              val = { name: "10pm", ordermore: valres[i].cnt };
              oderdata[22] = val;
            } else {
              val = { name: "10pm", order: valres[i].cnt };
              oderdata[22] = val;
            }

            break;
          case 23:
            if (valres[i].cnt > more) {
              val = { name: "11pm", ordermore: valres[i].cnt };
              oderdata[23] = val;
            } else {
              val = { name: "11pm", order: valres[i].cnt };
              oderdata[23] = val;
            }

            break;

          default:
            break;
        }
      }
      setData(oderdata);
    }
  };

  return (
    <div className="h-[400px]">
      <ResponsiveContainer
        className="flex justify-center "
        width="100%"
        height="100%"
      >
        <BarChart
          className="self-center justify-center"
          data={data}
          width={500}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={2}
        >
          <XAxis dataKey="name" padding={{ left: 10, right: 10 }} />

          <Tooltip />
          <Bar dataKey="order" fill="#E80000" />
          <Bar dataKey="ordermore" fill="#60BA62" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
