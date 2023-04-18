import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import InfoGraph from "./InfoGraph";
import moment from "moment";
export default function InfoIncoming(props) {
  const [storeReport, setStoreReport] = useState([]);
  const [productReport, setProductReport] = useState([]);
  const [pendingOrder, setPendingOrder] = useState("0");
  const [from, setFrom] = useState("2022-11-01");
  const [to, setTo] = useState("2023-04-15");
  const [showCancel, setShowCancel] = useState(false);
  const [showCancelId, setShowCancelId] = useState("");
  useEffect(() => {
    getAlertInfo(props.storeId);
  }, [props]);

  const getAlertInfo = async (id) => {
    const obj = {
      userId: id,
      from: from,
      to: to,
    };
    let params = { url: apiList.getReportProductById, body: obj };
    let response = await ApiService.postData(params);
    setProductReport(response.result);
    let params1 = { url: apiList.getReportStoreById, body: obj };
    let response1 = await ApiService.postData(params1);
    setStoreReport(response1.result);
  };
  return (
    <>
      <div className="row mt-[10px]">
        <div className="col-md-8 col-sm-12  pl-[0px] rounded-[6px] ">
          <div className="card mb-[10px]">
            <div className="p-[10px] flex justify-center h-[240px]">
              <table className="table justify-center self-center h-[180px] mb-0">
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
                        عدد البلاغات
                      </div>
                      <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                        {productReport.length + storeReport.length}
                      </div>
                      <div className="text-[16px] font-sstbold text-[#E80000]">
                        5,09% أعلى من الشهر الماضي
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className="  text-center w-[25%]"
                    >
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        بلاغات المتجر
                      </div>
                      <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                        {storeReport.length}
                      </div>
                      <div className="text-[16px] font-sstbold text-[#E80000]">
                        5,09% أعلى من الشهر الماضي
                      </div>
                    </td>
                    <td className="  text-center w-[25%]">
                      <div className=" flex justify-center text-[#959494] text-[18px] font-sstbold ">
                        بلاغات المنتجات
                      </div>
                      <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                        {productReport.length}
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
        <div className="col-md-4  col-sm-12 pl-[0px] rounded-[6px] ">
          <div className="card h-[240px] bg-white">
            <div className="text-[#959494] text-[18px] font-sstbold p-[10px]">
              البلاغات
            </div>
            <InfoGraph />
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
      <div className="mb-[200px]">
        {storeReport.length > 0 &&
          storeReport.map((data, i) => {
            return (
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
                          {data.username}
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
                        style={{ borderLeftWidth: 1 }}
                        className="w-[15%]  text-center "
                      >
                        <div className=" flex justify-center text-[#959494] text-[16px] font-sstbold ">
                          بلاغ عن المتجر
                        </div>
                      </td>

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
                        className="w-[25%]"
                      >
                        <div className="flex justify-end">
                          <div className="   text-[#959494] text-[16px] font-sstbold ">
                            ملخص الطلب
                          </div>
                          <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                            <img
                              src={
                                config.domainUrl +
                                "/panel/app-assets/images/dropdown.png"
                              }
                              className="h-[24px] w-[24px]"
                            />
                          </div>
                        </div>
                        <div
                          className={
                            showCancelId == data.id
                              ? "relative"
                              : "relative hidden "
                          }
                        >
                          <div className="absolute text-[#484848] font-sstbold text-[17px] top-[30px] bg-[#ffffff] shadow rounded-bl-[6px] rounded-br-[6px]  w-[300px] p-[15px] left-[-40px]">
                            {data.message}
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
