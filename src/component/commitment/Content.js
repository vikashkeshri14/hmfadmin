import React, { useState } from "react";
import Barchart from "./Barchart";
import Graph from "./Graph";
import LineCharts from "./LineCharts";

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
              <div className="w-[40%] bg-white rounded-[6px]  dashboard-users">
                <div class="pt-[5px] pb-[5px]    ">
                  <table class=" w-full h-[52px] mb-[0px]">
                    <tbody>
                      <tr>
                        <td
                          style={{ borderLeftWidth: 1 }}
                          class=" text-center  "
                        >
                          <div className="flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            يومي
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 1 }}
                          class="  text-center  "
                        >
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            أسبوعي
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 1 }}
                          class=" text-center "
                        >
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            شهري
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 0 }}
                          class=" text-center "
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

              <div className="w-[24%]  dashboard-users mr-[10px]">
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
            </div>
            <div className=" row mt-[10px]">
              <div class="col-md-9 col-sm-12 pl-[0px] rounded-[6px] ">
                <div class="card mb-[10px]">
                  <div class="p-[10px]">
                    <table class="table  mb-0">
                      <tbody>
                        <tr
                          style={{
                            borderRightWidth: 0,
                          }}
                        >
                          <td
                            style={{ borderLeftWidth: 1 }}
                            class="  text-center w-[25%]"
                          >
                            <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                              إجمالي قيمة الإلتزامات
                            </div>
                            <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                              2,000 ريال
                            </div>
                            <div className="text-[16px] font-sstbold text-[#60BA62]">
                              5,09% أعلى من السنة الماضية
                            </div>
                          </td>
                          <td
                            style={{ borderLeftWidth: 1 }}
                            class="  text-center w-[25%]"
                          >
                            <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                              قيمة الإلتزامات المدفوعة
                            </div>
                            <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                              1,500 ريال
                            </div>
                            <div className="text-[16px] font-sstbold text-[#60BA62]">
                              5,09% أعلى من السنة الماضية
                            </div>
                          </td>
                          <td class="  text-center w-[25%]">
                            <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                              قيمة الإلتزامات المعلقة
                            </div>
                            <div className="text-[#FF9800] text-center text-[35px] font-sstbold ">
                              500 ريال
                            </div>
                            <div className="text-[16px] font-sstbold text-[#60BA62]">
                              1,06% أقل من السنة الماضية
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class=" mt-[10px]">
                  <div class="col-md-12 col-sm-12  rounded-[6px]">
                    <div class="row">
                      <div class="col-md-4 pr-[0px] col-sm-12 pl-[0px]  rounded-[6px]">
                        <div class="card mb-[10px] pb-[20px] pt-[20px]">
                          <div class="p-[10px]">
                            <div className="text-[#959494] text-center font-sstbold text-[18px]">
                              إجمالي عدد الإلتزامات
                            </div>
                            <div className="text-[#484848] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                              7,000
                            </div>
                            <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                              5,09% أعلى من السنة الماضية
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-12 rounded-[6px] pl-[0px]">
                        <div class="card mb-[10px] pb-[20px] pt-[20px]">
                          <div class="p-[10px]">
                            <div className="text-[#959494] text-center font-sstbold text-[18px]">
                              عدد الإلتزامات المدفوعة
                            </div>
                            <div className="text-[#484848] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                              5,000
                            </div>
                            <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                              5,09% أعلى من السنة الماضية
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-12 rounded-[6px] pl-[0px]">
                        <div class="card mb-[10px] pb-[20px] pt-[20px]">
                          <div class="p-[10px]">
                            <div className="text-[#959494] text-center font-sstbold text-[18px]">
                              عدد الالتزامات المعلقة
                            </div>
                            <div className="text-[#FF9800] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                              3,000
                            </div>
                            <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                              1,06% أقل من السنة الماضية
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 col-sm-12 pl-[0px]  ">
                <div className="flex-col p-[10px] rounded-[6px] bg-white">
                  <div className=" h-[150px]">
                    <Graph />
                  </div>
                  <div className=" border-t-[1px] ">
                    <div className="text-[#E80000] text-[42px] font-sstbold text-end">
                      30%
                    </div>
                    <div className="text-[16px] text-[#484848] font-sstbold pt-[5px] pb-[5px] text-end">
                      1,06% أقل من السنة الماضية
                    </div>
                    <div className="text-[#959494] font-sstbold text-[18px] text-end">
                      نسبة الفرق بين المدفوع و الغير مدفوع
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row m-[0px] rounded-[6px] mr-[0px] w-[100%]">
              <div class="col-xl-4  col-md-12 p-[5px]">
                <div className="bg-white rounded-[6px]">
                  <div className="flex">
                    <div className="flex-col w-[70%]">
                      <div className="p-[5px] text-[#959494] text-[18px] font-sstbold">
                        الالتزامات المدفوعة و المعلقة
                      </div>
                      <div>
                        <div className="position-relative has-icon-right">
                          <div className="absolute top-[20px] left-0">
                            <i className="ficon bx bxs-calendar text-[20px] pl-[10px]"></i>
                          </div>
                          <input
                            type="number"
                            id="contact-info-icon"
                            className="form-control text-[16px] font-sstroman h-[58px] border-0  rounded-[6px]"
                            name="contact-icon"
                            placeholder="16/12/2022 - 16/12/2022"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[30%] flex justify-center">
                      <button className="text-[16px] p-[8px] self-center justify-center text-[#ffffff] font-sstbold bg-[#FF9800] rounded-[3px]">
                        تنزل التقرير
                      </button>
                    </div>
                  </div>
                  <div className="border-t-[1px]">
                    <Barchart />
                  </div>
                </div>
              </div>
              <div class="col-xl-8 col-md-12   p-[5px]">
                <div className="bg-white rounded-[6px] ">
                  <LineCharts />
                </div>
              </div>
            </div>
            <div className="row flex mt-[20px] pl-[15px] pr-[15px]  ">
              <div className="w-[30%] pl-[5px]">
                <div class="col-md-12 col-sm-12  rounded-[6px]">
                  <div class="row">
                    <div class="col-md-12 pr-[0px] col-sm-12 pl-[0px]  rounded-[6px]">
                      <div class="card mb-[10px] pb-[5px] pt-[5px]">
                        <div class="p-[10px]">
                          <div className="text-[#959494] text-center font-sstbold text-[18px]">
                            عدد الإلتزامات المسقطة
                          </div>
                          <div className="text-[#9D40AD] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                            50
                          </div>
                          <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                            5,09% أعلى من الشهر الماضي
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-sm-12  rounded-[6px]">
                  <div class="row">
                    <div class="col-md-12 pr-[0px] col-sm-12 pl-[0px]  rounded-[6px]">
                      <div class="card mb-[10px] pb-[5px] pt-[5px]">
                        <div class="p-[10px]">
                          <div className="text-[#959494] text-center font-sstbold text-[18px]">
                            عدد الإلتزامات المسقطة
                          </div>
                          <div className="text-[#9D40AD] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                            50
                          </div>
                          <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                            5,09% أعلى من الشهر الماضي
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[70%]">
                <div class="col-md-12 col-sm-12 pl-[0px] ">
                  <div className="bg-white rounded-[6px] pb-[10px]">
                    <div className="flex justify-evenly">
                      <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                        المتاجر التي لديها التزام مسقط
                      </div>
                      <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                        عرض المزيد
                      </div>
                    </div>
                    <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                      <div className="overflow-x-auto overflow-y-hidden flex ">
                        <div class="w-[238px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                          <div class="top-[44px] relative mr-50 ">
                            <img
                              className="w-[88px] h-[88px] rounded-[44px]"
                              src="../../../app-assets/images/store.png"
                              alt="sidebar  user image"
                            />
                          </div>
                          <div className="w-[100%]  bg-[#F9F9F9]">
                            <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                              <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                                متجر أسرتي
                              </h6>
                              <div class="text-muted pb-[10px] mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                                #959494
                              </div>
                              <div className="pl-[20px]  pr-[20px]">
                                <div className="text-[#9D40AD] pb-[10px] pt-[10px] text-center  border-t-[1px] text-[18px] font-sstbold">
                                  3 التزام مسقط
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div class="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      الالتزامات المعلقة
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div class="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[64px] h-[64px] rounded-[32px]"
                                  src="../../../app-assets/images/store.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex-col  mb-[10px]">
                                <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                                  5 التزامات
                                </div>
                                <div className="w-full text-[#E80000] text-[20px] font-sstbold text-center  pb-[5px]">
                                  700 ريال
                                </div>
                                <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                                  4 تنبيهات
                                </div>
                                <div className="flex justify-center">
                                  <div className="mt-[5px] ml-[5px]">
                                    <img
                                      className="w-[24px] h-[24px]"
                                      src="../../../app-assets/images/bell.png"
                                      alt="user image"
                                    />
                                  </div>
                                  <div className=" text-[#FF9800] text-[16px] font-sstbold text-center  pb-[5px]">
                                    إرسال تنبية
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[64px] h-[64px] rounded-[32px]"
                                  src="../../../app-assets/images/store.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex-col  mb-[10px]">
                                <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                                  5 التزامات
                                </div>
                                <div className="w-full text-[#E80000] text-[20px] font-sstbold text-center  pb-[5px]">
                                  700 ريال
                                </div>
                                <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                                  4 تنبيهات
                                </div>
                                <div className="flex justify-center">
                                  <div className="mt-[5px] ml-[5px]">
                                    <img
                                      className="w-[24px] h-[24px]"
                                      src="../../../app-assets/images/bell.png"
                                      alt="user image"
                                    />
                                  </div>
                                  <div className=" text-[#FF9800] text-[16px] font-sstbold text-center  pb-[5px]">
                                    إرسال تنبية
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[64px] h-[64px] rounded-[32px]"
                                  src="../../../app-assets/images/store.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex-col  mb-[10px]">
                                <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                                  5 التزامات
                                </div>
                                <div className="w-full text-[#E80000] text-[20px] font-sstbold text-center  pb-[5px]">
                                  700 ريال
                                </div>
                                <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                                  4 تنبيهات
                                </div>
                                <div className="flex justify-center">
                                  <div className="mt-[5px] ml-[5px]">
                                    <img
                                      className="w-[24px] h-[24px]"
                                      src="../../../app-assets/images/bell.png"
                                      alt="user image"
                                    />
                                  </div>
                                  <div className=" text-[#FF9800] text-[16px] font-sstbold text-center  pb-[5px]">
                                    إرسال تنبية
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[64px] h-[64px] rounded-[32px]"
                                  src="../../../app-assets/images/store.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex-col  mb-[10px]">
                                <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                                  5 التزامات
                                </div>
                                <div className="w-full text-[#E80000] text-[20px] font-sstbold text-center  pb-[5px]">
                                  700 ريال
                                </div>
                                <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                                  4 تنبيهات
                                </div>
                                <div className="flex justify-center">
                                  <div className="mt-[5px] ml-[5px]">
                                    <img
                                      className="w-[24px] h-[24px]"
                                      src="../../../app-assets/images/bell.png"
                                      alt="user image"
                                    />
                                  </div>
                                  <div className=" text-[#FF9800] text-[16px] font-sstbold text-center  pb-[5px]">
                                    إرسال تنبية
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[64px] h-[64px] rounded-[32px]"
                                  src="../../../app-assets/images/store.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex-col  mb-[10px]">
                                <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                                  5 التزامات
                                </div>
                                <div className="w-full text-[#E80000] text-[20px] font-sstbold text-center  pb-[5px]">
                                  700 ريال
                                </div>
                                <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                                  4 تنبيهات
                                </div>
                                <div className="flex justify-center">
                                  <div className="mt-[5px] ml-[5px]">
                                    <img
                                      className="w-[24px] h-[24px]"
                                      src="../../../app-assets/images/bell.png"
                                      alt="user image"
                                    />
                                  </div>
                                  <div className=" text-[#FF9800] text-[16px] font-sstbold text-center  pb-[5px]">
                                    إرسال تنبية
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[64px] h-[64px] rounded-[32px]"
                                  src="../../../app-assets/images/store.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex-col  mb-[10px]">
                                <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                                  5 التزامات
                                </div>
                                <div className="w-full text-[#E80000] text-[20px] font-sstbold text-center  pb-[5px]">
                                  700 ريال
                                </div>
                                <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                                  4 تنبيهات
                                </div>
                                <div className="flex justify-center">
                                  <div className="mt-[5px] ml-[5px]">
                                    <img
                                      className="w-[24px] h-[24px]"
                                      src="../../../app-assets/images/bell.png"
                                      alt="user image"
                                    />
                                  </div>
                                  <div className=" text-[#FF9800] text-[16px] font-sstbold text-center  pb-[5px]">
                                    إرسال تنبية
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[64px] h-[64px] rounded-[32px]"
                                  src="../../../app-assets/images/store.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex-col  mb-[10px]">
                                <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                                  5 التزامات
                                </div>
                                <div className="w-full text-[#E80000] text-[20px] font-sstbold text-center  pb-[5px]">
                                  700 ريال
                                </div>
                                <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                                  4 تنبيهات
                                </div>
                                <div className="flex justify-center">
                                  <div className="mt-[5px] ml-[5px]">
                                    <img
                                      className="w-[24px] h-[24px]"
                                      src="../../../app-assets/images/bell.png"
                                      alt="user image"
                                    />
                                  </div>
                                  <div className=" text-[#FF9800] text-[16px] font-sstbold text-center  pb-[5px]">
                                    إرسال تنبية
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div class="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      الإلتزامات المدفوعة
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div class="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/user-profile.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex-col mb-[10px]">
                                <div className="w-full text-[#60BA62] text-[20px] font-sstbold text-center  pb-[5px]">
                                  700 ريال
                                </div>
                                <div className="w-full text-[#60BA62] text-[16px] font-sstbold text-center  pb-[5px]">
                                  4 تنبيهات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/user-profile.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex-col mb-[10px]">
                                <div className="w-full text-[#60BA62] text-[20px] font-sstbold text-center  pb-[5px]">
                                  700 ريال
                                </div>
                                <div className="w-full text-[#60BA62] text-[16px] font-sstbold text-center  pb-[5px]">
                                  4 تنبيهات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/user-profile.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex-col mb-[10px]">
                                <div className="w-full text-[#60BA62] text-[20px] font-sstbold text-center  pb-[5px]">
                                  700 ريال
                                </div>
                                <div className="w-full text-[#60BA62] text-[16px] font-sstbold text-center  pb-[5px]">
                                  4 تنبيهات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/user-profile.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex-col mb-[10px]">
                                <div className="w-full text-[#60BA62] text-[20px] font-sstbold text-center  pb-[5px]">
                                  700 ريال
                                </div>
                                <div className="w-full text-[#60BA62] text-[16px] font-sstbold text-center  pb-[5px]">
                                  4 تنبيهات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/user-profile.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex-col mb-[10px]">
                                <div className="w-full text-[#60BA62] text-[20px] font-sstbold text-center  pb-[5px]">
                                  700 ريال
                                </div>
                                <div className="w-full text-[#60BA62] text-[16px] font-sstbold text-center  pb-[5px]">
                                  4 تنبيهات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/user-profile.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex-col mb-[10px]">
                                <div className="w-full text-[#60BA62] text-[20px] font-sstbold text-center  pb-[5px]">
                                  700 ريال
                                </div>
                                <div className="w-full text-[#60BA62] text-[16px] font-sstbold text-center  pb-[5px]">
                                  4 تنبيهات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/user-profile.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex-col mb-[10px]">
                                <div className="w-full text-[#60BA62] text-[20px] font-sstbold text-center  pb-[5px]">
                                  700 ريال
                                </div>
                                <div className="w-full text-[#60BA62] text-[16px] font-sstbold text-center  pb-[5px]">
                                  4 تنبيهات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
