import React, { useEffect, useState } from "react";
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
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";

export default function LineCharts() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [value, onChange] = useState([new Date(), new Date()]);
  const [data, setData] = useState([
    {
      name: "12am",
      paid: 0,
      unpaid: 0,
    },
    {
      name: "1am",
      paid: 0,
      unpaid: 0,
    },
    {
      name: "2am",

      paid: 0,
      unpaid: 0,
    },
    {
      name: "3am",

      paid: 0,
      unpaid: 0,
    },
    {
      name: "4am",

      paid: 0,
      unpaid: 0,
    },
    {
      name: "5am",

      paid: 0,
      unpaid: 0,
    },
    {
      name: "6am",

      paid: 0,
      unpaid: 0,
    },
    {
      name: "7am",

      paid: 0,
      unpaid: 0,
    },
    {
      name: "8am",

      paid: 0,
      unpaid: 0,
    },
    {
      name: "9am",

      paid: 0,
      unpaid: 0,
    },
    {
      name: "10am",

      paid: 0,
      unpaid: 0,
    },
    {
      name: "11am",
      paid: 0,
      unpaid: 0,
    },
    {
      name: "12pm",
      paid: 0,
      unpaid: 0,
    },
    {
      name: "1pm",
      paid: 0,
      unpaid: 0,
    },
    {
      name: "2pm",
      paid: 0,
      unpaid: 0,
    },
    {
      name: "3pm",
      paid: 0,
      unpaid: 0,
    },
    {
      name: "4pm",
      paid: 0,
      unpaid: 0,
    },
    {
      name: "5pm",
      paid: 0,
      unpaid: 0,
    },
    {
      name: "6pm",
      paid: 0,
      unpaid: 0,
    },
    {
      name: "7pm",
      paid: 0,
      unpaid: 0,
    },
    {
      name: "8pm",
      paid: 0,
      unpaid: 0,
    },
    {
      name: "9pm",
      paid: 0,
      unpaid: 0,
    },
    {
      name: "10pm",
      paid: 0,
      unpaid: 0,
    },
    {
      name: "11pm",
      paid: 0,
      unpaid: 0,
    },
  ]);

  useEffect(() => {
    getData();
  }, [from, to]);
  const getData = async () => {
    const obj = {
      from: from,
      to: to,
    };
    let params = { url: apiList.paidandpendingcommitment, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      let searchPaid;
      let searchUnpaid;
      let val;
      let paid = response.paidcommitment;
      let unpaid = response.pendingcommitment;
      let valres = [];
      for (let i = 0; i < 24; i++) {
        switch (i) {
          case 0:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "12am",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "12am",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "12am",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "12am",
                paid: 0,
                unpaid: 0,
              };
            }

            valres[i] = val;

            break;
          case 1:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "1am",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "1am",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "1am",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "1am",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;

            break;
          case 2:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "2am",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "2am",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "2am",
                paid: 0,
                unpaid: searchUnpaid[i].cnt,
              };
            } else {
              val = {
                name: "2am",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;

            break;
          case 3:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "3am",
                paid: paid[searchPaid].cnt,
                unpaid: searchUnpaid[i].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "3am",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "3am",
                paid: 0,
                unpaid: searchUnpaid[i].cnt,
              };
            } else {
              val = {
                name: "3am",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;

            break;
          case 4:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "4am",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "4am",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "4am",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "4am",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;

            break;
          case 5:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "5am",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "5am",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "5am",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "5am",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;

            break;
          case 6:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "6am",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "6am",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "6am",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "6am",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;
            break;
          case 7:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "7am",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "7am",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "7am",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "7am",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;
            break;
          case 8:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "8am",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "8am",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "8am",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "8am",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;
            break;
          case 9:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "9am",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "9am",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "9am",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "9am",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;
            break;
          case 10:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "10am",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "10am",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "10am",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "10am",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;
            break;
          case 11:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "11am",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "11am",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "11am",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "11am",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;

            break;
          case 12:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "12pm",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "12pm",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "12pm",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "12pm",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;
            break;
          case 13:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "1pm",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "1pm",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "1pm",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "1pm",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;
            break;
          case 14:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "2pm",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "2pm",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "2pm",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "2pm",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;

            break;

          case 15:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "3pm",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "3pm",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "3pm",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "3pm",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;

            break;

          case 16:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "4pm",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "4pm",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "4pm",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "4pm",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;

            break;

          case 17:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "5pm",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "5pm",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "5pm",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "5pm",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;

            break;

          case 18:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "6pm",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "6pm",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "6pm",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "6pm",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;

            break;

          case 19:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "7pm",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "7pm",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "7pm",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "7pm",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;

            break;
          case 20:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "8pm",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "8pm",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "8pm",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "8pm",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;
            break;
          case 21:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "9pm",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "9pm",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "9pm",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "9pm",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;
            break;
          case 22:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "10pm",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "10pm",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "10pm",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "10pm",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;

            break;
          case 23:
            searchPaid = paid.findIndex((data) => data.hr == i);
            searchUnpaid = unpaid.findIndex((data) => data.hr == i);
            if (searchPaid >= 0 && searchUnpaid >= 0) {
              val = {
                name: "11pm",
                paid: paid[searchPaid].cnt,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else if (searchPaid >= 0) {
              val = {
                name: "11pm",
                paid: paid[searchPaid].cnt,
                unpaid: 0,
              };
            } else if (searchUnpaid >= 0) {
              val = {
                name: "11pm",
                paid: 0,
                unpaid: unpaid[searchUnpaid].cnt,
              };
            } else {
              val = {
                name: "11pm",
                paid: 0,
                unpaid: 0,
              };
            }
            valres[i] = val;

            break;

          default:
            break;
        }
      }
      //console.log(valres);
      setData(valres);
    }
  };
  return (
    <div className="h-[281px]">
      <div className="flex border-b-[1px] mb-[10px]">
        <div className="flex-col w-[33.3%]">
          <div className="p-[5px] text-[#959494] text-[18px] font-sstbold">
            الالتزامات المدفوعة و المعلقة
          </div>
          <div>
            <div className="position-relative mb-[10px] has-icon-right">
              <div className="absolute zindex-1 top-[20px] left-0">
                <i className="ficon bx bxs-calendar text-[20px] pl-[10px]"></i>
              </div>
              <DateRangePicker
                calendarIcon=""
                calendarClassName="border-0 "
                className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                onChange={(e) => {
                  onChange(e);
                  if (e != null) {
                    setFrom(moment(e[0]).format("YYYY-MM-DD"));
                    setTo(moment(e[1]).format("YYYY-MM-DD"));
                  } else {
                    setFrom("");
                    setTo("");
                  }
                }}
                value={value}
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
          <Line type="monotone" dataKey="unpaid" stroke="#E80000" />
          <Line type="monotone" dataKey="paid" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
