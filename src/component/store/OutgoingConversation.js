import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";

export default function OutgoingConversation(props) {
  const [from, setFrom] = useState("2022-11-01");
  const [to, setTo] = useState("2023-04-15");
  const [getOrderList, setGetOrderList] = useState([]);

  const [showCancel, setShowCancel] = useState(false);
  const [showCancelId, setShowCancelId] = useState("");
  useEffect(() => {
    getAllOrder(props.storeId);
  }, [props]);
  const getAllOrder = async (id) => {
    const obj = {
      userId: id,
      from: from,
      to: to,
    };
    let params = { url: apiList.getAllOrderByUserId, body: obj };
    let response = await ApiService.postData(params);
    setGetOrderList(response.result);
  };
  return (
    <>
      <div className="row  rounded-[6px] mr-[0px] mt-[10px]">
        <div className="col-12 p-[0px]">
          <div className="divider">
            <div className="divider-text">2023</div>
          </div>
        </div>
      </div>
      <div className="mb-[350px]">
        {getOrderList.length > 0 &&
          getOrderList.map((data, i) => {
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
                        className=" w-[15%] text-center "
                      >
                        <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                          رقم الطلب
                        </div>
                        <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                          {data.id}
                        </div>
                      </td>
                      <td
                        style={{ borderLeftWidth: 1 }}
                        className=" w-[15%] text-center "
                      >
                        <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                          {data.store_name}
                        </div>
                        <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                          #{data.store_id}
                        </div>
                      </td>
                      <td
                        style={{ borderLeftWidth: 1 }}
                        className=" w-[15%] text-center "
                      >
                        <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                          تاريخ الطلب
                        </div>
                        <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                          {moment(data.created_at).format("DD/MM/YYYY")}
                        </div>
                      </td>
                      <td
                        style={{ borderLeftWidth: 1 }}
                        className=" w-[15%] text-center "
                      >
                        <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                          مبلغ الطلب
                        </div>
                        <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                          {data.total} ريال
                        </div>
                      </td>
                      <td
                        style={{ borderLeftWidth: 1 }}
                        className=" w-[15%] text-center "
                      >
                        <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                          حالة الطلب
                        </div>
                        {data.status == "2" &&
                        (data.payment_status == "1" ||
                          data.payment_accepted_date != null) ? (
                          <div className="text-[#E80000] text-center text-[20px] font-sstbold ">
                            مرفوضة بعد الإتفاق المبدئي
                          </div>
                        ) : data.status == "2" ? (
                          <div className="text-[#E80000] text-center text-[20px] font-sstbold ">
                            مرفوضة
                          </div>
                        ) : data.status == "1" && data.payment_status == "1" ? (
                          <div className="text-[#60BA62] text-center text-[20px] font-sstbold ">
                            مدفوعة
                          </div>
                        ) : data.status == "1" ? (
                          <div className="text-[#AAD0AB] text-center text-[20px] font-sstbold ">
                            مقبولة
                          </div>
                        ) : (
                          <div className="text-[#FF9800] text-center text-[20px] font-sstbold ">
                            معلق
                          </div>
                        )}
                      </td>

                      <td
                        onClick={() => {
                          if (!showCancel) {
                            setShowCancelId((showCancelId) => data.id);
                            setShowCancel((showCancel) => !showCancel);
                          } else {
                            setShowCancelId("");
                            setShowCancel((showCancel) => !showCancel);
                          }
                        }}
                        className="  text-center "
                      >
                        <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                          ملخص الطلب
                        </div>
                        <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                          <img
                            src={
                              config.domainUrl +
                              "/panel/app-assets/images/dropdown.png"
                            }
                            className="h-[24px] w-[24px]"
                          />
                        </div>
                        <div
                          className={
                            showCancelId == data.id && showCancel
                              ? "relative "
                              : "relative hidden "
                          }
                        >
                          <div className="absolute scroll text-[#484848] font-sstbold text-[17px] top-[30px] bg-[#ffffff] shadow rounded-bl-[6px] rounded-br-[6px]   p-[15px] left-[-40px]"></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
      </div>
    </>
  );
}
