import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";

export default function Reject(props) {
  const [listItems, setListItems] = useState([]);
  const [showReceipt, setshowReceipt] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [message, setMessage] = useState("");
  const [alertShow, setAlertShow] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  const [userId, setUserId] = useState("");
  const [orderId, setOrderId] = useState("");
  const [receiptId, setReceiptId] = useState("");
  const [rejectReason, setRejectReason] = useState("");
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("loginUser"));
    setUserId(auth.id);
    getData();
  }, [props]);
  const getData = async () => {
    const obj = {
      from: props.from,
      to: props.to,
    };
    let params = { url: apiList.getAllTransfer, body: obj };
    let response = await ApiService.postData(params);
    setListItems(response.reject);
  };

  const acceptCommitment = async (orderId, receiptId) => {
    const obj = {
      receiptId: receiptId,
      orderId: orderId,
    };

    let params = { url: apiList.acceptCommitment, body: obj };
    let response = await ApiService.postData(params);
    alert("Commitment accept successfully");
  };
  const rejectCommitment = async () => {
    setButtonClick(true);
    if (!message) {
      setMessageError(true);
      setButtonClick(false);
      return;
    }
    //return;
    const obj = {
      receiptId: receiptId,
      orderId: orderId,
      message: message,
    };

    let params = { url: apiList.rejectCommitment, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      setAlertShow(false);
      setButtonClick(false);
      alert("Commitment reject successfully");
    }
  };
  return (
    <div className="pb-[300px]">
      {listItems.length > 0 ? (
        listItems.map((data, i) => {
          return (
            <div
              key={i}
              className="row p-[10px]  bg-white rounded-[6px] mr-[0px] mt-[10px]"
            >
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
                      className=" text-center "
                    >
                      <div className="flex w-full">
                        <div className="flex-col">
                          <div className=" flex justify-center ">
                            <img
                              className="w-[60px] h-[60px] rounded-[44px]"
                              src={config.imgUri + "/" + data.user_pic}
                              alt="sidebar  user image"
                            />
                          </div>
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            {data.username}
                          </div>
                          <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                            #{data.storeId}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        الفترة
                      </div>
                      <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                        {moment(data.created_at).format("DD/MM/YYYY")}
                      </div>
                      <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                        {moment(data.payment_accepted_date).format(
                          "DD/MM/YYYY"
                        )}
                      </div>
                    </td>

                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        اجمالي الربح
                      </div>
                      <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                        {data.total} ريال
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        الالتزام
                      </div>
                      <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                        {parseFloat(
                          (data.total * config.commitmentRate) / 100
                        ).toFixed(2)}{" "}
                        ريال
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        تاريخ السداد
                      </div>
                      <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                        {moment(data.paymnet_commitment[0].created_at).format(
                          "DD/MM/YYYY"
                        )}
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center relative"
                    >
                      <div
                        onClick={() => {
                          if (rejectReason) {
                            setRejectReason("");
                          } else {
                            setRejectReason(data.orderId);
                          }
                        }}
                        className="flex justify-center"
                      >
                        <div className=" text-[#E80000] text-[16px] font-sstbold ">
                          مرفوضة
                        </div>
                        <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                          <img
                            src="../panel/app-assets/images/drop-down.png"
                            className="h-[24px] mt-[3px] w-[24px]"
                          />
                        </div>
                      </div>

                      {rejectReason == data.orderId &&
                        data.paymnet_commitment.map((datacommit, i) => {
                          return (
                            <div className="absolute left-[0px] p-[20px] w-[550px]  bg-white  ">
                              <div className="flex flex-col p-[20px]">
                                <div className="text-[#484848] text-left mb-[10px] w-[100%] mt-[5px] text-[16px] font-sstbold  ">
                                  سبب الرفض
                                </div>
                                <div className=" w-[100%] mb-[30px] ">
                                  <div className=" w-full text-left p-[10px] rounded-[6px] h-[155px] bg-[#EBEBEB] text-[#484848] ">
                                    {datacommit.message}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center w-[15%] "
                      onClick={() => {
                        if (showReceipt) {
                          setshowReceipt("");
                        } else {
                          setshowReceipt(data.orderId);
                        }
                      }}
                    >
                      <div className="flex justify-center">
                        {showReceipt == data.orderId ? (
                          <div className=" text-[#60BA62] text-[16px] font-sstbold ">
                            عرض الإيصال
                          </div>
                        ) : (
                          <div className=" text-[#959494] text-[16px] font-sstbold ">
                            عرض الإيصال
                          </div>
                        )}
                        <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                          {showReceipt == data.orderId ? (
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
                      {showReceipt == data.orderId && (
                        <div className="absolute  left-[300px] p-[20px]  bg-white  ">
                          <div>
                            <img
                              src={
                                config.imgUri +
                                "/" +
                                data.paymnet_commitment[0].attachment
                              }
                              className="mt-[3px] w-[250px] h-[250px]"
                            />
                          </div>
                          <div>
                            <button
                              onClick={() => {
                                window.open(
                                  config.imgUri +
                                    "/" +
                                    data.paymnet_commitment[0].attachment
                                );
                              }}
                              className="w-[148px] h-[58px] rounded-[6px] mt-[10px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] "
                            >
                              عرض مكبر
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                    <td className=" text-center ">
                      <div className="flex justify-end">
                        <div className="flex-col">
                          <div>
                            <button
                              onClick={() => {
                                acceptCommitment(
                                  data.orderId,
                                  data.paymnet_commitment[0].id
                                );
                              }}
                              className="w-[148px] h-[58px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] "
                            >
                              قبول
                            </button>
                          </div>
                          <div>
                            <button
                              onClick={() => {
                                setAlertShow(true);
                                setOrderId(data.orderId);
                                setReceiptId(data.paymnet_commitment[0].id);
                              }}
                              className="w-[148px] h-[58px] rounded-[6px] mt-[10px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] "
                            >
                              رفض
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })
      ) : (
        <div></div>
      )}

      {alertShow && (
        <>
          <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[500px]  max-w-3xl">
              <div className="relative bg-[#FAFAFA] rounded-[6px]   shadow-[0_1px_4px_1px_rgba(21,34,50,0.2)]">
                <div className="flex flex-col p-[20px]">
                  <div className="text-[#484848] mb-[10px] w-[100%] mt-[5px] text-[16px] font-sstbold  ">
                    سبب الرفض
                  </div>
                  <div className=" w-[100%] mb-[30px] ">
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      className={
                        messageError
                          ? "border-[#E80000] border-[1px] w-full rounded-[6px] h-[155px] bg-[#EBEBEB] text-[#484848] "
                          : " w-full rounded-[6px] h-[155px] bg-[#EBEBEB] text-[#484848] "
                      }
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-center pb-[30px]">
                  <button
                    disabled={buttonClick}
                    onClick={() => {
                      rejectCommitment();
                    }}
                    className="cancellation text-[24px] rounded-[6px] text-[#ffffff] bg-[#498A4A] w-[148px] h-[58px] font-sstbold ml-[10px]"
                  >
                    إرسال
                  </button>
                  <button
                    onClick={() => setAlertShow(false)}
                    className="ban text-[24px] rounded-[6px] bg-[#959494] text-[#ffffff] w-[148px] h-[58px] font-sstbold "
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
