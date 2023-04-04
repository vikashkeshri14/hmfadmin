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
  const [status, setStatus] = useState("1");
  useEffect(() => {
    graphChange(status);
  }, [props]);
  const graphChange = async (status) => {
    setLoading(true);
    setStatus(status);
    let obj = {
      status: "all",
      from: props.from,
      to: props.to,
    };
    let val;
    let searchStores;
    let searchUsers;
    let searchProducts;

    let valres = [
      { name: "12am", report: 0 },
      { name: "1am", report: 0 },
      { name: "2am", report: 0 },
      { name: "3am", report: 0 },
      { name: "4am", report: 0 },
      { name: "5am", report: 0 },
      { name: "6am", report: 0 },
      { name: "7am", report: 0 },
      { name: "8am", report: 0 },
      { name: "9am", report: 0 },
      { name: "10am", report: 0 },
      { name: "11am", report: 0 },
      { name: "12pm", report: 0 },
      { name: "1pm", report: 0 },
      { name: "2pm", report: 0 },
      { name: "3pm", report: 0 },
      { name: "4pm", report: 0 },
      { name: "5pm", report: 0 },
      { name: "6pm", report: 0 },
      { name: "7pm", report: 0 },
      { name: "8pm", report: 0 },
      { name: "9pm", report: 0 },
      { name: "10pm", report: 0 },
      { name: "11pm", report: 0 },
    ];

    if (status == "1") {
      obj = {
        status: "1",
        from: props.from,
        to: props.to,
      };
      let params = { url: apiList.getReportByHr, body: obj };
      let response = await ApiService.postData(params);
      if (response) {
        let stores = response.stores;
        let users = response.users;
        let products = response.products;
        for (let i = 0; i < 24; i++) {
          switch (i) {
            case 0:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "12am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "12am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "12am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "12am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "12am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "12am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "12am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "12am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 1:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "1am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "1am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "1am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "1am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "1am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "1am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "1am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "1am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 2:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "2am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "2am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "2am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "2am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "2am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "2am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "2am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "2am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 3:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "12am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "3am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "3am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "3am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "3am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "3am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "3am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "3am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 4:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "4am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "4am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "4am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "4am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "4am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "4am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "4am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "4am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 5:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "5am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "5am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "5am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "5am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "5am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "5am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "5am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "5am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 6:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "6am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "6am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "6am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "6am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "6am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "6am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "6am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "6am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 7:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "7am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "7am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "7am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "7am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "7am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "7am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "7am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "7am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 8:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "8am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "8am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "8am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "8am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "8am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "8am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "8am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "8am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 9:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "9am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "9am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "9am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "9am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "9am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "9am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "9am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "9am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 10:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "10am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "10am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "10am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "10am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "10am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "10am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "10am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "10am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 11:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "11am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "11am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "11am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "11am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "11am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "11am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "11am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "11am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 12:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "12pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "12pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "12pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "12pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "12pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "12pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "12pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "12pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 13:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "1pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "1pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "1pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "1pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "1pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "1pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "1pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "1pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 14:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "2pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "2pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "2pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "2pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "2pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "2pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "2pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "2pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 15:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "3pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "3pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "3pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "3pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "3pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "3pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "3pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "3pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 16:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "4pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "4pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "4pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "4pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "4pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "4pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "4pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "4pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 17:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "5pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "5pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "5pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "5pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "5pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "5pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "5pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "5pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 18:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "6pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "6pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "6pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "6pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "6pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "6pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "6pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "6pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 19:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "7pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "7pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "7pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "7pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "7pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "7pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "7pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "7pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 20:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "8pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "8pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "8pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "8pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "8pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "8pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "8pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "8pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 21:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "9pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "9pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "9pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "9pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "9pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "9pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "9pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "9pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 22:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "10pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "10pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "10pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "10pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "10pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "10pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "10pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "10pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 23:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "11pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "11pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "11pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "11pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "11pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "11pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "11pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "11pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            default:
              break;
          }
        }
        setData(valres);
      }
    } else if (status == "2") {
      obj = {
        status: "2",
        from: props.from,
        to: props.to,
      };
      let params = { url: apiList.getReportByHr, body: obj };
      let response = await ApiService.postData(params);

      if (response) {
        let stores = response.stores;
        let users = response.users;
        let products = response.products;
        for (let i = 0; i < 24; i++) {
          switch (i) {
            case 0:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "12am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "12am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "12am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "12am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "12am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "12am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "12am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "12am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 1:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "1am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "1am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "1am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "1am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "1am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "1am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "1am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "1am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 2:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "2am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "2am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "2am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "2am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "2am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "2am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "2am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "2am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 3:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "12am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "3am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "3am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "3am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "3am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "3am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "3am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "3am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 4:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "4am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "4am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "4am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "4am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "4am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "4am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "4am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "4am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 5:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "5am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "5am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "5am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "5am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "5am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "5am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "5am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "5am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 6:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "6am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "6am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "6am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "6am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "6am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "6am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "6am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "6am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 7:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "7am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "7am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "7am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "7am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "7am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "7am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "7am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "7am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 8:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "8am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "8am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "8am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "8am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "8am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "8am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "8am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "8am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 9:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "9am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "9am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "9am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "9am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "9am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "9am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "9am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "9am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 10:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "10am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "10am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "10am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "10am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "10am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "10am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "10am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "10am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 11:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "11am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "11am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "11am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "11am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "11am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "11am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "11am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "11am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 12:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "12pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "12pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "12pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "12pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "12pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "12pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "12pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "12pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 13:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "1pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "1pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "1pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "1pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "1pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "1pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "1pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "1pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 14:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "2pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "2pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "2pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "2pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "2pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "2pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "2pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "2pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 15:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "3pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "3pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "3pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "3pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "3pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "3pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "3pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "3pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 16:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "4pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "4pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "4pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "4pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "4pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "4pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "4pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "4pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 17:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "5pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "5pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "5pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "5pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "5pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "5pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "5pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "5pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 18:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "6pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "6pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "6pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "6pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "6pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "6pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "6pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "6pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 19:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "7pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "7pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "7pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "7pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "7pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "7pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "7pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "7pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 20:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "8pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "8pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "8pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "8pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "8pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "8pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "8pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "8pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 21:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "9pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "9pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "9pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "9pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "9pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "9pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "9pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "9pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 22:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "10pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "10pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "10pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "10pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "10pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "10pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "10pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "10pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 23:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "11pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "11pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "11pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "11pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "11pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "11pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "11pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "11pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            default:
              break;
          }
        }
        setData(valres);
      }
    } else if (status == "3") {
      obj = {
        status: "3",
        from: props.from,
        to: props.to,
      };
      let params = { url: apiList.getReportByHr, body: obj };
      let response = await ApiService.postData(params);

      if (response) {
        let stores = response.stores;
        let users = response.users;
        let products = response.products;
        for (let i = 0; i < 24; i++) {
          switch (i) {
            case 0:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "12am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "12am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "12am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "12am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "12am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "12am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "12am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "12am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 1:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "1am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "1am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "1am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "1am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "1am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "1am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "1am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "1am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 2:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "2am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "2am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "2am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "2am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "2am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "2am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "2am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "2am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 3:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "12am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "3am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "3am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "3am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "3am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "3am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "3am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "3am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 4:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "4am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "4am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "4am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "4am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "4am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "4am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "4am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "4am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 5:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "5am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "5am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "5am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "5am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "5am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "5am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "5am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "5am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 6:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "6am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "6am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "6am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "6am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "6am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "6am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "6am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "6am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 7:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "7am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "7am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "7am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "7am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "7am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "7am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "7am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "7am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 8:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "8am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "8am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "8am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "8am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "8am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "8am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "8am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "8am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 9:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "9am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "9am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "9am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "9am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "9am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "9am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "9am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "9am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 10:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "10am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "10am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "10am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "10am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "10am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "10am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "10am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "10am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 11:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "11am",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "11am",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "11am",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "11am",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "11am",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "11am",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "11am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "11am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 12:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "12pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "12pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "12pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "12pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "12pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "12pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "12pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "12pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 13:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "1pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "1pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "1pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "1pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "1pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "1pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "1pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "1pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 14:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "2pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "2pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "2pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "2pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "2pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "2pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "2pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "2pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 15:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "3pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "3pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "3pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "3pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "3pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "3pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "3pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "3pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 16:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "4pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "4pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "4pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "4pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "4pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "4pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "4pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "4pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 17:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "5pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "5pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "5pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "5pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "5pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "5pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "5pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "5pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 18:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "6pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "6pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "6pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "6pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "6pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "6pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "6pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "6pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 19:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "7pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "7pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "7pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "7pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "7pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "7pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "7pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "7pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 20:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "8pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "8pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "8pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "8pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "8pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "8pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "8pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "8pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 21:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "9pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "9pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "9pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "9pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "9pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "9pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "9pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "9pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 22:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "10pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "10pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "10pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "10pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "10pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "10pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "10pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "10pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 23:
              searchStores = stores.findIndex((data) => data.hr == i);
              searchUsers = users.findIndex((data) => data.hr == i);
              searchProducts = products.findIndex((data) => data.hr == i);

              if (
                searchStores >= 0 &&
                searchUsers >= 0 &&
                searchProducts >= 0
              ) {
                val = {
                  name: "11pm",
                  report:
                    stores[searchStores].cnt +
                    users[searchUsers].cnt +
                    products[searchProducts].cnt,
                };
              } else if (searchStores >= 0 && searchUsers >= 0) {
                val = {
                  name: "11pm",
                  report: stores[searchStores].cnt + users[searchUsers].cnt,
                };
              } else if (searchStores >= 0 && searchProducts >= 0) {
                val = {
                  name: "11pm",
                  report:
                    stores[searchStores].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0 && searchProducts >= 0) {
                val = {
                  name: "11pm",
                  report: users[searchUsers].cnt + products[searchProducts].cnt,
                };
              } else if (searchUsers >= 0) {
                val = {
                  name: "11pm",
                  report: users[searchUsers].cnt,
                };
              } else if (searchProducts >= 0) {
                val = {
                  name: "11pm",
                  report: products[searchProducts].cnt,
                };
              } else if (searchStores >= 0) {
                val = {
                  name: "11pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "11pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            default:
              break;
          }
        }
        setData(valres);
      }
    } else if (status == "4") {
      obj = {
        status: 1,
        from: props.from,
        to: props.to,
      };
      let params = { url: apiList.getReportByHr, body: obj };
      let response = await ApiService.postData(params);
      if (response) {
        let stores = response.stores;

        for (let i = 0; i < 24; i++) {
          switch (i) {
            case 0:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "12am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "12am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 1:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "1am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "1am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 2:
              searchStores = stores.findIndex((data) => data.hr == i);

              if (searchStores >= 0) {
                val = {
                  name: "2am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "2am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 3:
              searchStores = stores.findIndex((data) => data.hr == i);

              if (searchStores >= 0) {
                val = {
                  name: "3am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "3am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 4:
              searchStores = stores.findIndex((data) => data.hr == i);

              if (searchStores >= 0) {
                val = {
                  name: "4am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "4am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 5:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "5am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "5am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 6:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "6am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "6am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 7:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "7am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "7am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 8:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "8am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "8am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 9:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "9am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "9am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 10:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "10am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "10am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 11:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "11am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "11am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 12:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "12pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "12pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 13:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "1pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "1pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 14:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "2pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "2pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 15:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "3pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "3pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 16:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "4pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "4pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 17:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "5pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "5pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 18:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "6pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "6pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 19:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "7pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "7pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 20:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "8pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "8pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 21:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "9pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "9pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 22:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "10pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "10pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 23:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "11pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "11pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            default:
              break;
          }
        }
        setData(valres);
      }
    } else if (status == "5") {
      obj = {
        status: 1,
        from: props.from,
        to: props.to,
      };
      let params = { url: apiList.getReportByHr, body: obj };
      let response = await ApiService.postData(params);
      //console.log(response);
      if (response) {
        let stores = response.users;

        for (let i = 0; i < 24; i++) {
          switch (i) {
            case 0:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "12am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "12am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 1:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "1am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "1am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 2:
              searchStores = stores.findIndex((data) => data.hr == i);

              if (searchStores >= 0) {
                val = {
                  name: "2am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "2am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 3:
              searchStores = stores.findIndex((data) => data.hr == i);

              if (searchStores >= 0) {
                val = {
                  name: "3am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "3am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 4:
              searchStores = stores.findIndex((data) => data.hr == i);

              if (searchStores >= 0) {
                val = {
                  name: "4am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "4am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 5:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "5am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "5am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 6:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "6am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "6am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 7:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "7am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "7am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 8:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "8am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "8am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 9:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "9am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "9am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 10:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "10am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "10am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 11:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "11am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "11am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 12:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "12pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "12pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 13:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "1pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "1pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 14:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "2pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "2pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 15:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "3pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "3pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 16:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "4pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "4pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 17:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "5pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "5pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 18:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "6pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "6pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 19:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "7pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "7pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 20:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "8pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "8pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 21:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "9pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "9pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 22:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "10pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "10pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 23:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "11pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "11pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            default:
              break;
          }
        }
        setData(valres);
      }
    } else if (status == "6") {
      obj = {
        status: 1,
        from: props.from,
        to: props.to,
      };
      let params = { url: apiList.getReportByHr, body: obj };
      let response = await ApiService.postData(params);
      if (response) {
        let stores = response.products;

        for (let i = 0; i < 24; i++) {
          switch (i) {
            case 0:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "12am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "12am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 1:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "1am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "1am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 2:
              searchStores = stores.findIndex((data) => data.hr == i);

              if (searchStores >= 0) {
                val = {
                  name: "2am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "2am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 3:
              searchStores = stores.findIndex((data) => data.hr == i);

              if (searchStores >= 0) {
                val = {
                  name: "3am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "3am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 4:
              searchStores = stores.findIndex((data) => data.hr == i);

              if (searchStores >= 0) {
                val = {
                  name: "4am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "4am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 5:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "5am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "5am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 6:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "6am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "6am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 7:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "7am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "7am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 8:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "8am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "8am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 9:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "9am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "9am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 10:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "10am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "10am",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 11:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "11am",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "11am",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 12:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "12pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "12pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 13:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "1pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "1pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 14:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "2pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "2pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 15:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "3pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "3pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 16:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "4pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "4pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 17:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "5pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "5pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 18:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "6pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "6pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            case 19:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "7pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "7pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 20:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "8pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "8pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 21:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "9pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "9pm",
                  report: 0,
                };
              }

              valres[i] = val;
              break;
            case 22:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "10pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "10pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;
            case 23:
              searchStores = stores.findIndex((data) => data.hr == i);
              if (searchStores >= 0) {
                val = {
                  name: "11pm",
                  report: stores[searchStores].cnt,
                };
              } else {
                val = {
                  name: "11pm",
                  report: 0,
                };
              }

              valres[i] = val;

              break;

            default:
              break;
          }
        }
        setData(valres);
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
          <XAxis dataKey="name" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="report"
            stroke="#E80000"
            fill="rgb(232,0, 0, 0.16)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
