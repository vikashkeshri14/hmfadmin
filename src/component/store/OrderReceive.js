import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import LineCharts from "./LineCharts";

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

  useEffect(() => {
    getStoreReport(props.storeId);
  }, [props]);
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
          <div className="col-xl-3 col-md-6 col-12 p-[10px] border-l-[1px]">
            <div className="text-[#959494] flex justify-end text-[18px] font-sstbold pt-[10px]">
              <fieldset className="form-group w-[100%] h-[57px] bg-[#F9F9F9]">
                <select
                  style={{
                    background: `url(${config.domainUrl}/panel/app-assets/images/dropdown.png) no-repeat 16px`,
                  }}
                  className="form-control bg-[#F9F9F9] h-[57px]"
                  id="basicSelect"
                >
                  <option attr="total-order" value="1">
                    إجمالي الطلبات
                  </option>
                  <option attr="paid-order" value="2">
                    الطلبات المدفوعة
                  </option>
                  <option attr="application-accepted" value="3">
                    الطلبات المقبولة
                  </option>
                  <option attr="reject-application-before-accept" value="4">
                    الطلبات المرفوضة قبل الإتفاق
                  </option>
                  <option attr="reject-application-after-accept" value="5">
                    الطلبات المرفوضة بعد الإتفاق
                  </option>
                  <option attr="pending-order" value="6">
                    الطلبات المعلقة
                  </option>
                </select>
              </fieldset>
            </div>
            <div className="position-relative has-icon-right">
              <div className="absolute top-[20px] left-0">
                <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
              </div>
              <input
                type="number"
                id="contact-info-icon"
                className="form-control text-[16px] font-sstroman h-[57px] border-0 bg-[#F9F9F9] rounded-[6px]"
                name="contact-icon"
                placeholder="16/12/2022 - 16/12/2022"
              />
            </div>
          </div>
          <div className="col-xl-9 col-md-6 col-12 p-[10px]">
            <LineCharts />
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
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  رقم الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  70
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                  #23
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
                  23/11/2022
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
                  25 ريال
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  حالة الطلب
                </div>
                <div className="text-[#AAD0AB] text-center text-[20px] font-sstbold ">
                  مقبولة
                </div>
              </td>
              <td className="w-[25%]  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  ملخص الطلب
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../panel/app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  رقم الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  303
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                  #23
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  تاريخ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  23/11/2022
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
                  25 ريال
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  حالة الطلب
                </div>
                <div className="text-[#FF9800] text-center text-[20px] font-sstbold ">
                  معلقة
                </div>
              </td>
              <td className="w-[25%]  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  ملخص الطلب
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../panel/app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  رقم الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  303
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                  #23
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
                  23/11/2022
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
                  25 ريال
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  حالة الطلب
                </div>
                <div className="text-[#E80000] text-center text-[20px] font-sstbold ">
                  مرفوضة
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} className="  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  سبب الرفض
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../panel/app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </td>
              <td className="  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  ملخص الطلب
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../panel/app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  رقم الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  303
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                  #23
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
                  23/11/2022
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
                  25 ريال
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  حالة الطلب
                </div>
                <div className="text-[#60BA62] text-center text-[20px] font-sstbold ">
                  مدفوعة
                </div>
              </td>
              <td className=" w-[25%] text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  ملخص الطلب
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../panel/app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
                className="w-[12%]  text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  رقم الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  303
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[12%] text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                  #23
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[12%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  تاريخ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  23/11/2022
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[12%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  مبلغ الطلب
                </div>
                <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                  25 ريال
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[27%] text-center "
              >
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  حالة الطلب
                </div>
                <div className="text-[#E80000] text-center text-[20px] font-sstbold ">
                  مرفوضة بعد الإتفاق المبدئي
                </div>
              </td>
              <td style={{ borderLeftWidth: 1 }} className="  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  سبب الرفض
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../panel/app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </td>
              <td className="  text-center ">
                <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                  ملخص الطلب{" "}
                </div>
                <div className="text-[#484848] flex justify-center text-center text-[16px] font-sstbold ">
                  <img
                    src="../panel/app-assets/images/dropdown.png"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
