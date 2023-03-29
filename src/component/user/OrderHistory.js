import React, { useEffect, useState } from "react";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import OrderGraph from "./OrderGraph";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

export default function OrderHistory(props) {
  const [value, onChange] = useState([new Date(), new Date()]);

  const [from, setFrom] = useState("2022-11-01");
  const [to, setTo] = useState("2023-04-15");
  const [userId, setUserId] = useState(null);
  const [getOrderList, setGetOrderList] = useState([]);
  const [orderTotalAmount, setOrderTotalAmount] = useState("0");
  const [itemId, setItemId] = useState("");
  const [showItem, setShowItem] = useState(false);

  const [showCancel, setShowCancel] = useState(false);
  const [showCancelId, setShowCancelId] = useState("");
  useEffect(() => {
    getAllOrder(props.userId);
    setUserId(props.userId);
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

    if (response.result.length > 0) {
      let sum = response.result.reduce((acc, data) => {
        acc = data.total + acc;
        return acc;
      }, 0);
      setOrderTotalAmount(sum);
    }
  };

  return (
    <>
      <div className="row mt-[10px]">
        <div className="col-md-5 col-sm-12  pl-[0px] rounded-[6px] ">
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
                        {getOrderList.length}
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        5,09% أعلى من الشهر الماضي
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 0 }}
                      className="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        إجمالي قيمة الطلبات
                      </div>
                      <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                        {orderTotalAmount} ريال
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        5,09% أعلى من الشهر الماضي{" "}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-7  col-sm-12 pl-[0px] rounded-[6px] ">
          <div className="card h-[240px] bg-white">
            <div className="flex">
              <div className="text-[#959494] text-[18px] font-sstbold p-[10px]">
                الطلبات
              </div>
              <div className=" p-[10px]">
                <div className="absolute  left-[20px] has-icon-right">
                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>

                  <DateRangePicker
                    calendarIcon=""
                    calendarClassName="border-0 "
                    className="form-control bg-[#F9F9F9] text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                    onChange={onChange}
                    value={value}
                  />
                </div>
              </div>
            </div>
            <OrderGraph userId={userId} dateval={value} />
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

                      {data.status == "2" && (
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
                          style={{ borderLeftWidth: 1 }}
                          className="text-center"
                        >
                          <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                            سبب الرفض
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
                              showCancelId == data.id
                                ? "relative"
                                : "relative hidden "
                            }
                          >
                            <div className="absolute text-[#484848] font-sstbold text-[17px] top-[30px] bg-[#ffffff] shadow rounded-bl-[6px] rounded-br-[6px]  w-[300px] p-[15px] left-[-40px]">
                              {data.cancelReason.length > 0 &&
                                data.cancelReason[0].message}
                            </div>
                          </div>
                        </td>
                      )}
                      <td
                        onClick={() => {
                          if (!showCancel) {
                            setItemId((itemId) => data.id);
                            setShowItem((showItem) => !showItem);
                          } else {
                            setItemId("");
                            setShowItem((showItem) => !showItem);
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
                            itemId == data.id && showItem
                              ? "relative "
                              : "relative hidden "
                          }
                        >
                          <div className="absolute scroll text-[#484848] font-sstbold text-[17px] top-[30px] bg-[#ffffff] shadow rounded-bl-[6px] rounded-br-[6px]   p-[15px] left-[-40px]">
                            <table dir="ltr" className="responsive">
                              <tr>
                                <td>#</td>
                                <td>Product Name</td>
                                <td>Quantity</td>
                                <td>Price</td>
                                <td>Total</td>
                              </tr>
                              {data.orderItem.map((pro, i) => (
                                <tr key={i}>
                                  <td>{pro.product_id}</td>
                                  <td>{pro.product_name}</td>
                                  <td>{pro.quantity}</td>
                                  <td>{pro.price}</td>
                                  <td>{pro.price * pro.quantity}</td>
                                </tr>
                              ))}
                            </table>
                          </div>
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
