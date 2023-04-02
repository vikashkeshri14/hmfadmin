import React, { useEffect, useState } from "react";
import Barchart from "./Barchart";
import Chat from "./Chat";
import Graph from "./Graph";
import GraphNext from "./GraphNext";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { Link, useNavigate } from "react-router-dom";
export default function Content() {
  const [totalOrder, setTotalOrder] = useState("0");
  const [totalPendingOrder, setTotalPendingOrder] = useState("0");
  const [totalAcceptOrder, setTotalAcceptOrder] = useState("0");
  const [totalCancelOrder, setTotalCancelOrder] = useState("0");
  const [totalPaidOrder, setTotalPaidOrder] = useState("0");
  const [totalRejectAfterAcceptOrder, setTotalRejectAfterAcceptOrder] =
    useState("0");
  const [totalOrderCommitment, setTotalOrderCommitment] = useState("0");
  const [totalPendingOrderCommitment, setTotalPendingOrderCommitment] =
    useState("0");

  const [totalOrderDropCommitment, setTotalOrderDropCommitment] = useState("0");
  const [totalOrderDropCommitmentAmount, setTotalOrderDropCommitmentAmount] =
    useState("0");
  const [totalPaidOrderCommitment, setTotalPaidOrderCommitment] = useState("0");
  const [totalAmountOfCommitment, setTotalAmountOfCommitment] = useState("0");
  const [totalAmountOfPaidCommitment, setTotalAmountOfPaidCommitment] =
    useState("0");
  const [totalAmountOfPendingCommitment, setTotalAmountOfPendingCommitment] =
    useState("0");
  const [rangeVal, setRangeVal] = useState("30");
  const [storePendingCommitment, setStorePendingCommitment] = useState([]);
  const [totalReport, setTotalReport] = useState("0");
  const [totalReportResolve, setTotalReportResolve] = useState("0");
  const [productReport, setProductReport] = useState("0");
  const [storeReport, setStoreReport] = useState("0");
  const [userReport, setUserReport] = useState("0");
  const [value, onChange] = useState([new Date(), new Date()]);
  const [moreCommitment, setmoreCommitment] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [storeValCommitment, setstoreValCommitment] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getOrderDetails();
    getOrderCommitment();
    //getStorePendingCommitment();
    getDropCommitment();
    getTotalReport();
  }, []);

  const searchStore = async (text) => {
    //setSearchText(text);
    let search = storeValCommitment;
    search = search.filter((data, i) => {
      if (data.store_id == text || data.username.indexOf(text) >= 0 || !text) {
        return data;
      }
    });

    setStorePendingCommitment(search);
  };
  const getTotalReport = async () => {
    const obj = {
      from: "",
      to: "",
    };
    let params = { url: apiList.getTotalReport, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      let total =
        response.store[0].cnt + response.user[0].cnt + response.product[0].cnt;
      setTotalReport(total);
      let resolve =
        response.storeresolve[0].cnt +
        response.userresolve[0].cnt +
        response.productresolve[0].cnt;
      setTotalReportResolve(resolve);

      setProductReport(response.product[0].cnt);
      setStoreReport(response.store[0].cnt);
      setUserReport(response.user[0].cnt);
    }
  };

  const getOrderDetails = async () => {
    const obj = {
      from: "",
      to: "",
    };
    let params = { url: apiList.totalOrder, body: obj };
    let response = await ApiService.postData(params);

    if (response) {
      if (response.totalOrder[0].total_order) {
        setTotalOrder(response.totalOrder[0].total_order);
      }
      if (response.totalPendingOrder[0].total_order) {
        setTotalPendingOrder(response.totalPendingOrder[0].total_order);
      }
      if (response.totalAcceptOrder[0].total_order) {
        setTotalAcceptOrder(response.totalAcceptOrder[0].total_order);
      }
      if (response.totalCancelOrder[0].total_order) {
        setTotalCancelOrder(response.totalCancelOrder[0].total_order);
      }
      if (response.totalPaidOrder[0].total_order) {
        setTotalPaidOrder(response.totalPaidOrder[0].total_order);
      }
      if (response.totalRejectAfterAcceptOrder[0].total_order) {
        setTotalRejectAfterAcceptOrder(
          response.totalRejectAfterAcceptOrder[0].total_order
        );
      }
    }
  };
  const getOrderCommitment = async () => {
    const obj = {
      from: "",
      to: "",
    };
    let params = { url: apiList.totalOrderCommitment, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      if (response.totalDropCommitmentOrderCommitment[0].total_order) {
        setTotalOrderDropCommitment(
          response.totalDropCommitmentOrderCommitment[0].total_order
        );
        setTotalOrderDropCommitmentAmount(
          response.totalDropCommitmentOrderCommitment[0].total
        );
      }

      if (response.totalOrderCommitment[0].total_order) {
        setTotalOrderCommitment(response.totalOrderCommitment[0].total_order);
        setTotalAmountOfCommitment(response.totalOrderCommitment[0].total);
      }
      if (response.totalPendingOrderCommitment[0].total_order) {
        setTotalPendingOrderCommitment(
          response.totalPendingOrderCommitment[0].total_order
        );
        setTotalAmountOfPendingCommitment(
          response.totalPendingOrderCommitment[0].total
        );
      }
      if (response.totalPaidOrderCommitment[0].total_order) {
        setTotalPaidOrderCommitment(
          response.totalPaidOrderCommitment[0].total_order
        );
        setTotalAmountOfPaidCommitment(
          response.totalPaidOrderCommitment[0].total
        );
      }
    }
  };

  const getDropCommitment = async () => {
    const obj = {
      from: "",
      to: "",
    };
    let params = { url: apiList.getAllDropCommitment, body: obj };
    let response = await ApiService.postData(params);
    if (response.result.length > 0) {
      let sortval = response.result.sort((a, b) => b.cnt - a.cnt);
      setStorePendingCommitment(sortval);
      setstoreValCommitment(sortval);
    }
  };
  const getStorePendingCommitment = async () => {
    let params = { url: apiList.storePendingCommitment };
    let response = await ApiService.getData(params);
    if (response.storeCommitment.length > 0) {
      let sortval = response.storeCommitment.sort((a, b) => b.cnt - a.cnt);
      setStorePendingCommitment(sortval);
      setstoreValCommitment(sortval);
    }
  };
  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section id="dashboard-analytics">
            <div className="row flex justify-around">
              <div className="w-[34%] dashboard-users">
                <div className="row">
                  <div className="col-12">
                    <div className="position-relative has-icon-left">
                      <input
                        type="text"
                        id="contact-info-icon"
                        className="form-control text-[20px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                        name="contact-icon"
                        placeholder="البحث"
                        value={searchText}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                          searchStore(e.target.value);
                        }}
                      />
                      <div className="form-control-position top-[20px] right-[10px] w-[24px] h-[24px]">
                        <img src="../panel/app-assets/images/search.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[34%]  dashboard-users">
                <div className="row">
                  <div className="bg-[#ffffff] flex  h-[62px] shadow rounded-[6px]">
                    <div
                      onClick={() => {
                        setRangeVal(1);
                      }}
                      className={
                        rangeVal == "1"
                          ? "pl-[30px] cursor-pointer text-[#FF9800] daily text-[16px] font-sstbold justify-center self-center  pr-[30px]"
                          : "pl-[30px] cursor-pointer daily text-[16px] font-sstbold justify-center self-center text-[#484848] pr-[30px]"
                      }
                    >
                      يومي
                    </div>
                    <div className="border-r-[1px] border-[#EBEBEB]"></div>
                    <div
                      onClick={() => {
                        setRangeVal(7);
                      }}
                      className={
                        rangeVal == "7"
                          ? "pl-[30px] cursor-pointer text-[#FF9800] weekly text-[16px] font-sstbold justify-center self-center  pr-[30px]"
                          : "pl-[30px] cursor-pointer weekly text-[16px] font-sstbold justify-center self-center text-[#484848] pr-[30px]"
                      }
                    >
                      أسبوعي
                    </div>
                    <div className="border-r-[1px] border-[#EBEBEB]"></div>
                    <div
                      onClick={() => {
                        setRangeVal(30);
                      }}
                      className={
                        rangeVal == "30"
                          ? "pl-[30px] cursor-pointer text-[#FF9800] monthly text-[16px] font-sstbold justify-center self-center  pr-[30px]"
                          : "pl-[30px] cursor-pointer monthly text-[16px] font-sstbold justify-center self-center text-[#484848] pr-[30px]"
                      }
                    >
                      شهري
                    </div>
                    <div className="border-r-[1px] border-[#EBEBEB]"></div>
                    <div
                      onClick={() => {
                        setRangeVal(365);
                      }}
                      className={
                        rangeVal == "365"
                          ? "pl-[30px] cursor-pointer text-[#FF9800] annual text-[16px] font-sstbold justify-center self-center  pr-[30px]"
                          : "pl-[30px] cursor-pointer annual text-[16px] font-sstbold justify-center self-center text-[#484848] pr-[30px]"
                      }
                    >
                      سنوي
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[24%]   dashboard-users">
                <div className="position-relative has-icon-right">
                  {/*  */}
                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  <DateRangePicker
                    calendarIcon=""
                    calendarClassName="border-0 "
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                    onChange={onChange}
                    value={value}
                  />

                  {/* <input
                    type="number"
                    id="contact-info-icon"
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                    name="contact-icon"
                    placeholder="16/12/2022 - 16/12/2022"
                  /> */}
                </div>
              </div>
            </div>
            {!moreCommitment && (
              <>
                <div className="row flex justify-around mt-[30px]">
                  <div className="w-[72%] flex-col h-[430px]  ">
                    <div className="w-[100%] justify-around flex">
                      <div className="w-[37%] bg-white p-[10px] rounded-[6px] dashboard-users">
                        <Graph range={rangeVal} />
                      </div>
                      <div className="w-[60%] bg-white p-[10px] rounded-[6px] dashboard-users">
                        <Barchart range={rangeVal} />
                      </div>
                    </div>
                    <div className="w-[98%] mr-[10px] mt-[20px]">
                      <div className="table-responsive h-[345px] bg-white shadow rounded-[6px]  p-[20px]">
                        <table className="table  table-bordered mb-0">
                          <tbody>
                            <tr className="border-0">
                              <td
                                style={{ borderRightWidth: 0 }}
                                className="  text-center"
                              >
                                <div className="text-[#959494] text-[18px] font-sstbold">
                                  إجمالي الطلبات
                                </div>
                                <div className="text-[#498A4A] text-[35px] font-sstbold ">
                                  {totalOrder}
                                </div>
                                <div className="text-[#60BA62] text-[16px] font-sstbold">
                                  5,09% أعلى من الشهر الماضي
                                </div>
                              </td>
                              <td className="text-center">
                                <div className="text-[#959494] text-[18px] font-sstbold">
                                  الطلبات المقبولة
                                </div>
                                <div className="text-[#498A4A] text-[35px] font-sstbold ">
                                  {totalAcceptOrder}
                                </div>
                                <div className="text-[#60BA62] text-[16px] font-sstbold">
                                  5,09% أعلى من الشهر الماضي
                                </div>
                              </td>
                              <td
                                style={{ borderLeftWidth: 0 }}
                                className="text-bold-500 text-center "
                              >
                                <div className="text-[#959494] text-[18px] font-sstbold">
                                  الطلبات المدفوعة
                                </div>
                                <div className="text-[#498A4A] text-[35px] font-sstbold ">
                                  {totalPaidOrder}
                                </div>
                                <div className="text-[#E80000] text-[16px] font-sstbold">
                                  1,06% أقل من الشهر الماضي
                                </div>
                              </td>
                            </tr>
                            <tr className="border-0">
                              <td
                                style={{ borderRightWidth: 0 }}
                                className="  text-center"
                              >
                                <div className="text-[#959494] text-[18px] font-sstbold">
                                  الطلبات المعلقة
                                </div>
                                <div className="text-[#FF9800] text-[35px] font-sstbold ">
                                  {totalPendingOrder}
                                </div>
                                <div className="text-[#E80000] text-[16px] font-sstbold">
                                  5,09% أعلى من الشهر الماضي
                                </div>
                              </td>
                              <td className="text-center">
                                <div className="text-[#959494] text-[18px] font-sstbold">
                                  الطلبات المرفوضة
                                </div>
                                <div className="text-[#AD0000] text-[35px] font-sstbold ">
                                  {totalCancelOrder}
                                </div>
                                <div className="text-[#E80000] text-[16px] font-sstbold">
                                  1,06% أقل من الشهر الماضي
                                </div>
                              </td>
                              <td
                                style={{ borderLeftWidth: 0 }}
                                className="text-bold-500 text-center "
                              >
                                <div className="text-[#959494] text-[18px] font-sstbold">
                                  الطلبات المرفوضة بعد الإتفاق المبدئي{" "}
                                </div>
                                <div className="text-[#AD0000] text-[35px] font-sstbold ">
                                  {totalRejectAfterAcceptOrder}
                                </div>
                                <div className="text-[#E80000] text-[16px] font-sstbold">
                                  1,06% أقل من الشهر الماضي
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="w-[27%] h-[790px] overflow-scroll  dashboard-users rounded-[6px] shadow bg-white">
                    <Chat range={rangeVal} />
                  </div>
                </div>
                <div className="row flex justify-around mt-[30px]">
                  <div className="w-[70%] mr-[10px]">
                    <div className="table-responsive bg-white shadow h-[175px] rounded-[6px]  p-[10px]">
                      <table className="table  table-bordered mb-0">
                        <tbody>
                          <tr className="border-0">
                            <td
                              style={{ borderRightWidth: 0 }}
                              className="  text-center"
                            >
                              <div className="text-[#959494] text-[18px] font-sstbold">
                                إجمالي عدد الإلتزامات
                              </div>
                              <div className="text-[#498A4A] text-[35px] font-sstbold ">
                                {totalOrderCommitment}
                              </div>
                              <div className="text-[#60BA62] text-[16px] font-sstbold">
                                5,09% أعلى من الشهر الماضي
                              </div>
                            </td>
                            <td className="text-center">
                              <div className="text-[#959494] text-[18px] font-sstbold">
                                عدد الإلتزامات المدفوعة
                              </div>
                              <div className="text-[#498A4A] text-[35px] font-sstbold ">
                                {totalPaidOrderCommitment}
                              </div>
                              <div className="text-[#60BA62] text-[16px] font-sstbold">
                                5,09% أعلى من الشهر الماضي
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 0 }}
                              className="text-bold-500 text-center "
                            >
                              <div className="text-[#959494] text-[18px] font-sstbold">
                                عدد الالتزامات المعلقة
                              </div>
                              <div className="text-[#FF9800] text-[35px] font-sstbold ">
                                {totalPendingOrderCommitment}
                              </div>
                              <div className="text-[#60BA62] text-[16px] font-sstbold">
                                1,06% أقل من الشهر الماضي
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="table-responsive bg-white  h-[175px] shadow rounded-[6px] mt-[20px] p-[10px]">
                      <table className="table  table-bordered mb-0">
                        <tbody>
                          <tr className="border-0">
                            <td
                              style={{ borderRightWidth: 0 }}
                              className="  text-center"
                            >
                              <div className="text-[#959494] total-amount-of-commitment text-[18px] font-sstbold">
                                إجمالي قيمة الإلتزامات
                              </div>
                              <div className="text-[#498A4A] text-[35px] font-sstbold ">
                                {(totalAmountOfCommitment *
                                  config.commitmentRate) /
                                  100}{" "}
                                ريال
                              </div>
                              <div className="text-[#60BA62] text-[16px] font-sstbold">
                                5,09% أعلى من الشهر الماضي
                              </div>
                            </td>
                            <td className="text-center">
                              <div className="text-[#959494] text-[18px] font-sstbold">
                                قيمة الإلتزامات المدفوعة
                              </div>
                              <div className="text-[#498A4A] text-[35px] font-sstbold ">
                                {(totalAmountOfPaidCommitment *
                                  config.commitmentRate) /
                                  100}{" "}
                                ريال
                              </div>
                              <div className="text-[#E80000] text-[16px] font-sstbold">
                                1,06% أقل من الشهر الماضي
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 0 }}
                              className="text-bold-500 text-center "
                            >
                              <div className="text-[#959494] text-[18px] font-sstbold">
                                قيمة الإلتزامات المعلقة
                              </div>
                              <div className="text-[#FF9800] text-[35px] font-sstbold ">
                                {(totalAmountOfPendingCommitment *
                                  config.commitmentRate) /
                                  100}{" "}
                                ريال
                              </div>
                              <div className="text-[#60BA62] text-[16px] font-sstbold">
                                1,06% أقل من الشهر الماضي
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="w-[27%] mr-[10px] rounded-[6px] shadow p-[10px] bg-[#ffffff]">
                    <GraphNext range={rangeVal} />
                  </div>
                </div>
                <div className="flex mt-[30px]">
                  <div className="w-[100%] mr-[5px]">
                    <div className="table-responsive bg-white shadow rounded-[6px]  p-[10px]">
                      <table className="table  table-bordered mb-0">
                        <tbody>
                          <tr className="border-0">
                            <td
                              style={{ borderRightWidth: 0 }}
                              className="  text-center"
                            >
                              <div className="text-[#959494] no-of-communication text-[18px] font-sstbold">
                                عدد البلاغات
                              </div>
                              <div className="text-[#AD0000] text-[35px] font-sstbold ">
                                {totalReport}
                              </div>
                              <div className="text-[#E80000] text-[16px] font-sstbold">
                                5,09% أعلى من الشهر الماضي
                              </div>
                            </td>
                            <td className="text-center">
                              <div className="text-[#959494] no-of-resolved-report text-[18px] font-sstbold">
                                عدد البلاغات المحلولة
                              </div>
                              <div className="text-[#498A4A] text-[35px] font-sstbold ">
                                {totalReportResolve}
                              </div>
                              <div className="text-[#60BA62] text-[16px] font-sstbold">
                                5,09% أعلى من الشهر الماضي
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 0 }}
                              className="text-bold-500 text-center "
                            >
                              <div className="text-[#959494] store-notification text-[18px] font-sstbold">
                                بلاغات المتاجر
                              </div>
                              <div className="text-[#AD0000] text-[35px] font-sstbold ">
                                {storeReport}
                              </div>
                              <div className="text-[#E80000] text-[16px] font-sstbold">
                                5,09% أعلى من الشهر الماضي
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 0 }}
                              className="text-bold-500 text-center "
                            >
                              <div className="text-[#959494] user-report text-[18px] font-sstbold">
                                بلاغات المستخدمين
                              </div>
                              <div className="text-[#AD0000] text-[35px] font-sstbold ">
                                {userReport}
                              </div>
                              <div className="text-[#E80000] text-[16px] font-sstbold">
                                5,09% أعلى من الشهر الماضي
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 0 }}
                              className="text-bold-500 text-center "
                            >
                              <div className="text-[#959494] product-notification text-[18px] font-sstbold">
                                بلاغات المنتجات
                              </div>
                              <div className="text-[#AD0000] text-[35px] font-sstbold ">
                                {productReport}
                              </div>
                              <div className="text-[#E80000] text-[16px] font-sstbold">
                                5,09% أعلى من الشهر الماضي
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className=" flex mt-[30px]">
                  <div className="w-[30%] mr-[5px]">
                    <div className="table-responsive bg-white shadow rounded-[6px]  p-[10px]">
                      <table className="table  table-bordered mb-0">
                        <tbody>
                          <tr className="border-0">
                            <td
                              style={{ borderRightWidth: 0 }}
                              className=" border-0 text-center"
                            >
                              <div className="text-[#959494] no-of-dropped-commitment text-[18px] font-sstbold">
                                عدد الإلتزامات المسقطة
                              </div>
                              <div className="text-[#AD0000] text-[35px] font-sstbold ">
                                {totalOrderDropCommitment}
                              </div>
                              <div className="text-[#E80000] text-[16px] font-sstbold">
                                5,09% أعلى من الشهر الماضي
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="table-responsive bg-white shadow rounded-[6px] mt-[10px]  p-[10px]">
                      <table className="table  table-bordered mb-0">
                        <tbody>
                          <tr className="border-0">
                            <td
                              style={{ borderRightWidth: 0 }}
                              className=" border-0 text-center"
                            >
                              <div className="text-[#959494] text-[18px] font-sstbold">
                                قيمة الإلتزامات المسقطة
                              </div>
                              <div className="text-[#AD0000] text-[35px] font-sstbold ">
                                {(totalOrderDropCommitmentAmount *
                                  config.commitmentRate) /
                                  100}
                              </div>
                              <div className="text-[#E80000] text-[16px] font-sstbold">
                                5,09% أعلى من الشهر الماضي
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="w-[70%] mr-[10px] bg-white p-[10px] rounded-[6px] shadow">
                    <div className="flex justify-evenly">
                      <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                        المتاجر التي لديها التزام مسقط
                      </div>
                      <div
                        onClick={() => {
                          setmoreCommitment(true);
                        }}
                        className="text-[18px] cursor-pointer w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]"
                      >
                        عرض المزيد
                      </div>
                    </div>
                    <div className="flex">
                      {storePendingCommitment.length > 0 &&
                        storePendingCommitment.map((data, i) => {
                          if (i < 3) {
                            return (
                              <div
                                onClick={() => {
                                  navigate("/store/" + data.store_id);
                                }}
                                key={i}
                                className="w-[24%] justify-center ml-[10px] mt-[10px] flex flex-col align-items-center"
                              >
                                <div className="avatar top-[44px] mr-50">
                                  <img
                                    className="w-[88px] h-[88px] rounded-[44px]"
                                    src={config.imgUri + "/" + data.user_pic}
                                    alt="user image"
                                  />
                                </div>
                                <div className="w-[100%] bg-[#F9F9F9]">
                                  <div className="chat-sidebar-name mt-[50px] mb-[10px]">
                                    <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                                      {data.username}
                                    </h6>
                                    <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                                      #{data.store_id}
                                    </div>
                                  </div>
                                  <div className="border-[1px] m-auto border-[#EBEBEB] w-[90%]"></div>
                                  <div className="p-[10px] text-[18px] font-sstbold text-[#9D40AD] text-center">
                                    {data.cnt} التزام مسقط
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                    </div>
                  </div>
                </div>
              </>
            )}

            {moreCommitment && (
              <div className="w-[100%] mr-[10px] mt-[20px] bg-white p-[10px] rounded-[6px] shadow">
                <div className="flex justify-evenly">
                  <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                    المتاجر التي لديها التزام مسقط
                  </div>
                  <div
                    onClick={() => {
                      setmoreCommitment(false);
                    }}
                    className="text-[18px] cursor-pointer w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]"
                  >
                    خلف
                  </div>
                </div>
                <div className="flex flex-wrap">
                  {storePendingCommitment.length > 0 &&
                    storePendingCommitment.map((data, i) => {
                      return (
                        <div
                          onClick={() => {
                            navigate("/store/" + data.store_id);
                          }}
                          key={i}
                          className="w-[23%] mb-[20px] ml-[20px] justify-center flex flex-col align-items-center"
                        >
                          <div className="avatar  top-[44px] mr-50 ">
                            <img
                              className="w-[88px] h-[88px] rounded-[44px]"
                              src={config.imgUri + "/" + data.user_pic}
                              alt="user image"
                            />
                          </div>
                          <div className="w-[100%] bg-[#F9F9F9]">
                            <div className="chat-sidebar-name mt-[50px] mb-[10px]">
                              <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                                {data.username}
                              </h6>
                              <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                                #{data.store_id}
                              </div>
                            </div>
                            <div className="border-[1px] m-auto border-[#EBEBEB] w-[90%]"></div>
                            <div className="p-[10px] text-[18px] font-sstbold text-[#9D40AD] text-center">
                              {data.cnt} التزام مسقط
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
