import React, { useEffect, useState } from "react";
import Graph from "./Graph";
import Piechart from "./Piechart";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
export default function Content() {
  const [stores, setStores] = useState("0");
  const [users, setUsers] = useState("0");
  const [storesDelete, setStoresDelete] = useState("0");
  const [usersDelete, setUsersDelete] = useState("0");
  const [storesPending, setStoresPending] = useState("0");
  const [usersPending, setUsersPending] = useState("0");
  const [storesPer, setStoresPer] = useState(0);
  const [usersPer, setUsersPer] = useState(0);
  const [android, setAndroid] = useState(0);
  const [ios, setIos] = useState(0);
  useEffect(() => {
    getUserAndStore();
    getDevice();
  }, []);
  const getUserAndStore = async () => {
    let params = { url: apiList.getUserAndStore };
    let response = await ApiService.getData(params);
    let store = response.store[0].cnt;
    let user = response.user[0].cnt;
    let sum = store + user;
    let userper = Math.round((user / sum) * 100);
    let storeper = 100 - userper;
    setStoresPer(storeper);
    setUsersPer(userper);
    setStores(response.store[0].cnt);
    setUsers(response.user[0].cnt);
    setStoresDelete(response.storeDelete[0].cnt);
    setUsersDelete(response.usersDelete[0].cnt);
    setStoresPending(response.storePending[0].cnt);
    setUsersPending(response.usersPending[0].cnt);

    // console.log(response);
  };
  const getDevice = async () => {
    let params = { url: apiList.getDevice };
    let response = await ApiService.getData(params);
    let android = response.store[0].cnt;
    let ios = response.store[0].cnt;
    let sum = android + ios;
    let androidper = (android / sum) * 100;
    let iosper = (ios / sum) * 100;
    setAndroid(androidper);
    setIos(iosper);

    // console.log(response);
  };
  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section id="users-analytics">
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
              <div className="col-md-6 col-sm-12  rounded-[6px]">
                <div className="row">
                  <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
                    <div className="card mb-[10px] pb-[10px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold text-[18px]">
                          عدد المتاجر
                        </div>
                        <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                          {stores}
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
                        <div className="text-[#959494] text-center font-sstbold text-[18px]">
                          عدد المستخدمين
                        </div>
                        <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                          {users}
                        </div>
                        <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-12 pl-[0px] col-sm-12 rounded-[6px]">
                    <div className="card mb-[10px] pb-[10px]">
                      <div className="text-[#959494] mt-[10px]  font-sstbold pr-[30px] text-[18px]">
                        نسبة أنواع مستخدمين التطبيق
                      </div>
                      <div className="row mt-[10px] mb-[20px]">
                        <div className="col-md-8 col-sm-12 mt-[40px]">
                          <div className="row pr-[25px]">
                            <div className="col-md-5 col-sm-12 flex">
                              <div className="bg-[#FF9800] h-[12px] w-[12px] mt-[10px] ml-[10px] rounded-[2px]"></div>
                              <div className="text-[#484848] font-sstbold text-[18px]">
                                {storesPer}% متاجر
                              </div>
                            </div>
                            <div className="col-md-7 col-sm-12 flex">
                              <div className="bg-[#60BA62] h-[12px] w-[12px] mt-[10px] ml-[10px] rounded-[2px]"></div>
                              <div className="text-[#484848] font-sstbold text-[18px]">
                                {usersPer}% مستخدمين
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <Piechart user={usersPer} store={storesPer} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12 pl-[0px] rounded-[6px] ">
                    <div className="card ">
                      <div className="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold pb-[10px] text-[18px]">
                          حذف الحسابات
                        </div>

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
                                className="  text-center w-[50%]"
                              >
                                <div className=" flex justify-center ">
                                  <img
                                    src="../panel/app-assets/images/shop.png"
                                    className="h-[24px] self-center text-center w-[24px]"
                                  />
                                </div>
                                <div className="text-[#FF9800] text-center text-[10px] font-sstbold ">
                                  {storesDelete} متاجر
                                </div>
                              </td>
                              <td className="text-center w-[50%]">
                                <div className="flex justify-center ">
                                  <img
                                    src="../panel/app-assets/images/user.png"
                                    className="h-[24px] self-center w-[24px]"
                                  />
                                </div>
                                <div className="text-[#60BA62] text-[10px] font-sstbold">
                                  {usersDelete} مستخدمين
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 pl-[0px] rounded-[6px] ">
                    <div className="card ">
                      <div className="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold pb-[10px] text-[18px]">
                          أخر المتصلين
                        </div>

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
                                className="  text-center w-[50%]"
                              >
                                <div className=" flex justify-center ">
                                  <img
                                    src="../panel/app-assets/images/shop.png"
                                    className="h-[24px] self-center text-center w-[24px]"
                                  />
                                </div>
                                <div className="text-[#FF9800] text-center text-[10px] font-sstbold ">
                                  {storesPending} متاجر
                                </div>
                              </td>
                              <td className="text-center w-[50%]">
                                <div className="flex justify-center ">
                                  <img
                                    src="../panel/app-assets/images/user.png"
                                    className="h-[24px] self-center w-[24px]"
                                  />
                                </div>
                                <div className="text-[#60BA62] text-[10px] font-sstbold">
                                  {usersPending} مستخدمين
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
                <div className="card mb-[10px] pb-[10px]">
                  <h4 className="p-[10px] text-[18px] font-sstbold text-[#959494]">
                    أوقات النشاط في التطبيق
                  </h4>
                  <Graph />
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      جميع المتاجر
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      جميع المتاجر
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      المتاجر الأكثر نشاطاً
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-[20px]">
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      المستخدمين الأكثر نشاطاً
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      المتاجر الأكثر تقييم
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      المتاجر الأقل تقييم
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      المتاجر الأكثر من يقييم
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/store.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px]">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                              <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/star.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/receive.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/send.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <div className="col-md-12 col-sm-12 pl-[0px] ">
                <div className="bg-white rounded-[6px] pb-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
                      المستخدمين الأكثر من يقييم
                    </div>
                    <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
                      عرض المزيد
                    </div>
                  </div>
                  <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
                    <div className="overflow-x-auto overflow-y-hidden flex ">
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="top-[44px] relative mr-50 ">
                          <img
                            className="w-[88px] h-[88px] rounded-[44px]"
                            src="../../../panel/app-assets/images/user-profile.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                            <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                              متجر أسرتي
                            </h6>
                            <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                              #959494
                            </div>
                          </div>
                          <div className="flex pb-[5px] justify-center">
                            <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                              <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px] mt-[2px]"
                                  src="../../../panel/app-assets/images/frame.png"
                                />
                                &nbsp;4.9
                              </div>
                              <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/info-red.png"
                                />
                                &nbsp;10
                              </div>
                              <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                                <img
                                  className="h-[24px] w-[24px]"
                                  src="../../../panel/app-assets/images/cake.png"
                                />
                                &nbsp;102
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
