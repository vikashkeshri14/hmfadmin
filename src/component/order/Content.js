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
                        placeholder="??????????"
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
                              ???????????? ??????????????
                            </div>
                            <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                              {totalOrder}
                            </div>
                            <div className="text-[16px] font-sstbold text-[#60BA62]">
                              5,09% ???????? ???? ?????????? ????????????
                            </div>
                          </td>
                          <td
                            style={{ borderLeftWidth: 1 }}
                            className="  text-center w-[25%]"
                          >
                            <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                              ???????????? ???????? ??????????????
                            </div>
                            <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                              {totalOrderValue} ????????
                            </div>
                            <div className="text-[16px] font-sstbold text-[#60BA62]">
                              5,09% ???????? ???? ?????????? ????????????{" "}
                            </div>
                          </td>
                          <td
                            style={{ borderLeftWidth: 1 }}
                            className="  text-center w-[25%]"
                          >
                            <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                              ?????????????? ??????????????
                            </div>
                            <div className="text-[#FF9800] text-center text-[35px] font-sstbold ">
                              {totalPendingOrder}
                            </div>
                            <div className="text-[16px] font-sstbold text-[#E80000]">
                              5,09% ???????? ???? ?????????? ????????????{" "}
                            </div>
                          </td>
                          <td className="  text-center w-[25%]">
                            <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                              ???????????? ???????? ??????????????
                            </div>
                            <div className="text-[#FF9800] text-center text-[35px] font-sstbold ">
                              {totalPendingOrderValue} ????????
                            </div>
                            <div className="text-[16px] font-sstbold text-[#E80000]">
                              5,09% ???????? ???? ?????????? ????????????
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
                              ?????????????? ????????????????
                            </div>
                            <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                              {totalAcceptOrder}
                            </div>
                            <div className="text-[16px] font-sstbold text-[#60BA62]">
                              5,09% ???????? ???? ?????????? ????????????
                            </div>
                          </td>
                          <td
                            style={{ borderLeftWidth: 1 }}
                            className="  text-center w-[25%]"
                          >
                            <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                              ???????? ?????????????? ????????????????
                            </div>
                            <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                              {totalAcceptOrderValue} ????????
                            </div>
                            <div className="text-[16px] font-sstbold text-[#60BA62]">
                              5,09% ???????? ???? ?????????? ????????????
                            </div>
                          </td>
                          <td
                            style={{ borderLeftWidth: 1 }}
                            className="  text-center w-[25%]"
                          >
                            <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                              ?????????????? ????????????????
                            </div>
                            <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                              {totalCancelOrder}
                            </div>
                            <div className="text-[16px] font-sstbold text-[#60BA62]">
                              1,06% ?????? ???? ?????????? ????????????
                            </div>
                          </td>
                          <td className="  text-center w-[25%]">
                            <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                              ???????? ?????????????? ????????????????
                            </div>
                            <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                              {totalCancelOrderValue} ????????
                            </div>
                            <div className="text-[16px] font-sstbold text-[#E80000]">
                              5,09% ???????? ???? ?????????? ????????????
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
                              ?????????????? ????????????????
                            </div>
                            <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                              {totalPaidOrder}
                            </div>
                            <div className="text-[16px] font-sstbold text-[#E80000]">
                              1,06% ?????? ???? ?????????? ????????????
                            </div>
                          </td>
                          <td
                            style={{ borderLeftWidth: 1 }}
                            className="  text-center w-[25%]"
                          >
                            <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                              ???????? ?????????????? ????????????????
                            </div>
                            <div className="text-[#498A4A] text-center text-[35px] font-sstbold ">
                              {totalPaidOrderValue} ????????
                            </div>
                            <div className="text-[16px] font-sstbold text-[#E80000]">
                              1,06% ?????? ???? ?????????? ????????????
                            </div>
                          </td>
                          <td
                            style={{ borderLeftWidth: 1 }}
                            className="  text-center w-[25%]"
                          >
                            <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                              ?????????????? ???????????????? ?????? ?????????????? ??????????????
                            </div>
                            <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                              {totalRejectAfterAcceptOrder}
                            </div>
                            <div className="text-[16px] font-sstbold text-[#60BA62]">
                              1,06% ?????? ???? ?????????? ????????????
                            </div>
                          </td>
                          <td className="  text-center w-[25%]">
                            <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                              ???????? ?????????????? ???????????????? ?????? ?????????????? ??????????????
                            </div>
                            <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                              {totalRejectAfterAcceptOrderValue} ????????
                            </div>
                            <div className="text-[16px] font-sstbold text-[#60BA62]">
                              1,06% ?????? ???? ?????????? ????????????
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
                  <Graph range="30" />
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <MostRequestedStore />
            </div>
            <div className="row mt-[20px]">
              <MostPendingOrder />
            </div>
            <div className="row  rounded-[6px] mr-[0px] mt-[10px]">
              <div className="col-12 p-[0px]">
                <div className="divider">
                  <div className="divider-text">2023</div>
                </div>
              </div>
            </div>
            <RequestedOrder />

          </section>
        </div>
      </div>
    </div>
  );
}
