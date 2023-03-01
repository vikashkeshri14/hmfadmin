import React, { useState } from "react";
import Barchart from "./Barchart";
import Graph from "./Graph";

export default function Content() {
  const [alertShow, setAlertShow] = useState(false);

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
                  <div className="absolute top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  <input
                    type="number"
                    id="contact-info-icon"
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                    name="contact-icon"
                    placeholder="16/12/2022 - 16/12/2022"
                  />
                </div>
              </div>
              <div className="w-[40%] bg-white rounded-[6px] mr-[10px]  dashboard-users">
                <div className="pt-[5px] pb-[5px]    ">
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
            </div>

            <div className=" row mt-[10px]">
              <div className="col-md-12 col-sm-12 pl-[0px] rounded-[6px] ">
                <div className=" mt-[10px]">
                  <div className="col-md-12 col-sm-12  rounded-[6px]">
                    <div className="row">
                      <div className="col-md-4 pr-[0px] col-sm-12 pl-[0px]  rounded-[6px]">
                        <div className="card mb-[10px] pb-[20px] pt-[20px]">
                          <div className="p-[10px]">
                            <div className="text-[#959494] text-center font-sstbold text-[18px]">
                              إجمالي الأرباح
                            </div>
                            <div className="text-[#498A4A] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                              70,000 ريال
                            </div>
                            <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                              5,09% أعلى من الشهر الماضي
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 rounded-[6px] pl-[0px]">
                        <div className="card mb-[10px] pb-[20px] pt-[20px]">
                          <div className="p-[10px]">
                            <div className="text-[#959494] text-center font-sstbold text-[18px]">
                              الأرباح من قوقل
                            </div>
                            <div className="text-[#498A4A] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                              30,000 ريال
                            </div>
                            <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                              5,09% أعلى من الشهر الماضي
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 rounded-[6px] pl-[0px]">
                        <div className="card mb-[10px] pb-[20px] pt-[20px]">
                          <div className="p-[10px]">
                            <div className="text-[#959494] text-center font-sstbold text-[18px]">
                              الأرباح من أبل
                            </div>
                            <div className="text-[#498A4A] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                              40,000 ريال
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
                    <Barchart />
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
                    <Graph />
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
