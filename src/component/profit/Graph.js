import React, { useState, useEffect } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function Graph(props) {

  const [data, setData] = useState([
    {
      name: "Jan",
      cnt: 0,

    },
    {
      name: "Feb",
      cnt: 0,

    },
    {
      name: "Mar",
      cnt: 0,

    },
    {
      name: "Apr",
      cnt: 0,

    },
    {
      name: "May",
      cnt: 0,

    },
    {
      name: "Jun",
      cnt: 0,

    },
    {
      name: "Jul",
      cnt: 0,

    },
    {
      name: "Aug",
      cnt: 0,

    },
    {
      name: "Sep",
      cnt: 0,

    },
    {
      name: "Oct",
      cnt: 0,

    },
    {
      name: "Nov",
      cnt: 0,

    },
    {
      name: "Dec",
      cnt: 0,

    },
  ])

  useEffect(() => {
    getData(props.from, props.to);
  }, [props]);
  const getData = async (from, to) => {
    const obj = {
      from: from,
      to: to,
    };

    let params = { url: apiList.totalearningbymonth, body: obj };
    let response = await ApiService.postData(params);
    let valres = [
      {
        name: "Jan",
        cnt: 0,

      },
      {
        name: "Feb",
        cnt: 0,

      },
      {
        name: "Mar",
        cnt: 0,

      },
      {
        name: "Apr",
        cnt: 0,

      },
      {
        name: "May",
        cnt: 0,

      },
      {
        name: "Jun",
        cnt: 0,

      },
      {
        name: "Jul",
        cnt: 0,

      },
      {
        name: "Aug",
        cnt: 0,

      },
      {
        name: "Sep",
        cnt: 0,

      },
      {
        name: "Oct",
        cnt: 0,

      },
      {
        name: "Nov",
        cnt: 0,

      },
      {
        name: "Dec",
        cnt: 0,

      },
    ];
    if (response.totalearningbymonth.length > 0) {
      let searchEarning;
      let val;

      let earning = response.totalearningbymonth;
      for (let i = 0; i < 12; i++) {
        switch (i) {
          case 0:
            searchEarning = earning.findIndex((data) => data.month == (i + 1));
            if (searchEarning >= 0) {
              val = {
                name: "Jan",
                cnt: earning[searchEarning].cnt,
              };
            }
            else {
              val = {
                name: "Jan",
                cnt: 0,
              };
            }
            valres[i] = val;
            break;
          case 1:
            searchEarning = earning.findIndex((data) => data.month == (i + 1));

            if (searchEarning >= 0) {
              val = {
                name: "Feb",
                cnt: earning[searchEarning].cnt,
              };
            }
            else {
              val = {
                name: "Feb",
                cnt: 0,
              };
            }
            valres[i] = val;

            break;

          case 2:
            searchEarning = earning.findIndex((data) => data.month == (i + 1));

            if (searchEarning >= 0) {
              val = {
                name: "Mar",
                cnt: earning[searchEarning].cnt,
              };
            }
            else {
              val = {
                name: "Mar",
                cnt: 0,
              };
            }
            valres[i] = val;

            break;
          case 3:
            searchEarning = earning.findIndex((data) => data.month == (i + 1));

            if (searchEarning >= 0) {
              val = {
                name: "Apr",
                cnt: earning[searchEarning].cnt,
              };
            }
            else {
              val = {
                name: "Apr",
                cnt: 0,
              };
            }
            valres[i] = val;

            break;
          case 4:
            searchEarning = earning.findIndex((data) => data.month == (i + 1));

            if (searchEarning >= 0) {
              val = {
                name: "May",
                cnt: earning[searchEarning].cnt,
              };
            }
            else {
              val = {
                name: "May",
                cnt: 0,
              };
            }
            valres[i] = val;

            break;
          case 5:
            searchEarning = earning.findIndex((data) => data.month == (i + 1));

            if (searchEarning >= 0) {
              val = {
                name: "Jun",
                cnt: earning[searchEarning].cnt,
              };
            }
            else {
              val = {
                name: "Jun",
                cnt: 0,
              };
            }
            valres[i] = val;

            break;
          case 6:
            searchEarning = earning.findIndex((data) => data.month == (i + 1));

            if (searchEarning >= 0) {
              val = {
                name: "Jul",
                cnt: earning[searchEarning].cnt,
              };
            }
            else {
              val = {
                name: "Jul",
                cnt: 0,
              };
            }
            valres[i] = val;

            break;
          case 7:
            searchEarning = earning.findIndex((data) => data.month == (i + 1));

            if (searchEarning >= 0) {
              val = {
                name: "Aug",
                cnt: earning[searchEarning].cnt,
              };
            }
            else {
              val = {
                name: "Aug",
                cnt: 0,
              };
            }
            valres[i] = val;

            break;
          case 8:
            searchEarning = earning.findIndex((data) => data.month == (i + 1));

            if (searchEarning >= 0) {
              val = {
                name: "Sep",
                cnt: earning[searchEarning].cnt,
              };
            }
            else {
              val = {
                name: "Sep",
                cnt: 0,
              };
            }
            valres[i] = val;

            break;
          case 9:
            searchEarning = earning.findIndex((data) => data.month == (i + 1));

            if (searchEarning >= 0) {
              val = {
                name: "Oct",
                cnt: earning[searchEarning].cnt,
              };
            }
            else {
              val = {
                name: "Oct",
                cnt: 0,
              };
            }
            valres[i] = val;

            break;
          case 10:
            searchEarning = earning.findIndex((data) => data.month == (i + 1));

            if (searchEarning >= 0) {
              val = {
                name: "Nov",
                cnt: earning[searchEarning].cnt,
              };
            }
            else {
              val = {
                name: "Nov",
                cnt: 0,
              };
            }
            valres[i] = val;

            break;
          case 11:
            searchEarning = earning.findIndex((data) => data.month == (i + 1));

            if (searchEarning >= 0) {
              val = {
                name: "Dec",
                cnt: earning[searchEarning].cnt,
              };
            }
            else {
              val = {
                name: "Dec",
                cnt: 0,
              };
            }
            valres[i] = val;

            break;
          default:
            break;
        }
      }
      setData(valres);
      console.log(valres);
    } else {
      setData(valres)
    }
  };
  return (
    <div className="relative mt-[150px] h-[250px] p-[10px]">
      <ResponsiveContainer width="100%" height="100%">
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
          <Area
            type="monotone"
            dataKey="cnt"
            stroke="#FF9800"
            fill="rgb(255,152, 0, 0.24)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
