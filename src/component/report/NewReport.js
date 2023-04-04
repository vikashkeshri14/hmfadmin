import React, { useEffect, useState, useContext } from "react";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import { ReportContext } from "../../contexts/ReportContext";
export default function NewReport(props) {
  const [store, setStore] = useState([]);
  const [showdetail, setShowDetail] = useState("");
  const [initialdata, setinitialdata] = useState([]);
  const [initialcall, setinitialcall] = useState(true);
  const {
    moreNewReport,
    setmoreNewReport,
    showModal,
    setShowModal,
    userType,
    setuserType,
    userId,
    setUserId,
  } = useContext(ReportContext);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  useEffect(() => {
    let calldata = initialcall;
    if (moment(props.from).unix() != moment(from).unix()) {
      calldata = true;
      setFrom(props.from);
    }
    if (moment(props.to).unix() != moment(to).unix()) {
      calldata = true;
      setTo(props.to);
    }

    if (calldata || props.model) {
      setShowDetail("");
      getNewReport();
      setinitialcall(false);
    }
    searchData(props.searchData);
    // console.log(props);
  }, [props]);
  const searchData = async (text) => {
    let search = initialdata;

    if (search.length > 0) {
      search = search.filter((data, i) => {
        if (
          data.reported_to.id == text ||
          data.reported_from.id == text ||
          data.reported_from.username.indexOf(text) >= 0 ||
          data.reported_to.username.indexOf(text) >= 0 ||
          !text
        ) {
          return data;
        }
      });
      setStore(search);
    }
  };
  const getNewReport = async () => {
    const obj = {
      from: props.from,
      to: props.to,
    };
    let params = { url: apiList.getReportDetails, body: obj };
    let response = await ApiService.postData(params);
    let storeReport = [...response.storesReported, ...response.usersReported];

    let sortReport = storeReport.sort(
      (a, b) =>
        moment(b.created_at).format("x") - moment(a.created_at).format("x")
    );
    setStore(sortReport);
    setinitialdata(storeReport);
  };

  const deleteStoreReport = async (id) => {
    const obj = {
      id: id,
    };
    let params = { url: apiList.deleteStoreReport, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      setShowDetail("");
      alert("Report deleted successfully");
      getNewReport();
    }
  };
  const deleteUserReport = async (id) => {
    const obj = {
      id: id,
    };
    let params = { url: apiList.deleteUserReport, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      setShowDetail("");
      alert("Report deleted successfully");

      getNewReport();
    }
  };
  // const resolveStoreReport = async () => {
  //   if (!message) {
  //     setMessageError(true);
  //     return;
  //   }
  //   const obj = {
  //     id: userId,
  //     message: message,
  //   };
  //   let params = { url: apiList.resolveStoreReport, body: obj };
  //   let response = await ApiService.postData(params);
  //   if (response) {
  //     setShowDetail("");
  //     alert("Report resolve successfully");
  //     getNewReport();
  //   }
  // };
  // const resolveUserReport = async () => {
  //   if (!message) {
  //     setMessageError(true);
  //     return;
  //   }
  //   const obj = {
  //     id: userId,
  //     message: message,
  //   };
  //   let params = { url: apiList.resolveUserReport, body: obj };
  //   let response = await ApiService.postData(params);
  //   if (response) {
  //     setShowDetail("");
  //     alert("Report resolve successfully");
  //     getNewReport();
  //   }
  // };
  return (
    <div className="col-md-12 col-sm-12 pl-[0px] ">
      <div className="bg-white rounded-[6px] pb-[10px]">
        <div className="flex justify-evenly">
          <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
            البلاغات الجديدة
          </div>
          <div
            onClick={() => {
              setmoreNewReport((moreNewReport) => !moreNewReport);
            }}
            className="text-[18px] w-[50%] cursor-pointer  justify-start p-[10px] font-sstbold text-right text-[#959494]"
          >
            {moreNewReport ? "خلف" : " عرض المزيد"}
          </div>
        </div>
        <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
          <div
            className={
              moreNewReport
                ? " flex flex-wrap "
                : "overflow-x-auto overflow-y-hidden flex "
            }
          >
            {store.length > 0 &&
              store.map((data, i) => {
                if (moreNewReport) {
                  return (
                    <div
                      key={i}
                      className={
                        moreNewReport
                          ? "w-[381px] flex-none mt-[10px] ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                          : "w-[381px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                      }
                    >
                      <div className="w-[100%] bg-[#F9F9F9]">
                        <div className="flex pb-[5px]">
                          <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                            <div className="flex justify-center mt-[10px]">
                              <img
                                className="w-[66px] h-[66px] rounded-[33px]"
                                src={
                                  config.imgUri +
                                  "/" +
                                  data.reported_from.user_pic
                                }
                                alt="sidebar  user image"
                              />
                            </div>
                            <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                              {data.reported_from.username}
                            </div>
                            <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                              #{data.reported_from.id}
                            </div>
                          </div>
                          <div className="w-[24%] flex justify-center pr-[5px] pl-[5px]">
                            <img
                              className="w-[76px] justify-center self-center h-[26px] rounded-[33px]"
                              src={
                                config.domainUrl +
                                "/panel/app-assets/images/arrow-red.png"
                              }
                              alt="sidebar  user image"
                            />
                          </div>
                          <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                            <div className="flex justify-center mt-[10px]">
                              <img
                                className="w-[66px] h-[66px] rounded-[33px]"
                                src={
                                  config.imgUri +
                                  "/" +
                                  data.reported_to.user_pic
                                }
                                alt="sidebar  user image"
                              />
                            </div>
                            <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                              {data.reported_to.username}
                            </div>
                            <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                              #{data.reported_to.id}
                            </div>
                          </div>
                        </div>
                        <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                          <div className="border-t-[1px]"></div>
                        </div>
                        {showdetail != i + 1 && (
                          <div className="flex mb-[10px]">
                            <div
                              onClick={() => {
                                if (showdetail) {
                                  setShowDetail("");
                                } else {
                                  setShowDetail(i + 1);
                                }
                              }}
                              className="w-[33.33%] cursor-pointer text-[#E80000] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]"
                            >
                              {data.reported_to.user_type == "1"
                                ? " بلاغ عن مستخدم"
                                : "الإبلاغ عن متجر"}
                            </div>
                            <div
                              onClick={() => {
                                if (data.report_store_id) {
                                  deleteStoreReport(data.report_store_id);
                                } else {
                                  deleteUserReport(data.report_user_id);
                                }
                              }}
                              className="w-[33.33%] cursor-pointer text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]"
                            >
                              حذف
                            </div>
                            <div
                              onClick={() => {
                                if (showdetail) {
                                  setShowDetail("");
                                } else {
                                  setShowDetail(i + 1);
                                }
                              }}
                              className="w-[33.33%] cursor-pointer text-[#484848] text-[16px] font-sstbold text-center  pb-[15px]"
                            >
                              تفاصيل أكثر
                            </div>
                          </div>
                        )}
                        {showdetail == i + 1 && (
                          <>
                            <div className="flex flex-col">
                              <div className="text-center text-[#484848] text-[16px] font-sstbold">
                                سبب البلاغ
                              </div>
                              <div className="bg-white m-[20px] h-[100px] overflow-y-auto text-[#484848] text-[16px] font-sstroman rounded-[6px] p-[10px]">
                                {data.message}
                              </div>
                              <div
                                dir="ltr"
                                className="mt-[10px] mb-[10px] text-center text-[16px] text-[#959494] font-sstbold"
                              >
                                {moment(data.created_at).format(
                                  "DD/MM/YYYY - hh:mm A"
                                )}
                              </div>
                            </div>
                            <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                              <div className="border-t-[1px]"></div>
                            </div>

                            <div className="flex mb-[10px]">
                              <div
                                onClick={() => {
                                  if (showdetail) {
                                    setShowDetail("");
                                  } else {
                                    setShowDetail(i + 1);
                                  }
                                }}
                                className="w-[33.33%] cursor-pointer text-[#E80000] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]"
                              >
                                {data.reported_to.user_type == "1"
                                  ? " بلاغ عن مستخدم"
                                  : "الإبلاغ عن متجر"}
                              </div>
                              <div
                                onClick={() => {
                                  if (data.report_store_id) {
                                    deleteStoreReport(data.report_store_id);
                                  } else {
                                    deleteUserReport(data.report_user_id);
                                  }
                                }}
                                className="w-[33.33%] cursor-pointer text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]"
                              >
                                حذف
                              </div>
                              <div
                                onClick={() => {
                                  if (showdetail) {
                                    setShowDetail("");
                                  } else {
                                    setShowDetail(i + 1);
                                  }
                                }}
                                className="w-[33.33%] cursor-pointer text-[#FF9800] text-[16px] font-sstbold text-center  pb-[15px]"
                              >
                                تفاصيل أقل
                              </div>
                            </div>

                            <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                              <div className="border-t-[1px]"></div>
                            </div>
                            <div className="flex mb-[10px]">
                              <div
                                onClick={() => {
                                  if (data.report_store_id) {
                                    setUserId(data.report_store_id);
                                    setuserType("2");
                                    setShowModal(true);
                                    // resolveStoreReport();
                                  } else {
                                    setUserId(data.report_user_id);
                                    setuserType("1");
                                    setShowModal(true);
                                    // resolveUserReport(data.report_user_id);
                                  }
                                }}
                                className="w-[50%] cursor-pointer text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]"
                              >
                                حل البلاغ
                              </div>

                              <div className="w-[50%] text-[#484848] text-[16px] font-sstbold text-center  pb-[15px]">
                                تحويل البلاغ
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                } else {
                  if (i < 5) {
                    return (
                      <div
                        key={i}
                        className="w-[381px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                      >
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src={
                                    config.imgUri +
                                    "/" +
                                    data.reported_from.user_pic
                                  }
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                {data.reported_from.username}
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #{data.reported_from.id}
                              </div>
                            </div>
                            <div className="w-[24%] flex justify-center pr-[5px] pl-[5px]">
                              <img
                                className="w-[76px] justify-center self-center h-[26px] rounded-[33px]"
                                src={
                                  config.domainUrl +
                                  "/panel/app-assets/images/arrow-red.png"
                                }
                                alt="sidebar  user image"
                              />
                            </div>
                            <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                              <div className="flex justify-center mt-[10px]">
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src={
                                    config.imgUri +
                                    "/" +
                                    data.reported_to.user_pic
                                  }
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                {data.reported_to.username}
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                #{data.reported_to.id}
                              </div>
                            </div>
                          </div>
                          <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                            <div className="border-t-[1px]"></div>
                          </div>
                          {showdetail != i + 1 && (
                            <div className="flex mb-[10px]">
                              <div
                                onClick={() => {
                                  if (showdetail) {
                                    setShowDetail("");
                                  } else {
                                    setShowDetail(i + 1);
                                  }
                                }}
                                className="w-[33.33%] cursor-pointer text-[#E80000] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]"
                              >
                                {data.reported_to.user_type == "1"
                                  ? " بلاغ عن مستخدم"
                                  : "الإبلاغ عن متجر"}
                              </div>
                              <div
                                onClick={() => {
                                  if (data.report_store_id) {
                                    deleteStoreReport(data.report_store_id);
                                  } else {
                                    deleteUserReport(data.report_user_id);
                                  }
                                }}
                                className="w-[33.33%] cursor-pointer text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]"
                              >
                                حذف
                              </div>
                              <div
                                onClick={() => {
                                  if (showdetail) {
                                    setShowDetail("");
                                  } else {
                                    setShowDetail(i + 1);
                                  }
                                }}
                                className="w-[33.33%] cursor-pointer text-[#484848] text-[16px] font-sstbold text-center  pb-[15px]"
                              >
                                تفاصيل أكثر
                              </div>
                            </div>
                          )}
                          {showdetail == i + 1 && (
                            <>
                              <div className="flex flex-col">
                                <div className="text-center text-[#484848] text-[16px] font-sstbold">
                                  سبب البلاغ
                                </div>
                                <div className="bg-white m-[20px] h-[100px] overflow-y-auto text-[#484848] text-[16px] font-sstroman rounded-[6px] p-[10px]">
                                  {data.message}
                                </div>
                                <div
                                  dir="ltr"
                                  className="mt-[10px] mb-[10px] text-center text-[16px] text-[#959494] font-sstbold"
                                >
                                  {moment(data.created_at).format(
                                    "DD/MM/YYYY - hh:mm A"
                                  )}
                                </div>
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>

                              <div className="flex mb-[10px]">
                                <div
                                  onClick={() => {
                                    if (showdetail) {
                                      setShowDetail("");
                                    } else {
                                      setShowDetail(i + 1);
                                    }
                                  }}
                                  className="w-[33.33%] cursor-pointer text-[#E80000] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]"
                                >
                                  {data.reported_to.user_type == "1"
                                    ? " بلاغ عن مستخدم"
                                    : "الإبلاغ عن متجر"}
                                </div>
                                <div
                                  onClick={() => {
                                    if (data.report_store_id) {
                                      deleteStoreReport(data.report_store_id);
                                    } else {
                                      deleteUserReport(data.report_user_id);
                                    }
                                  }}
                                  className="w-[33.33%] cursor-pointer text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]"
                                >
                                  حذف
                                </div>
                                <div
                                  onClick={() => {
                                    if (showdetail) {
                                      setShowDetail("");
                                    } else {
                                      setShowDetail(i + 1);
                                    }
                                  }}
                                  className="w-[33.33%] cursor-pointer text-[#FF9800] text-[16px] font-sstbold text-center  pb-[15px]"
                                >
                                  تفاصيل أقل
                                </div>
                              </div>

                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex mb-[10px]">
                                <div
                                  onClick={() => {
                                    if (data.report_store_id) {
                                      setUserId(data.report_store_id);
                                      setuserType("2");
                                      setShowModal(true);
                                      // resolveStoreReport();
                                    } else {
                                      setUserId(data.report_user_id);
                                      setuserType("1");
                                      setShowModal(true);
                                      // resolveUserReport(data.report_user_id);
                                    }
                                  }}
                                  className="w-[50%] cursor-pointer text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]"
                                >
                                  حل البلاغ
                                </div>

                                <div className="w-[50%] text-[#484848] text-[16px] font-sstbold text-center  pb-[15px]">
                                  تحويل البلاغ
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  }
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
