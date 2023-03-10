import React, { useEffect, useState } from "react";
import Graph from "./Graph";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import { Squares } from "react-activity";
import "react-activity/dist/library.css";
export default function Content() {
  const [totalBanList, setTotalBanList] = useState([]);
  const [tempBan, setTempBan] = useState(0);
  const [deleteBan, setDeleteBan] = useState(0);
  const [alwaysBan, setAlwaysBan] = useState(0);

  const [tempBanList, setTempBanList] = useState(0);
  const [deleteBanList, setDeleteBanList] = useState(0);
  const [alwaysBanList, setAlwaysBanList] = useState(0);


  useEffect(() => {
    permanentban();
    tempban();
    deletedban();
    totalban();
  }, [])
  const totalban = async () => {
    let params = { url: apiList.totalban };
    let response = await ApiService.getData(params);
    setTotalBanList(response.result)
    //console.log(response.result);
  }
  const permanentban = async () => {
    let params = { url: apiList.permanentban };
    let response = await ApiService.getData(params);
    setAlwaysBan(response.result.length)
    setAlwaysBanList(response.result);
  }
  const tempban = async () => {
    let params = { url: apiList.tempban };
    let response = await ApiService.getData(params);
    setTempBan(response.result.length);
    setTempBanList(response.result);
  }
  const deletedban = async () => {
    let params = { url: apiList.deletedban };
    let response = await ApiService.getData(params);
    setDeleteBan(response.result.length);
    setDeleteBanList(response.result);
  }
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section className="sms-management">
            <div className="row flex ">
              <div className="w-[40%] mr-[15px] dashboard-users">
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
            <div className=" flex mt-[10px]">
              <div className="w-[60%] ml-[10px] h-[240px] rounded-[6px]">
                <div className="col-md-12 col-sm-12 pl-[0px] pr-[0px] mr-[0px] rounded-[6px] ">
                  <div className="card">
                    <div className="p-[0px] ">
                      <table className="mb-0 w-full">
                        <tbody>
                          <tr
                            style={{
                              borderRightWidth: 0,
                            }}
                            className="w-full"
                          >
                            <td
                              style={{ borderLeftWidth: 1 }}
                              className=" h-[240px] pb-[0px] pt-[0px] text-center "
                            >
                              <div className="always-ban flex justify-center text-[#959494] text-[18px] font-sstbold ">
                                ?????????????????? ????????????
                              </div>
                              <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                                {alwaysBan}
                              </div>
                              <div className="text-[16px] font-sstbold text-[#60BA62]">
                                5,09% ?????? ???? ?????????? ????????????
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 1 }}
                              className=" h-[240px] pb-[0px] pt-[0px] text-center "
                            >
                              <div className=" temp-ban flex justify-center text-[#959494] text-[18px] font-sstbold ">
                                ?????????????????? ????????????
                              </div>
                              <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                                {tempBan}
                              </div>
                              <div className="text-[16px] font-sstbold text-[#E80000]">
                                1,06% ???????? ???? ?????????? ????????????
                              </div>
                            </td>
                            <td
                              style={{ borderLeftWidth: 0 }}
                              className="h-[240px] pb-[0px] pt-[0px] text-center "
                            >
                              <div className="delete-ban flex justify-center text-[#959494] text-[18px] font-sstbold ">
                                ??????????????????
                              </div>
                              <div className="text-[#AD0000] text-center text-[35px] font-sstbold ">
                                {deleteBan}
                              </div>
                              <div className="text-[16px] font-sstbold text-[#E80000]">
                                1,06% ???????? ???? ?????????? ????????????
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[40%] h-[240px] rounded-[6px] mr-[0px] pr-[0px] pl-[0px]">
                <div className="card mb-[10px] h-[240px] pb-[10px]">

                  <Graph />
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] recently-ban p-[10px] font-sstbold text-[#959494]">
                      ?????????????????? ????????????
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      ?????? ????????????
                    </div>
                  </div>
                  <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      {totalBanList.length > 0 && totalBanList.map((data, i) => {

                        return (<div className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                          <div className="w-[100%] bg-[#F9F9F9]">
                            <div className="flex pb-[5px]">
                              <div className="w-full flex-col pr-[5px] pl-[5px]">
                                <div className="flex justify-center mt-[10px]">
                                  <img
                                    className="w-[66px] h-[66px] rounded-[33px]"
                                    src={config.imgUri + "/" + data.user_pic}
                                    alt="user image"
                                  />
                                </div>
                                <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                  {data.username}
                                </div>
                                <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                  #{data.id}
                                </div>
                                <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                  <div className="border-t-[1px]"></div>
                                </div>
                                <div className="flex mb-[10px]">
                                  <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                                    ?????????? ??????????
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>)
                      })}


                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] temporarily-ban w-[50%] p-[10px] font-sstbold text-[#959494]">
                      ?????????????????? ????????????
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      ?????? ????????????
                    </div>
                  </div>
                  <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      {tempBanList.length > 0 && tempBanList.map((data, i) => {

                        return (
                          <div className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                            <div className="w-[100%] bg-[#F9F9F9]">
                              <div className="flex pb-[5px]">
                                <div className="w-full flex-col pr-[5px] pl-[5px]">
                                  <div className="flex justify-center mt-[10px]">
                                    <img
                                      className="w-[66px] h-[66px] rounded-[33px]"
                                      src={config.imgUri + "/" + data.user_pic}
                                      alt="user image"
                                    />
                                  </div>
                                  <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                    {data.username}
                                  </div>
                                  <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                    #{data.id}
                                  </div>
                                  <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                    <div className="border-t-[1px]"></div>
                                  </div>
                                  <div className="flex mb-[10px]">
                                    <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                                      ?????????? ??????????
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>)
                      })}

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] always-ban w-[50%] p-[10px] font-sstbold text-[#959494]">
                      ?????????????????? ??????????
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      ?????? ????????????
                    </div>
                  </div>
                  <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      {alwaysBanList.length > 0 && alwaysBanList.map((data, i) => {

                        return (
                          <div className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                            <div className="w-[100%] bg-[#F9F9F9]">
                              <div className="flex pb-[5px]">
                                <div className="w-full flex-col pr-[5px] pl-[5px]">
                                  <div className="flex justify-center mt-[10px]">
                                    <img
                                      className="w-[66px] h-[66px] rounded-[33px]"
                                      src={config.imgUri + "/" + data.user_pic}
                                      alt="user image"
                                    />
                                  </div>
                                  <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                    {data.username}
                                  </div>
                                  <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                    #{data.id}
                                  </div>
                                  <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                    <div className="border-t-[1px]"></div>
                                  </div>
                                  <div className="flex mb-[10px]">
                                    <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                                      ?????????? ??????????
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>)
                      })}

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] delete-ban w-[50%] p-[10px] font-sstbold text-[#959494]">
                      ??????????????????
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      ?????? ????????????
                    </div>
                  </div>
                  <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      {deleteBanList.length > 0 && deleteBanList.map((data, i) => {

                        return (
                          <div className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                            <div className="w-[100%] bg-[#F9F9F9]">
                              <div className="flex pb-[20px] pt-[20px]">
                                <div className="w-full flex-col pr-[5px] pl-[5px]">
                                  <div className="flex justify-center mt-[10px]">
                                    <img
                                      className="w-[66px] h-[66px] rounded-[33px]"
                                      src={config.imgUri + "/" + data.user_pic}
                                      alt="user image"
                                    />
                                  </div>
                                  <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                    {data.username}
                                  </div>
                                  <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                    #{data.id}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>)
                      })}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
