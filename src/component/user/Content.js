import React from "react";
import Graph from "./Graph";
import Piechart from "./Piechart";

export default function Content() {
  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section id="users-analytics">
            <div class="row flex ">
              <div class="w-[34%] mr-[15px] dashboard-users">
                <div class="row">
                  <div class="col-12">
                    <div class="position-relative has-icon-left">
                      <div class=" absolute top-[20px] left-[10px] w-[24px] h-[24px]">
                        <i class="bx bx-slider-alt"></i>
                      </div>
                      <input
                        type="number"
                        id="contact-info-icon"
                        class="form-control text-[20px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                        name="contact-icon"
                        placeholder="البحث"
                      />
                      <div class="form-control-position top-[20px] right-[10px] w-[24px] h-[24px]">
                        <img src="../app-assets/images/search.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-[24%]  dashboard-users mr-[10px]">
                <div class="position-relative has-icon-right">
                  <div className="absolute top-[20px] left-0">
                    <i class="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  <input
                    type="number"
                    id="contact-info-icon"
                    class="form-control text-[16px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                    name="contact-icon"
                    placeholder="16/12/2022 - 16/12/2022"
                  />
                </div>
              </div>
            </div>

            <div class="row mt-[10px]">
              <div class="col-md-6 col-sm-12  rounded-[6px]">
                <div class="row">
                  <div class="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
                    <div class="card mb-[10px] pb-[10px]">
                      <div class="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold text-[18px]">
                          عدد المتاجر
                        </div>
                        <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                          700
                        </div>
                        <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
                    <div class="card mb-[10px] pb-[10px]">
                      <div class="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold text-[18px]">
                          عدد المستخدمين
                        </div>
                        <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                          1,400
                        </div>
                        <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div class="col-md-12 pl-[0px] col-sm-12 rounded-[6px]">
                    <div class="card mb-[10px] pb-[10px]">
                      <div className="text-[#959494] mt-[10px]  font-sstbold pr-[30px] text-[18px]">
                        نسبة أنواع مستخدمين التطبيق
                      </div>
                      <div className="row mt-[10px] mb-[20px]">
                        <div class="col-md-8 col-sm-12 mt-[40px]">
                          <div className="row pr-[25px]">
                            <div className="col-md-5 col-sm-12 flex">
                              <div className="bg-[#FF9800] h-[12px] w-[12px] mt-[10px] ml-[10px] rounded-[2px]"></div>
                              <div className="text-[#484848] font-sstbold text-[18px]">
                                60% متاجر
                              </div>
                            </div>
                            <div className="col-md-7 col-sm-12 flex">
                              <div className="bg-[#60BA62] h-[12px] w-[12px] mt-[10px] ml-[10px] rounded-[2px]"></div>
                              <div className="text-[#484848] font-sstbold text-[18px]">
                                40% مستخدمين
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 col-sm-12">
                          <Piechart />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 col-sm-12 pl-[0px] rounded-[6px] ">
                    <div class="card ">
                      <div class="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold pb-[10px] text-[18px]">
                          عدد المتاجر
                        </div>

                        <table class="table   mb-0">
                          <tbody>
                            <tr
                              style={{
                                borderRightWidth: 0,
                              }}
                              className="border-"
                            >
                              <td
                                style={{ borderLeftWidth: 1 }}
                                class="  text-center w-[50%]"
                              >
                                <div className=" flex justify-center ">
                                  <img
                                    src="../app-assets/images/shop.png"
                                    className="h-[24px] self-center text-center w-[24px]"
                                  />
                                </div>
                                <div className="text-[#FF9800] text-center text-[10px] font-sstbold ">
                                  5 متاجر
                                </div>
                              </td>
                              <td className="text-center w-[50%]">
                                <div className="flex justify-center ">
                                  <img
                                    src="../app-assets/images/user.png"
                                    className="h-[24px] self-center w-[24px]"
                                  />
                                </div>
                                <div className="text-[#60BA62] text-[10px] font-sstbold">
                                  9 مستخدمين
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 pl-[0px] rounded-[6px] ">
                    <div class="card ">
                      <div class="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold pb-[10px] text-[18px]">
                          أخر المتصلين
                        </div>

                        <table class="table   mb-0">
                          <tbody>
                            <tr
                              style={{
                                borderRightWidth: 0,
                              }}
                              className="border-"
                            >
                              <td
                                style={{ borderLeftWidth: 1 }}
                                class="  text-center w-[50%]"
                              >
                                <div className=" flex justify-center ">
                                  <img
                                    src="../app-assets/images/shop.png"
                                    className="h-[24px] self-center text-center w-[24px]"
                                  />
                                </div>
                                <div className="text-[#FF9800] text-center text-[10px] font-sstbold ">
                                  5 متاجر
                                </div>
                              </td>
                              <td className="text-center w-[50%]">
                                <div className="flex justify-center ">
                                  <img
                                    src="../app-assets/images/user.png"
                                    className="h-[24px] self-center w-[24px]"
                                  />
                                </div>
                                <div className="text-[#60BA62] text-[10px] font-sstbold">
                                  9 مستخدمين
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
                <div class="card mb-[10px] pb-[10px]">
                  <h4 class="p-[10px] text-[18px] font-sstbold text-[#959494]">
                    أوقات النشاط في التطبيق
                  </h4>
                  <Graph />
                </div>
              </div>
            </div>
            <div className="row ">
              <div class="col-md-6 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      جميع المتاجر
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      جميع المتاجر
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;102
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
                      المتاجر الأكثر نشاطاً
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
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
                      المستخدمين الأكثر نشاطاً
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;102
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
                      المتاجر الأكثر تقييم
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
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
                      المتاجر الأقل تقييم
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
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
                      المتاجر الأكثر من يقييم
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/send.png"
                                />
                                &nbsp;102
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
                      المستخدمين الأكثر من يقييم
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div class="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div class="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 class="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div class="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  class="h-[24px] w-[24px]"
                                  src="../../../app-assets/images/cake.png"
                                />
                                &nbsp;102
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
