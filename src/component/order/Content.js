import React, { useEffect, useState } from "react";
import BarGraph from "./BarGraph";
import Graph from "./Graph";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
export default function Content() {
  const [totalOrder, setTotalOrder] = useState("0");
  const [totalOrderValue, setTotalOrderValue] = useState("0");
  const [totalPendingOrderValue, setTotalPendingOrderValue] = useState("0");
  const [totalPendingOrder, setTotalPendingOrder] = useState("0");
  const [totalAcceptOrder, setTotalAcceptOrder] = useState("0");
  const [totalAcceptOrderValue, setTotalAcceptOrderValue] = useState("0");

  const [totalCancelOrder, setTotalCancelOrder] = useState("0");
  const [totalCancelOrderValue, setTotalCancelOrderValue] = useState("0");

  const [totalPaidOrder, setTotalPaidOrder] = useState("0");
  const [totalPaidOrderValue, setTotalPaidOrderValue] = useState("0");

  const [totalRejectAfterAcceptOrder, setTotalRejectAfterAcceptOrder] =
    useState("0");
  const [
    totalRejectAfterAcceptOrderValue,
    setTotalRejectAfterAcceptOrderValue,
  ] = useState("0");

  useEffect(() => {
    getOrderDetails();
  }, []);
  const getOrderDetails = async () => {
    let params = { url: apiList.totalOrder };
    let response = await ApiService.getData(params);
    if (response) {
      if (response.totalOrder[0].total_order) {
        setTotalOrder(response.totalOrder[0].total_order);
        setTotalOrderValue(response.totalOrder[0].total);
      }
      if (response.totalPendingOrder[0].total_order) {
        setTotalPendingOrder(response.totalPendingOrder[0].total_order);
        setTotalPendingOrderValue(response.totalPendingOrder[0].total);
      }
      if (response.totalAcceptOrder[0].total_order) {
        setTotalAcceptOrder(response.totalAcceptOrder[0].total_order);
        setTotalAcceptOrderValue(response.totalAcceptOrder[0].total);
      }
      if (response.totalCancelOrder[0].total_order) {
        setTotalCancelOrder(response.totalCancelOrder[0].total_order);
        setTotalCancelOrderValue(response.totalCancelOrder[0].total);
      }
      if (response.totalPaidOrder[0].total_order) {
        setTotalPaidOrder(response.totalPaidOrder[0].total_order);
        setTotalPaidOrderValue(response.totalPaidOrder[0].total);
      }
      if (response.totalRejectAfterAcceptOrder[0].total_order) {
        setTotalRejectAfterAcceptOrder(
          response.totalRejectAfterAcceptOrder[0].total_order
        );
        setTotalRejectAfterAcceptOrderValue(
          response.totalRejectAfterAcceptOrder[0].total
        );
      }
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
                        type="number"
                        id="contact-info-icon"
                        className="form-control text-[20px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                        name="contact-icon"
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
                  <div className="absolute top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  <input
                    type="number"
                    id="contact-info-icon"
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                    name="contact-icon"
                    placeholder="16/12/2022 - 16/12/2022"
                  />
                </div>
              </div>
            </div>
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
                              إجمالي قيمة الطلبات
                            </div>
                            <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                              {totalOrderValue} ريال
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
                              الطلبات المعلقة
                            </div>
                            <div className="text-[#FF9800] text-center text-[35px] font-sstbold ">
                              {totalPendingOrder}
                            </div>
                            <div className="text-[16px] font-sstbold text-[#E80000]">
                              5,09% أعلى من الشهر الماضي{" "}
                            </div>
                          </td>
                          <td className="  text-center w-[25%]">
                            <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                              إجمالي مبلغ الطلبات
                            </div>
                            <div className="text-[#FF9800] text-center text-[35px] font-sstbold ">
                              {totalPendingOrderValue} ريال
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
                              الطلبات المقبولة
                            </div>
                            <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                              {totalAcceptOrder}
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
                              {totalAcceptOrderValue} ريال
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
                              {totalCancelOrder}
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
                              {totalCancelOrderValue} ريال
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
                              {totalPaidOrder}
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
                              {totalPaidOrderValue} ريال
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
                              الطلبات المرفوضة بعد الإتفاق المبدئي
                            </div>
                            <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                              {totalRejectAfterAcceptOrder}
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
                              {totalRejectAfterAcceptOrderValue} ريال
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
            </div>
            <div className="row flex justify-evenly mt-[10px]">
              <div className="bg-white w-[49%] rounded-[6px]">
                <BarGraph />
              </div>
              <div className="bg-white w-[49%] rounded-[6px]">
                <div className="relative">
                  <Graph />
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      المتاجر الأكثر طلب
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/location.png"
                                />
                                &nbsp;جدة
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receipt.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/wallet.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/location.png"
                                />
                                &nbsp;جدة
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receipt.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/wallet.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/location.png"
                                />
                                &nbsp;جدة
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receipt.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/wallet.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/location.png"
                                />
                                &nbsp;جدة
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receipt.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/wallet.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      المتاجر الأكثر طلب
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div className="w-[238px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%]  bg-[#F9F9F9]">
                          <div className="flex justify-end ">
                            <img
                              src="../../../panel/app-assets/images/support.png"
                              className="h-[28.8px] mt-[20px] ml-[30px] w-[28.8px]"
                            />
                          </div>
                          <div className="chat-sidebar-name mt-[5px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted pb-[10px] mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                            <div className="pl-[20px]  pr-[20px]">
                              <div className="text-[#FF9800] pb-[10px] pt-[10px] text-center  border-t-[1px] text-[18px] font-sstbold">
                                5 طلبات معلقة
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[238px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%]  bg-[#F9F9F9]">
                          <div className="flex justify-end ">
                            <img
                              src="../../../panel/app-assets/images/support.png"
                              className="h-[28.8px] mt-[20px] ml-[30px] w-[28.8px]"
                            />
                          </div>
                          <div className="chat-sidebar-name mt-[5px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted pb-[10px] mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                            <div className="pl-[20px]  pr-[20px]">
                              <div className="text-[#FF9800] pb-[10px] pt-[10px] text-center  border-t-[1px] text-[18px] font-sstbold">
                                5 طلبات معلقة
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[238px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%]  bg-[#F9F9F9]">
                          <div className="flex justify-end ">
                            <img
                              src="../../../panel/app-assets/images/support.png"
                              className="h-[28.8px] mt-[20px] ml-[30px] w-[28.8px]"
                            />
                          </div>
                          <div className="chat-sidebar-name mt-[5px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted pb-[10px] mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                            <div className="pl-[20px]  pr-[20px]">
                              <div className="text-[#FF9800] pb-[10px] pt-[10px] text-center  border-t-[1px] text-[18px] font-sstbold">
                                5 طلبات معلقة
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[238px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%]  bg-[#F9F9F9]">
                          <div className="flex justify-end ">
                            <img
                              src="../../../panel/app-assets/images/support.png"
                              className="h-[28.8px] mt-[20px] ml-[30px] w-[28.8px]"
                            />
                          </div>
                          <div className="chat-sidebar-name mt-[5px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted pb-[10px] mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                            <div className="pl-[20px]  pr-[20px]">
                              <div className="text-[#FF9800] pb-[10px] pt-[10px] text-center  border-t-[1px] text-[18px] font-sstbold">
                                5 طلبات معلقة
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[238px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%]  bg-[#F9F9F9]">
                          <div className="flex justify-end ">
                            <img
                              src="../../../panel/app-assets/images/support.png"
                              className="h-[28.8px] mt-[20px] ml-[30px] w-[28.8px]"
                            />
                          </div>
                          <div className="chat-sidebar-name mt-[5px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted pb-[10px] mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                            <div className="pl-[20px]  pr-[20px]">
                              <div className="text-[#FF9800] pb-[10px] pt-[10px] text-center  border-t-[1px] text-[18px] font-sstbold">
                                5 طلبات معلقة
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[238px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%]  bg-[#F9F9F9]">
                          <div className="flex justify-end ">
                            <img
                              src="../../../panel/app-assets/images/support.png"
                              className="h-[28.8px] mt-[20px] ml-[30px] w-[28.8px]"
                            />
                          </div>
                          <div className="chat-sidebar-name mt-[5px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted pb-[10px] mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                            <div className="pl-[20px]  pr-[20px]">
                              <div className="text-[#FF9800] pb-[10px] pt-[10px] text-center  border-t-[1px] text-[18px] font-sstbold">
                                5 طلبات معلقة
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[238px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%]  bg-[#F9F9F9]">
                          <div className="flex justify-end ">
                            <img
                              src="../../../panel/app-assets/images/support.png"
                              className="h-[28.8px] mt-[20px] ml-[30px] w-[28.8px]"
                            />
                          </div>
                          <div className="chat-sidebar-name mt-[5px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted pb-[10px] mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                            <div className="pl-[20px]  pr-[20px]">
                              <div className="text-[#FF9800] pb-[10px] pt-[10px] text-center  border-t-[1px] text-[18px] font-sstbold">
                                5 طلبات معلقة
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                      className=" w-[35%] text-center "
                    >
                      <div className="flex w-full">
                        <div className="flex-col">
                          <div className=" flex justify-center ">
                            <img
                              className="w-[60px] h-[60px] rounded-[44px]"
                              src="../../../panel/app-assets/images/user-profile.png"
                              alt="sidebar  user image"
                            />
                          </div>
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            رقم الطلب
                          </div>
                          <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                            #70
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
                              src="../../../panel/app-assets/images/store.png"
                              alt="sidebar  user image"
                            />
                          </div>
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            رقم الطلب
                          </div>
                          <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                            #70
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        المملكة العربية
                      </div>
                      <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                        السعودية،جدة
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        22/2/2022
                      </div>
                      <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                        9:00pm
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#60BA62] text-[16px] font-sstbold ">
                        27 ريال
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#FF9800] text-[20px] font-sstbold ">
                        معلق
                      </div>
                    </td>
                    <td className="w-[25%]  text-center ">
                      <div className="flex justify-end">
                        <div className=" text-[#959494] text-[16px] font-sstbold ">
                          عرض المحادثة
                        </div>
                        <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                          <img
                            src="../panel/app-assets/images/dropdown.png"
                            className="h-[24px] mt-[3px] w-[24px]"
                          />
                        </div>
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
                      className=" w-[35%] text-center "
                    >
                      <div className="flex w-full">
                        <div className="flex-col">
                          <div className=" flex justify-center ">
                            <img
                              className="w-[60px] h-[60px] rounded-[44px]"
                              src="../../../panel/app-assets/images/user-profile.png"
                              alt="sidebar  user image"
                            />
                          </div>
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            رقم الطلب
                          </div>
                          <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                            #70
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
                              src="../../../panel/app-assets/images/store.png"
                              alt="sidebar  user image"
                            />
                          </div>
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            رقم الطلب
                          </div>
                          <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                            #70
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        المملكة العربية
                      </div>
                      <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                        السعودية،جدة
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        22/2/2022
                      </div>
                      <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                        9:00pm
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#60BA62] text-[16px] font-sstbold ">
                        27 ريال
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#E80000] text-[20px] font-sstbold ">
                        مرفوضة بعد القبول المبدئي
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className="  text-center "
                    >
                      <div className="flex-col justify-center">
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
                    <td className="w-[25%]  text-center ">
                      <div className="flex justify-end">
                        <div className=" text-[#959494] text-[16px] font-sstbold ">
                          عرض المحادثة
                        </div>
                        <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                          <img
                            src="../panel/app-assets/images/dropdown.png"
                            className="h-[24px] mt-[3px] w-[24px]"
                          />
                        </div>
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
                      className=" w-[35%] text-center "
                    >
                      <div className="flex w-full">
                        <div className="flex-col">
                          <div className=" flex justify-center ">
                            <img
                              className="w-[60px] h-[60px] rounded-[44px]"
                              src="../../../panel/app-assets/images/user-profile.png"
                              alt="sidebar  user image"
                            />
                          </div>
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            رقم الطلب
                          </div>
                          <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                            #70
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
                              src="../../../panel/app-assets/images/store.png"
                              alt="sidebar  user image"
                            />
                          </div>
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            رقم الطلب
                          </div>
                          <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                            #70
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        المملكة العربية
                      </div>
                      <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                        السعودية،جدة
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        22/2/2022
                      </div>
                      <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                        9:00pm
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#60BA62] text-[16px] font-sstbold ">
                        27 ريال
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#FF9800] text-[20px] font-sstbold ">
                        معلق
                      </div>
                    </td>
                    <td className="w-[25%]  text-center ">
                      <div className="flex justify-end">
                        <div className=" text-[#959494] text-[16px] font-sstbold ">
                          عرض المحادثة
                        </div>
                        <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                          <img
                            src="../panel/app-assets/images/dropdown.png"
                            className="h-[24px] mt-[3px] w-[24px]"
                          />
                        </div>
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
                      className=" w-[35%] text-center "
                    >
                      <div className="flex w-full">
                        <div className="flex-col">
                          <div className=" flex justify-center ">
                            <img
                              className="w-[60px] h-[60px] rounded-[44px]"
                              src="../../../panel/app-assets/images/user-profile.png"
                              alt="sidebar  user image"
                            />
                          </div>
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            رقم الطلب
                          </div>
                          <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                            #70
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
                              src="../../../panel/app-assets/images/store.png"
                              alt="sidebar  user image"
                            />
                          </div>
                          <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                            رقم الطلب
                          </div>
                          <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                            #70
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        المملكة العربية
                      </div>
                      <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                        السعودية،جدة
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        22/2/2022
                      </div>
                      <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                        9:00pm
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#60BA62] text-[16px] font-sstbold ">
                        27 ريال
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className=" text-center "
                    >
                      <div className=" flex justify-center text-[#E80000] text-[20px] font-sstbold ">
                        مرفوضة بعد القبول المبدئي
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className="  text-center "
                    >
                      <div className="flex-col justify-center">
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
                    <td className="w-[25%]  text-center ">
                      <div className="flex justify-end">
                        <div className=" text-[#959494] text-[16px] font-sstbold ">
                          عرض المحادثة
                        </div>
                        <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                          <img
                            src="../panel/app-assets/images/dropdown.png"
                            className="h-[24px] mt-[3px] w-[24px]"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
