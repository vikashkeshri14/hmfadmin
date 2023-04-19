import React, { useState, useEffect } from "react";
import Barchart from "./Barchart";
import Graph from "./Graph";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import DatePicker from "react-datepicker";

export default function Content() {
  const [alertShow, setAlertShow] = useState(false);
  const [value, onChange] = useState([new Date(), new Date()]);
  const [totalEarning, settotalEarning] = useState(0);
  const [appleEarning, setappleEarning] = useState(0);
  const [googleEarning, setgoogleEarning] = useState(0);
  const [bankEarning, setbankEarning] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tab, setTab] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    getData();
  }, [startDate, endDate, from, to]);
  const getData = async () => {
    // console.log(from)
    const obj = {
      from: startDate ? startDate : from,
      to: endDate ? endDate : to,
    };

    let params = { url: apiList.totalearning, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      if (response.totalearning.length > 0) {
        if (response.totalearning[0].total_order) {
          settotalEarning(response.totalearning[0].total);
        } else {
          settotalEarning(0);
        }
      } else {
        settotalEarning(0);
      }
      if (response.googleearning.length > 0) {
        if (response.googleearning[0].total_order) {
          setgoogleEarning(response.googleearning[0].total);
        }
      } else {
        setgoogleEarning(0);
      }
      if (response.appleearning.length > 0) {
        if (response.appleearning[0].total_order) {
          setappleEarning(response.appleearning[0].total);
        }
      } else {
        setappleEarning(0);
      }
      if (response.bankearning.length > 0) {
        if (response.bankearning[0].total_order) {
          setbankEarning(response.bankearning[0].total);
        }
      } else {
        setbankEarning(0);
      }
    }
  };
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div
        className={alertShow ? "blur-sm content-wrapper" : "content-wrapper"}
      >
        <div className="content-header row"></div>
        <div className="content-body">
          <section className="sms-management">
            <div className="row flex mr-[5px] ">
              <div className="w-[24%]  dashboard-users ">
                <div className="position-relative has-icon-right">
                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>

                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    dateFormat="yyyy/dd/MM"
                    endDate={endDate}
                    placeholderText="From Date"
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                  />
                </div>
              </div>
              <div className="w-[24%] mr-[10px]  dashboard-users ">
                <div className="position-relative has-icon-right">
                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>

                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="yyyy/dd/MM"
                    placeholderText="To Date"
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                  />
                </div>
              </div>
              <div className="w-[2%] mr-[10px]  dashboard-users">
                {(startDate || endDate) && (
                  <i
                    onClick={() => {
                      setStartDate(null);
                      setEndDate(null);
                    }}
                    className="ficon mt-[20px] bx bx-window-close
 text-[24px] pl-[10px]"
                  ></i>
                )}
              </div>
              <div className="w-[40%] bg-white rounded-[6px] mr-[10px]  dashboard-users">
                <div className="pt-[5px] pb-[5px]    ">
                  <table className=" w-full h-[52px] mb-[0px]">
                    <tbody>
                      <tr>
                        <td
                          style={{ borderLeftWidth: 1 }}
                          className=" text-center cursor-pointer "
                          onClick={() => {
                            setTab("daily");
                            setTo(
                              moment(
                                new Date().setDate(new Date().getDate() + 1)
                              ).format("YYYY-MM-DD")
                            );
                            setFrom(moment(new Date()).format("YYYY-MM-DD"));
                          }}
                        >
                          <div
                            className={
                              tab == "daily"
                                ? "flex justify-center text-[#FF9800] text-[16px] font-sstbold "
                                : "flex justify-center text-[#484848] text-[16px] font-sstbold "
                            }
                          >
                            يومي
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 1 }}
                          className="  text-center cursor-pointer  "
                          onClick={() => {
                            setTab("weekly");
                            setTo(
                              moment(
                                new Date().setDate(new Date().getDate() + 1)
                              ).format("YYYY-MM-DD")
                            );
                            setFrom(
                              moment(
                                new Date().setDate(new Date().getDate() - 7)
                              ).format("YYYY-MM-DD")
                            );
                          }}
                        >
                          <div
                            className={
                              tab == "weekly"
                                ? " flex justify-center text-[#FF9800] text-[16px] font-sstbold "
                                : " flex justify-center text-[#484848] text-[16px] font-sstbold "
                            }
                          >
                            أسبوعي
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 1 }}
                          className=" text-center cursor-pointer"
                          onClick={() => {
                            setTab("monthly");
                            setTo(
                              moment(
                                new Date().setDate(new Date().getDate() + 1)
                              ).format("YYYY-MM-DD")
                            );
                            setFrom(
                              moment(
                                new Date().setDate(new Date().getDate() - 30)
                              ).format("YYYY-MM-DD")
                            );
                          }}
                        >
                          <div
                            className={
                              tab == "monthly"
                                ? " flex justify-center text-[#FF9800] text-[16px] font-sstbold "
                                : " flex justify-center text-[#484848] text-[16px] font-sstbold "
                            }
                          >
                            شهري
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 0 }}
                          className=" text-center cursor-pointer"
                          onClick={() => {
                            setTab("annual");
                            //console.log(moment(new Date().setDate(new Date().getDate() - 365)).format("YYYY-MM-DD"))
                            setTo(
                              moment(
                                new Date().setDate(new Date().getDate() + 1)
                              ).format("YYYY-MM-DD")
                            );
                            setFrom(
                              moment(
                                new Date().setDate(new Date().getDate() - 365)
                              ).format("YYYY-MM-DD")
                            );
                          }}
                        >
                          <div
                            className={
                              tab == "annual"
                                ? " flex justify-center text-[#FF9800] text-[16px] font-sstbold "
                                : " flex justify-center text-[#484848] text-[16px] font-sstbold "
                            }
                          >
                            سنوي
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className=" row mt-[10px]">
              <div className="col-md-12 col-sm-12 pl-[0px] rounded-[6px] ">
                <div className=" mt-[10px]">
                  <div className="col-md-12 col-sm-12  rounded-[6px]">
                    <div className="row">
                      <div className="col-md-3 pr-[0px] col-sm-12 pl-[0px]  rounded-[6px]">
                        <div className="card mb-[10px] pb-[20px] pt-[20px]">
                          <div className="p-[10px]">
                            <div className="text-[#959494] text-center font-sstbold text-[18px]">
                              إجمالي الأرباح
                            </div>
                            <div className="text-[#498A4A] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                              {(totalEarning * config.commitmentRate) / 100}{" "}
                              ريال
                            </div>
                            <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                              5,09% أعلى من الشهر الماضي
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-12 rounded-[6px] pl-[0px]">
                        <div className="card mb-[10px] pb-[20px] pt-[20px]">
                          <div className="p-[10px]">
                            <div className="text-[#959494] text-center font-sstbold text-[18px]">
                              الأرباح من قوقل
                            </div>
                            <div className="text-[#498A4A] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                              {googleEarning} ريال
                            </div>
                            <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                              5,09% أعلى من الشهر الماضي
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-12 rounded-[6px] pl-[0px]">
                        <div className="card mb-[10px] pb-[20px] pt-[20px]">
                          <div className="p-[10px]">
                            <div className="text-[#959494] text-center font-sstbold text-[18px]">
                              الأرباح من أبل
                            </div>
                            <div className="text-[#498A4A] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                              {appleEarning} ريال
                            </div>
                            <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                              5,09% أعلى من الشهر الماضي
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-12 rounded-[6px] pl-[0px]">
                        <div className="card mb-[10px] pb-[20px] pt-[20px]">
                          <div className="p-[10px]">
                            <div className="text-[#959494] text-center font-sstbold text-[18px]">
                              أرباح من التحويل المصرفي
                            </div>
                            <div className="text-[#498A4A] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                              {(bankEarning * config.commitmentRate) / 100} ريال
                            </div>
                            <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                              5,09% أعلى من الشهر الماضي
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full mt-[10px]">
              <div className="flex justify-around pl-[0px]">
                <div className="w-[50%] mr-[0px] pr-[0px] bg-white rounded-[6px]">
                  <div className="flex justify-evenly p-[10px]">
                    <div className="w-[70%] text-[#959494] text-[24px] font-sstbold justify-end flex">
                      مقارنة الأرباح الحالية والارباح السابقة
                    </div>
                    <div className="w-[30%] justify-end flex">
                      <button className="btn btn-sm text-[#ffffff] text-[16px] font-sstbold h-[52px] bg-[#FF9800] glow  mb-1">
                        تنزل التقرير
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <Barchart
                      from={startDate ? startDate : from}
                      to={endDate ? endDate : to}
                    />
                  </div>
                </div>
                <div className="w-[50%] mr-[20px] pr-[0px] bg-white rounded-[6px]">
                  <div className="flex justify-evenly p-[10px]">
                    <div className="w-[70%] text-[#959494] text-[24px] font-sstbold justify-start flex">
                      الأرباح
                    </div>
                    <div className="w-[30%] justify-end flex">
                      <button className="btn btn-sm text-[#ffffff] text-[16px] font-sstbold h-[52px] bg-[#FF9800] glow  mb-1">
                        تنزل التقرير
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <Graph
                      from={startDate ? startDate : from}
                      to={endDate ? endDate : to}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
