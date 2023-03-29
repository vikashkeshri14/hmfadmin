import React, { useState } from "react";
import Accept from "./Accept";
import Reject from "./Reject";
import Suspend from "./Suspend";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

export default function Content() {
  const [suspend, setSuspend] = useState(true);
  const [rejected, setRejected] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section className="sms-management">
            <div className="row flex mr-[5px] ">
              <div className="w-[24%]  dashboard-users ">
                <div className="position-relative has-icon-right">
                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  <DateRangePicker
                    calendarIcon=""
                    calendarClassName="border-0 "
                    className="form-control  text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                    onChange={onChange}
                    value={value}
                  />

                  {/* 
                  <input
                    type="number"
                    id="contact-info-icon"
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                    name="contact-icon"
                    placeholder="16/12/2022 - 16/12/2022"
                  /> */}
                </div>
              </div>
              <div className="w-[40%] bg-white rounded-[6px] mr-[10px] dashboard-users">
                <div className="pt-[5px] pb-[5px]">
                  <table className=" w-full h-[52px] mb-[0px]">
                    <tbody>
                      <tr>
                        <td
                          style={{ borderLeftWidth: 1 }}
                          className=" text-center  "
                        >
                          <div className="flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            يومي
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 1 }}
                          className="  text-center  "
                        >
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            أسبوعي
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 1 }}
                          className=" text-center "
                        >
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            شهري
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 0 }}
                          className=" text-center "
                        >
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            سنوي
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-[20%] bg-white rounded-[6px] mr-[10px] dashboard-users">
                <div className="pt-[5px] pb-[5px]">
                  <table className=" w-full h-[52px] mb-[0px]">
                    <tbody>
                      <tr>
                        <td
                          onClick={() => {
                            setAccepted(false);
                            setRejected(false);
                            setSuspend(true);
                          }}
                          style={{ borderLeftWidth: 1 }}
                          className=" text-center  "
                        >
                          <div
                            className={
                              suspend
                                ? "flex justify-center text-[#FF9800] text-[16px] font-sstbold "
                                : "flex justify-center text-[#484848] text-[16px] font-sstbold "
                            }
                          >
                            معلقة
                          </div>
                        </td>
                        <td
                          onClick={() => {
                            setAccepted(false);
                            setRejected(true);
                            setSuspend(false);
                          }}
                          style={{ borderLeftWidth: 1 }}
                          className="  text-center  "
                        >
                          <div
                            className={
                              rejected
                                ? " flex justify-center text-[#FF9800] text-[16px] font-sstbold "
                                : " flex justify-center text-[#484848] text-[16px] font-sstbold "
                            }
                          >
                            مرفوضة
                          </div>
                        </td>
                        <td
                          onClick={() => {
                            setAccepted(true);
                            setRejected(false);
                            setSuspend(false);
                          }}
                          style={{ borderLeftWidth: 0 }}
                          className=" text-center "
                        >
                          <div
                            className={
                              accepted
                                ? " flex justify-center text-[#FF9800] text-[16px] font-sstbold "
                                : " flex justify-center text-[#484848] text-[16px] font-sstbold "
                            }
                          >
                            مقبولة
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {suspend && <Suspend />}
            {rejected && <Reject />}
            {accepted && <Accept />}
          </section>
        </div>
      </div>
    </div>
  );
}
