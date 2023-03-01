import React from "react";
import InfoGraph from "./InfoGraph";

export default function InfoIncoming() {
  return (
    <>
      <div className="row mt-[10px]">
        <div className="col-md-8 col-sm-12  pl-[0px] rounded-[6px] ">
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
                      style={{ borderLeftWidth: 1 }}
                      className="  text-center w-[25%]"
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
                    <td className="  text-center w-[25%]">
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
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-4  col-sm-12 pl-[0px] rounded-[6px] ">
          <div className="card h-[240px] bg-white">
            <div className="text-[#959494] text-[18px] font-sstbold p-[10px]">
              البلاغات
            </div>
            <InfoGraph />
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
                  محمد علي محمد
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  1/12/2022
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  بلاغ عن المتجر
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 0 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  اسم الموظف
                </div>
              </td>

              <td className="w-[25%]">
                <div className="flex justify-end">
                  <div className="   text-[#959494] text-[16px] font-sstbold ">
                    ملخص الطلب
                  </div>
                  <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                    <img
                      src="../panel/app-assets/images/dropdown.png"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
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
                  محمد علي محمد
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  1/12/2022
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  بلاغ عن المتجر
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 0 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  اسم الموظف
                </div>
              </td>

              <td className="w-[25%]">
                <div className="flex justify-end">
                  <div className="   text-[#959494] text-[16px] font-sstbold ">
                    ملخص الطلب
                  </div>
                  <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                    <img
                      src="../panel/app-assets/images/dropdown.png"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
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
                  محمد علي محمد
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  1/12/2022
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  بلاغ عن المتجر
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  اسم الموظف
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 0 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#FF9800] text-[16px] font-sstbold ">
                  معلق
                </div>
              </td>

              <td className="w-[25%]">
                <div className="flex justify-end">
                  <div className="   text-[#959494] text-[16px] font-sstbold ">
                    ملخص الطلب
                  </div>
                  <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                    <img
                      src="../panel/app-assets/images/dropdown.png"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
