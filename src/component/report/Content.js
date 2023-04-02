import React, { useEffect, useState } from "react";
import Graph from "./Graph";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import NewReport from "./NewReport";
import ReportPending from "./ReportPending";
import StoreReportedMost from "./StoreReportedMost";
import UserMostReported from "./UserMostReported";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { ReportContext } from "../../contexts/ReportContext";

export default function Content() {
  const [totalReport, settotalReport] = useState(0);
  const [value, onChange] = useState([new Date(), new Date()]);
  const [resolveReport, setresolveReport] = useState(0);
  const [pendingReport, setpendingReport] = useState(0);
  const [storeReport, setstoreReport] = useState(0);
  const [userReport, setuserReport] = useState(0);
  const [productReport, setproductReport] = useState(0);
  const [moreNewReport, setmoreNewReport] = useState(false);
  const [morePendingReport, setmorePendingReport] = useState(false);
  const [moreMostReportStore, setmoreMostReportStore] = useState(false);
  const [moreMostReportUser, setmoreMostReportUser] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [userType, setuserType] = useState("");
  const [userId, setUserId] = useState("");
  useEffect(() => {
    getAllReport();
    ///getDevice();
  }, []);
  const getAllReport = async () => {
    const obj = {
      from: "",
      to: "",
    };
    let params = { url: apiList.getTotalReport, body: obj };
    let response = await ApiService.postData(params);

    if (response) {
      let total =
        response.store[0].cnt + response.user[0].cnt + response.product[0].cnt;
      settotalReport(total);
      let resolve =
        response.storeresolve[0].cnt +
        response.userresolve[0].cnt +
        response.productresolve[0].cnt;
      setresolveReport(resolve);
      let pendingReport = total - resolve;
      setpendingReport(pendingReport);

      setstoreReport(response.store[0].cnt);
      setuserReport(response.user[0].cnt);
      setproductReport(response.product[0].cnt);
    }
  };

  const resolveStoreReport = async () => {
    if (!message) {
      setMessageError(true);
      return;
    }
    const obj = {
      id: userId,
      message: message,
    };
    let params = { url: apiList.resolveStoreReport, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      setShowModal(false);
      // setShowDetail("");
      alert("Report resolve successfully");
      //  getNewReport();
    }
  };
  const resolveUserReport = async () => {
    if (!message) {
      setMessageError(true);
      return;
    }
    const obj = {
      id: userId,
      message: message,
    };
    let params = { url: apiList.resolveUserReport, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      setShowModal(false);
      // setShowDetail("");
      alert("Report resolve successfully");
      // getNewReport();
    }
  };

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
                        type="text"
                        id="contact-info-icon"
                        className="form-control text-[20px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                        name="contact-icon"
                        value={searchText}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                        }}
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
                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  {/* <input
                    type="number"
                    id="contact-info-icon"
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                    name="contact-icon"
                    placeholder="16/12/2022 - 16/12/2022"
                  /> */}
                  <div>
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
            {!moreNewReport &&
              !moreMostReportStore &&
              !morePendingReport &&
              !moreMostReportUser && (
                <div className="row mt-[10px]">
                  <div className="col-md-6 col-sm-12  rounded-[6px]">
                    <div className="row">
                      <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
                        <div className="card mb-[10px] pb-[10px]">
                          <div className="p-[10px]">
                            <div className="text-[#959494] total-no-of-report text-center font-sstbold text-[18px]">
                              عدد البلاغات
                            </div>
                            <div className="text-[#AD0000] text-center font-sstbold text-[35px]">
                              {totalReport}
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
                            <div className="text-[#959494] resolved-report text-center font-sstbold text-[18px]">
                              عدد البلاغات المحلولة
                            </div>
                            <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                              {resolveReport}
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
                            <div className="text-[#959494] outstanding-report text-center font-sstbold text-[18px]">
                              عدد البلاغات المعلقة
                            </div>
                            <div className="text-[#FF9800] text-center font-sstbold text-[35px]">
                              {pendingReport}
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
                            <div className="text-[#959494] store-notification text-center font-sstbold text-[18px]">
                              بلاغات المتاجر
                            </div>
                            <div className="text-[#AD0000] text-center font-sstbold text-[35px]">
                              {storeReport}
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
                            <div className="text-[#959494] user-report text-center font-sstbold text-[18px]">
                              بلاغات المستخدمين
                            </div>
                            <div className="text-[#AD0000] text-center font-sstbold text-[35px]">
                              {userReport}
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
                            <div className="text-[#959494] product-notification text-center font-sstbold text-[18px]">
                              بلاغات المنتجات
                            </div>
                            <div className="text-[#AD0000] text-center font-sstbold text-[35px]">
                              {productReport}
                            </div>
                            <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                              5,09% أعلى من الشهر الماضي
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  col-sm-12 pl-[0px]">
                    <div className="mb-[10px] bg-white h-[423px] rounded-[6px] pb-[10px]">
                      <div className="relative">
                        <Graph />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            <ReportContext.Provider
              value={{
                moreNewReport,
                setmoreNewReport,
                morePendingReport,
                setmorePendingReport,
                moreMostReportStore,
                setmoreMostReportStore,
                moreMostReportUser,
                setmoreMostReportUser,
                showModal,
                setShowModal,
                userType,
                setuserType,
                userId,
                setUserId,
              }}
            >
              {!morePendingReport &&
                !moreMostReportStore &&
                !moreMostReportUser && (
                  <div className="row mt-[20px]">
                    <NewReport searchData={searchText} model={!showModal} />
                  </div>
                )}
              {!moreNewReport &&
                !moreMostReportStore &&
                !moreMostReportUser && (
                  <div className="row mt-[20px]">
                    <ReportPending searchData={searchText} model={!showModal} />
                  </div>
                )}

              {!moreNewReport && !morePendingReport && !moreMostReportUser && (
                <div className="row mt-[20px]">
                  <StoreReportedMost searchData={searchText} />
                </div>
              )}
              {!moreNewReport && !moreMostReportStore && !morePendingReport && (
                <div className="row mt-[20px]">
                  <UserMostReported searchData={searchText} />
                </div>
              )}
            </ReportContext.Provider>
          </section>
        </div>
      </div>
      {showModal && (
        <>
          <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[700px] bg-[#FAFAFA] outline-none focus:outline-none">
                <div class="card h-[400px] bg-[#FAFAFA] mt-[10px]">
                  <div class="card-body">
                    <form class="form form-horizontal">
                      <div class="form-body">
                        <div class="row">
                          <div class="col-md-12 self-center">
                            <div className="text-[#484848] p-[10px] text-[16px] text-center font-sstbold">
                              طريقة حل البلاغ
                            </div>
                          </div>
                          <div class="col-md-12 form-group">
                            <textarea
                              onChange={(e) => {
                                setMessage(e.target.value);
                              }}
                              style={{ height: 250 }}
                              class={
                                messageError
                                  ? "form-control h-[228px] border-1 border-[#E80000]  bg-[#EBEBEB]"
                                  : "form-control h-[228px] bg-[#EBEBEB]"
                              }
                              name="password"
                              rows="3"
                            >
                              {message}
                            </textarea>
                          </div>

                          <div class="col-sm-12 mt-[20px] d-flex justify-center">
                            <button
                              onClick={() => {
                                if (userType == "2") {
                                  resolveStoreReport();
                                } else {
                                  resolveUserReport();
                                }
                                //senSms();
                              }}
                              type="button"
                              class="btn hover:text-[#707070] send bg-[#959494] text-[24px] w-[148px] h-[58px] rounded-[6px] font-sstbold text-[#ffffff] mr-1"
                            >
                              حل
                            </button>
                            <button
                              onClick={() => {
                                setShowModal(false);
                              }}
                              type="button"
                              class="btn bg-[#959494] hover:text-[#707070] cancel text-[24px] w-[148px] h-[58px] rounded-[6px] font-sstbold text-[#ffffff]"
                            >
                              إلغاء
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
}
