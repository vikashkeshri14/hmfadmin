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
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [range, setRange] = useState("30");
  useEffect(() => {
    getData(props.range, props.from, props.to);
    setRange(props.range, props.from, props.to);
  }, [props]);
  const getData = async (rangeval, from, to) => {
    const obj = {
      from: from,
      to: to,
      range: rangeval,
      status: "all",
    };
    let params = { url: apiList.numberOfOrderByStatus, body: obj };
    let response = await ApiService.postData(params);
    // console.log(obj);
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
      // console.log(valres);
      setData(valres);
      setLoading(false);
    }
  };

  const graphChange = async (status) => {
    setLoading(true);
    let obj = {
      from: props.from,
      to: props.to,
      status: "all",
    };
    if (status == "all") {
      obj = {
        from: props.from,
        to: props.to,
        range: range,
        status: "all",
      };
      let params = { url: apiList.numberOfOrderByStatus, body: obj };
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
    } else if (status == "1") {
      obj = {
        from: props.from,
        to: props.to,
        status: "1",
      };
      let params = { url: apiList.numberOfOrderByStatus, body: obj };
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
    } else if (status == "2") {
      obj = {
        from: props.from,
        to: props.to,
        status: "2",
      };
      let params = { url: apiList.numberOfOrderByStatus, body: obj };
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
    } else if (status == "3") {
      obj = {
        from: props.from,
        to: props.to,
        range: range,
        status: 0,
      };
      let params = { url: apiList.numberOfOrderByStatus, body: obj };
      let response = await ApiService.postData(params);
      //console.log(response);
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
    } else if (status == "4") {
      obj = {
        from: props.from,
        to: props.to,
        status: "4",
      };
      let params = { url: apiList.numberOfOrderByStatus, body: obj };
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
        //console.log(valres);
        setData(valres);
        setLoading(false);
      }
    } else if (status == "5") {
      obj = {
        from: props.from,
        to: props.to,
        status: "5",
      };
      let params = { url: apiList.numberOfOrderByStatus, body: obj };
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
    <div className=" h-[200px] relative">
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
      <ResponsiveContainer width="100%" className="mt-[120px]" height="100%">
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
            dataKey="order"
            stroke="#FF9800"
            fill="rgb(255,152, 0, 0.16)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
