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

export default function BarGraph(props) {
  const [data, setData] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  useEffect(() => {
    if (props.from && props.to) {
      setFrom(props.from);
      setTo(props.to);
    }
    numberOfAccpetedAndPaidByHr();
  }, [props]);
  const numberOfAccpetedAndPaidByHr = async () => {
    const obj = {
      "from": props.from,
      "to": props.to
    }
    console.log(obj)
    let params = { url: apiList.numberOfAccpetedAndPaidByHr, body: obj };
    let response = await ApiService.postData(params);
    let paid = response.resultsPaid;
    let accept = response.resultsAccept;
    let valres = [
      {
        name: "12am",
        paid: 0,
        accept: 0,
      },
      {
        name: "1am",
        paid: 0,
        accept: 0,
      },
      {
        name: "2am",

        paid: 0,
        accept: 0,
      },
      {
        name: "3am",

        paid: 0,
        accept: 0,
      },
      {
        name: "4am",

        paid: 0,
        accept: 0,
      },
      {
        name: "5am",

        paid: 0,
        accept: 0,
      },
      {
        name: "6am",

        paid: 0,
        accept: 0,
      },
      {
        name: "7am",

        paid: 0,
        accept: 0,
      },
      {
        name: "8am",

        paid: 0,
        accept: 0,
      },
      {
        name: "9am",

        paid: 0,
        accept: 0,
      },
      {
        name: "10am",

        paid: 0,
        accept: 0,
      },
      {
        name: "11am",
        paid: 0,
        accept: 0,
      },
      {
        name: "12pm",
        paid: 0,
        accept: 0,
      },
      {
        name: "1pm",
        paid: 0,
        accept: 0,
      },
      {
        name: "2pm",
        paid: 0,
        accept: 0,
      },
      {
        name: "3pm",
        paid: 0,
        accept: 0,
      },
      {
        name: "4pm",
        paid: 0,
        accept: 0,
      },
      {
        name: "5pm",
        paid: 0,
        accept: 0,
      },
      {
        name: "6pm",
        paid: 0,
        accept: 0,
      },
      {
        name: "7pm",
        paid: 0,
        accept: 0,
      },
      {
        name: "8pm",
        paid: 0,
        accept: 0,
      },
      {
        name: "9pm",
        paid: 0,
        accept: 0,
      },
      {
        name: "10pm",
        paid: 0,
        accept: 0,
      },
      {
        name: "11pm",
        paid: 0,
        accept: 0,
      },
    ];
    console.log(valres)
    let searchPaid;
    let searchaccept;
    let val;
    for (let i = 0; i < 24; i++) {
      switch (i) {
        case 0:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "12am",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "12am",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "12am",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {

            val = {
              name: "12am",
              paid: 0,
              accept: 0,
            };
          }

          valres[i] = val;

          break;
        case 1:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          console.log(searchaccept)
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "1am",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "1am",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "1am",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "1am",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;

          break;
        case 2:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "2am",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "2am",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "2am",
              paid: 0,
              accept: searchaccept[i].cnt,
            };
          } else {
            val = {
              name: "2am",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;

          break;
        case 3:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "3am",
              paid: paid[searchPaid].paid,
              accept: searchaccept[i].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "3am",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "3am",
              paid: 0,
              accept: searchaccept[i].cnt,
            };
          } else {
            val = {
              name: "3am",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;

          break;
        case 4:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "4am",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "4am",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "4am",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "4am",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;

          break;
        case 5:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "5am",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "5am",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "5am",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "5am",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;

          break;
        case 6:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "6am",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "6am",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "6am",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "6am",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;
          break;
        case 7:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "7am",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "7am",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "7am",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "7am",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;
          break;
        case 8:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "8am",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "8am",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "8am",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "8am",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;
          break;
        case 9:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "9am",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "9am",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "9am",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "9am",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;
          break;
        case 10:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "10am",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "10am",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "10am",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "10am",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;
          break;
        case 11:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "11am",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "11am",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "11am",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "11am",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;

          break;
        case 12:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "12pm",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "12pm",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "12pm",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "12pm",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;
          break;
        case 13:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "1pm",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "1pm",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "1pm",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "1pm",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;
          break;
        case 14:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "2pm",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "2pm",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "2pm",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "2pm",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;

          break;

        case 15:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "3pm",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "3pm",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "3pm",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "3pm",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;

          break;

        case 16:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "4pm",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "4pm",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "4pm",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "4pm",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;

          break;

        case 17:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "5pm",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "5pm",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "5pm",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "5pm",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;

          break;

        case 18:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "6pm",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "6pm",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "6pm",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "6pm",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;

          break;

        case 19:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "7pm",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "7pm",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "7pm",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "7pm",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;

          break;
        case 20:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "8pm",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "8pm",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "8pm",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "8pm",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;
          break;
        case 21:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "9pm",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "9pm",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "9pm",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "9pm",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;
          break;
        case 22:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "10pm",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "10pm",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "10pm",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "10pm",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;

          break;
        case 23:
          searchPaid = paid.findIndex((data) => data.hr == i);
          searchaccept = accept.findIndex((data) => data.hr == i);
          if (searchPaid >= 0 && searchaccept >= 0) {
            val = {
              name: "11pm",
              paid: paid[searchPaid].paid,
              accept: accept[searchaccept].cnt,
            };
          } else if (searchPaid >= 0) {
            val = {
              name: "11pm",
              paid: paid[searchPaid].paid,
              accept: 0,
            };
          } else if (searchaccept >= 0) {
            val = {
              name: "11pm",
              paid: 0,
              accept: accept[searchaccept].cnt,
            };
          } else {
            val = {
              name: "11pm",
              paid: 0,
              accept: 0,
            };
          }
          valres[i] = val;

          break;

        default:
          break;
      }
    }
    setData(valres);
    console.log(valres)
    //setLoading(false);
    // setData(accept);
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
            <XAxis dataKey="name" />
            <Tooltip />

            <Bar dataKey="accept" fill="#60BA62" />
            <Bar dataKey="paid" fill="#AAD0AB" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
