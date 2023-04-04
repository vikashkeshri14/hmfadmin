import React, { useEffect, useState } from "react";
import Graph from "./Graph";
import Piechart from "./Piechart";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import AllStore from "./AllStore";
import AllUser from "./AllUser";
import MostActiveStore from "./MostActiveStore";
import MostActiveUser from "./MostActiveUser";
import MostRatedStore from "./MostRatedStore";
import LowestRatedStore from "./LowestRatedStore";
import MostRatedUser from "./MostRatedUser";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { UserContext } from "../../contexts/UserContext";
export default function Content() {
  const [value, onChange] = useState([new Date(), new Date()]);
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
  const [showMoreStore, setshowMoreStore] = useState(false);
  const [showMoreUser, setshowMoreUser] = useState(false);
  const [showMoreActiveStore, setshowMoreActiveStore] = useState(false);
  const [showMoreRatedStore, setshowMoreRatedStore] = useState(false);
  const [showMoreActiveUser, setshowMoreActiveUser] = useState(false);
  const [showMoreLowestRatedStore, setshowMoreLowestRatedStore] =
    useState(false);
  const [onlineUser, setonlineUser] = useState(0);

  const [onlineStore, setonlineStore] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  useEffect(() => {
    getUserAndStore();
    getOnlineUser();
    //  getDevice();
  }, [from, to]);
  const getOnlineUser = async () => {
    let params = { url: apiList.online };
    let response = await ApiService.getData(params);
    setonlineUser(response.users.length);
    setonlineStore(response.store.length);
  };
  const getUserAndStore = async () => {
    const obj = {
      from: from,
      to: to,
    };
    let params = { url: apiList.getUserAndStoreByDate, body: obj };
    let response = await ApiService.postData(params);
    let store = response.store[0].cnt;
    let user = response.user[0].cnt;
    let sum = store + user;
    if (sum != 0) {
      let userper = Math.round((user / sum) * 100);
      let storeper = 100 - userper;
      setStoresPer(storeper);
      setUsersPer(userper);
    } else {
      let userper = 0;
      let storeper = 0;
      setStoresPer(storeper);
      setUsersPer(userper);
    }

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
                        type="text"
                        id="contact-info-icon"
                        className="form-control text-[20px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                        name="contact-icon"
                        placeholder="البحث"
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

              <div className="w-[24%]  dashboard-users mr-[10px]">
                <div className="position-relative has-icon-right">
                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  <DateRangePicker
                    calendarIcon=""
                    calendarClassName="border-0 "
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                    onChange={(e) => {
                      onChange(e);
                      if (e != null) {
                        setFrom(moment(e[0]).format("YYYY-MM-DD"));
                        setTo(moment(e[1]).format("YYYY-MM-DD"));
                      } else {
                        setFrom("");
                        setTo("");
                      }
                    }}
                    value={value}
                  />
                </div>
              </div>
            </div>
            {!showMoreStore &&
              !showMoreUser &&
              !showMoreActiveStore &&
              !showMoreActiveUser &&
              !showMoreRatedStore &&
              !showMoreLowestRatedStore && (
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
                              <Piechart
                                user={usersPer}
                                store={storesPer}
                                from={from}
                                to={to}
                              />
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
                                      {onlineStore} متاجر
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
                                      {onlineUser} مستخدمين
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
                      <Graph from={from} to={to} />
                    </div>
                  </div>
                </div>
              )}

            <UserContext.Provider
              value={{
                showMoreStore,
                setshowMoreStore,
                showMoreUser,
                setshowMoreUser,
                showMoreActiveStore,
                setshowMoreActiveStore,
                showMoreRatedStore,
                setshowMoreRatedStore,
                showMoreActiveUser,
                setshowMoreActiveUser,
                showMoreLowestRatedStore,
                setshowMoreLowestRatedStore,
              }}
            >
              {!showMoreStore &&
                !showMoreUser &&
                !showMoreActiveStore &&
                !showMoreActiveUser &&
                !showMoreRatedStore &&
                !showMoreLowestRatedStore && (
                  <>
                    <div className="row ">
                      <div className="col-md-6 col-sm-12 pl-[0px] ">
                        <AllStore searchData={searchText} from={from} to={to} />
                      </div>
                      <div className="col-md-6 col-sm-12 pl-[0px] ">
                        <AllUser searchData={searchText} from={from} to={to} />
                      </div>
                    </div>
                    <div className="row mt-[20px]">
                      <MostActiveStore
                        searchData={searchText}
                        from={from}
                        to={to}
                      />
                    </div>
                    <div className="row mt-[20px]">
                      <MostActiveUser
                        searchData={searchText}
                        from={from}
                        to={to}
                      />
                    </div>
                    <div className="row mt-[20px]">
                      <MostRatedStore
                        searchData={searchText}
                        from={from}
                        to={to}
                      />
                    </div>
                    <div className="row mt-[20px]">
                      <LowestRatedStore
                        searchData={searchText}
                        from={from}
                        to={to}
                      />
                    </div>
                  </>
                )}
              {showMoreStore && (
                <>
                  <div className="row mt-[20px]">
                    <div className="col-md-12 col-sm-12 pl-[0px] ">
                      <AllStore searchData={searchText} from={from} to={to} />
                    </div>
                  </div>
                </>
              )}
              {showMoreUser && (
                <>
                  <div className="row mt-[20px]">
                    <div className="col-md-12 col-sm-12 pl-[0px] ">
                      <AllUser searchData={searchText} from={from} to={to} />
                    </div>
                  </div>
                </>
              )}
              {showMoreActiveStore && (
                <div className="row mt-[20px]">
                  <MostActiveStore
                    searchData={searchText}
                    from={from}
                    to={to}
                  />
                </div>
              )}
              {showMoreActiveUser && (
                <div className="row mt-[20px]">
                  <MostActiveUser searchData={searchText} from={from} to={to} />
                </div>
              )}
              {showMoreRatedStore && (
                <div className="row mt-[20px]">
                  <MostRatedStore searchData={searchText} from={from} to={to} />
                </div>
              )}

              {showMoreLowestRatedStore && (
                <div className="row mt-[20px]">
                  <LowestRatedStore
                    searchData={searchText}
                    from={from}
                    to={to}
                  />
                </div>
              )}
            </UserContext.Provider>
            <div className="row mt-[20px]">{/* <MostRatedUser /> */}</div>
          </section>
        </div>
      </div>
    </div>
  );
}
