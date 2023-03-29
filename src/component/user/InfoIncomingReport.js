import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";

export default function InfoIncomingReport(props) {
  const [from, setFrom] = useState("2022-11-01");
  const [to, setTo] = useState("2023-04-15");
  const [storeReport, setStoreReport] = useState([]);
  const [storeReportResolve, setStoreReportResolve] = useState();
  const [showReport, setShowReport] = useState("");
  useEffect(() => {
    getAlertInfo(props.userId);
  }, [props]);

  const getAlertInfo = async (id) => {
    const obj = {
      userId: id,
      from: from,
      to: to,
    };

    let params1 = { url: apiList.getReportUserById, body: obj };
    let response1 = await ApiService.postData(params1);
    setStoreReport(response1.result);
    let details = response1.result;

    let resolved = details.reduce((acc, data) => {
      if (data.status == "1") {
        acc = acc + 1;
      }
      return acc;
    }, 0);
    //console.log(resolved);
    setStoreReportResolve(resolved);
  };
  return (
    <>
      <div className="row flex mt-[10px]">
        <div className="w-[191px] mr-[15px] dashboard-users">
          <div className="row">
            <div className="col-12">
              <div className="flex justify-evenly p-[10px] h-[71px] bg-white rounded-[6px]">
                <div className="text-[#959494]  text-[18px] font-sstbold self-center justify-center">
                  عدد البلاغات
                </div>
                <div className=" border-l-[1px]"></div>
                <div className="text-[#E80000] text-center pl-[10px] text-[18px] font-sstbold self-center justify-center">
                  {storeReport.length}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[262px] mr-[15px] dashboard-users">
          <div className="row">
            <div className="col-12">
              <div className="flex justify-evenly p-[10px] h-[71px] bg-white rounded-[6px]">
                <div className="text-[#FF9800]  text-[18px] font-sstbold self-center justify-center">
                  عدد البلاغات المعلقة
                </div>
                <div className=" border-l-[1px]"></div>
                <div className="text-[#FF9800] text-center pl-[10px] text-[18px] font-sstbold self-center justify-center">
                  {storeReportResolve}
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
      <div className="pb-[80px]">
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
                        <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                          {data.username}
                        </div>
                      </td>
                      <td
                        style={{ borderLeftWidth: 1 }}
                        className="w-[15%]  text-center "
                      >
                        <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                          {moment(data.created_at).format("YYYY-MM-DD")}
                        </div>
                      </td>
                      <td
                        style={{ borderLeftWidth: 1 }}
                        className="w-[15%]  text-center "
                      >
                        <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                          بلاغ عن منتج
                        </div>
                      </td>
                      <td
                        style={{ borderLeftWidth: 0 }}
                        className=" w-[15%] text-center "
                      >
                        <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                          اسم الموظف
                        </div>
                      </td>

                      <td
                        className="w-[25%] relative"
                        onClick={() => {
                          if (!showReport) {
                            setShowReport((showReport) => i + 1);
                          } else {
                            setShowReport("");
                          }
                        }}
                      >
                        {showReport == i + 1 ? (
                          <div className="flex justify-end">
                            <div className=" text-[#60BA62] text-[16px] font-sstbold ">
                              ملخص الطلب
                            </div>
                            <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                              <img
                                src={
                                  config.domainUrl +
                                  "/panel/app-assets/images/up.png"
                                }
                                className="h-[24px] w-[24px]"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-end">
                            <div className=" text-[#484848] text-[16px] font-sstbold ">
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
                        )}
                        {showReport == i + 1 && (
                          <div className="absolute text-[#484848] font-sstbold text-[17px] top-[60px] bg-[#ffffff] shadow rounded-bl-[6px] rounded-br-[6px]  w-[250px] p-[15px] left-[0px]">
                            {data.message}
                          </div>
                        )}
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
