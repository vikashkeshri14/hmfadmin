import React, { useEffect, useState, useContext } from "react";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
export default function RequestedOrder(props) {
  const [requested, setRequested] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loadChat, setLoadChat] = useState([]);
  const [rejectReason, setRejectReason] = useState(false);
  const [reason, setReason] = useState("");
  const [chatId, setChatId] = useState("");
  const [initialdata, setinitialdata] = useState([]);
  const [initialcall, setinitialcall] = useState(true);
  const { moreRequestOrder, setmoreRequestOrder } = useContext(OrderContext);

  useEffect(() => {
    //if (initialcall) {
    getAllRequest();
    //    setinitialdata(false)
    //  }
  }, [moreRequestOrder]);
  const getAllRequest = async () => {
    let params = { url: apiList.allRequestedOrder };
    let response = await ApiService.getData(params);
    if (response.result.length > 0) {
      setRequested(response.result);
    }
  };
  return (
    <>
      <div className="flex justify-evenly">
        <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]"></div>
        <div
          onClick={() => {
            setmoreRequestOrder((moreRequestOrder) => !moreRequestOrder);
          }}
          className="text-[18px] w-[50%] cursor-pointer  justify-start p-[10px] font-sstbold text-right text-[#60BA62]"
        >
          {moreRequestOrder ? "خلف" : " عرض المزيد"}
        </div>
      </div>
      {requested.length > 0 &&
        requested.map((data, i) => {
          let status = "";
          let reject = 0;
          let pending = 0;
          let accept = 0;
          if (data.status == "2" && data.accepted_at != null) {
            status = "مرفوضة بعد القبول المبدئي";
            reject = 1;
          } else if (data.status == "2" && data.accepted_at == null) {
            status = "مرفوضة";
            reject = 1;
          } else if (data.status == "1" && data.payment_status == "1") {
            status = "مدفوعة";
          } else if (data.status == "1") {
            status = "مقبولة";
            accept = 1;
          } else {
            status = "معلق";
            pending = 1;
          }
          if (moreRequestOrder == false) {
            if (i < 10) {
              return (
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
                          className=" w-[20%] text-center "
                        >
                          <div className="flex w-full">
                            <div className="flex-col">
                              <div className=" flex justify-center ">
                                <img
                                  className="w-[60px] h-[60px] rounded-[44px]"
                                  src={config.imgUri + "/" + data.user.user_pic}
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className=" flex justify-center mt-[5px] text-[#484848] text-[16px] font-sstbold ">
                                {data.user.username}
                              </div>
                              <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                                #{data.user.id}
                              </div>
                            </div>
                            <div className="flex-col self-center justify-center">
                              <img
                                className="h-[26px] self-center w-[64px]"
                                src="../../../panel/app-assets/images/arrow.png"
                              />
                            </div>
                            <div className="flex-col">
                              <div className=" flex justify-center ">
                                <img
                                  className="w-[60px] h-[60px] rounded-[44px]"
                                  src={
                                    config.imgUri + "/" + data.store.user_pic
                                  }
                                  alt="sidebar  user image"
                                />
                              </div>
                              <div className=" flex justify-center mt-[5px] text-[#484848] text-[16px] font-sstbold ">
                                {data.store.username}
                              </div>
                              <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                                #{data.store.id}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 1 }}
                          className=" text-center "
                        >
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            {data.store.store_address}
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 1 }}
                          className=" text-center "
                        >
                          <div
                            dir="ltr"
                            className=" flex justify-center text-[#484848] text-[16px] font-sstbold "
                          >
                            {moment(data.created_at).format(
                              "DD/MM/YYYY hh:mm A"
                            )}
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 1 }}
                          className=" w-[15%] text-center "
                        >
                          <div className=" flex justify-center text-[#60BA62] text-[16px] font-sstbold ">
                            {data.total} ريال
                          </div>
                        </td>
                        <td
                          style={{ borderLeftWidth: 1 }}
                          className=" w-[15%] text-center "
                        >
                          <div
                            className={
                              reject == "1"
                                ? "flex justify-center text-[#E80000] text-[20px] font-sstbold "
                                : pending == "1"
                                ? "flex justify-center text-[#FF9800] text-[20px] font-sstbold "
                                : accept == "1"
                                ? "flex justify-center text-[#AAD0AB] text-[20px] font-sstbold "
                                : "flex justify-center text-[#60BA62] text-[20px] font-sstbold "
                            }
                          >
                            {status}
                          </div>
                        </td>
                        {reject == "1" && (
                          <td
                            style={{ borderLeftWidth: 1 }}
                            className="  text-center "
                          >
                            <div
                              onClick={() => {
                                if (data.cancelReason.length > 0) {
                                  //  console.log()
                                  setReason(data.cancelReason[0].message);
                                  setRejectReason(
                                    (rejectReason) => !rejectReason
                                  );
                                } else {
                                  alert("Empty Reason!!");
                                }
                              }}
                              className="flex-col justify-center"
                            >
                              <div className=" text-[#959494] text-[16px] font-sstbold ">
                                سبب الرفض
                              </div>
                              <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                                <img
                                  src="../panel/app-assets/images/dropdown.png"
                                  className="h-[24px] mt-[3px] w-[24px]"
                                />
                              </div>
                            </div>
                          </td>
                        )}
                        <td className="w-[25%] relative  text-center ">
                          <div
                            onClick={() => {
                              if (data.loadChat.length > 0) {
                                if (chatId) {
                                  setChatId("");
                                } else {
                                  setChatId(data.id);
                                }
                              } else {
                                alert("Empty chat");
                              }
                            }}
                            className="flex justify-end cursor-pointer "
                          >
                            <div
                              className={
                                chatId == data.id
                                  ? " text-[#60BA62] text-[16px] font-sstbold "
                                  : " text-[#959494] text-[16px] font-sstbold "
                              }
                            >
                              عرض المحادثة
                            </div>
                            <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                              {chatId == data.id ? (
                                <img
                                  src={
                                    config.domainUrl +
                                    "/panel/app-assets/images/up.png"
                                  }
                                  className="h-[24px] mt-[3px] w-[24px]"
                                />
                              ) : (
                                <img
                                  src={
                                    config.domainUrl +
                                    "/panel/app-assets/images/dropdown.png"
                                  }
                                  className="h-[24px] mt-[3px] w-[24px]"
                                />
                              )}
                            </div>
                          </div>
                          <div
                            className={
                              chatId == data.id
                                ? "flex shadow zindex-1 left-[20px] absolute bg-[#ffffff] rounded-[6px] flex-col w-[400px] h-[450px] overflow-y-auto mt-[10px]"
                                : "flex shadow hidden left-[20px] absolute bg-[#ffffff] rounded-[6px] flex-col w-[400px] h-[450px] overflow-y-auto mt-[10px]"
                            }
                          >
                            {data.orderItem.map((items, k) => {
                              return (
                                <div key={k} className="flex flex-row  mt-2">
                                  <div className="basis-[68%] flex flex-row justify-start">
                                    <div className="pl-1 pr-1 flex text-left text-[15px] ">
                                      {items.product_name}
                                    </div>

                                    <div className="text-left text-[15px] ">
                                      X
                                    </div>
                                    <div className="text-left text-[15px] pl-1 pr-1">
                                      {items.quantity}
                                    </div>
                                  </div>

                                  <div className="basis-[30%] flex justify-end flex-row">
                                    <div className="pl-1  flex text-[#484848] text-left text-[15px] ">
                                      {items.price * items.quantity}
                                    </div>
                                    <div className=" flex font-sstroman text-right text-[#484848] text-[15px] ">
                                      ريال
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            <div className="flex flex-row  border-dashed border-t-[2px] border-[#EBEBEB] mt-2 mb-[15px]">
                              <div className="basis-[68%] flex mt-[10px] flex-row">
                                <div className="pl-1 text-[#484848] font-sstmedium pr-1 flex text-left text-[15px] ">
                                  المجموع
                                </div>
                              </div>
                              <div className="basis-[30%] mt-[10px] flex justify-end flex-row">
                                <div className="pl-1  text-[#484848] flex text-right text-[15px] ">
                                  {data.total}
                                </div>
                                <div className=" text-right text-[#484848] flex text-[15px] ">
                                  ريال
                                </div>
                              </div>
                            </div>

                            {data.loadChat.map((chatVal, l) => {
                              {
                                return data.user_id == chatVal.receiverId ? (
                                  <div
                                    className="py-2 px-2 bg-[#E9F2E9] flex flex-col self-start rounded-[27px] h-min-[69px] m-1 ml-[30px] mb-3 w-[70%] relative"
                                    key={l}
                                  >
                                    <img
                                      className="w-[39px] h-[27px] absolute bottom-[-1px] right-[-12px]"
                                      src={
                                        config.domainUrl +
                                        "/panel/app-assets/images/mesreceive.png"
                                      }
                                    />
                                    <div className="text-[#484848] leading-[20px] text-left text-[14px] pl-[10px] pr-[10px] mb-3">
                                      {chatVal.message}
                                    </div>
                                    <div className="flex-row flex justify-end pr-[20px]">
                                      <div className="pl-[10px] ">
                                        <div className="text-[10px] leading-[20px] text-[#959494] text-right">
                                          {moment(chatVal.created_at).fromNow()}
                                        </div>
                                      </div>
                                      <div>
                                        {chatVal.is_seen == 0 ? (
                                          <img
                                            className="h-[7px] w-[10px] mt-[8px]"
                                            src={
                                              config.domainUrl +
                                              "/panel/app-assets/images/unread.png"
                                            }
                                          />
                                        ) : (
                                          <img
                                            className="h-[7.17px] w-[14.99px] mt-[8px]"
                                            src={
                                              config.domainUrl +
                                              "/panel/app-assets/images/read.png"
                                            }
                                          />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <div
                                    key={i}
                                    className="py-2 px-2 bg-[#F7EAD7] flex flex-col self-end rounded-[27px] h-min-[69px] m-1 mr-[30px] mb-3 w-[70%] relative"
                                  >
                                    <img
                                      className="w-[39px] h-[27px]  absolute bottom-[-2px] left-[-12px]"
                                      src={
                                        config.domainUrl +
                                        "/panel/app-assets/images/messend.png"
                                      }
                                    />
                                    <div className="text-[#484848] leading-[20px] text-left text-[14px] pl-[10px] pr-[10px] mb-3">
                                      {chatVal.message}
                                    </div>
                                    <div className="flex flex-row justify-end pr-[20px]">
                                      <div className="pl-[10px] flex">
                                        <div className="text-[10px] pr-[10px] leading-[20px] text-[#959494] text-left">
                                          {moment(chatVal.created_at).fromNow()}
                                        </div>
                                      </div>
                                      <div className=" flex">
                                        {chatVal.is_seen == 0 ? (
                                          <img
                                            className="h-[7px] w-[10px] mt-[8px]"
                                            src={
                                              config.domainUrl +
                                              "/panel/app-assets/images/unread.png"
                                            }
                                          />
                                        ) : (
                                          <img
                                            className="h-[7.17px] w-[14.99px] mt-[8px]"
                                            src={
                                              config.domainUrl +
                                              "/panel/app-assets/images/read.png"
                                            }
                                          />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            })}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            }
          } else {
            return (
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
                        className=" w-[20%] text-center "
                      >
                        <div className="flex w-full">
                          <div className="flex-col">
                            <div className=" flex justify-center ">
                              <img
                                className="w-[60px] h-[60px] rounded-[44px]"
                                src={config.imgUri + "/" + data.user.user_pic}
                                alt="sidebar  user image"
                              />
                            </div>
                            <div className=" flex justify-center mt-[5px] text-[#484848] text-[16px] font-sstbold ">
                              {data.user.username}
                            </div>
                            <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                              #{data.user.id}
                            </div>
                          </div>
                          <div className="flex-col self-center justify-center">
                            <img
                              className="h-[26px] self-center w-[64px]"
                              src="../../../panel/app-assets/images/arrow.png"
                            />
                          </div>
                          <div className="flex-col">
                            <div className=" flex justify-center ">
                              <img
                                className="w-[60px] h-[60px] rounded-[44px]"
                                src={config.imgUri + "/" + data.store.user_pic}
                                alt="sidebar  user image"
                              />
                            </div>
                            <div className=" flex justify-center mt-[5px] text-[#484848] text-[16px] font-sstbold ">
                              {data.store.username}
                            </div>
                            <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                              #{data.store.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        style={{ borderLeftWidth: 1 }}
                        className=" text-center "
                      >
                        <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                          {data.store.store_address}
                        </div>
                      </td>
                      <td
                        style={{ borderLeftWidth: 1 }}
                        className=" text-center "
                      >
                        <div
                          dir="ltr"
                          className=" flex justify-center text-[#484848] text-[16px] font-sstbold "
                        >
                          {moment(data.created_at).format("DD/MM/YYYY hh:mm A")}
                        </div>
                      </td>
                      <td
                        style={{ borderLeftWidth: 1 }}
                        className=" w-[15%] text-center "
                      >
                        <div className=" flex justify-center text-[#60BA62] text-[16px] font-sstbold ">
                          {data.total} ريال
                        </div>
                      </td>
                      <td
                        style={{ borderLeftWidth: 1 }}
                        className=" w-[15%] text-center relative "
                      >
                        <div
                          className={
                            reject == "1"
                              ? "flex justify-center text-[#E80000] text-[20px] font-sstbold "
                              : pending == "1"
                              ? "flex justify-center text-[#FF9800] text-[20px] font-sstbold "
                              : accept == "1"
                              ? "flex justify-center text-[#AAD0AB] text-[20px] font-sstbold "
                              : "flex justify-center text-[#60BA62] text-[20px] font-sstbold "
                          }
                        >
                          {status}
                        </div>
                      </td>
                      {reject == "1" && (
                        <td
                          style={{ borderLeftWidth: 1 }}
                          className="  text-center "
                        >
                          <div
                            onClick={() => {
                              if (data.cancelReason.length > 0) {
                                //  console.log()
                                setReason(data.cancelReason[0].message);
                                setRejectReason(
                                  (rejectReason) => !rejectReason
                                );
                              } else {
                                alert("Empty Reason!!");
                              }
                            }}
                            className="flex-col justify-center"
                          >
                            <div className=" text-[#959494] text-[16px] font-sstbold ">
                              سبب الرفض
                            </div>
                            <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                              <img
                                src="../panel/app-assets/images/dropdown.png"
                                className="h-[24px] mt-[3px] w-[24px]"
                              />
                            </div>
                          </div>
                        </td>
                      )}
                      <td className="w-[25%]  text-center ">
                        <div
                          onClick={() => {
                            if (data.loadChat.length > 0) {
                              if (chatId) {
                                setChatId("");
                              } else {
                                setChatId(data.id);
                              }
                            } else {
                              alert("Empty chat");
                            }
                          }}
                          className="flex justify-end cursor-pointer "
                        >
                          <div
                            className={
                              chatId == data.id
                                ? " text-[#60BA62] text-[16px] font-sstbold "
                                : " text-[#959494] text-[16px] font-sstbold "
                            }
                          >
                            عرض المحادثة
                          </div>
                          <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                            {chatId == data.id ? (
                              <img
                                src={
                                  config.domainUrl +
                                  "/panel/app-assets/images/up.png"
                                }
                                className="h-[24px] mt-[3px] w-[24px]"
                              />
                            ) : (
                              <img
                                src={
                                  config.domainUrl +
                                  "/panel/app-assets/images/dropdown.png"
                                }
                                className="h-[24px] mt-[3px] w-[24px]"
                              />
                            )}
                          </div>
                        </div>
                        <div
                          className={
                            chatId == data.id
                              ? "flex shadow  left-[20px] absolute bg-[#ffffff] rounded-[6px] flex-col w-[400px] h-[450px] overflow-y-auto mt-[10px]"
                              : "flex shadow hidden left-[20px] absolute bg-[#ffffff] rounded-[6px] flex-col w-[400px] h-[450px] overflow-y-auto mt-[10px]"
                          }
                        >
                          {data.orderItem.map((items, k) => {
                            return (
                              <div key={k} className="flex flex-row  mt-2">
                                <div className="basis-[68%] flex flex-row justify-start">
                                  <div className="pl-1 pr-1 flex text-left text-[15px] ">
                                    {items.product_name}
                                  </div>

                                  <div className="text-left text-[15px] ">
                                    X
                                  </div>
                                  <div className="text-left text-[15px] pl-1 pr-1">
                                    {items.quantity}
                                  </div>
                                </div>

                                <div className="basis-[30%] flex justify-end flex-row">
                                  <div className="pl-1  flex text-[#484848] text-left text-[15px] ">
                                    {items.price * items.quantity}
                                  </div>
                                  <div className=" flex font-sstroman text-right text-[#484848] text-[15px] ">
                                    ريال
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                          <div className="flex flex-row  border-dashed border-t-[2px] border-[#EBEBEB] mt-2 mb-[15px]">
                            <div className="basis-[68%] flex mt-[10px] flex-row">
                              <div className="pl-1 text-[#484848] font-sstmedium pr-1 flex text-left text-[15px] ">
                                المجموع
                              </div>
                            </div>
                            <div className="basis-[30%] mt-[10px] flex justify-end flex-row">
                              <div className="pl-1  text-[#484848] flex text-right text-[15px] ">
                                {data.total}
                              </div>
                              <div className=" text-right text-[#484848] flex text-[15px] ">
                                ريال
                              </div>
                            </div>
                          </div>

                          {data.loadChat.map((chatVal, l) => {
                            {
                              return data.user_id == chatVal.receiverId ? (
                                <div
                                  className="py-2 px-2 bg-[#E9F2E9] flex flex-col self-start rounded-[27px] h-min-[69px] m-1 ml-[30px] mb-3 w-[70%] relative"
                                  key={l}
                                >
                                  <img
                                    className="w-[39px] h-[27px] absolute bottom-[-1px] right-[-12px]"
                                    src={
                                      config.domainUrl +
                                      "/panel/app-assets/images/mesreceive.png"
                                    }
                                  />
                                  <div className="text-[#484848] leading-[20px] text-left text-[14px] pl-[10px] pr-[10px] mb-3">
                                    {chatVal.message}
                                  </div>
                                  <div className="flex-row flex justify-end pr-[20px]">
                                    <div className="pl-[10px] ">
                                      <div className="text-[10px] leading-[20px] text-[#959494] text-right">
                                        {moment(chatVal.created_at).fromNow()}
                                      </div>
                                    </div>
                                    <div>
                                      {chatVal.is_seen == 0 ? (
                                        <img
                                          className="h-[7px] w-[10px] mt-[8px]"
                                          src={
                                            config.domainUrl +
                                            "/panel/app-assets/images/unread.png"
                                          }
                                        />
                                      ) : (
                                        <img
                                          className="h-[7.17px] w-[14.99px] mt-[8px]"
                                          src={
                                            config.domainUrl +
                                            "/panel/app-assets/images/read.png"
                                          }
                                        />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  key={i}
                                  className="py-2 px-2 bg-[#F7EAD7] flex flex-col self-end rounded-[27px] h-min-[69px] m-1 mr-[30px] mb-3 w-[70%] relative"
                                >
                                  <img
                                    className="w-[39px] h-[27px]  absolute bottom-[-2px] left-[-12px]"
                                    src={
                                      config.domainUrl +
                                      "/panel/app-assets/images/messend.png"
                                    }
                                  />
                                  <div className="text-[#484848] leading-[20px] text-left text-[14px] pl-[10px] pr-[10px] mb-3">
                                    {chatVal.message}
                                  </div>
                                  <div className="flex flex-row justify-end pr-[20px]">
                                    <div className="pl-[10px] flex">
                                      <div className="text-[10px] pr-[10px] leading-[20px] text-[#959494] text-left">
                                        {moment(chatVal.created_at).fromNow()}
                                      </div>
                                    </div>
                                    <div className=" flex">
                                      {chatVal.is_seen == 0 ? (
                                        <img
                                          className="h-[7px] w-[10px] mt-[8px]"
                                          src={
                                            config.domainUrl +
                                            "/panel/app-assets/images/unread.png"
                                          }
                                        />
                                      ) : (
                                        <img
                                          className="h-[7.17px] w-[14.99px] mt-[8px]"
                                          src={
                                            config.domainUrl +
                                            "/panel/app-assets/images/read.png"
                                          }
                                        />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          })}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
        })}
      {rejectReason && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-[10px] flex-auto">
                  <div class="flex flex-col mt-[10px]">
                    <div class="flex-col justify-end mb-1">
                      <div class="mr-2 py-1 px-2 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                        {reason}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end  border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-1 py-1 text-sm outline-none focus:outline-none  ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setRejectReason(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
