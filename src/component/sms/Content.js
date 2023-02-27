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
              <div class="w-[10%]  dashboard-users mr-[10px]">
                <div class="position-relative has-icon-right">
                  <div className="absolute top-[20px] left-0">
                    <i class="ficon bx bxs-stopwatch text-[24px] pl-[10px]"></i>
                  </div>
                  <input
                    dir="ltr"
                    type="number"
                    id="contact-info-icon"
                    class="form-control text-[16px] font-sstbold h-[62px] border-0 shadow-sm rounded-[6px]"
                    name="contact-icon"
                    placeholder=" 07 : 12  pm"
                  />
                </div>
              </div>
              <div class="w-[27.5%] flex justify-end  dashboard-users mr-[10px]">
                <button className="w-[249px] h-[62px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] ">
                  عرض سجل البلاغات
                </button>
              </div>
            </div>
            <div class="row mt-[10px]">
              <div class="col-md-6 col-sm-12  rounded-[6px]">
                <div class="row">
                  <div class="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
                    <div class="card mb-[10px] pb-[40px] pt-[40px]">
                      <div class="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold text-[18px]">
                          عدد الرسائل المرسلة
                        </div>
                        <div className="text-[#484848] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                          50
                        </div>
                        <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
                    <div class="card mb-[10px] pb-[40px] pt-[40px]">
                      <div class="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold text-[18px]">
                          مبلغ الرسائل المدفوعة
                        </div>
                        <div className="text-[#484848] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                          70
                        </div>
                        <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                          5,09% أقل من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
                <div class="card mb-[10px] pb-[10px]">
                  <div class="text-[#959494] text-[18px] font-sstbold pt-[10px] pr-[20px] ">
                    معدل إرسال الرسائل
                  </div>
                  <Graph />
                </div>
              </div>
            </div>
            <div class="row  rounded-[6px] mr-[0px] mt-[10px]">
              <div class="col-12 p-[0px]">
                <div class="divider">
                  <div class="divider-text">2023</div>
                </div>
              </div>
            </div>
            <div class="row p-[10px]  bg-white rounded-[6px] mr-[0px] mt-[10px]">
              <table class="table mb-0">
                <tbody>
                  <tr
                    style={{
                      borderRightWidth: 0,
                    }}
                    className=""
                  >
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        تحديث التطبيق
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="w-[15%]  text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        1/12/2022
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="w-[15%]  text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        المتاجر
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 0 }}
                      class=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        اسم الموظف
                      </div>
                    </td>

                    <td class="w-[25%]">
                      <div className="flex justify-end">
                        <div className="   text-[#484848] text-[16px] font-sstbold ">
                          إظهار الرسالة
                        </div>
                        <div className="text-[#484848] mt-[3px]  text-center text-[16px] font-sstbold ">
                          <img
                            src="../app-assets/images/dropdown.png"
                            className="h-[24px] w-[24px]"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row p-[10px]  bg-white rounded-[6px] mr-[0px] mt-[10px]">
              <table class="table mb-0">
                <tbody>
                  <tr
                    style={{
                      borderRightWidth: 0,
                    }}
                    className=""
                  >
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        تحديث التطبيق
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="w-[15%]  text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        1/12/2022
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="w-[15%]  text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        المتاجر
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 0 }}
                      class=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        اسم الموظف
                      </div>
                    </td>

                    <td class="w-[25%]">
                      <div className="flex justify-end">
                        <div className="   text-[#484848] text-[16px] font-sstbold ">
                          إظهار الرسالة
                        </div>
                        <div className="text-[#484848] mt-[3px]  text-center text-[16px] font-sstbold ">
                          <img
                            src="../app-assets/images/dropdown.png"
                            className="h-[24px] w-[24px]"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row p-[10px]  bg-white rounded-[6px] mr-[0px] mt-[10px]">
              <table class="table mb-0">
                <tbody>
                  <tr
                    style={{
                      borderRightWidth: 0,
                    }}
                    className=""
                  >
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        تحديث التطبيق
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="w-[15%]  text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        1/12/2022
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="w-[15%]  text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        المتاجر
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 0 }}
                      class=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        اسم الموظف
                      </div>
                    </td>

                    <td class="w-[25%]">
                      <div className="flex justify-end">
                        <div className="   text-[#484848] text-[16px] font-sstbold ">
                          إظهار الرسالة
                        </div>
                        <div className="text-[#484848] mt-[3px]  text-center text-[16px] font-sstbold ">
                          <img
                            src="../app-assets/images/dropdown.png"
                            className="h-[24px] w-[24px]"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row p-[10px]  bg-white rounded-[6px] mr-[0px] mt-[10px]">
              <table class="table mb-0">
                <tbody>
                  <tr
                    style={{
                      borderRightWidth: 0,
                    }}
                    className=""
                  >
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        تحديث التطبيق
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="w-[15%]  text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        1/12/2022
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="w-[15%]  text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        المتاجر
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 0 }}
                      class=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        اسم الموظف
                      </div>
                    </td>

                    <td class="w-[25%]">
                      <div className="flex justify-end">
                        <div className="   text-[#484848] text-[16px] font-sstbold ">
                          إظهار الرسالة
                        </div>
                        <div className="text-[#484848] mt-[3px]  text-center text-[16px] font-sstbold ">
                          <img
                            src="../app-assets/images/dropdown.png"
                            className="h-[24px] w-[24px]"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row p-[10px]  bg-white rounded-[6px] mr-[0px] mt-[10px]">
              <table class="table mb-0">
                <tbody>
                  <tr
                    style={{
                      borderRightWidth: 0,
                    }}
                    className=""
                  >
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        تحديث التطبيق
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="w-[15%]  text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        1/12/2022
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="w-[15%]  text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        المتاجر
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 0 }}
                      class=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        اسم الموظف
                      </div>
                    </td>

                    <td class="w-[25%]">
                      <div className="flex justify-end">
                        <div className="   text-[#484848] text-[16px] font-sstbold ">
                          إظهار الرسالة
                        </div>
                        <div className="text-[#484848] mt-[3px]  text-center text-[16px] font-sstbold ">
                          <img
                            src="../app-assets/images/dropdown.png"
                            className="h-[24px] w-[24px]"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
