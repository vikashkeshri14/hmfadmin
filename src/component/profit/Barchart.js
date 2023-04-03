import React, { useState, useEffect } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
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

export default function Barchart(props) {
  const [data, setData] = useState([
    {
      name: "Jan",
      google: 0,
      apple: 0,
      bank: 0,
    },
    {
      name: "Feb",
      google: 0,
      apple: 0,
      bank: 0,
    },
    {
      name: "Mar",
      google: 0,
      apple: 0,
      bank: 0,
    },
    {
      name: "Apr",
      google: 0,
      apple: 0,
      bank: 0,
    },
    {
      name: "May",
      google: 0,
      apple: 0,
      bank: 0,
    },
    {
      name: "Jun",
      google: 0,
      apple: 0,
      bank: 0,
    },
    {
      name: "Jul",
      google: 0,
      apple: 0,
      bank: 0,
    },
    {
      name: "Aug",
      google: 0,
      apple: 0,
      bank: 0,
    },
    {
      name: "Sep",
      google: 0,
      apple: 0,
      bank: 0,
    },
    {
      name: "Oct",
      google: 0,
      apple: 0,
      bank: 0,
    },
    {
      name: "Nov",
      google: 0,
      apple: 0,
      bank: 0,
    },
    {
      name: "Dec",
      google: 0,
      apple: 0,
      bank: 0,
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

    let params = { url: apiList.totalearningallbymonth, body: obj };
    let response = await ApiService.postData(params);

    if (response) {
      let searchgoogle;
      let searchapple;
      let searchbank;
      let val;
      let valres = [
        {
          name: "Jan",
          google: 0,
          apple: 0,
          bank: 0,
        },
        {
          name: "Feb",
          google: 0,
          apple: 0,
          bank: 0,
        },
        {
          name: "Mar",
          google: 0,
          apple: 0,
          bank: 0,
        },
        {
          name: "Apr",
          google: 0,
          apple: 0,
          bank: 0,
        },
        {
          name: "May",
          google: 0,
          apple: 0,
          bank: 0,
        },
        {
          name: "Jun",
          google: 0,
          apple: 0,
          bank: 0,
        },
        {
          name: "Jul",
          google: 0,
          apple: 0,
          bank: 0,
        },
        {
          name: "Aug",
          google: 0,
          apple: 0,
          bank: 0,
        },
        {
          name: "Sep",
          google: 0,
          apple: 0,
          bank: 0,
        },
        {
          name: "Oct",
          google: 0,
          apple: 0,
          bank: 0,
        },
        {
          name: "Nov",
          google: 0,
          apple: 0,
          bank: 0,
        },
        {
          name: "Dec",
          google: 0,
          apple: 0,
          bank: 0,
        },
      ];
      let googleearning = response.googleearning;
      let bankearning = response.bankearning;
      let appleearning = response.appleearning;
      for (let i = 0; i < 12; i++) {
        switch (i) {
          case 0:
            searchgoogle = googleearning.findIndex((data) => data.month == (i + 1));
            searchapple = appleearning.findIndex((data) => data.month == (i + 1));
            searchbank = bankearning.findIndex((data) => data.month == (i + 1));
            if (searchgoogle >= 0 && searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Jan",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            } else if (searchgoogle >= 0 && searchapple >= 0) {
              val = {
                name: "Jan",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            } else if (searchgoogle >= 0 && searchbank >= 0) {
              val = {
                name: "Jan",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Jan",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchbank >= 0) {
              val = {
                name: "Jan",
                google: 0,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0) {
              val = {
                name: "Jan",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            }
            else if (searchgoogle >= 0) {
              val = {
                name: "Jan",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: 0,
              };
            }
            else {
              val = {
                name: "Jan",
                google: 0,
                apple: 0,
                bank: 0,
              };
            }
            valres[i] = val;
            break;
          case 1:
            searchgoogle = googleearning.findIndex((data) => data.month == (i + 1));
            searchapple = appleearning.findIndex((data) => data.month == (i + 1));
            searchbank = bankearning.findIndex((data) => data.month == (i + 1));
            if (searchgoogle >= 0 && searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Feb",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            } else if (searchgoogle >= 0 && searchapple >= 0) {
              val = {
                name: "Feb",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            } else if (searchgoogle >= 0 && searchbank >= 0) {
              val = {
                name: "Feb",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Feb",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchbank >= 0) {
              val = {
                name: "Feb",
                google: 0,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0) {
              val = {
                name: "Feb",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            }
            else if (searchgoogle >= 0) {
              val = {
                name: "Feb",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: 0,
              };
            }
            else {
              val = {
                name: "Feb",
                google: 0,
                apple: 0,
                bank: 0,
              };
            }

            valres[i] = val;

            break;

          case 2:
            searchgoogle = googleearning.findIndex((data) => data.month == (i + 1));
            searchapple = appleearning.findIndex((data) => data.month == (i + 1));
            searchbank = bankearning.findIndex((data) => data.month == (i + 1));
            if (searchgoogle >= 0 && searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Mar",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            } else if (searchgoogle >= 0 && searchapple >= 0) {
              val = {
                name: "Mar",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            } else if (searchgoogle >= 0 && searchbank >= 0) {
              val = {
                name: "Mar",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Mar",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchbank >= 0) {
              val = {
                name: "Mar",
                google: 0,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0) {
              val = {
                name: "Mar",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            }
            else if (searchgoogle >= 0) {
              val = {
                name: "Mar",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: 0,
              };
            }
            else {
              val = {
                name: "Mar",
                google: 0,
                apple: 0,
                bank: 0,
              };
            }
            valres[i] = val;

            break;
          case 3:
            searchgoogle = googleearning.findIndex((data) => data.month == (i + 1));
            searchapple = appleearning.findIndex((data) => data.month == (i + 1));
            searchbank = bankearning.findIndex((data) => data.month == (i + 1));
            if (searchgoogle >= 0 && searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Apr",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            } else if (searchgoogle >= 0 && searchapple >= 0) {
              val = {
                name: "Apr",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            } else if (searchgoogle >= 0 && searchbank >= 0) {
              val = {
                name: "Apr",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Apr",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchbank >= 0) {
              val = {
                name: "Apr",
                google: 0,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0) {
              val = {
                name: "Apr",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            }
            else if (searchgoogle >= 0) {
              val = {
                name: "Apr",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: 0,
              };
            }
            else {
              val = {
                name: "Apr",
                google: 0,
                apple: 0,
                bank: 0,
              };
            }
            valres[i] = val;

            break;
          case 4:
            searchgoogle = googleearning.findIndex((data) => data.month == (i + 1));
            searchapple = appleearning.findIndex((data) => data.month == (i + 1));
            searchbank = bankearning.findIndex((data) => data.month == (i + 1));
            if (searchgoogle >= 0 && searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "May",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            } else if (searchgoogle >= 0 && searchapple >= 0) {
              val = {
                name: "Jan",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            } else if (searchgoogle >= 0 && searchbank >= 0) {
              val = {
                name: "May",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "May",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchbank >= 0) {
              val = {
                name: "May",
                google: 0,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0) {
              val = {
                name: "May",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            }
            else if (searchgoogle >= 0) {
              val = {
                name: "May",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: 0,
              };
            }
            else {
              val = {
                name: "May",
                google: 0,
                apple: 0,
                bank: 0,
              };
            }
            valres[i] = val;

            break;
          case 5:
            searchgoogle = googleearning.findIndex((data) => data.month == (i + 1));
            searchapple = appleearning.findIndex((data) => data.month == (i + 1));
            searchbank = bankearning.findIndex((data) => data.month == (i + 1));
            if (searchgoogle >= 0 && searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Jun",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            } else if (searchgoogle >= 0 && searchapple >= 0) {
              val = {
                name: "Jun",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            } else if (searchgoogle >= 0 && searchbank >= 0) {
              val = {
                name: "Jun",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Jun",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchbank >= 0) {
              val = {
                name: "Jun",
                google: 0,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0) {
              val = {
                name: "Jun",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            }
            else if (searchgoogle >= 0) {
              val = {
                name: "Jun",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: 0,
              };
            }
            else {
              val = {
                name: "Jun",
                google: 0,
                apple: 0,
                bank: 0,
              };
            }
            valres[i] = val;

            break;
          case 6:
            searchgoogle = googleearning.findIndex((data) => data.month == (i + 1));
            searchapple = appleearning.findIndex((data) => data.month == (i + 1));
            searchbank = bankearning.findIndex((data) => data.month == (i + 1));
            if (searchgoogle >= 0 && searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Jul",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            } else if (searchgoogle >= 0 && searchapple >= 0) {
              val = {
                name: "Jul",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            } else if (searchgoogle >= 0 && searchbank >= 0) {
              val = {
                name: "Jul",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Jul",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchbank >= 0) {
              val = {
                name: "Jul",
                google: 0,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0) {
              val = {
                name: "Jul",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            }
            else if (searchgoogle >= 0) {
              val = {
                name: "Jul",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: 0,
              };
            }
            else {
              val = {
                name: "Jul",
                google: 0,
                apple: 0,
                bank: 0,
              };
            }
            valres[i] = val;

            break;
          case 7:
            searchgoogle = googleearning.findIndex((data) => data.month == (i + 1));
            searchapple = appleearning.findIndex((data) => data.month == (i + 1));
            searchbank = bankearning.findIndex((data) => data.month == (i + 1));
            if (searchgoogle >= 0 && searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Aug",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            } else if (searchgoogle >= 0 && searchapple >= 0) {
              val = {
                name: "Aug",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            } else if (searchgoogle >= 0 && searchbank >= 0) {
              val = {
                name: "Aug",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Aug",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchbank >= 0) {
              val = {
                name: "Aug",
                google: 0,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0) {
              val = {
                name: "Aug",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            }
            else if (searchgoogle >= 0) {
              val = {
                name: "Aug",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: 0,
              };
            }
            else {
              val = {
                name: "Aug",
                google: 0,
                apple: 0,
                bank: 0,
              };
            }
            valres[i] = val;

            break;
          case 8:
            searchgoogle = googleearning.findIndex((data) => data.month == (i + 1));
            searchapple = appleearning.findIndex((data) => data.month == (i + 1));
            searchbank = bankearning.findIndex((data) => data.month == (i + 1));
            if (searchgoogle >= 0 && searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Sep",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            } else if (searchgoogle >= 0 && searchapple >= 0) {
              val = {
                name: "Sep",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            } else if (searchgoogle >= 0 && searchbank >= 0) {
              val = {
                name: "Sep",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Sep",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchbank >= 0) {
              val = {
                name: "Sep",
                google: 0,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0) {
              val = {
                name: "Sep",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            }
            else if (searchgoogle >= 0) {
              val = {
                name: "Sep",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: 0,
              };
            }
            else {
              val = {
                name: "Sep",
                google: 0,
                apple: 0,
                bank: 0,
              };
            }
            valres[i] = val;

            break;
          case 9:
            searchgoogle = googleearning.findIndex((data) => data.month == (i + 1));
            searchapple = appleearning.findIndex((data) => data.month == (i + 1));
            searchbank = bankearning.findIndex((data) => data.month == (i + 1));
            if (searchgoogle >= 0 && searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Oct",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            } else if (searchgoogle >= 0 && searchapple >= 0) {
              val = {
                name: "Oct",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            } else if (searchgoogle >= 0 && searchbank >= 0) {
              val = {
                name: "Oct",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Oct",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchbank >= 0) {
              val = {
                name: "Oct",
                google: 0,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0) {
              val = {
                name: "Oct",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            }
            else if (searchgoogle >= 0) {
              val = {
                name: "Oct",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: 0,
              };
            }
            else {
              val = {
                name: "Oct",
                google: 0,
                apple: 0,
                bank: 0,
              };
            }
            valres[i] = val;

            break;
          case 10:
            searchgoogle = googleearning.findIndex((data) => data.month == (i + 1));
            searchapple = appleearning.findIndex((data) => data.month == (i + 1));
            searchbank = bankearning.findIndex((data) => data.month == (i + 1));
            if (searchgoogle >= 0 && searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Nov",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            } else if (searchgoogle >= 0 && searchapple >= 0) {
              val = {
                name: "Nov",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            } else if (searchgoogle >= 0 && searchbank >= 0) {
              val = {
                name: "Nov",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Nov",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchbank >= 0) {
              val = {
                name: "Nov",
                google: 0,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0) {
              val = {
                name: "Nov",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            }
            else if (searchgoogle >= 0) {
              val = {
                name: "Nov",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: 0,
              };
            }
            else {
              val = {
                name: "Nov",
                google: 0,
                apple: 0,
                bank: 0,
              };
            }
            valres[i] = val;
            break;
          case 11:
            searchgoogle = googleearning.findIndex((data) => data.month == (i + 1));
            searchapple = appleearning.findIndex((data) => data.month == (i + 1));
            searchbank = bankearning.findIndex((data) => data.month == (i + 1));
            if (searchgoogle >= 0 && searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Dec",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            } else if (searchgoogle >= 0 && searchapple >= 0) {
              val = {
                name: "Dec",
                google: googleearning[searchgoogle].cnt,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            } else if (searchgoogle >= 0 && searchbank >= 0) {
              val = {
                name: "Dec",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0 && searchbank >= 0) {
              val = {
                name: "Dec",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchbank >= 0) {
              val = {
                name: "Dec",
                google: 0,
                apple: 0,
                bank: bankearning[searchbank].cnt,
              };
            }
            else if (searchapple >= 0) {
              val = {
                name: "Dec",
                google: 0,
                apple: appleearning[searchapple].cnt,
                bank: 0,
              };
            }
            else if (searchgoogle >= 0) {
              val = {
                name: "Dec",
                google: googleearning[searchgoogle].cnt,
                apple: 0,
                bank: 0,
              };
            }
            else {
              val = {
                name: "Dec",
                google: 0,
                apple: 0,
                bank: 0,
              };
            }
            valres[i] = val;
            break;
          default:
            break;
        }
      }
      // console.log(valres)
      setData(data => valres);
    }
  };
  return (
    <>
      <div className="h-[350px] mt-[60px] p-[10px]">
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
            <CartesianGrid strokeDasharray="1 1 1" />

            <Tooltip />
            <XAxis dataKey="name" />
            <Bar dataKey="google" fill="#60BA62" />
            <Bar dataKey="apple" fill="#FF9800" />
            <Bar dataKey="bank" fill="#959494" />

          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
