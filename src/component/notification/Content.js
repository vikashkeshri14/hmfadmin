import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import moment from "moment";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
export default function Content() {
  const [value, onChange] = useState([new Date(), new Date()]);
  const [alertShow, setAlertShow] = useState(false);
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");
  const [iderror, setIderror] = useState(false);
  const [actualId, setactualId] = useState([]);
  const [addIds, setAddIds] = useState([]);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  const [userType, setUserType] = useState("2");
  const [alerts, setAlerts] = useState([]);
  const [showVal, setShowVal] = useState("");
  const [show, setShow] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [initialdata, setinitialdata] = useState([]);
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("loginUser"));
    setUserId(auth.id);
    getAlert();
  }, []);
  const getAlert = async () => {
    const obj = {
      from: "",
      to: "",
    };

    let params = { url: apiList.getAlert, body: obj };
    let response = await ApiService.postData(params);
    //console.log(response)
    setAlerts(response.result);
    setinitialdata(response.result);
  };
  const searchData = async (text) => {
    let search = initialdata;

    if (search.length > 0) {
      search = search.filter((data, i) => {
        if (
          data.username.indexOf(text) >= 0 ||
          data.name.indexOf(text) >= 0 ||
          !text
        ) {
          return data;
        }
      });
      setAlerts(search);
    }
  };
  const addId = async () => {
    if (!id) {
      setIderror(true);
      return;
    }
    if (id[0] != "#") {
      setIderror(true);
      return;
    }
    let num = id.substring(1);
    if (isNaN(num)) {
      setIderror(true);
      return;
    }
    setIderror(false);

    let addid = addIds;
    let sendId = actualId;
    sendId.push(num);
    setactualId(sendId);
    addid.push(id);
    let uniq = [...new Set(addid)];
    setAddIds(uniq);
    setId("");
  };
  const sendNotification = async () => {
    setButtonClick(true);
    if (!message) {
      setMessageError(true);
      setButtonClick(false);
      return;
    }
    const obj = {
      userId: userId,
      user_type: userType,
      sendTo: actualId,
      message: message,
    };
    let params = { url: apiList.addAlert, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      alert("message send successfully!");
      setButtonClick(false);
      setAlertShow(false);
      setMessage("");
      setAddIds([]);
      setactualId([]);
    }
  };
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div className=" content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section
            className={alertShow ? "blur-sm sms-management" : "sms-management"}
          >
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
                          searchData(e.target.value);
                        }}
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
                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  {/*  <input
                    type="number"
                    id="contact-info-icon"
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                    name="contact-icon"
                    placeholder="16/12/2022 - 16/12/2022"
                  /> */}

                  <DateRangePicker
                    calendarIcon=""
                    calendarClassName="border-0 "
                    className="form-control  text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                    onChange={onChange}
                    value={value}
                  />
                </div>
              </div>

              <div className="w-[37.5%] flex justify-end  dashboard-users mr-[10px]">
                <button
                  onClick={() => {
                    setAlertShow(true);
                  }}
                  className="w-[249px] h-[62px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] "
                >
                  إنشاء تنبية
                </button>
              </div>
            </div>
            <div className="row  rounded-[6px] mr-[0px] mt-[10px]">
              <div className="col-12 p-[0px]">
                <div className="divider">
                  <div className="divider-text">2023</div>
                </div>
              </div>
            </div>

            {alerts.length > 0 &&
              alerts.map((data, i) => {
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
                              {data.name}
                            </div>
                          </td>

                          <td className="w-[25%]">
                            <div
                              onClick={() => {
                                if (!show) {
                                  setShowVal(data.id);
                                  setShow((show) => !show);
                                } else {
                                  setShowVal("");
                                  setShow((show) => !show);
                                }
                              }}
                              className="flex cursor-pointer justify-end"
                            >
                              <div
                                className={
                                  showVal == data.id
                                    ? "text-[#60BA62] text-[16px] font-sstbold "
                                    : "text-[#484848] text-[16px] font-sstbold "
                                }
                              >
                                عرض نص التنبية
                              </div>
                              <div className="text-[#484848] mt-[3px]  text-center text-[16px] font-sstbold ">
                                <img
                                  src="../panel/app-assets/images/dropdown.png"
                                  className={
                                    showVal == data.id
                                      ? "h-[24px] rotate-180 w-[24px]"
                                      : "h-[24px] w-[24px]"
                                  }
                                />
                              </div>
                            </div>
                            <div
                              className={
                                showVal == data.id
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
          </section>
          {alertShow && (
            <>
              <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-[500px]  max-w-3xl">
                  <div className="relative bg-[#FAFAFA] rounded-[6px]   shadow-[0_1px_4px_1px_rgba(21,34,50,0.2)]">
                    <div className="flex p-[10px] pt-[20px] mb-[10px] pl-[0px]">
                      <div className="text-[#484848] w-[30%] text-[16px] font-sstbold ">
                        الفئة المستهدفة
                      </div>
                      <div className="w-[65%]">
                        <select
                          className="form-control bg-[#EBEBEB]"
                          id="basicSelect"
                          onChange={(e) => {
                            setUserType(e.target.value);
                          }}
                        >
                          <option value="2">المتاجر</option>
                          <option value="1">المستخدمين</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex p-[10px] pt-[20px] mb-[10px] pl-[0px]">
                      <div className="text-[#484848] w-[30%] text-[16px] font-sstbold ">
                        استهداف معين
                      </div>
                      <div className="w-[65%]">
                        <div className="position-relative">
                          <div
                            onClick={() => {
                              addId();
                            }}
                            className="absolute left-[10px] top-[15px]"
                          >
                            <i className="bx bxs-plus-circle"></i>
                          </div>
                          <input
                            dir="ltr"
                            type="text"
                            id="fname-icon"
                            value={id}
                            class={
                              iderror
                                ? "form-control text-left border-[#E80000] bg-[#EBEBEB] h-[49px]"
                                : "form-control text-left bg-[#EBEBEB] h-[49px]"
                            }
                            name="fname-icon"
                            onChange={(e) => {
                              setId(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex p-[10px] pt-[20px] mb-[10px] pl-[0px]">
                      <div className="col-md-12 flex form-group">
                        {addIds.length > 0 &&
                          addIds.map((data, i) => {
                            return (
                              <div
                                key={i}
                                className="pl-[5px] pr-[5px] text-[#60BA62] font-sstmedium text-[16px]"
                              >
                                {data}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="text-[#484848] text-center w-[30%] mt-[5px] text-[16px] font-sstbold  mb-[5px] ">
                        نص التنبية
                      </div>
                      <div className=" w-[65%] mb-[30px] ">
                        <textarea
                          onChange={(e) => setMessage(e.target.value)}
                          className={
                            messageError
                              ? "border-[#E80000] border-[1px] w-full rounded-[6px] h-[155px] bg-[#EBEBEB] text-[#484848] "
                              : " w-full rounded-[6px] h-[155px] bg-[#EBEBEB] text-[#484848] "
                          }
                        ></textarea>
                      </div>
                    </div>
                    <div className="flex justify-center pb-[30px]">
                      <button
                        disabled={buttonClick}
                        onClick={() => {
                          sendNotification();
                        }}
                        className="cancellation text-[24px] rounded-[6px] text-[#ffffff] bg-[#959494] w-[148px] h-[58px] font-sstbold ml-[10px]"
                      >
                        إرسال
                      </button>
                      <button
                        onClick={() => setAlertShow(false)}
                        className="ban text-[24px] rounded-[6px] bg-[#959494] text-[#ffffff] w-[148px] h-[58px] font-sstbold "
                      >
                        إلغاء
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
