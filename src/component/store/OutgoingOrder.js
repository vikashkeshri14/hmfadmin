import React from "react";

export default function OutgoingOrder() {
  return (
    <>
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
    </>
  );
}
