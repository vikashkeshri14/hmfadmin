import React from "react";
import Graph from "./Graph";

export default function Content() {
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section className="order-management">
            <div className="row flex ">
              <div className="w-[34%] mr-[15px] dashboard-users">
                <div className="row">
                  <div className="col-12">
                    <div className="position-relative has-icon-left">
                      <div className=" absolute top-[20px] left-[10px] w-[24px] h-[24px]">
                        <i className="bx bx-slider-alt"></i>
                      </div>
                      <input
                        type="number"
                        id="contact-info-icon"
                        className="form-control text-[20px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                        name="contact-icon"
                        placeholder="البحث"
                      />
                      <div className="form-control-position top-[20px] right-[10px] w-[24px] h-[24px]">
                        <img src="../panel/app-assets/images/search.png" />
                      </div>
                    </div>
                  </div>
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
              <div className="w-[10%]  dashboard-users mr-[10px]">
                <div className="position-relative has-icon-right">
                  <div className="absolute top-[20px] left-0">
                    <i className="ficon bx bxs-stopwatch text-[24px] pl-[10px]"></i>
                  </div>
                  <input
                    dir="ltr"
                    type="number"
                    id="contact-info-icon"
                    className="form-control text-[16px] font-sstbold h-[62px] border-0 shadow-sm rounded-[6px]"
                    name="contact-icon"
                    placeholder=" 07 : 12  pm"
                  />
                </div>
              </div>
              <div className="w-[27.5%] flex justify-end  dashboard-users mr-[10px]">
                <button className="w-[249px] h-[62px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] ">
                  عرض سجل البلاغات
                </button>
              </div>
            </div>
            <div className="row mt-[10px]">
              <div className="col-md-6 col-sm-12  rounded-[6px]">
                <div className="row">
                  <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
                    <div className="card mb-[10px] pb-[10px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold text-[18px]">
                          عدد البلاغات
                        </div>
                        <div className="text-[#AD0000] text-center font-sstbold text-[35px]">
                          50
                        </div>
                        <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
                    <div className="card mb-[10px] pb-[10px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold text-[18px]">
                          عدد البلاغات المحلولة
                        </div>
                        <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                          70
                        </div>
                        <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
                    <div className="card mb-[10px] pb-[10px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold text-[18px]">
                          عدد البلاغات المعلقة
                        </div>
                        <div className="text-[#FF9800] text-center font-sstbold text-[35px]">
                          0
                        </div>
                        <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                          5,09% أقل من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
                    <div className="card mb-[10px] pb-[10px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold text-[18px]">
                          بلاغات المتاجر
                        </div>
                        <div className="text-[#AD0000] text-center font-sstbold text-[35px]">
                          40
                        </div>
                        <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
                    <div className="card mb-[10px] pb-[10px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold text-[18px]">
                          بلاغات المستخدمين
                        </div>
                        <div className="text-[#AD0000] text-center font-sstbold text-[35px]">
                          70
                        </div>
                        <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
                    <div className="card mb-[10px] pb-[10px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold text-[18px]">
                          بلاغات المنتجات
                        </div>
                        <div className="text-[#AD0000] text-center font-sstbold text-[35px]">
                          40
                        </div>
                        <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
                <div className="card mb-[10px] pb-[10px]">
                  <fieldset className="form-group ml-[20px] mr-[20px] mt-[10px]">
                    <select
                      className="form-control text-[18px] font-sstbold text-[#959494] bg-[#F9F9F9]"
                      id="basicSelect"
                    >
                      <option>عدد الطلبات</option>
                      <option>Blade Runner</option>
                      <option>Thor Ragnarok</option>
                    </select>
                  </fieldset>
                  <Graph />
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      البلاغات الجديدة
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div className="w-[381px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/store.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                            <div className="w-[24%] flex justify-center pr-[5px] pl-[5px]">
                              <img
                                className="w-[76px] justify-center self-center h-[26px] rounded-[33px]"
                                src="../../../panel/app-assets/images/arrow-red.png"
                                alt="sidebar  user image"
                              />
                            </div>
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/user-profile.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                محمد علي محمد
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                          </div>
                          <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                            <div className="border-t-[1px]"></div>
                          </div>
                          <div className="flex mb-[10px]">
                            <div className="w-[33.33%] text-[#E80000] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              بلاغ عن مستخدم
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              {" "}
                              حذف
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center  pb-[15px]">
                              تفاصيل أكثر
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[381px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/store.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                            <div className="w-[24%] flex justify-center pr-[5px] pl-[5px]">
                              <img
                                className="w-[76px] justify-center self-center h-[26px] rounded-[33px]"
                                src="../../../panel/app-assets/images/arrow-red.png"
                                alt="sidebar  user image"
                              />
                            </div>
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/user-profile.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                محمد علي محمد
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                          </div>
                          <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                            <div className="border-t-[1px]"></div>
                          </div>
                          <div className="flex mb-[10px]">
                            <div className="w-[33.33%] text-[#E80000] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              بلاغ عن مستخدم
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              {" "}
                              حذف
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center  pb-[15px]">
                              تفاصيل أكثر
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[381px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/store.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                            <div className="w-[24%] flex justify-center pr-[5px] pl-[5px]">
                              <img
                                className="w-[76px] justify-center self-center h-[26px] rounded-[33px]"
                                src="../../../panel/app-assets/images/arrow-red.png"
                                alt="sidebar  user image"
                              />
                            </div>
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/user-profile.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                محمد علي محمد
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                          </div>
                          <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                            <div className="border-t-[1px]"></div>
                          </div>
                          <div className="flex mb-[10px]">
                            <div className="w-[33.33%] text-[#E80000] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              بلاغ عن مستخدم
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              {" "}
                              حذف
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center  pb-[15px]">
                              تفاصيل أكثر
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[381px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/store.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                            <div className="w-[24%] flex justify-center pr-[5px] pl-[5px]">
                              <img
                                className="w-[76px] justify-center self-center h-[26px] rounded-[33px]"
                                src="../../../panel/app-assets/images/arrow-red.png"
                                alt="sidebar  user image"
                              />
                            </div>
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/user-profile.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                محمد علي محمد
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                          </div>
                          <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                            <div className="border-t-[1px]"></div>
                          </div>
                          <div className="flex mb-[10px]">
                            <div className="w-[33.33%] text-[#E80000] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              بلاغ عن مستخدم
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              {" "}
                              حذف
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center  pb-[15px]">
                              تفاصيل أكثر
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
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      البلاغات المعلقة
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div className="w-[381px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/store.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                            <div className="w-[24%] flex justify-center pr-[5px] pl-[5px]">
                              <img
                                className="w-[76px] justify-center self-center h-[26px] rounded-[33px]"
                                src="../../../panel/app-assets/images/arrow-red.png"
                                alt="sidebar  user image"
                              />
                            </div>
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/user-profile.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                محمد علي محمد
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                          </div>
                          <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                            <div className="border-t-[1px]"></div>
                          </div>
                          <div className="flex mb-[10px]">
                            <div className="w-[33.33%] text-[#E80000] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              بلاغ عن مستخدم
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              {" "}
                              حذف
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center  pb-[15px]">
                              تفاصيل أكثر
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[381px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/store.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                            <div className="w-[24%] flex justify-center pr-[5px] pl-[5px]">
                              <img
                                className="w-[76px] justify-center self-center h-[26px] rounded-[33px]"
                                src="../../../panel/app-assets/images/arrow-red.png"
                                alt="sidebar  user image"
                              />
                            </div>
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/user-profile.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                محمد علي محمد
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                          </div>
                          <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                            <div className="border-t-[1px]"></div>
                          </div>
                          <div className="flex mb-[10px]">
                            <div className="w-[33.33%] text-[#E80000] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              بلاغ عن مستخدم
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              {" "}
                              حذف
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center  pb-[15px]">
                              تفاصيل أكثر
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[381px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/store.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                            <div className="w-[24%] flex justify-center pr-[5px] pl-[5px]">
                              <img
                                className="w-[76px] justify-center self-center h-[26px] rounded-[33px]"
                                src="../../../panel/app-assets/images/arrow-red.png"
                                alt="sidebar  user image"
                              />
                            </div>
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/user-profile.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                محمد علي محمد
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                          </div>
                          <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                            <div className="border-t-[1px]"></div>
                          </div>
                          <div className="flex mb-[10px]">
                            <div className="w-[33.33%] text-[#E80000] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              بلاغ عن مستخدم
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              {" "}
                              حذف
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center  pb-[15px]">
                              تفاصيل أكثر
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[381px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/store.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                            <div className="w-[24%] flex justify-center pr-[5px] pl-[5px]">
                              <img
                                className="w-[76px] justify-center self-center h-[26px] rounded-[33px]"
                                src="../../../panel/app-assets/images/arrow-red.png"
                                alt="sidebar  user image"
                              />
                            </div>
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/user-profile.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                محمد علي محمد
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                          </div>
                          <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                            <div className="border-t-[1px]"></div>
                          </div>
                          <div className="flex mb-[10px]">
                            <div className="w-[33.33%] text-[#E80000] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              بلاغ عن مستخدم
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                              {" "}
                              حذف
                            </div>
                            <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center  pb-[15px]">
                              تفاصيل أكثر
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
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      أكثر المتاجر التي لديها بلاغات
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/store.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex mb-[10px]">
                                <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                                  5 بلاغات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/store.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex mb-[10px]">
                                <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                                  5 بلاغات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/store.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex mb-[10px]">
                                <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                                  5 بلاغات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/store.png"
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex mb-[10px]">
                                <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                                  5 بلاغات
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
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      أكثر المستخدمين الذين لديهم بلاغات
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/user-profile.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                محمد علي محمد
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex mb-[10px]">
                                <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                                  5 بلاغات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/user-profile.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                محمد علي محمد
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex mb-[10px]">
                                <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                                  5 بلاغات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/user-profile.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                محمد علي محمد
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex mb-[10px]">
                                <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                                  5 بلاغات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/user-profile.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                محمد علي محمد
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex mb-[10px]">
                                <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                                  5 بلاغات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../panel/app-assets/images/user-profile.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                محمد علي محمد
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex mb-[10px]">
                                <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                                  5 بلاغات
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
