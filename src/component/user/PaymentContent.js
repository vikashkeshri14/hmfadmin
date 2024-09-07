import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import moment from "moment";
import DatePicker from "react-datepicker";
import config from "../../config/config.json";
export default function PaymentContent() {
  const [userId, setUserId] = useState("");
  const [allpayments, setallpayments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [storeDetail, setstoreDetail] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [endDate, setEndDate] = useState(null);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("loginUser"));
    setUserId(auth.id);
    getUserPaymentOrder();
  }, []);

  const Search = async () => {
    const obj = {
      order_id: searchText,
      from: startDate,
      to: endDate,
      status: paymentStatus,
    };
    //console.log(obj);

    let params = { url: apiList.getUserPaymentOrderByFilter, body: obj };
    let response = await ApiService.postData(params);

    setallpayments(response.result);
  };
  const getUserPaymentOrder = async () => {
    let params = { url: apiList.getUserPaymentOrder };
    let response = await ApiService.getData(params);
    // console.log(response);
    setallpayments(response.result);
    //setinitialdata(response.result);
  };

  const paidFamily = async (args) => {
    setShowModal(false);
    setConfirm(true);
    setOrderId(args);
  };
  const Paid = async () => {
    setShowModal(false);
    setConfirm(false);
    const obj = {
      order_id: orderId,
    };
    let params = { url: apiList.familyPaidStatus, body: obj };
    let response = await ApiService.postData(params);
    setOrderId((args) => "");
    getUserPaymentOrder();
  };
  const NotPaid = async () => {
    setShowModal(false);
    setConfirm(false);
    setOrderId((args) => "");
  };
  const getOrderDetail = async (args) => {
    const obj = {
      order_id: args,
    };
    let params = { url: apiList.getStoreByOrderId, body: obj };
    let response = await ApiService.postData(params);
    setstoreDetail(response.result);
    // console.log(response);
    setShowModal((showModal) => !showModal);
  };
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div className=" content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section className="sms-management">
            <div className="row  rounded-[6px] mr-[0px] mt-[10px]">
              <div className="col-12 p-[0px]">
                <div className="divider">
                  <div className="divider-text">User Payment</div>
                </div>
              </div>
            </div>
            <div className="row flex ">
              <div className="w-[15%] mr-[15px] dashboard-users">
                <div className="row">
                  <div className="col-12">
                    <div className="position-relative has-icon-left">
                      <input
                        type="text"
                        id="contact-info-icon"
                        className="form-control text-[20px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                        name="contact-icon"
                        placeholder="معرف الطلب"
                        value={searchText}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                        }}
                      />
                      <div className="form-control-position top-[20px] right-[10px] w-[24px] h-[24px]">
                        <img
                          src={
                            config.domainUrl +
                            "/panel/app-assets/images/search.png"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[15%]  dashboard-users mr-[10px]">
                <div className="position-relative has-icon-right">
                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>

                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    dateFormat="yyyy/dd/MM"
                    endDate={endDate}
                    placeholderText="From Date"
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                  />
                </div>
              </div>
              <div className="w-[15%]  dashboard-users mr-[10px]">
                <div className="position-relative has-icon-right">
                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>

                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="yyyy/dd/MM"
                    placeholderText="To Date"
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                  />
                </div>
              </div>
              <div className="w-[25%]  dashboard-users mr-[20px]">
                <div className="row">
                  <div className="bg-[#ffffff] flex  h-[62px] shadow rounded-[6px]">
                    <div
                      onClick={() => {
                        setPaymentStatus((paymentStatus) => 0);
                        // Search();
                      }}
                      className={
                        paymentStatus == "0"
                          ? "pl-[15px] cursor-pointer daily text-[16px] font-sstbold justify-center self-center text-[#FF9800] pr-[15px]"
                          : "pl-[15px] cursor-pointer daily text-[16px] font-sstbold justify-center self-center text-[#484848] pr-[15px]"
                      }
                    >
                      في انتظار الدفع
                    </div>
                    <div className="border-r-[1px] border-[#EBEBEB]"></div>

                    <div
                      onClick={() => {
                        setPaymentStatus((paymentStatus) => 1);
                        // Search();
                      }}
                      className={
                        paymentStatus == "1"
                          ? "pl-[30px] cursor-pointer annual text-[16px] font-sstbold justify-center self-center text-[#FF9800] pr-[30px]"
                          : "pl-[30px] cursor-pointer annual text-[16px] font-sstbold justify-center self-center text-[#484848] pr-[30px]"
                      }
                    >
                      الدفع الكامل
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[10%]  dashboard-users mr-[10px] pr-[30px]">
                <button
                  onClick={() => {
                    Search();
                  }}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-[8px] px-2 rounded"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="min-h-[450px]">
              <div
                className={
                  confirm
                    ? "bg-[#ccc] row p-[10px] rounded-[6px] mr-[0px] mt-[10px]"
                    : "row p-[10px]  bg-white rounded-[6px] mr-[0px] mt-[10px]"
                }
              >
                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th className="text-center ">Order Id</th>
                      <th className="text-center ">User</th>
                      <th className="text-center ">Store</th>
                      <th className="text-center ">Payment Date</th>
                      <th className="text-center ">Payment Id</th>
                      <th className="text-center ">Payment Method</th>
                      <th className="text-center ">Family Payment Status</th>
                      <th className="text-center ">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allpayments.length > 0 &&
                      allpayments.map((data, i) => {
                        return (
                          <tr
                            key={i}
                            style={{
                              borderRightWidth: 0,
                            }}
                            className=""
                          >
                            <td
                              style={{ borderLeftWidth: 1 }}
                              className="text-center "
                            >
                              {data.id}
                            </td>
                            <td
                              style={{ borderLeftWidth: 1 }}
                              className="text-center "
                            >
                              <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                {data.username}
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 1 }}
                              className="text-center "
                            >
                              <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                {data.storename}
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 1 }}
                              className="text-center "
                            >
                              {moment(data.payment_date).format(
                                "DD/MM/YYYY HH:mm"
                              )}
                            </td>

                            <td
                              style={{ borderLeftWidth: 1 }}
                              className=" text-center "
                            >
                              <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                {data.payment_id}
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 1 }}
                              className="text-center "
                            >
                              {data.provider_method}
                            </td>
                            <td
                              style={{ borderLeftWidth: 1 }}
                              className="text-center "
                            >
                              {data.family_paid_status == 0 ? (
                                <span className="text-warning">Pending</span>
                              ) : (
                                <span className="text-success">
                                  Paid to Family
                                </span>
                              )}
                            </td>
                            <td
                              style={{ borderLeftWidth: 1 }}
                              className="text-center "
                            >
                              {data.family_paid_status == 0 && (
                                <div
                                  className="text-primary cursor-pointer"
                                  onClick={() => getOrderDetail(data.id)}
                                >
                                  Pay
                                </div>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
      {confirm && (
        <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative  max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[280px] bg-[#FAFAFA] outline-none focus:outline-none">
              <div className="card h-[100px] bg-[#FAFAFA] mt-[0px]">
                <div className="card-body">
                  <div className="font-bold text-center text-xl mb-2">
                    هل دفعت لعائلتك؟
                  </div>
                  <div className="text-center">
                    <button
                      onClick={() => {
                        Paid();
                      }}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-[8px] px-2 rounded"
                    >
                      نعم
                    </button>
                    &nbsp;&nbsp;
                    <button
                      onClick={() => {
                        NotPaid();
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-[8px] px-2 rounded"
                    >
                      لا
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <>
          <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[980px] bg-[#FAFAFA] outline-none focus:outline-none">
                <div className="card h-[300px] bg-[#FAFAFA] mt-[10px]">
                  <div className="card-body">
                    <form className="form form-horizontal">
                      <div className="form-body">
                        <div className="row">
                          <div className="col-md-12 text-[#484848] text-center text-[16px] font-sstbold pl-[0px] pr-[0px]">
                            تفاصيل المتجر
                          </div>
                          <div className="col-md-12">
                            <table className="table mb-0">
                              <thead>
                                <tr>
                                  <th className="text-center ">Order Id</th>
                                  <th className="text-center ">Amount</th>
                                  <th className="text-center ">Store User</th>
                                  <th className="text-center ">Stc Number</th>
                                  <th className="text-center ">
                                    Bank A/c Name
                                  </th>
                                  <th className="text-center ">
                                    Account Number
                                  </th>
                                  <th className="text-center ">Iban</th>
                                </tr>
                              </thead>
                              <tbody>
                                {storeDetail.length > 0 && (
                                  <tr>
                                    <td>{storeDetail[0].order_id}</td>
                                    <td>{storeDetail[0].total}</td>
                                    <td>{storeDetail[0].username}</td>
                                    <td>{storeDetail[0].stc_number}</td>
                                    <td>
                                      {storeDetail[0].bank_account_fullname}
                                    </td>
                                    <td>{storeDetail[0].account_number}</td>
                                    <td>{storeDetail[0].iban}</td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                          <div className="col-md-12">
                            <button
                              onClick={() => {
                                paidFamily(storeDetail[0].order_id);
                              }}
                              type="button"
                              className="btn hover:text-[#707070] send bg-[#959494] text-[24px] w-[120px] h-[48px] rounded-[6px] font-sstbold text-[#ffffff] mr-1"
                            >
                              Paid
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
}
