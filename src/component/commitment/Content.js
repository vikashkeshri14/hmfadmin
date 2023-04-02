import React, { useEffect, useState } from "react";
import Barchart from "./Barchart";
import Graph from "./Graph";
import LineCharts from "./LineCharts";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import PendingCommitments from "./PendingCommitments";
import PaidCommitments from "./PaidCommitments";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import DropCommitment from "./DropCommitment";
import { CommitmentContext } from "../../contexts/CommitmentContext";

export default function Content() {
  const [value, onChange] = useState([new Date(), new Date()]);

  const [alertShow, setAlertShow] = useState(false);
  const [totalOrderCommitment, setTotalOrderCommitment] = useState("0");
  const [totalAmountOfCommitment, setTotalAmountOfCommitment] = useState("0");
  const [totalPendingOrderCommitment, setTotalPendingOrderCommitment] =
    useState("0");
  const [totalAmountOfPendingCommitment, setTotalAmountOfPendingCommitment] =
    useState("0");
  const [totalPaidOrderCommitment, setTotalPaidOrderCommitment] = useState("0");
  const [totalAmountOfPaidCommitment, setTotalAmountOfPaidCommitment] =
    useState("0");
  const [moreDropCommitment, setmoreDropCommitment] = useState(false);
  const [morePendingCommitment, setmorePendingCommitment] = useState(false);
  const [morePaidCommitment, setmorePaidCommitment] = useState(false);

  const [totalDropCommitment, settotalDropCommitment] = useState("0");
  const [totalAmountDropCommitment, settotalAmountDropCommitment] =
    useState("0");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getOrderCommitment();
  }, []);
  const getOrderCommitment = async () => {
    const obj = {
      from: "",
      to: "",
    };
    let params = { url: apiList.totalOrderCommitment, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      if (response.totalOrderCommitment[0].total_order) {
        setTotalOrderCommitment(response.totalOrderCommitment[0].total_order);
        setTotalAmountOfCommitment(response.totalOrderCommitment[0].total);
      }
      if (response.totalPendingOrderCommitment[0].total_order) {
        setTotalPendingOrderCommitment(
          response.totalPendingOrderCommitment[0].total_order
        );
        setTotalAmountOfPendingCommitment(
          response.totalPendingOrderCommitment[0].total
        );
      }
      if (response.totalPaidOrderCommitment[0].total_order) {
        setTotalPaidOrderCommitment(
          response.totalPaidOrderCommitment[0].total_order
        );
        setTotalAmountOfPaidCommitment(
          response.totalPaidOrderCommitment[0].total
        );
      }
      if (response.totalDropCommitmentOrderCommitment[0].total_order) {
        settotalDropCommitment(
          response.totalDropCommitmentOrderCommitment[0].total_order
        );
        settotalAmountDropCommitment(
          response.totalDropCommitmentOrderCommitment[0].total
        );
      }
    }
  };
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div
        className={alertShow ? "blur-sm content-wrapper" : "content-wrapper"}
      >
        <div className="content-header row"></div>
        <div className="content-body">
          <section className="sms-management">
            <div className="row flex mr-[5px] ">
              {moreDropCommitment ||
              morePaidCommitment ||
              morePendingCommitment ? (
                <div className="w-[34%] mr-[15px] dashboard-users">
                  <div className="row">
                    <div className="col-12">
                      <div className="position-relative has-icon-left">
                        <div className=" absolute top-[20px] left-[10px] w-[24px] h-[24px]">
                          <i className="bx bx-slider-alt"></i>
                        </div>
                        <input
                          type="text"
                          id="contact-info-icon"
                          className="form-control text-[20px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                          name="contact-icon"
                          placeholder="البحث"
                          value={searchText}
                          onChange={(e) => {
                            setSearchText(e.target.value);
                          }}
                        />
                        <div className="form-control-position top-[20px] right-[10px] w-[24px] h-[24px]">
                          <img
                            src={
                              config.domainUrl +
                              "/panel/app-assets/images/search.png"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {moreDropCommitment ||
              morePaidCommitment ||
              morePendingCommitment ? null : (
                <div className="w-[40%] bg-white rounded-[6px]  dashboard-users">
                  <div className="pt-[5px] pb-[5px]">
                    <table className=" w-full h-[52px] mb-[0px]">
                      <tbody>
                        <tr>
                          <td
                            style={{ borderLeftWidth: 1 }}
                            className=" text-center  "
                          >
                            <div className="flex justify-center text-[#484848] text-[16px] font-sstbold ">
                              يومي
                            </div>
                          </td>
                          <td
                            style={{ borderLeftWidth: 1 }}
                            className="  text-center  "
                          >
                            <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                              أسبوعي
                            </div>
                          </td>
                          <td
                            style={{ borderLeftWidth: 1 }}
                            className=" text-center "
                          >
                            <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                              شهري
                            </div>
                          </td>
                          <td
                            style={{ borderLeftWidth: 0 }}
                            className=" text-center "
                          >
                            <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                              سنوي
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="w-[24%]  dashboard-users mr-[10px]">
                <div className="position-relative  has-icon-right">
                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar zindex-1 text-[24px] pl-[10px]"></i>
                  </div>
                  <DateRangePicker
                    calendarIcon=""
                    calendarClassName="border-0 "
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                    onChange={onChange}
                    value={value}
                  />
                </div>
              </div>
            </div>
            {!moreDropCommitment &&
              !morePendingCommitment &&
              !morePaidCommitment && (
                <>
                  <div className=" row mt-[10px]">
                    <div className="col-md-12 col-sm-12 pl-[0px] rounded-[6px] ">
                      <div className="card mb-[10px]">
                        <div className="p-[10px]">
                          <table className="table  mb-0">
                            <tbody>
                              <tr
                                style={{
                                  borderRightWidth: 0,
                                }}
                              >
                                <td
                                  style={{ borderLeftWidth: 1 }}
                                  className="  text-center w-[25%]"
                                >
                                  <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                                    إجمالي قيمة الإلتزامات
                                  </div>
                                  <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                                    {(totalAmountOfCommitment *
                                      config.commitmentRate) /
                                      100}{" "}
                                    ريال
                                  </div>
                                  <div className="text-[16px] font-sstbold text-[#60BA62]">
                                    5,09% أعلى من السنة الماضية
                                  </div>
                                </td>
                                <td
                                  style={{ borderLeftWidth: 1 }}
                                  className="  text-center w-[25%]"
                                >
                                  <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                                    قيمة الإلتزامات المدفوعة
                                  </div>
                                  <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                                    {(totalAmountOfPaidCommitment *
                                      config.commitmentRate) /
                                      100}{" "}
                                    ريال
                                  </div>
                                  <div className="text-[16px] font-sstbold text-[#60BA62]">
                                    5,09% أعلى من السنة الماضية
                                  </div>
                                </td>
                                <td className="  text-center w-[25%]">
                                  <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                                    قيمة الإلتزامات المعلقة
                                  </div>
                                  <div className="text-[#FF9800] text-center text-[35px] font-sstbold ">
                                    {(totalAmountOfPendingCommitment *
                                      config.commitmentRate) /
                                      100}{" "}
                                    ريال
                                  </div>
                                  <div className="text-[16px] font-sstbold text-[#60BA62]">
                                    1,06% أقل من السنة الماضية
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className=" mt-[10px]">
                        <div className="col-md-12 col-sm-12  rounded-[6px]">
                          <div className="row">
                            <div className="col-md-4 pr-[0px] col-sm-12 pl-[0px]  rounded-[6px]">
                              <div className="card mb-[10px] pb-[20px] pt-[20px]">
                                <div className="p-[10px]">
                                  <div className="text-[#959494] text-center font-sstbold text-[18px]">
                                    إجمالي عدد الإلتزامات
                                  </div>
                                  <div className="text-[#484848] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                                    {totalOrderCommitment}
                                  </div>
                                  <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                                    5,09% أعلى من السنة الماضية
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-12 rounded-[6px] pl-[0px]">
                              <div className="card mb-[10px] pb-[20px] pt-[20px]">
                                <div className="p-[10px]">
                                  <div className="text-[#959494] text-center font-sstbold text-[18px]">
                                    عدد الإلتزامات المدفوعة
                                  </div>
                                  <div className="text-[#484848] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                                    {totalPaidOrderCommitment}
                                  </div>
                                  <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                                    5,09% أعلى من السنة الماضية
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-12 rounded-[6px] pl-[0px]">
                              <div className="card mb-[10px] pb-[20px] pt-[20px]">
                                <div className="p-[10px]">
                                  <div className="text-[#959494] text-center font-sstbold text-[18px]">
                                    عدد الالتزامات المعلقة
                                  </div>
                                  <div className="text-[#FF9800] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                                    {totalPendingOrderCommitment}
                                  </div>
                                  <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                                    1,06% أقل من السنة الماضية
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row  mr-[5px] mt-[5px] ">
                    <div className="col-xl-4  col-md-12 p-[5px] pr-[0px]">
                      <div className="bg-white h-[400px] rounded-[6px]">
                        <Barchart />
                      </div>
                    </div>
                    <div className="col-xl-8 col-md-12   p-[5px]">
                      <div className="bg-white h-[400px] rounded-[6px] ">
                        <LineCharts />
                      </div>
                    </div>
                  </div>
                </>
              )}

            <div className="row flex mt-[20px] pl-[15px] pr-[15px]  ">
              {!moreDropCommitment &&
                !morePendingCommitment &&
                !morePaidCommitment && (
                  <div className="w-[30%] pl-[5px]">
                    <div className="col-md-12 col-sm-12  rounded-[6px]">
                      <div className="row">
                        <div className="col-md-12 pr-[0px] col-sm-12 pl-[0px]  rounded-[6px]">
                          <div className="card mb-[10px] pb-[5px] pt-[5px]">
                            <div className="p-[10px]">
                              <div className="text-[#959494] text-center font-sstbold text-[18px]">
                                عدد الإلتزامات المسقطة
                              </div>
                              <div className="text-[#9D40AD] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                                {totalDropCommitment}
                              </div>
                              <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                                5,09% أعلى من الشهر الماضي
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-sm-12  rounded-[6px]">
                      <div className="row">
                        <div className="col-md-12 pr-[0px] col-sm-12 pl-[0px]  rounded-[6px]">
                          <div className="card mb-[10px] pb-[5px] pt-[5px]">
                            <div className="p-[10px]">
                              <div className="text-[#959494] text-center font-sstbold text-[18px]">
                                مبلغ الإلتزامات المسقطة
                              </div>
                              <div className="text-[#9D40AD] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                                {(totalAmountDropCommitment *
                                  config.commitmentRate) /
                                  100}{" "}
                              </div>
                              <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                                5,09% أعلى من الشهر الماضي
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              <CommitmentContext.Provider
                value={{
                  moreDropCommitment,
                  setmoreDropCommitment,
                  morePendingCommitment,
                  setmorePendingCommitment,
                  morePaidCommitment,
                  setmorePaidCommitment,
                }}
              >
                {!morePendingCommitment && !morePaidCommitment && (
                  <DropCommitment searchData={searchText} />
                )}
              </CommitmentContext.Provider>
            </div>

            <CommitmentContext.Provider
              value={{
                moreDropCommitment,
                setmoreDropCommitment,
                morePendingCommitment,
                setmorePendingCommitment,
                morePaidCommitment,
                setmorePaidCommitment,
              }}
            >
              {!moreDropCommitment && !morePaidCommitment && (
                <div className="row mt-[20px]">
                  <PendingCommitments searchData={searchText} />
                </div>
              )}
              {!moreDropCommitment && !morePendingCommitment && (
                <div className="row mt-[20px]">
                  <div className="col-md-12 col-sm-12 pl-[0px] ">
                    <PaidCommitments searchData={searchText} />
                  </div>
                </div>
              )}
            </CommitmentContext.Provider>
          </section>
        </div>
      </div>
    </div>
  );
}
