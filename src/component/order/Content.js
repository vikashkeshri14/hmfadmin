import React, { useEffect, useState } from "react";
import BarGraph from "./BarGraph";
import Graph from "./Graph";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import MostRequestedStore from "./MostRequestedStore";
import MostPendingOrder from "./MostPendingOrder";
import RequestedOrder from "./RequestedOrder";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { OrderContext } from "../../contexts/OrderContext";

export default function Content() {
  const [value, onChange] = useState([new Date(), new Date()]);
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
  const [moreRequestedStore, setmoreRequestedStore] = useState(false);
  const [morePendingStore, setmorePendingStore] = useState(false);
  const [moreRequestOrder, setmoreRequestOrder] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [
    totalRejectAfterAcceptOrderValue,
    setTotalRejectAfterAcceptOrderValue,
  ] = useState("0");

  useEffect(() => {
    getOrderDetails();
  }, [from, to]);

  const getOrderDetails = async () => {
    const obj = {
      from: from,
      to: to,
    };
    let params = { url: apiList.totalOrder, body: obj };
    let response = await ApiService.postData(params);
    setTotalOrder(0)
    setTotalOrderValue(0)
    setTotalPendingOrder(0)
    setTotalPendingOrderValue(0)
    setTotalAcceptOrderValue(0)
    setTotalCancelOrderValue(0)
    setTotalPaidOrder(0)
    setTotalPaidOrderValue(0)
    setTotalRejectAfterAcceptOrder(0)
    setTotalRejectAfterAcceptOrderValue(0)



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
                        type="text"
                        id="contact-info-icon"
                        className="form-control text-[20px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                        name="contact-icon"
                        value={searchText}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                        }}
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
                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>

                  <DateRangePicker
                    calendarIcon=""
                    calendarClassName="border-0 "
                    className="form-control  text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                    onChange={(e) => {
                      onChange(e);
                      if (e != null) {
                        setFrom(moment(e[0]).format("YYYY-MM-DD"));
                        setTo(moment(e[1]).format("YYYY-MM-DD"));
                      } else {
                        setFrom("");
                        setTo("");
                      }
                    }}
                    value={value}
                  />
                </div>
              </div>
            </div>
            {!morePendingStore && !moreRequestedStore && !moreRequestOrder && (
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
                    <BarGraph from={from} to={to} />
                  </div>
                  <div className="bg-white w-[49%] rounded-[6px]">
                    <div className="relative">
                      <Graph range="30" />
                    </div>
                  </div>
                </div>
              </>
            )}
            <OrderContext.Provider
              value={{
                moreRequestedStore,
                setmoreRequestedStore,
                morePendingStore,
                setmorePendingStore,
                moreRequestOrder,
                setmoreRequestOrder,
              }}
            >
              <div className="row mt-[20px]">
                {!morePendingStore && !moreRequestOrder && (
                  <MostRequestedStore searchData={searchText} from={from} to={to} />
                )}
              </div>
              <div className="row mt-[20px]">
                {!moreRequestedStore && !moreRequestOrder && (
                  <MostPendingOrder searchData={searchText} from={from} to={to} />
                )}
              </div>

              {!morePendingStore && !moreRequestedStore && (
                <>
                  <div className="row  rounded-[6px] mr-[0px] mt-[10px]">
                    <div className="col-12 p-[0px]">
                      <div className="divider">
                        <div className="divider-text">2023</div>
                      </div>
                    </div>
                  </div>

                  <RequestedOrder searchData={searchText} from={from} to={to} />
                </>
              )}
            </OrderContext.Provider>
          </section>
        </div>
      </div>
    </div>
  );
}
