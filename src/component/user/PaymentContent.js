import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import moment from "moment";
import DatePicker from "react-datepicker";
export default function PaymentContent() {
  const [userId, setUserId] = useState("");
  const [allpayments, setallpayments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [storeDetail, setstoreDetail] = useState([]);
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("loginUser"));
    setUserId(auth.id);
    getUserPaymentOrder();
  }, []);

  const getUserPaymentOrder = async () => {
    let params = { url: apiList.getUserPaymentOrder };
    let response = await ApiService.getData(params);
    console.log(response);
    setallpayments(response.result);
    //setinitialdata(response.result);
  };

  const paidFamily = async (args) => {};
  const getOrderDetail = async (args) => {
    const obj = {
      order_id: args,
    };
    let params = { url: apiList.getStoreByOrderId, body: obj };
    let response = await ApiService.postData(params);
    setstoreDetail(response.result);
    console.log(response);
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
            <div className="min-h-[450px]">
              <div className="row p-[10px]  bg-white rounded-[6px] mr-[0px] mt-[10px]">
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
                                <span className="text-success">Pending</span>
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
      {showModal && (
        <>
          <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[900px] bg-[#FAFAFA] outline-none focus:outline-none">
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
                                paidFamily();
                              }}
                              type="button"
                              class="btn hover:text-[#707070] send bg-[#959494] text-[24px] w-[120px] h-[48px] rounded-[6px] font-sstbold text-[#ffffff] mr-1"
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
