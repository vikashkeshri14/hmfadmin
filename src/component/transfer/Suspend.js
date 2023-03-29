import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";

export default function Suspend() {
  const [listItems, setListItems] = useState([]);
  const [showReceipt, setshowReceipt] = useState("");
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("loginUser"));
    setUserId(auth.id);
    getData();
  }, []);
  const getData = async () => {
    let params = { url: apiList.getAllTransfer };
    let response = await ApiService.getData(params);
    setListItems(response.result);
  };

  const acceptCommitment = async (orderId, receiptId) => {
    const obj = {
      receiptId: receiptId,
      orderId: orderId,
    };

    let params = { url: apiList.acceptCommitment, body: obj };
    let response = await ApiService.postData(params);
    alert("commitment accept successfully");
  };
  return (
    <div className="pb-[300px]">
      {listItems.length > 0 ? (
        listItems.map((data, i) => {
          return (
            <div className="row p-[10px]   bg-white rounded-[6px] mr-[0px] mt-[10px]">
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
                        ).toFixed(2)}
                        ريال
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center  "
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
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#FF9800] text-[20px] font-sstbold ">
                        معلقة
                      </div>
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
                                // setAlertShow(true);
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
    </div>
  );
}
