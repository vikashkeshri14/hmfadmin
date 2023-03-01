import React from "react";
import OrderGraph from "./OrderGraph";

export default function OrderHistory() {
  return (
    <>
      <div className="row mt-[10px]">
        <div className="col-md-5 col-sm-12  pl-[0px] rounded-[6px] ">
          <div className="card mb-[10px]">
            <div className="p-[10px] flex justify-center h-[240px]">
              <table className="table justify-center self-center h-[180px] mb-0">
                <tbody>
                  <tr
                    style={{
                      borderRightWidth: 0,
                    }}
                    className="border-"
                  >
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className="  text-center w-[25%]"
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
                      style={{ borderLeftWidth: 0 }}
                      className="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        إجمالي قيمة الطلبات
                      </div>
                      <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                        170 ريال
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        5,09% أعلى من الشهر الماضي{" "}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-7  col-sm-12 pl-[0px] rounded-[6px] ">
          <div className="card h-[240px] bg-white">
            <div className="flex">
              <div className="text-[#959494] text-[18px] font-sstbold p-[10px]">
                الطلبات
              </div>
              <div className=" p-[10px]">
                <div className="absolute  left-[20px] has-icon-right">
                  <div className="absolute top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  <input
                    type="number"
                    id="contact-info-icon"
                    className="form-control w-[315px] bg-[#F9F9F9] text-[16px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                    name="contact-icon"
                    placeholder="16/12/2022 - 16/12/2022"
                  />
                </div>
              </div>
            </div>
            <OrderGraph />
          </div>
        </div>
      </div>
      <div className="row  rounded-[6px] mr-[0px] mt-[10px]">
        <div className="col-12 p-[0px]">
          <div className="divider">
            <div className="divider-text">2023</div>
          </div>
        </div>
      </div>
      <div className="row p-[10px]  bg-white rounded-[6px] mr-[0px] mt-[10px]">
        <table className="table mb-0">
          <tbody>
            <tr
              style={{
                borderRightWidth: 0,
              }}
              className=""
            >
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  رقم الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  70
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  متجر مختلف
                </div>
                <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                  #23
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  تاريخ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  23/11/2022
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  مبلغ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  25 ريال
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  حالة الطلب
                </div>
                <div className="text-[#FF9800] text-center text-[20px] font-sstbold ">
                  معلق
                </div>
              </td>
              <td className="w-[25%]  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  ملخص الطلب
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../panel/app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row p-[10px]  bg-white rounded-[6px] mr-[0px] mt-[10px]">
        <table className="table mb-0">
          <tbody>
            <tr
              style={{
                borderRightWidth: 0,
              }}
              className=""
            >
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  رقم الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  303
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                  #23
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  تاريخ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  23/11/2022
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  مبلغ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  25 ريال
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  حالة الطلب
                </div>
                <div className="text-[#60BA62] text-center text-[20px] font-sstbold ">
                  مدفوعة
                </div>
              </td>
              <td className="w-[25%]  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  ملخص الطلب
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../panel/app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row p-[10px]  bg-white rounded-[6px] mr-[0px] mt-[10px]">
        <table className="table mb-0">
          <tbody>
            <tr
              style={{
                borderRightWidth: 0,
              }}
              className=""
            >
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  رقم الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  303
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                  #23
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  تاريخ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  23/11/2022
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  مبلغ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  25 ريال
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  حالة الطلب
                </div>
                <div className="text-[#E80000] text-center text-[20px] font-sstbold ">
                  مرفوضة
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} className="  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  سبب الرفض
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../panel/app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </td>
              <td className="  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  ملخص الطلب
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../panel/app-assets/images/dropdown.png"
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
