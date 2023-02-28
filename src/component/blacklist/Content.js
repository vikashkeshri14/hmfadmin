import React from "react";
import Graph from "./Graph";

export default function Content() {
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section className="sms-management">
            <div class="row flex ">
              <div class="w-[40%] mr-[15px] dashboard-users">
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
            <div class=" flex mt-[10px]">
              <div class="w-[60%] ml-[10px] h-[240px] rounded-[6px]">
                <div class="col-md-12 col-sm-12 pl-[0px] pr-[0px] mr-[0px] rounded-[6px] ">
                  <div class="card">
                    <div class="p-[0px] ">
                      <table class="mb-0 w-full">
                        <tbody>
                          <tr
                            style={{
                              borderRightWidth: 0,
                            }}
                            className="w-full"
                          >
                            <td
                              style={{ borderLeftWidth: 1 }}
                              class=" h-[240px] pb-[0px] pt-[0px] text-center "
                            >
                              <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                                المحظورين دائماً
                              </div>
                              <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                                50
                              </div>
                              <div className="text-[16px] font-sstbold text-[#60BA62]">
                                5,09% أقل من الشهر الماضي
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 1 }}
                              class=" h-[240px] pb-[0px] pt-[0px] text-center "
                            >
                              <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                                المحظورين مؤقتاً
                              </div>
                              <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                                66
                              </div>
                              <div className="text-[16px] font-sstbold text-[#E80000]">
                                1,06% أعلى من الشهر الماضي
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 0 }}
                              class="h-[240px] pb-[0px] pt-[0px] text-center "
                            >
                              <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                                المحذوفين
                              </div>
                              <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                                1
                              </div>
                              <div className="text-[16px] font-sstbold text-[#E80000]">
                                1,06% أعلى من الشهر الماضي
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-[40%] h-[240px] rounded-[6px] mr-[0px] pr-[0px] pl-[0px]">
                <div class="card mb-[10px] h-[240px] pb-[10px]">
                  <div class="text-[#959494] flex justify-end text-[18px] font-sstbold pt-[10px] pl-[20px] ">
                    <fieldset class="form-group w-[50%] h-[57px] bg-[#F9F9F9]">
                      <select
                        style={{
                          background:
                            "url('../app-assets/images/dropdown.png') no-repeat 16px",
                        }}
                        class="form-control bg-[#F9F9F9] h-[57px]"
                        id="basicSelect"
                      >
                        <option>إجمالي عدد المحظورين</option>
                        <option>Blade Runner</option>
                        <option>Thor Ragnarok</option>
                      </select>
                    </fieldset>
                  </div>
                  <Graph />
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div class="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      المحظورين مؤخراً
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div class="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/store.png"
                                  alt="user image"
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
                                  إزالة الحظر
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
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
                                  إزالة الحظر
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
                      المحظورين مؤقتاً
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div class="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/store.png"
                                  alt="user image"
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
                                  إزالة الحظر
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
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
                                  إزالة الحظر
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/store.png"
                                  alt="user image"
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
                                  إزالة الحظر
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
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
                                  إزالة الحظر
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
                      المحظورين دائما
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div class="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/store.png"
                                  alt="user image"
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
                                  إزالة الحظر
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
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
                                  إزالة الحظر
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/store.png"
                                  alt="user image"
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
                                  إزالة الحظر
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
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
                                  إزالة الحظر
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
                      المحذوفين
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div class="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[20px] pt-[20px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/store.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[20px] pt-[20px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/user-profile.png"
                                  alt="user image"
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
                        </div>
                      </div>
                      <div class="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[20px] pt-[20px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/store.png"
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                متجر أسرتي
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #445666
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[20px] pt-[20px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src="../../../app-assets/images/user-profile.png"
                                  alt="user image"
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
