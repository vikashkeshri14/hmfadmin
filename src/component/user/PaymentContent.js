import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import moment from "moment";
import DatePicker from "react-datepicker";
export default function PaymentContent() {
  const [userId, setUserId] = useState("");
  const [allpayments, setallpayments] = useState([]);
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
              {allpayments.length > 0 &&
                allpayments.map((data, i) => {
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
                              <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                {data.username}
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 1 }}
                              className=" w-[15%] text-center "
                            >
                              <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                {data.storename}
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 1 }}
                              className=" w-[15%] text-center "
                            >
                              <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                {data.total}
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 1 }}
                              className=" w-[15%] text-center "
                            >
                              <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                Order ID:: {data.id}
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 1 }}
                              className="w-[15%]  text-center "
                            >
                              <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                {moment(data.created_at).format("DD/MM/YYYY")}
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 0 }}
                              className="w-[15%]  text-center "
                            >
                              <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                {data.payment_id}
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 0 }}
                              className="w-[15%]  text-center "
                            >
                              <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                {moment(data.payment_date).format("DD/MM/YYYY")}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  );
                })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
