import React, { useEffect, useState, useContext } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import Graph from "./Graph";

export default function Commitment(props) {
  const [from, setFrom] = useState("2022-11-01");
  const [to, setTo] = useState("2023-04-15");
  const [totalCommitment, setTotalCommitment] = useState(0);
  const [totalCommitmentAmount, setTotalCommitmentAmount] = useState(0);
  const [totalPendingCommitment, setTotalPendingCommitment] = useState(0);
  const [totalPendingCommitmentAmount, setTotalPendingCommitmentAmount] =
    useState(0);
  const [totalPaidCommitment, setTotalPaidCommitment] = useState(0);
  const [totalPaidCommitmentAmount, setTotalPaidCommitmentAmount] = useState(0);
  const [totalDropCommitment, setTotalDropCommitment] = useState(0);
  const [totalDropCommitmentAmount, setTotalDropCommitmentAmount] = useState(0);
  const [allCommitment, setAllCommitment] = useState([]);
  const [itemId, setItemId] = useState("");
  const [showItem, setShowItem] = useState(false);
  const [userId, setUserId] = useState("");
  const [showEmployeeCancel, setShowEmployeeCancel] = useState(false);
  const [showEmployeeCancelId, setShowEmployeeCancelId] = useState("");
  const [showCommitmentCancel, setShowCommitmentCancel] = useState(false);
  const [showCommitmentCancelId, setShowCommitmentCancelId] = useState("");
  const [showReceipt, setshowReceipt] = useState("");
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("loginUser"));
    setUserId(auth.id);
    setFrom(moment(props.dateRange[0]).format("YYYY-MM-DD"));
    setTo(moment(props.dateRange[1]).format("YYYY-MM-DD"));
    getAllCommitment(
      props.storeId,
      moment(props.dateRange[0]).format("YYYY-MM-DD"),
      moment(props.dateRange[1]).format("YYYY-MM-DD")
    );
  }, [props]);
  const sendAlert = async (sendTo, orderId) => {
    const obj = {
      userId: userId,
      sendTo: sendTo,
      user_type: "2",
      message: "Please pay the commitment for orderId :: " + orderId,
      orderId: orderId,
    };
    let params = { url: apiList.sendAlert, body: obj };
    let response = await ApiService.postData(params);
    alert("message send successfully");
    getAllCommitment(sendTo, from, to);
  };
  const updateCommitment = async (id) => {
    let obj = {
      orderId: id,
    };
    let params = { url: apiList.updateCommitment, body: obj };
    let response = await ApiService.postData(params);
    getAllCommitment(props.storeId, from, to);
  };
  const getAllCommitment = async (id, fromDate, toDate) => {
    let obj = {
      userId: id,
      from: fromDate,
      to: toDate,
    };
    if (fromDate == toDate) {
      obj = {
        userId: id,
      };
    }
    let params = { url: apiList.numberOfCommitmentByRangeUserId, body: obj };
    let response = await ApiService.postData(params);

    if (response) {
      setAllCommitment(response.totalOrderCommitmentByUserIdDetails);
      if (response.totalOrderCommitment.length > 0) {
        if (response.totalOrderCommitment[0].total != null) {
          let total =
            (response.totalOrderCommitment[0].total * config.commitmentRate) /
            100;
          setTotalCommitmentAmount(total);
        }
        if (response.totalOrderCommitment[0].total_order) {
          setTotalCommitment(response.totalOrderCommitment[0].total_order);
        }
      }
      if (response.totalDropCommitment.length > 0) {
        if (response.totalDropCommitment[0].total != null) {
          let total =
            (response.totalDropCommitment[0].total * config.commitmentRate) /
            10;
          setTotalDropCommitmentAmount(total);
        }
        if (response.totalDropCommitment[0].total_order) {
          setTotalDropCommitment(response.totalDropCommitment[0].total_order);
        }
      }
      if (response.totalPendingOrderCommitment.length > 0) {
        if (response.totalPendingOrderCommitment[0].total != null) {
          let total =
            (response.totalPendingOrderCommitment[0].total *
              config.commitmentRate) /
            100;
          setTotalPendingCommitmentAmount(total);
        }
        if (response.totalPendingOrderCommitment[0].total_order) {
          setTotalPendingCommitment(
            response.totalPendingOrderCommitment[0].total_order
          );
        }
      }
      if (response.totalPaidOrderCommitment.length > 0) {
        if (response.totalPaidOrderCommitment[0].total != null) {
          let total =
            (response.totalPaidOrderCommitment[0].total *
              config.commitmentRate) /
            100;
          setTotalPaidCommitmentAmount(total);
        }
        if (response.totalPaidOrderCommitment[0].total_order) {
          setTotalPaidCommitment(
            response.totalPaidOrderCommitment[0].total_order
          );
        }
      }
    }
    // setGetOrderList(response.result);
  };
  return (
    <>
      <div className="row mt-[10px]">
        <div className="col-md-12  col-sm-12  rounded-[6px]">
          <div className="row">
            <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
              <div className="card mb-[10px] pb-[10px]">
                <div className="p-[10px]">
                  <div className="text-[#959494] total-no-of-commitment text-center font-sstbold text-[18px]">
                    إجمالي عدد الإلتزامات
                  </div>
                  <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                    {totalCommitment}
                  </div>
                  <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                    5,09% أعلى من الشهر الماضي
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
              <div className="card mb-[10px] pb-[10px]">
                <div className="p-[10px]">
                  <div className="text-[#959494] total-amount-of-commitment text-center font-sstbold text-[18px]">
                    إجمالي قيمة الإلتزامات
                  </div>
                  <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                    {totalCommitmentAmount}
                  </div>
                  <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                    5,09% أعلى من الشهر الماضي
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
              <div className="card mb-[10px] pb-[10px]">
                <div className="p-[10px]">
                  <div className="text-[#959494] no-of-commitment-paid text-center font-sstbold text-[18px]">
                    عدد الالتزامات المدفوعة
                  </div>
                  <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                    {totalPaidCommitment}
                  </div>
                  <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                    5,09% أعلى من الشهر الماضي
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
              <div className="card mb-[10px] pb-[10px]">
                <div className="p-[10px]">
                  <div className="text-[#959494] total-amount-of-commitment-paid text-center font-sstbold text-[18px]">
                    قيمة الإلتزامات المدفوعة
                  </div>
                  <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                    {totalPaidCommitmentAmount}
                  </div>
                  <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                    5,09% أعلى من الشهر الماضي
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
              <div className="card mb-[10px] pb-[10px]">
                <div className="p-[10px]">
                  <div className="text-[#959494] text-center total-no-commitment-pending font-sstbold text-[18px]">
                    عدد الالتزامات المعلقة
                  </div>
                  <div className="text-[#FF9800] text-center font-sstbold text-[35px]">
                    {totalPendingCommitment}
                  </div>
                  <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                    5,09% أعلى من الشهر الماضي
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
              <div className="card mb-[10px] pb-[10px]">
                <div className="p-[10px]">
                  <div className="text-[#959494] total-amount-of-commitment-pending text-center font-sstbold text-[18px]">
                    قيمة الإلتزامات المعلقة
                  </div>
                  <div className="text-[#FF9800] text-center font-sstbold text-[35px]">
                    {totalPendingCommitmentAmount}
                  </div>
                  <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                    5,09% أعلى من الشهر الماضي
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
              <div className="card mb-[10px] pb-[10px]">
                <div className="p-[10px]">
                  <div className="text-[#959494] total-no-of-drop-commitment text-center font-sstbold text-[18px]">
                    عدد الإلتزامات المسقطة
                  </div>
                  <div className="text-[#9D40AD] text-center font-sstbold text-[35px]">
                    {totalDropCommitment}
                  </div>
                  <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                    5,09% أعلى من الشهر الماضي
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
              <div className="card mb-[10px] pb-[10px]">
                <div className="p-[10px]">
                  <div className="text-[#959494] total-amount-of-drop-commitment text-center font-sstbold text-[18px]">
                    مبلغ الإلتزامات المسقطة
                  </div>
                  <div className="text-[#9D40AD] text-center font-sstbold text-[35px]">
                    {totalDropCommitmentAmount}
                  </div>
                  <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                    5,09% أعلى من الشهر الماضي
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
      <div className="mb-[350px]">
        {allCommitment.length > 0 &&
          allCommitment.map((data, i) => {
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
                        <div className="text-[#484848] text-center text-[16px] font-sstbold ">
                          {data.alert.length > 0
                            ? moment(data.created_at).format("YYYY-MM-DD") +
                              " - " +
                              moment(data.alert[0].created_at).format(
                                "YYYY-MM-DD"
                              )
                            : moment(data.created_at).format("YYYY-MM-DD")}
                        </div>
                      </td>
                      <td
                        style={{ borderLeftWidth: 1 }}
                        className=" w-[12%] text-center "
                      >
                        <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                          رقم الطلب
                        </div>
                        <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                          {data.id}
                        </div>
                      </td>
                      <td
                        style={{ borderLeftWidth: 1 }}
                        className=" w-[15%] text-center "
                      >
                        <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                          {(data.total * config.commitmentRate) / 100} ريال
                        </div>
                      </td>
                      <td
                        style={{ borderLeftWidth: 1 }}
                        className=" w-[15%] text-center "
                        onClick={() => {
                          if (!showEmployeeCancel) {
                            setShowEmployeeCancelId(
                              (showEmployeeCancelId) => data.id
                            );
                            setShowEmployeeCancel(
                              (showEmployeeCancel) => !showEmployeeCancel
                            );
                          } else {
                            setShowEmployeeCancelId("");
                            setShowEmployeeCancel(
                              (showEmployeeCancel) => !showEmployeeCancel
                            );
                          }
                        }}
                      >
                        <div className="flex">
                          <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                            {data.alert.length} تنبيهات
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
                              showEmployeeCancelId == data.id
                                ? "relative"
                                : "relative hidden "
                            }
                          >
                            <div className="absolute text-[#484848] font-sstbold text-[17px] top-[30px] bg-[#ffffff] shadow rounded-bl-[6px] rounded-br-[6px]  w-[300px] p-[15px] left-[-40px]">
                              {data.alert.map((data, i) => {
                                return <div>{data.name}</div>;
                              })}
                            </div>
                          </div>
                        </div>
                      </td>
                      {data.status == "1" &&
                        data.payment_status == "1" &&
                        data.commitment == "0" && (
                          <td
                            style={{ borderLeftWidth: 1 }}
                            className=" w-[12%] cursor-pointer text-center "
                            onClick={() => {
                              sendAlert(data.store_id, data.id);
                            }}
                          >
                            <div className="flex self-center justify-center">
                              <div className="flex self-center">
                                <img
                                  src={
                                    config.domainUrl +
                                    "/panel/app-assets/images/bell-n.png"
                                  }
                                  className="h-[24px] w-[24px]"
                                />
                              </div>
                              <div className=" flex justify-center self-center text-[#FF9800] text-[16px] font-sstbold ">
                                <span>إرسال تذكير</span>
                              </div>
                            </div>
                          </td>
                        )}
                      {data.status == "1" &&
                        data.payment_status == "1" &&
                        data.commitment == "1" && (
                          <td
                            style={{ borderLeftWidth: 1 }}
                            className=" text-center w-[15%] "
                            onClick={() => {
                              if (showReceipt) {
                                setshowReceipt("");
                              } else {
                                setshowReceipt(data.id);
                              }
                            }}
                          >
                            <div className="flex justify-center">
                              {showReceipt == data.id ? (
                                <div className=" text-[#60BA62] text-[16px] font-sstbold ">
                                  عرض الإيصال
                                </div>
                              ) : (
                                <div className=" text-[#959494] text-[16px] font-sstbold ">
                                  عرض الإيصال
                                </div>
                              )}
                              <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                                {showReceipt == data.id ? (
                                  <img
                                    src={
                                      config.domainUrl +
                                      "/panel/app-assets/images/up.png"
                                    }
                                    className="h-[24px] mt-[3px] w-[24px]"
                                  />
                                ) : (
                                  <img
                                    src={
                                      config.domainUrl +
                                      "/panel/app-assets/images/dropdown.png"
                                    }
                                    className="h-[24px] mt-[3px] w-[24px]"
                                  />
                                )}
                              </div>
                            </div>
                            {showReceipt == data.id && (
                              <div className="absolute  left-[300px] p-[20px]  bg-white  ">
                                <div>
                                  <img
                                    src={
                                      config.imgUri +
                                      "/" +
                                      data.receipt[0].attachment
                                    }
                                    className="mt-[3px] w-[250px] h-[250px]"
                                  />
                                </div>
                                <div>
                                  <button
                                    onClick={() => {
                                      window.open(
                                        config.imgUri +
                                          "/" +
                                          data.receipt[0].attachment
                                      );
                                    }}
                                    className="w-[148px] h-[58px] rounded-[6px] mt-[10px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] "
                                  >
                                    عرض مكبر
                                  </button>
                                </div>
                              </div>
                            )}
                          </td>
                        )}
                      {data.status == "1" &&
                        data.payment_status == "1" &&
                        data.commitment == "0" && (
                          <td
                            style={{ borderLeftWidth: 1 }}
                            className="cursor-pointer w-[12%] text-center "
                            onClick={() => {
                              if (!showCommitmentCancel) {
                                setShowCommitmentCancelId(
                                  (showCommitmentCancelId) => data.id
                                );
                                setShowCommitmentCancel(
                                  (showCommitmentCancel) =>
                                    !showCommitmentCancel
                                );
                              } else {
                                setShowCommitmentCancelId("");
                                setShowCommitmentCancel(
                                  (showCommitmentCancel) =>
                                    !showCommitmentCancel
                                );
                              }
                            }}
                          >
                            <div className="flex">
                              <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                                لا يوجد إختيار
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
                                  showCommitmentCancelId == data.id
                                    ? "relative flex justify-center"
                                    : "relative hidden "
                                }
                              >
                                <div
                                  onClick={() => {
                                    if (
                                      window.confirm(
                                        "Are you sure want to drop the commitment?"
                                      )
                                    ) {
                                      updateCommitment(data.id);
                                    }
                                  }}
                                  className="absolute cursor-pointer text-[#484848] font-sstbold text-[17px] top-[30px] bg-[#ffffff] shadow rounded-bl-[6px] rounded-br-[6px]  w-[300px] p-[15px] left-[0px]"
                                >
                                  إسقاط الالتزام
                                </div>
                              </div>
                            </div>
                          </td>
                        )}
                      {data.status == "1" &&
                        data.payment_status == "1" &&
                        data.commitment == "1" && (
                          <td
                            style={{ borderLeftWidth: 0 }}
                            className=" text-center w-[10%] "
                          >
                            <img
                              src={
                                config.domainUrl +
                                "/panel/app-assets/images/alrajhi.png"
                              }
                              className="w-[84px] h-[30px]"
                            />
                          </td>
                        )}
                      {data.status == "1" &&
                      data.payment_status == "1" &&
                      data.commitment == "0" ? (
                        <td
                          style={{ borderLeftWidth: 0, padding: 0 }}
                          className=" w-[25%] text-center gradient-yellow "
                        >
                          <span className="font-sstbold text-[#ffffff] text-[20px]">
                            التزام معلق
                          </span>
                        </td>
                      ) : data.status == "1" &&
                        data.payment_status == "1" &&
                        data.commitment == "1" ? (
                        <td
                          style={{ borderLeftWidth: 0, padding: 0 }}
                          className=" w-[25%] font-sstbold text-[#ffffff] text-[20px] text-center gradient-green"
                        >
                          <span className="font-sstbold text-[#ffffff] text-[20px]">
                            التزام مدفوع
                          </span>
                        </td>
                      ) : data.commitment == "2" ? (
                        <td
                          style={{ borderLeftWidth: 0, padding: 0 }}
                          className=" w-[25%] font-sstbold text-[#ffffff] text-[20px] text-center gradient-purple"
                        >
                          <span className="font-sstbold text-[#ffffff] text-[20px]">
                            التزام مسقط
                          </span>
                        </td>
                      ) : (
                        <td
                          style={{ borderLeftWidth: 0, padding: 0 }}
                          className=" w-[25%] font-sstbold text-[#ffffff] text-[20px] text-center gradient-yellow"
                        >
                          <span className="font-sstbold text-[#ffffff] text-[20px]">
                            التزام معلق
                          </span>
                        </td>
                      )}
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
