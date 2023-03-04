import React from "react";
import Barchart from "./Barchart";
import Chat from "./Chat";
import Graph from "./Graph";
import GraphNext from "./GraphNext";

export default function Content() {
  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section id="dashboard-analytics">
            <div className="row flex justify-around">
              <div className="w-[34%] dashboard-users">
                <div className="row">
                  <div className="col-12">
                    <div className="position-relative has-icon-left">
                      <input
                        type="number"
                        id="contact-info-icon"
                        className="form-control text-[20px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
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
              <div className="w-[34%]  dashboard-users">
                <div className="row">
                  <div className="bg-[#ffffff] flex  h-[62px] shadow rounded-[6px]">
                    <div className="pl-[30px] text-[16px] font-sstbold justify-center self-center  pr-[30px]">
                      يومي
                    </div>
                    <div className="border-r-[1px] border-[#EBEBEB]"></div>
                    <div className="pl-[30px] text-[16px] font-sstbold justify-center self-center  pr-[30px]">
                      أسبوعي
                    </div>
                    <div className="border-r-[1px] border-[#EBEBEB]"></div>
                    <div className="pl-[30px] text-[16px] font-sstbold justify-center self-center pr-[30px]">
                      شهري
                    </div>
                    <div className="border-r-[1px] border-[#EBEBEB]"></div>
                    <div className="pl-[30px] text-[16px] font-sstbold justify-center self-center  pr-[30px]">
                      سنوي
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[24%]  dashboard-users">
                <div className="position-relative has-icon-right">
                  <div className="absolute top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  <input
                    type="number"
                    id="contact-info-icon"
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                    name="contact-icon"
                    placeholder="16/12/2022 - 16/12/2022"
                  />
                </div>
              </div>
            </div>
            <div className="row flex justify-around mt-[30px]">
              <div className="w-[72%] flex-col h-[430px]  ">
                <div className="w-[100%] justify-around flex">
                  <div className="w-[37%] bg-white p-[10px] rounded-[6px] dashboard-users">
                    <Graph />
                  </div>
                  <div className="w-[60%] bg-white p-[10px] rounded-[6px] dashboard-users">
                    <Barchart />
                  </div>
                </div>
                <div className="w-[98%] mr-[10px] mt-[20px]">
                  <div className="table-responsive h-[345px] bg-white shadow rounded-[6px]  p-[20px]">
                    <table className="table  table-bordered mb-0">
                      <tbody>
                        <tr className="border-0">
                          <td
                            style={{ borderRightWidth: 0 }}
                            className="  text-center"
                          >
                            <div className="text-[#959494] text-[18px] font-sstbold">
                              إجمالي الطلبات
                            </div>
                            <div className="text-[#498A4A] text-[35px] font-sstbold ">
                              700000
                            </div>
                            <div className="text-[#60BA62] text-[16px] font-sstbold">
                              5,09% أعلى من الشهر الماضي
                            </div>
                          </td>
                          <td className="text-center">
                            <div className="text-[#959494] text-[18px] font-sstbold">
                              الطلبات المقبولة
                            </div>
                            <div className="text-[#498A4A] text-[35px] font-sstbold ">
                              400000
                            </div>
                            <div className="text-[#60BA62] text-[16px] font-sstbold">
                              5,09% أعلى من الشهر الماضي
                            </div>
                          </td>
                          <td
                            style={{ borderLeftWidth: 0 }}
                            className="text-bold-500 text-center "
                          >
                            <div className="text-[#959494] text-[18px] font-sstbold">
                              الطلبات المدفوعة
                            </div>
                            <div className="text-[#498A4A] text-[35px] font-sstbold ">
                              300000
                            </div>
                            <div className="text-[#E80000] text-[16px] font-sstbold">
                              1,06% أقل من الشهر الماضي
                            </div>
                          </td>
                        </tr>
                        <tr className="border-0">
                          <td
                            style={{ borderRightWidth: 0 }}
                            className="  text-center"
                          >
                            <div className="text-[#959494] text-[18px] font-sstbold">
                              الطلبات المعلقة
                            </div>
                            <div className="text-[#FF9800] text-[35px] font-sstbold ">
                              10000
                            </div>
                            <div className="text-[#E80000] text-[16px] font-sstbold">
                              5,09% أعلى من الشهر الماضي
                            </div>
                          </td>
                          <td className="text-center">
                            <div className="text-[#959494] text-[18px] font-sstbold">
                              الطلبات المرفوضة{" "}
                            </div>
                            <div className="text-[#AD0000] text-[35px] font-sstbold ">
                              2000
                            </div>
                            <div className="text-[#E80000] text-[16px] font-sstbold">
                              1,06% أقل من الشهر الماضي
                            </div>
                          </td>
                          <td
                            style={{ borderLeftWidth: 0 }}
                            className="text-bold-500 text-center "
                          >
                            <div className="text-[#959494] text-[18px] font-sstbold">
                              الطلبات المرفوضة بعد الإتفاق المبدئي{" "}
                            </div>
                            <div className="text-[#AD0000] text-[35px] font-sstbold ">
                              2000
                            </div>
                            <div className="text-[#E80000] text-[16px] font-sstbold">
                              1,06% أقل من الشهر الماضي
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="w-[27%] h-[790px] overflow-scroll  dashboard-users rounded-[6px] shadow bg-white">
                <Chat />
              </div>
            </div>
            <div className="row flex justify-around mt-[30px]">
              <div className="w-[70%] mr-[10px]">
                <div className="table-responsive bg-white shadow h-[175px] rounded-[6px]  p-[10px]">
                  <table className="table  table-bordered mb-0">
                    <tbody>
                      <tr className="border-0">
                        <td
                          style={{ borderRightWidth: 0 }}
                          className="  text-center"
                        >
                          <div className="text-[#959494] text-[18px] font-sstbold">
                            إجمالي عدد الإلتزامات
                          </div>
                          <div className="text-[#498A4A] text-[35px] font-sstbold ">
                            700000
                          </div>
                          <div className="text-[#60BA62] text-[16px] font-sstbold">
                            5,09% أعلى من الشهر الماضي{" "}
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="text-[#959494] text-[18px] font-sstbold">
                            عدد الإلتزامات المدفوعة{" "}
                          </div>
                          <div className="text-[#498A4A] text-[35px] font-sstbold ">
                            40000
                          </div>
                          <div className="text-[#60BA62] text-[16px] font-sstbold">
                            5,09% أعلى من الشهر الماضي{" "}
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 0 }}
                          className="text-bold-500 text-center "
                        >
                          <div className="text-[#959494] text-[18px] font-sstbold">
                            عدد الالتزامات المعلقة{" "}
                          </div>
                          <div className="text-[#FF9800] text-[35px] font-sstbold ">
                            3000
                          </div>
                          <div className="text-[#60BA62] text-[16px] font-sstbold">
                            1,06% أقل من الشهر الماضي{" "}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive bg-white  h-[175px] shadow rounded-[6px] mt-[20px] p-[10px]">
                  <table className="table  table-bordered mb-0">
                    <tbody>
                      <tr className="border-0">
                        <td
                          style={{ borderRightWidth: 0 }}
                          className="  text-center"
                        >
                          <div className="text-[#959494] text-[18px] font-sstbold">
                            إجمالي قيمة الإلتزامات{" "}
                          </div>
                          <div className="text-[#498A4A] text-[35px] font-sstbold ">
                            2,000 ريال
                          </div>
                          <div className="text-[#60BA62] text-[16px] font-sstbold">
                            5,09% أعلى من الشهر الماضي{" "}
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="text-[#959494] text-[18px] font-sstbold">
                            قيمة الإلتزامات المدفوعة{" "}
                          </div>
                          <div className="text-[#498A4A] text-[35px] font-sstbold ">
                            1,500 ريال
                          </div>
                          <div className="text-[#E80000] text-[16px] font-sstbold">
                            1,06% أقل من الشهر الماضي{" "}
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 0 }}
                          className="text-bold-500 text-center "
                        >
                          <div className="text-[#959494] text-[18px] font-sstbold">
                            قيمة الإلتزامات المعلقة{" "}
                          </div>
                          <div className="text-[#FF9800] text-[35px] font-sstbold ">
                            500 ريال
                          </div>
                          <div className="text-[#60BA62] text-[16px] font-sstbold">
                            1,06% أقل من الشهر الماضي{" "}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-[27%] mr-[10px] rounded-[6px] shadow p-[10px] bg-[#ffffff]">
                <GraphNext />
              </div>
            </div>
            <div className="flex mt-[30px]">
              <div className="w-[100%] mr-[5px]">
                <div className="table-responsive bg-white shadow rounded-[6px]  p-[10px]">
                  <table className="table  table-bordered mb-0">
                    <tbody>
                      <tr className="border-0">
                        <td
                          style={{ borderRightWidth: 0 }}
                          className="  text-center"
                        >
                          <div className="text-[#959494] text-[18px] font-sstbold">
                            عدد البلاغات
                          </div>
                          <div className="text-[#AD0000] text-[35px] font-sstbold ">
                            50
                          </div>
                          <div className="text-[#E80000] text-[16px] font-sstbold">
                            5,09% أعلى من الشهر الماضي
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="text-[#959494] text-[18px] font-sstbold">
                            عدد البلاغات المحلولة
                          </div>
                          <div className="text-[#498A4A] text-[35px] font-sstbold ">
                            50
                          </div>
                          <div className="text-[#60BA62] text-[16px] font-sstbold">
                            5,09% أعلى من الشهر الماضي
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 0 }}
                          className="text-bold-500 text-center "
                        >
                          <div className="text-[#959494] text-[18px] font-sstbold">
                            بلاغات المتاجر
                          </div>
                          <div className="text-[#AD0000] text-[35px] font-sstbold ">
                            30
                          </div>
                          <div className="text-[#E80000] text-[16px] font-sstbold">
                            5,09% أعلى من الشهر الماضي
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 0 }}
                          className="text-bold-500 text-center "
                        >
                          <div className="text-[#959494] text-[18px] font-sstbold">
                            بلاغات المستخدمين
                          </div>
                          <div className="text-[#AD0000] text-[35px] font-sstbold ">
                            10
                          </div>
                          <div className="text-[#E80000] text-[16px] font-sstbold">
                            5,09% أعلى من الشهر الماضي
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 0 }}
                          className="text-bold-500 text-center "
                        >
                          <div className="text-[#959494] text-[18px] font-sstbold">
                            بلاغات المنتجات
                          </div>
                          <div className="text-[#AD0000] text-[35px] font-sstbold ">
                            20
                          </div>
                          <div className="text-[#E80000] text-[16px] font-sstbold">
                            5,09% أعلى من الشهر الماضي
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className=" flex mt-[30px]">
              <div className="w-[30%] mr-[5px]">
                <div className="table-responsive bg-white shadow rounded-[6px]  p-[10px]">
                  <table className="table  table-bordered mb-0">
                    <tbody>
                      <tr className="border-0">
                        <td
                          style={{ borderRightWidth: 0 }}
                          className=" border-0 text-center"
                        >
                          <div className="text-[#959494] text-[18px] font-sstbold">
                            عدد البلاغات
                          </div>
                          <div className="text-[#AD0000] text-[35px] font-sstbold ">
                            50
                          </div>
                          <div className="text-[#E80000] text-[16px] font-sstbold">
                            5,09% أعلى من الشهر الماضي
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-responsive bg-white shadow rounded-[6px] mt-[10px]  p-[10px]">
                  <table className="table  table-bordered mb-0">
                    <tbody>
                      <tr className="border-0">
                        <td
                          style={{ borderRightWidth: 0 }}
                          className=" border-0 text-center"
                        >
                          <div className="text-[#959494] text-[18px] font-sstbold">
                            عدد البلاغات
                          </div>
                          <div className="text-[#AD0000] text-[35px] font-sstbold ">
                            50
                          </div>
                          <div className="text-[#E80000] text-[16px] font-sstbold">
                            5,09% أعلى من الشهر الماضي
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-[70%] mr-[10px] bg-white p-[10px] rounded-[6px] shadow">
                <div className="flex justify-evenly">
                  <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                    المتاجر التي لديها التزام مسقط
                  </div>
                  <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                    عرض المزيد
                  </div>
                </div>
                <div className="flex justify-evenly">
                  <div className="w-[24%] justify-center flex flex-col align-items-center">
                    <div className="avatar  top-[44px] mr-50 ">
                      <img
                        className="w-[88px] h-[88px] rounded-[44px]"
                        src="../../../panel/app-assets/images/store.png"
                        alt="sidebar   user image"
                      />
                      <span className="avatar-status-away"></span>
                    </div>
                    <div className="w-[100%] bg-[#F9F9F9]">
                      <div className="chat-sidebar-name mt-[50px] mb-[10px]">
                        <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                          متجر أسرتي
                        </h6>
                        <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                          #959494
                        </div>
                      </div>
                      <div className="border-[1px] m-auto border-[#EBEBEB] w-[90%]"></div>
                      <div className="p-[10px] text-[18px] font-sstbold text-[#9D40AD] text-center">
                        3 التزام مسقط
                      </div>
                    </div>
                  </div>
                  <div className="w-[24%] justify-center flex flex-col align-items-center">
                    <div className="avatar  top-[44px] mr-50 ">
                      <img
                        className="w-[88px] h-[88px] rounded-[44px]"
                        src="../../../panel/app-assets/images/store.png"
                        alt="sidebar   user image"
                      />
                      <span className="avatar-status-away"></span>
                    </div>
                    <div className="w-[100%] bg-[#F9F9F9]">
                      <div className="chat-sidebar-name mt-[50px] mb-[10px]">
                        <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                          متجر أسرتي
                        </h6>
                        <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                          #959494
                        </div>
                      </div>
                      <div className="border-[1px] m-auto border-[#EBEBEB] w-[90%]"></div>
                      <div className="p-[10px] text-[18px] font-sstbold text-[#9D40AD] text-center">
                        3 التزام مسقط
                      </div>
                    </div>
                  </div>
                  <div className="w-[24%] justify-center flex flex-col align-items-center">
                    <div className="avatar  top-[44px] mr-50 ">
                      <img
                        className="w-[88px] h-[88px] rounded-[44px]"
                        src="../../../panel/app-assets/images/store.png"
                        alt="sidebar   user image"
                      />
                      <span className="avatar-status-away"></span>
                    </div>
                    <div className="w-[100%] bg-[#F9F9F9]">
                      <div className="chat-sidebar-name mt-[50px] mb-[10px]">
                        <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                          متجر أسرتي
                        </h6>
                        <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                          #959494
                        </div>
                      </div>
                      <div className="border-[1px] m-auto border-[#EBEBEB] w-[90%]"></div>
                      <div className="p-[10px] text-[18px] font-sstbold text-[#9D40AD] text-center">
                        3 التزام مسقط
                      </div>
                    </div>
                  </div>
                  <div className="w-[24%] justify-center flex flex-col align-items-center">
                    <div className="avatar  top-[44px] mr-50 ">
                      <img
                        className="w-[88px] h-[88px] rounded-[44px]"
                        src="../../../panel/app-assets/images/store.png"
                        alt="sidebar   user image"
                      />
                      <span className="avatar-status-away"></span>
                    </div>
                    <div className="w-[100%] bg-[#F9F9F9]">
                      <div className="chat-sidebar-name mt-[50px] mb-[10px]">
                        <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                          متجر أسرتي
                        </h6>
                        <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                          #959494
                        </div>
                      </div>
                      <div className="border-[1px] m-auto border-[#EBEBEB] w-[90%]"></div>
                      <div className="p-[10px] text-[18px] font-sstbold text-[#9D40AD] text-center">
                        3 التزام مسقط
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
