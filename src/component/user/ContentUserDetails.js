import React, { useEffect, useState } from "react";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import Conversation from "./Conversation";
import InfoIncomingReport from "./InfoIncomingReport";
import InfoOutgoingReport from "./InfoOutgoingReport";
import OrderHistory from "./OrderHistory";
import { NavLink, useParams, Link, useNavigate } from "react-router-dom";

import { DateRange } from "react-date-range";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
export default function ContentUserDetails() {
  const [value, onChange] = useState([new Date(), new Date()]);
  const [orderHistory, setOrderHistory] = useState(false);
  const [infoOutgoingReport, setInfoOutgoingReport] = useState(false);
  const [ban, showBan] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [perblocked, setPerBlocked] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [infoIncomingReport, setInfoIncomingReport] = useState(false);
  const [infoShow, setInfoShow] = useState(false);
  const [conversation, setConversation] = useState(false);
  const [storeDetails, setStoreDetails] = useState(null);
  const [userId, setUserId] = useState("");
  const [minheight, setMinHeight] = useState(false);

  const [banMessage, setbanMessage] = useState("");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    getUserById(params.slug);
    setUserId(params.slug);
  }, [params.slug]);
  const getUserById = async (id) => {
    const obj = {
      userId: id,
    };
    let params = { url: apiList.getUserById, body: obj };
    let response = await ApiService.postData(params);
    if (response.result.length > 0) {
      setStoreDetails(response.result[0]);
    }
  };
  const deleteAccount = async () => {
    const obj = {
      userId: userId
    };

    let params = { url: apiList.deleteAccount, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      alert("User deleted successfully");
      setDeleteShow(false)
    }
  }

  const cancelBan = async () => {
    const obj = {
      userId: userId
    };

    let params = { url: apiList.cancelban, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      alert("User ban successfully cancel");
      showBan(false)
    }
  }

  const perBan = async () => {
    if (!banMessage) {
      alert("please enter the message");
      return
    }
    const obj = {
      userId: userId,
      message: banMessage
    };

    let params = { url: apiList.ban, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      alert("User successfully ban")
      setBlocked(false);
      setbanMessage("")
      showBan(false)
    }
  }

  const tempBan = async () => {
    if (!banMessage) {
      alert("please enter the message");
      return
    }
    const obj = {
      userId: userId,
      message: banMessage,
      from: moment(state[0].startDate).format("YYYY-MM-DD"),
      to: moment(state[0].endDate).format("YYYY-MM-DD")
    };

    let params = { url: apiList.tempbanUser, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      alert("User successfully ban")
      setPerBlocked(false);
      setMinHeight(false);
      setbanMessage("")
      showBan(false)
    }


  }
  return (
    <div className="app-content content ">
      <div className="content-overlay"></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section id="store-analytics">
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

              <div className="w-[24%]  dashboard-users mr-[10px]">
                <div className="position-relative has-icon-right">
                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
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
            <div className="  mt-[10px]">
              <div className=" flex-col bg-white rounded-[6px] ">
                <div className="flex overflow-x-auto mb-[60px] overflow-y-hidden">
                  <div className="flex-none p-[15px]">
                    <div className="flex  h-[66px] pl-[10px] border-l-[1px]">
                      <div className="">
                        <img
                          src={
                            storeDetails != null &&
                            config.imgUri + "/" + storeDetails.user_pic
                          }
                          className="h-[64px] w-[64px] rounded-[32px]"
                        />
                      </div>
                      <div className="flex-col mr-[15px]">
                        <div className="flex">
                          <div className="text-[#484848] text-[16px] font-sstbold">
                            {storeDetails != null && storeDetails.username}
                          </div>
                        </div>
                        <div className="flex mt-[5px]">
                          <div className="text-[#959494] text-[16px] font-sstroman ">
                            #{storeDetails != null && storeDetails.id}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-none p-[15px] pr-[0px]">
                    <div className="flex-col h-[66px]  pl-[10px] border-l-[1px]">
                      <div className="flex justify-center">
                        <img
                          src={
                            config.domainUrl +
                            "/panel/app-assets/images/frame.png"
                          }
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#959494] text-[16px] font-sstbold">
                        قبل ساعة
                      </div>
                    </div>
                  </div>
                  <div className="flex-none p-[15px] pr-[0px]">
                    <div className="flex-col  h-[66px] pl-[10px] border-l-[1px]">
                      <div className="flex justify-center">
                        <img
                          src={
                            config.domainUrl +
                            "/panel/app-assets/images/location.png"
                          }
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#959494] text-[16px] font-sstbold">
                        {storeDetails != null && storeDetails.store_address
                          ? storeDetails.store_address
                          : "Riyadh"}
                      </div>
                    </div>
                  </div>
                  <div className="flex-none cursor-pointer	 p-[15px] pr-[0px]">
                    <div className="flex-col  h-[66px] pl-[10px] border-l-[1px]">
                      <div className="flex justify-center">
                        <img
                          src={
                            config.domainUrl +
                            "/panel/app-assets/images/phone.png"
                          }
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#484848] text-[16px] font-sstbold">
                        {storeDetails != null && storeDetails.mobile
                          ? storeDetails.mobile
                          : "--"}
                      </div>
                    </div>
                  </div>
                  <div className="flex-none cursor-pointer p-[15px] pr-[0px]">
                    <div
                      onClick={() => {
                        setOrderHistory((orderHistory) => !orderHistory);
                        setConversation(false);

                        setInfoIncomingReport(false);
                        setInfoOutgoingReport(false);
                        setInfoShow(false);
                      }}
                      className="flex-col  h-[66px] pl-[10px] border-l-[1px]"
                    >
                      <div className="flex justify-center">
                        {orderHistory ? (
                          <img
                            src={
                              config.domainUrl +
                              "/panel/app-assets/images/order-history-green.png"
                            }
                            className="h-[24px] self-center w-[24px]"
                          />
                        ) : (
                          <img
                            src={
                              config.domainUrl +
                              "/panel/app-assets/images/order-history.png"
                            }
                            className="h-[24px] self-center w-[24px]"
                          />
                        )}
                      </div>
                      <div
                        className={
                          orderHistory
                            ? "text-[#60BA62] text-[16px] font-sstbold"
                            : "text-[#484848] text-[16px] font-sstbold"
                        }
                      >
                        سجل الطلبات
                      </div>
                    </div>
                  </div>
                  <div className="flex-none cursor-pointer p-[15px] pr-[0px]">
                    <div
                      onClick={() => {
                        setInfoShow((infoShow) => !infoShow);
                      }}
                      className="flex-col  h-[66px] pl-[10px] border-l-[1px]"
                    >
                      {infoOutgoingReport || infoIncomingReport ? (
                        <div className="flex justify-center">
                          <img
                            src={
                              config.domainUrl +
                              "/panel/app-assets/images/info-green.png"
                            }
                            className="h-[24px] self-center w-[24px]"
                          />
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <img
                            src={
                              config.domainUrl +
                              "/panel/app-assets/images/info-grey.png"
                            }
                            className="h-[24px] self-center w-[24px]"
                          />
                        </div>
                      )}
                      <div
                        className={
                          infoOutgoingReport || infoIncomingReport
                            ? "text-[#60BA62] text-[16px] font-sstbold"
                            : "text-[#484848] text-[16px] font-sstbold"
                        }
                      >
                        سجل البلاغات
                      </div>
                      <div
                        class={
                          infoShow
                            ? "absolute shadow w-[289px] mt-[-10px] mr-[-60px] z-50 bg-white"
                            : "absolute hidden shadow w-[289px] mt-[-10px] left-[90px] z-50 bg-white"
                        }
                      >
                        <div
                          onClick={(e) => {
                            setInfoOutgoingReport(true);
                            setInfoIncomingReport(false);
                            setConversation(false);
                            setInfoShow((infoShow) => !infoShow);
                            setOrderHistory(false);
                            e.stopPropagation();
                          }}
                          className="p-[10px] communication text-[#484848] text-[18px] font-sstbold text-center"
                        >
                          بلاغات صادرة
                        </div>
                        <div className="dropdown-divider mb-0"></div>
                        <div
                          onClick={(e) => {
                            setInfoIncomingReport(true);
                            setInfoOutgoingReport(false);
                            setConversation(false);
                            setInfoShow((infoShow) => !infoShow);
                            setOrderHistory(false);
                            e.stopPropagation();
                          }}
                          className=" p-[10px] text-[#484848] text-[18px] font-sstbold incoming-report text-center"
                        >
                          بلاغات واردة
                        </div>
                        <div className="dropdown-divider mb-0"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-none cursor-pointer p-[15px] pr-[0px]">
                    <div
                      onClick={() => {
                        setConversation(true);
                        setInfoIncomingReport(false);
                        setInfoOutgoingReport(false);
                        setInfoShow(false);
                        setOrderHistory(false);
                      }}
                      className="flex-col  h-[66px] pl-[10px] "
                    >
                      <div className="flex justify-center">
                        {conversation ? (
                          <img
                            src={
                              config.domainUrl +
                              "/panel/app-assets/images/chat-green.png"
                            }
                            className="h-[24px] self-center w-[24px]"
                          />
                        ) : (
                          <img
                            src={
                              config.domainUrl +
                              "/panel/app-assets/images/chat.png"
                            }
                            className="h-[24px] self-center w-[24px]"
                          />
                        )}
                      </div>
                      <div
                        className={
                          conversation
                            ? "text-[#60BA62] text-[16px] font-sstbold"
                            : "text-[#484848] text-[16px] font-sstbold"
                        }
                      >
                        سجل المحادثات
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-[15px] pr-[0px]">
                    <div className=" self-center flex justify-end h-[66px] pl-[10px]">
                      <div onClick={() => {
                        showBan((ban) => !ban);
                      }} className="flex justify-end cursor-pointer mr-[20px] self-center">
                        {storeDetails != null && (storeDetails.status == 0 || storeDetails.status == 2) ? <img
                          src={
                            config.domainUrl +
                            "/panel/app-assets/images/warning-red.png"
                          }
                          className="h-[24px] w-[24px]"
                        /> : <img
                          src={
                            config.domainUrl +
                            "/panel/app-assets/images/danger.png"
                          }
                          className="h-[24px] w-[24px]"
                        />}

                      </div>
                      <div
                        onClick={() => {
                          setDeleteShow((deleteShow) => !deleteShow);
                          setBlocked(false);
                          setPerBlocked(false);
                        }}
                        className="flex justify-end cursor-pointer mr-[20px] self-center"
                      >
                        {storeDetails != null && (storeDetails.status == 3) ?
                          <img
                            src={
                              config.domainUrl +
                              "/panel/app-assets/images/bin.png"
                            }
                            className="h-[24px] w-[24px]"
                          /> : <img
                            src={
                              config.domainUrl +
                              "/panel/app-assets/images/trash.png"
                            }
                            className="h-[24px] w-[24px]"
                          />}
                      </div>
                    </div>
                    <div
                      className={
                        ban
                          ? "absolute shadow w-[332px] mt-[0px] left-[90px] z-50 bg-white"
                          : "relative hidden shadow w-[289px] mt-[-10px] left-[90px] z-50 bg-white"
                      }
                    >
                      <div
                        onClick={() => {
                          setBlocked(false);
                          setPerBlocked(true);
                          setDeleteShow(false);
                          setMinHeight(true);
                        }}
                        className="p-[10px] temprorary-ban text-[#484848] text-[18px] font-sstbold text-center"
                      >
                        حظر مؤقت
                      </div>
                      <div className="dropdown-divider mb-0"></div>
                      <div
                        onClick={() => {
                          setPerBlocked(false);
                          setBlocked(true);
                          setDeleteShow(false);
                        }}
                        className=" p-[10px] permanent-ban text-[#484848] text-[18px] font-sstbold text-center"
                      >
                        حظر دائم
                      </div>
                      <div className="dropdown-divider mb-0"></div>
                      <div
                        onClick={() => {
                          cancelBan();
                        }}
                        className="cancel-ban p-[10px] text-[#484848] text-[18px] font-sstbold incoming-conversation text-center"
                      >
                        إلغاء الحظر
                      </div>
                      <div className="dropdown-divider mb-0"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="userDetails" className={minheight ? "min-h-[600px]" : "min-h-[400px]"}>
            {orderHistory && <OrderHistory userId={userId} />}
            {infoOutgoingReport && <InfoOutgoingReport userId={userId} />}
            {infoIncomingReport && <InfoIncomingReport userId={userId} />}
            {conversation && <Conversation userId={userId} />}
          </section>
        </div>
      </div>
      {blocked && (
        <>
          <div className="initial">
            <div className="absolute   top-[10%] left-1/2 transform -translate-x-1/2   w-[500px]  ">
              <div className="relative bg-[#FAFAFA] rounded-lg shadow dark:bg-gray-700">
                <h3 className="text-[24px] pt-[20px] font-sstbold text-[#484848] text-center">
                  هل أنت متأكد من حظر
                </h3>

                <div className="flex justify-center mt-[10px]">
                  <img
                    className="w-[68px] self-center h-[68px] rounded-[34px]"
                    src={
                      storeDetails != null &&
                      config.imgUri + "/" + storeDetails.user_pic
                    }
                  />
                </div>
                <div className="text-[#484848] text-[20px] font-sstbold text-center">
                  {storeDetails != null && storeDetails.username}
                </div>
                <div className="text-[#959494] mt-[5px] text-[20px] font-sstroman text-center">
                  # {storeDetails != null && storeDetails.id}
                </div>
                <div className="text-[#484848] mt-[5px] text-[20px] font-sstbold mr-[30px] mb-[5px] ">
                  سبب الحظر
                </div>
                <fieldset className=" mb-[30px] ml-[30px] mr-[30px]">
                  <textarea onChange={(e) => {
                    setbanMessage(e.target.value)
                  }} className="w-full rounded-[6px] h-[155px] bg-[#EBEBEB] text-[#484848] "></textarea>
                </fieldset>
                <div className="flex justify-center pb-[30px]">
                  <button
                    onClick={() => {
                      perBan();
                    }}
                    className="ban text-[24px] ml-[10px] rounded-[6px] bg-[#959494] text-[#ffffff] w-[148px] h-[58px] font-sstbold ">
                    حظر
                  </button>
                  <button
                    onClick={() => {
                      setBlocked(false);
                      setbanMessage("")
                    }}
                    className="cancellation text-[24px] rounded-[6px] text-[#ffffff] bg-[#959494] w-[148px] h-[58px] font-sstbold "
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {perblocked && (
        <>
          <div className="initial zindex-1">
            <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2   w-[500px]  ">
              <div className="relative bg-[#FAFAFA] rounded-lg shadow dark:bg-gray-700">
                <h3 className="text-[24px] pt-[20px] font-sstbold text-[#484848] text-center">
                  هل أنت متأكد من حظر
                </h3>

                <div className="flex justify-center mt-[10px]">
                  <img
                    className="w-[68px] self-center h-[68px] rounded-[34px]"
                    src={
                      storeDetails != null &&
                      config.imgUri + "/" + storeDetails.user_pic
                    }
                  />
                </div>
                <div className="text-[#484848] text-[20px] font-sstbold text-center">
                  {storeDetails != null && storeDetails.username}
                </div>
                <div className="text-[#959494] mt-[5px] text-[20px] font-sstroman text-center">
                  # {storeDetails != null && storeDetails.id}
                </div>
                <div className="mr-[30px] ml-[30px]"></div>
                <div dir="ltr" className="flex justify-center">
                  <DateRange

                    editableDateInputs={true}
                    onChange={(item) => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                  />
                </div>
                <div className="text-[#484848] mt-[5px] ml-[10px] text-[20px] font-sstbold mr-[30px] mb-[5px] ">
                  سبب الحظر
                </div>
                <fieldset className=" mb-[30px] ml-[30px] mr-[30px]">
                  <textarea
                    onChange={(e) => {
                      setbanMessage(e.target.value)
                    }}
                    className="w-full rounded-[6px] h-[155px] bg-[#EBEBEB] text-[#484848] ">

                  </textarea>
                </fieldset>

                <div className="flex justify-center pb-[30px]">
                  <button onClick={() => {
                    tempBan();
                  }} className="ban text-[24px] ml-[20px] rounded-[6px] bg-[#959494] text-[#ffffff] w-[148px] h-[58px] font-sstbold ">
                    حظر
                  </button>
                  <button
                    onClick={() => {
                      setPerBlocked(false);
                      setMinHeight(false);
                      setbanMessage("")
                    }}
                    className="cancellation text-[24px] rounded-[6px] text-[#ffffff] bg-[#959494] w-[148px] h-[58px] font-sstbold ml-[10px]"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {deleteShow && (
        <>
          <div className="initial">
            <div className="absolute  top-[30%] left-1/2 transform -translate-x-1/2   w-[500px]  ">
              <div className="relative bg-[#FAFAFA] rounded-lg shadow dark:bg-gray-700">
                <h3 className="text-[24px] pt-[20px] font-sstbold text-[#484848] text-center">
                  هل أنت متأكد من حذف
                </h3>

                <div className="flex justify-center mt-[10px]">
                  <img
                    className="w-[68px] self-center h-[68px] rounded-[34px]"
                    src={
                      storeDetails != null &&
                      config.imgUri + "/" + storeDetails.user_pic
                    }
                  />
                </div>
                <div className="text-[#484848] text-[20px] font-sstbold text-center">
                  {storeDetails.username}                </div>
                <div className="text-[#959494] mt-[5px] text-[20px] font-sstroman text-center">
                  #{storeDetails.id}
                </div>
                <div className="mr-[30px] ml-[30px]"></div>

                <div className="flex justify-center mt-[30px] pb-[30px]">
                  <button onClick={() => {
                    deleteAccount()
                  }} className="ban text-[24px] rounded-[6px] bg-[#959494] ml-[10px] text-[#ffffff] w-[148px] h-[58px] font-sstbold ">
                    حذف
                  </button>
                  <button
                    onClick={() => setDeleteShow(false)}
                    className="cancellation text-[24px] rounded-[6px] text-[#ffffff] bg-[#959494] w-[148px] h-[58px] font-sstbold "
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
