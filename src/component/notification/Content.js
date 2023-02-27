import React, { useState } from "react";

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
                        <img src="../app-assets/images/search.png" />
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

              <div className="w-[37.5%] flex justify-end  dashboard-users mr-[10px]">
                <button
                  onClick={() => {
                    setAlertShow(true);
                  }}
                  className="w-[249px] h-[62px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] "
                >
                  إنشاء تنبية
                </button>
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
                        السنة
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
                      style={{ borderLeftWidth: 0 }}
                      class="w-[15%]  text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        بواسطة اسم الموظف
                      </div>
                    </td>

                    <td class="w-[25%]">
                      <div className="flex justify-end">
                        <div className="   text-[#484848] text-[16px] font-sstbold ">
                          عرض نص التنبية
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
                        السنة
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
                      style={{ borderLeftWidth: 0 }}
                      class="w-[15%]  text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        بواسطة اسم الموظف
                      </div>
                    </td>

                    <td class="w-[25%]">
                      <div className="flex justify-end">
                        <div className="   text-[#484848] text-[16px] font-sstbold ">
                          عرض نص التنبية
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
      {alertShow && (
        <>
          <div class="initial">
            <div class="absolute   top-1/2 left-1/2 transform -translate-x-1/2   w-[500px]  ">
              <div class="relative bg-[#FAFAFA] rounded-[6px]   shadow-[0_1px_4px_1px_rgba(21,34,50,0.2)]">
                <div className="flex p-[10px] pt-[20px] mb-[10px] pl-[0px]">
                  <div className="text-[#484848] w-[30%] text-[16px] font-sstbold ">
                    محمد علي محمد
                  </div>
                  <div className="w-[65%]">
                    <select class="form-control bg-[#EBEBEB]" id="basicSelect">
                      <option>الجميع</option>
                      <option>Blade Runner</option>
                      <option>Thor Ragnarok</option>
                    </select>
                  </div>
                </div>
                <div className="flex">
                  <div className="text-[#484848] text-center w-[30%] mt-[5px] text-[16px] font-sstbold  mb-[5px] ">
                    نص التنبية
                  </div>
                  <div class=" w-[65%] mb-[30px] ">
                    <textarea class=" w-full rounded-[6px] h-[155px] bg-[#EBEBEB] text-[#ffffff] "></textarea>
                  </div>
                </div>
                <div className="flex justify-center pb-[30px]">
                  <button className="cancellation text-[24px] rounded-[6px] text-[#ffffff] bg-[#959494] w-[148px] h-[58px] font-sstbold ml-[10px]">
                    إرسال
                  </button>
                  <button
                    onClick={() => setAlertShow(false)}
                    className="ban text-[24px] rounded-[6px] bg-[#959494] text-[#ffffff] w-[148px] h-[58px] font-sstbold "
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
