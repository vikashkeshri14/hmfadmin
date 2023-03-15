import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import LineCharts from "./LineCharts";
import moment from "moment";

export default function OrderReceive(props) {
  const [acceptedOrder, setAcceptedOrder] = useState("0");
  const [acceptedOrderAmount, setAcceptedOrderAmount] = useState("0");
  const [totalOrder, setTotalOrder] = useState("0");
  const [totalOrderAmount, setTotalOrderAmount] = useState("0");
  const [rejectedOrder, setRejectedOrder] = useState("0");
  const [rejectedOrderAmount, setRejectedOrderAmount] = useState("0");
  const [pendingOrder, setPendingOrder] = useState("0");
  const [pendingOrderAmount, setPendingOrderAmount] = useState("0");
  const [paidOrder, setPaidOrder] = useState("0");
  const [paidOrderAmount, setPaidOrderAmount] = useState("0");
  const [rejectedOrderAfterInitialAccept, setRejectedOrderAfterInitialAccept] =
    useState("0");

  const [
    rejectedOrderAfterInitialAcceptAmount,
    setRejectedOrderAfterInitialAcceptAmount,
  ] = useState("0");

  const [from, setFrom] = useState("2022-11-01");
  const [to, setTo] = useState("2023-04-15");
  const [getOrderList, setGetOrderList] = useState([]);

  const [itemId, setItemId] = useState("");
  const [showItem, setShowItem] = useState(false);

  const [showCancel, setShowCancel] = useState(false);
  const [showCancelId, setShowCancelId] = useState("");
  useEffect(() => {
    getStoreReport(props.storeId);
    getAllOrder(props.storeId);
  }, [props]);
  const getAllOrder = async (id) => {
    const obj = {
      storeId: id,
      from: from,
      to: to,
    };
    let params = { url: apiList.getAllOrderByStoreId, body: obj };
    let response = await ApiService.postData(params);
    setGetOrderList(response.result);
  };
  const getStoreReport = async (id) => {
    const obj = { storeId: id };
    let params = { url: apiList.getStoreIncommimgOrderReport, body: obj };
    let response = await ApiService.postData(params);
    if (response.getIncomingOrder.length > 0) {
      setTotalOrder(response.getIncomingOrder[0].orders);
      if (response.getIncomingOrder[0].orders)
        setTotalOrderAmount(response.getIncomingOrder[0].total);
    }
    if (response.pending_order.length > 0) {
      setPendingOrder(response.pending_order[0].cnt);
      if (response.pending_order[0].cnt)
        setPendingOrderAmount(response.pending_order[0].total);
    }
    if (response.paid_order_cnt.length > 0) {
      setPaidOrder(response.paid_order_cnt[0].cnt);
      if (response.paid_order_cnt[0].cnt)
        setPaidOrderAmount(response.paid_order_cnt[0].total);
    }
    if (response.order_accept.length > 0) {
      setAcceptedOrder(response.order_accept[0].orders);
      if (response.order_accept[0].orders)
        setAcceptedOrderAmount(response.order_accept[0].total);
    }
    if (response.order_rejected.length > 0) {
      setRejectedOrder(response.order_rejected[0].orders);
      if (response.order_rejected[0].orders)
        setRejectedOrderAmount(response.order_rejected[0].total);
    }
    if (response.rejected_accept_initial.length > 0) {
      setRejectedOrderAfterInitialAccept(
        response.rejected_accept_initial[0].orders
      );
      if (response.rejected_accept_initial[0].orders)
        setRejectedOrderAfterInitialAcceptAmount(
          response.rejected_accept_initial[0].total
        );
    }

    // setProductList(response.result);
  };
  return (
    <>
      <div className="row mt-[10px]">
        <div className="col-md-12 col-sm-12 pl-[0px] rounded-[6px] ">
          <div className="card mb-[10px]">
            <div className="p-[10px]">
              <table className="table  mb-0">
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
                        {totalOrder}
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        5,09% أعلى من الشهر الماضي
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        إجمالي قيمة الطلبات{" "}
                      </div>
                      <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                        {totalOrderAmount} ريال
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        5,09% أعلى من الشهر الماضي{" "}
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        الطلبات المعلقة{" "}
                      </div>
                      <div className="text-[#FF9800] text-center text-[35px] font-sstbold ">
                        {pendingOrder}
                      </div>
                      <div className="text-[16px] font-sstbold text-[#E80000]">
                        5,09% أعلى من الشهر الماضي{" "}
                      </div>
                    </td>
                    <td className="  text-center w-[25%]">
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        إجمالي مبلغ الطلبات{" "}
                      </div>
                      <div className="text-[#FF9800] text-center text-[35px] font-sstbold ">
                        {pendingOrderAmount} ريال
                      </div>
                      <div className="text-[16px] font-sstbold text-[#E80000]">
                        5,09% أعلى من الشهر الماضي{" "}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 pl-[0px] rounded-[6px] ">
          <div className="card mb-[10px]">
            <div className="p-[10px]">
              <table className="table   mb-0">
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
                        الطلبات المقبولة
                      </div>
                      <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                        {acceptedOrder}
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        5,09% أعلى من الشهر الماضي
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        قيمة الطلبات المقبولة
                      </div>
                      <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                        {acceptedOrderAmount} ريال
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        5,09% أعلى من الشهر الماضي
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        الطلبات المرفوضة
                      </div>
                      <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                        {rejectedOrder}
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        1,06% أقل من الشهر الماضي
                      </div>
                    </td>
                    <td className="  text-center w-[25%]">
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        قيمة الطلبات المرفوضة
                      </div>
                      <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                        {rejectedOrderAmount} ريال
                      </div>
                      <div className="text-[16px] font-sstbold text-[#E80000]">
                        5,09% أعلى من الشهر الماضي
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 pl-[0px] rounded-[6px] ">
          <div className="card mb-[10px]">
            <div className="p-[10px]">
              <table className="table   mb-0">
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
                        الطلبات المدفوعة
                      </div>
                      <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                        {paidOrder}
                      </div>
                      <div className="text-[16px] font-sstbold text-[#E80000]">
                        1,06% أقل من الشهر الماضي
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        قيمة الطلبات المدفوعة
                      </div>
                      <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                        {paidOrderAmount} ريال
                      </div>
                      <div className="text-[16px] font-sstbold text-[#E80000]">
                        1,06% أقل من الشهر الماضي
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        الطلبات المرفوضة بعد الإتفاق المبدئي{" "}
                      </div>
                      <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                        {rejectedOrderAfterInitialAccept}
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        1,06% أقل من الشهر الماضي
                      </div>
                    </td>
                    <td className="  text-center w-[25%]">
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        قيمة الطلبات المرفوضة بعد الإتفاق المبدئي
                      </div>
                      <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                        {rejectedOrderAfterInitialAcceptAmount} ريال
                      </div>
                      <div className="text-[16px] font-sstbold text-[#60BA62]">
                        1,06% أقل من الشهر الماضي
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row m-[0px] bg-[#ffffff] rounded-[6px] mr-[15px] w-[100%]">
          <LineCharts storeId={props.storeId} />
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
                          {data.username}
                        </div>
                        <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                          #{data.user_id}
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
                              {data.cancelReason[0].message}
                            </div>
                          </div>
                        </td>
                      )}
                      <td
                        onClick={() => {
                          if (!showItem) {
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
