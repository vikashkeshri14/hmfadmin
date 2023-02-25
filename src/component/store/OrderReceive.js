import React from "react";
import LineCharts from "./LineCharts";

export default function OrderReceive() {
  return (
    <>
      <div class="row mt-[10px]">
        <div class="col-md-12 col-sm-12 pl-[0px] rounded-[6px] ">
          <div class="card mb-[10px]">
            <div class="p-[10px]">
              <table class="table  mb-0">
                <tbody>
                  <tr
                    style={{
                      borderRightWidth: 0,
                    }}
                    className="border-"
                  >
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        إجمالي الطلبات
                      </div>
                      <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                        70
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        5,09% أعلى من الشهر الماضي
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        إجمالي قيمة الطلبات{" "}
                      </div>
                      <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                        170 ريال
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        5,09% أعلى من الشهر الماضي{" "}
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        الطلبات المعلقة{" "}
                      </div>
                      <div className="text-[#FF9800] text-center text-[35px] font-sstbold ">
                        3
                      </div>
                      <div className="text-[16px] font-sstbold text-[#E80000]">
                        5,09% أعلى من الشهر الماضي{" "}
                      </div>
                    </td>
                    <td class="  text-center w-[25%]">
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        إجمالي مبلغ الطلبات{" "}
                      </div>
                      <div className="text-[#FF9800] text-center text-[35px] font-sstbold ">
                        70 ريال
                      </div>
                      <div className="text-[16px] font-sstbold text-[#E80000]">
                        5,09% أعلى من الشهر الماضي{" "}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 pl-[0px] rounded-[6px] ">
          <div class="card mb-[10px]">
            <div class="p-[10px]">
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
                      class="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        الطلبات المقبولة{" "}
                      </div>
                      <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                        70
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        5,09% أعلى من الشهر الماضي
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        قيمة الطلبات المقبولة
                      </div>
                      <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                        150 ريال
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        5,09% أعلى من الشهر الماضي
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        الطلبات المرفوضة
                      </div>
                      <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                        7
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        1,06% أقل من الشهر الماضي
                      </div>
                    </td>
                    <td class="  text-center w-[25%]">
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        قيمة الطلبات المرفوضة
                      </div>
                      <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                        22 ريال
                      </div>
                      <div className="text-[16px] font-sstbold text-[#E80000]">
                        5,09% أعلى من الشهر الماضي
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-sm-12 pl-[0px] rounded-[6px] ">
          <div class="card mb-[10px]">
            <div class="p-[10px]">
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
                      class="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        الطلبات المدفوعة
                      </div>
                      <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                        50
                      </div>
                      <div className="text-[16px] font-sstbold text-[#E80000]">
                        1,06% أقل من الشهر الماضي
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        قيمة الطلبات المدفوعة
                      </div>
                      <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                        66 ريال
                      </div>
                      <div className="text-[16px] font-sstbold text-[#E80000]">
                        1,06% أقل من الشهر الماضي
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      class="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        الطلبات المرفوضة بعد الإتفاق المبدئي{" "}
                      </div>
                      <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                        1
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        1,06% أقل من الشهر الماضي
                      </div>
                    </td>
                    <td class="  text-center w-[25%]">
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        قيمة الطلبات المرفوضة بعد الإتفاق المبدئي
                      </div>
                      <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                        70 ريال
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        1,06% أقل من الشهر الماضي
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row m-[0px] bg-[#ffffff] rounded-[6px] mr-[15px] w-[100%]">
          <div class="col-xl-3 col-md-6 col-12 p-[10px] border-l-[1px]">
            <fieldset class="form-group h-[57px] bg-[#F9F9F9]">
              <select
                style={{
                  background:
                    "url('../app-assets/images/dropdown.png') no-repeat 16px",
                }}
                class="form-control bg-[#F9F9F9] h-[57px]"
                id="basicSelect"
              >
                <option>IT</option>
                <option>Blade Runner</option>
                <option>Thor Ragnarok</option>
              </select>
            </fieldset>
            <div class="position-relative has-icon-right">
              <div className="absolute top-[20px] left-0">
                <i class="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
              </div>
              <input
                type="number"
                id="contact-info-icon"
                class="form-control text-[16px] font-sstroman h-[57px] border-0 bg-[#F9F9F9] rounded-[6px]"
                name="contact-icon"
                placeholder="16/12/2022 - 16/12/2022"
              />
            </div>
          </div>
          <div class="col-xl-9 col-md-6 col-12 p-[10px]">
            <LineCharts />
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
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  رقم الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  70
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                  #23
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  تاريخ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  23/11/2022
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  مبلغ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  25 ريال
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  حالة الطلب
                </div>
                <div className="text-[#AAD0AB] text-center text-[20px] font-sstbold ">
                  مقبولة
                </div>
              </td>
              <td class="w-[25%]  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  ملخص الطلب
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
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
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  رقم الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  303
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class="w-[15%]  text-center ">
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                  #23
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class="w-[15%]  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  تاريخ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  23/11/2022
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  مبلغ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  25 ريال
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class="w-[15%]  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  حالة الطلب
                </div>
                <div className="text-[#FF9800] text-center text-[20px] font-sstbold ">
                  معلقة
                </div>
              </td>
              <td class="w-[25%]  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  ملخص الطلب
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
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
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  رقم الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  303
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                  #23
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  تاريخ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  23/11/2022
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  مبلغ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  25 ريال
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  حالة الطلب
                </div>
                <div className="text-[#E80000] text-center text-[20px] font-sstbold ">
                  مرفوضة
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class="  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  سبب الرفض
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </td>
              <td class="  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  ملخص الطلب
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
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
              <td style={{ borderLeftWidth: 1 }} class="w-[15%]  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  رقم الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  303
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                  #23
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  تاريخ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  23/11/2022
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  مبلغ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  25 ريال
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[15%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  حالة الطلب
                </div>
                <div className="text-[#60BA62] text-center text-[20px] font-sstbold ">
                  مدفوعة
                </div>
              </td>
              <td class=" w-[25%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  ملخص الطلب
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
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
              <td style={{ borderLeftWidth: 1 }} class="w-[12%]  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  رقم الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  303
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[12%] text-center ">
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                  #23
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[12%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  تاريخ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  23/11/2022
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[12%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  مبلغ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  25 ريال
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class=" w-[27%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  حالة الطلب
                </div>
                <div className="text-[#E80000] text-center text-[20px] font-sstbold ">
                  مرفوضة بعد الإتفاق المبدئي
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} class="  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  سبب الرفض
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </td>
              <td class="  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  ملخص الطلب{" "}
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
