import React, { useEffect, useState } from "react";
import Graph from "./Graph";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import SmsList from "./SmsList";
import moment from "moment";
import DatePicker from "react-datepicker";

export default function Content() {
  const [value, onChange] = useState([new Date(), new Date()]);
  const [totalSms, setTotalSms] = useState("0");
  const [showModal, setShowModal] = useState(false);
  const [addIds, setAddIds] = useState([]);
  const [iderror, setIderror] = useState(false);
  const [actualId, setactualId] = useState([]);
  const [type, setType] = useState("2");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [smsList, setSmsList] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [showSure, setShowSure] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [initialdata, setinitialdata] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  useEffect(() => {
    getSms();
  }, [startDate, endDate]);
  const getSms = async () => {
    const obj = {
      from: startDate,
      to: endDate,
    };

    let params = { url: apiList.getSms, body: obj };
    let response = await ApiService.postData(params);
    if (response.result.length > 0) {
      setTotalSms(response.result.length);
      setSmsList(response.result);
      setinitialdata(response.result);
    } else {
      setTotalSms(0);
      setSmsList([]);
      setinitialdata([]);
    }
  };

  const searchData = async (text) => {
    let search = initialdata;

    if (search.length > 0) {
      search = search.filter((data, i) => {
        if (
          data.username.indexOf(text) >= 0 ||
          data.title.indexOf(text) >= 0 ||
          !text
        ) {
          return data;
        }
      });
      setSmsList(search);
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

  const senSms = async () => {
    if (!title) {
      setTitleError(true);
      return;
    }
    setTitleError(false);

    if (!message) {
      setMessageError(true);
      return;
    }
    setMessageError(false);
    // if (actualId.length == 0) {
    //   alert("please add the ids");
    //   return;
    // }
    setShowModal(false);
    setShowSure(true);
  };
  const sendSure = async () => {
    const obj = {
      title: title,
      type: type,
      ids: actualId,
      message: message,
    };

    let params = { url: apiList.sendSmsToUser, body: obj };
    let response = await ApiService.postData(params);
    if (response.result) {
      alert("Sms send successfully!");
      setTitle("");
      setactualId([]);
      setMessage("");
      setShowModal(false);
    }
  };
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section className="sms-management">
            <div className="row flex ">
              <div className="w-[34%] mr-[15px] dashboard-users">
                <div className="row">
                  <div className="col-12">
                    <div className="position-relative has-icon-left">
                      <div className="absolute top-[20px] left-[10px] w-[24px] h-[24px]">
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

              <div className="w-[17%]  dashboard-users mr-[10px]">
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
              <div className="w-[17%]  dashboard-users mr-[10px]">
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
              <div className="w-[27.5%] flex justify-end  dashboard-users mr-[10px]">
                <button
                  onClick={() => {
                    setShowModal((showModal) => !showModal);
                  }}
                  className="w-[249px] h-[62px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] "
                >
                  إنشاء رسالة جديدة
                </button>
              </div>
            </div>
            <div className="row mt-[10px]">
              <div className="col-md-6 col-sm-12  rounded-[6px]">
                <div className="row">
                  <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
                    <div className="card mb-[10px] pb-[40px] pt-[40px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold text-[18px]">
                          عدد الرسائل المرسلة
                        </div>
                        <div className="text-[#484848] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                          {totalSms}
                        </div>
                        <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
                    <div className="card mb-[10px] pb-[40px] pt-[40px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] text-center font-sstbold text-[18px]">
                          مبلغ الرسائل المدفوعة
                        </div>
                        <div className="text-[#484848] pb-[5px] pt-[5px] text-center font-sstbold text-[35px]">
                          0
                        </div>
                        <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                          5,09% أقل من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
                <div className="card mb-[10px] pb-[10px]">
                  <div className="text-[#959494] text-[18px] font-sstbold pt-[10px] pr-[20px] ">
                    معدل إرسال الرسائل
                  </div>
                  <Graph from={startDate} to={endDate} />
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
            <SmsList smslist={smsList} />
            {showModal && (
              <>
                <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative  max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[700px] bg-[#FAFAFA] outline-none focus:outline-none">
                      <div class="card h-[400px] bg-[#FAFAFA] mt-[10px]">
                        <div class="card-body">
                          <form class="form form-horizontal">
                            <div class="form-body">
                              <div class="row">
                                <div class="col-md-2 pl-[0px] pr-[0px]">
                                  <label className="text-[#484848] text-[16px] font-sstbold">
                                    العنوان
                                  </label>
                                </div>
                                <div class="col-md-10 form-group ">
                                  <div class="position-relative">
                                    <input
                                      dir="ltr"
                                      type="text"
                                      id="fname-icon"
                                      value={title}
                                      class={
                                        titleError
                                          ? "form-control text-left border-[#E80000] bg-[#EBEBEB] h-[49px]"
                                          : "form-control text-left bg-[#EBEBEB] h-[49px]"
                                      }
                                      name="fname-icon"
                                      onChange={(e) => {
                                        setTitle(e.target.value);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div class="col-md-2 pl-[0px] pr-[0px]">
                                  <label className="text-[#484848] text-[16px] font-sstbold">
                                    المرسل إلية
                                  </label>
                                </div>
                                <div class="col-md-6 form-group">
                                  <fieldset className="form-group w-[100%] h-[49px] bg-[#EBEBEB]">
                                    <select
                                      style={{
                                        background:
                                          "url('../panel/app-assets/images/dropdown.png') no-repeat 16px",
                                      }}
                                      className="form-control bg-[#EBEBEB] h-[49px]"
                                      id="basicSelect"
                                      onChange={(e) => {
                                        setType(e.target.value);
                                      }}
                                    >
                                      <option attr="store" value="2">
                                        متاجر
                                      </option>
                                      <option attr="user" value="1">
                                        المستخدمين
                                      </option>
                                    </select>
                                  </fieldset>
                                </div>
                                <div class="col-md-4 form-group ">
                                  <div class="position-relative">
                                    <div
                                      onClick={() => {
                                        addId();
                                      }}
                                      class="absolute left-[10px] top-[15px]"
                                    >
                                      <i class="bx bxs-plus-circle"></i>
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

                                <div class="col-md-12 flex form-group">
                                  {addIds.length > 0 &&
                                    addIds.map((data, i) => {
                                      return (
                                        <div className="pl-[5px] pr-[5px] text-[#60BA62] font-sstmedium text-[16px]">
                                          {data}
                                        </div>
                                      );
                                    })}
                                </div>
                                <div class="col-md-12">
                                  <label className="text-[#484848] text-[16px] font-sstbold">
                                    نص الرسالة
                                  </label>
                                </div>
                                <div class="col-md-12 form-group">
                                  <textarea
                                    onChange={(e) => {
                                      setMessage(e.target.value);
                                    }}
                                    class={
                                      messageError
                                        ? "form-control h-[128px] border-1 border-[#E80000]  bg-[#EBEBEB]"
                                        : "form-control h-[128px] bg-[#EBEBEB]"
                                    }
                                    name="password"
                                    placeholder="  نص الرسالة"
                                    rows="3"
                                  >
                                    {message}
                                  </textarea>
                                </div>

                                <div class="col-sm-12 mt-[20px] d-flex justify-center">
                                  <button
                                    onClick={() => {
                                      senSms();
                                    }}
                                    type="button"
                                    class="btn hover:text-[#707070] send bg-[#959494] text-[24px] w-[148px] h-[58px] rounded-[6px] font-sstbold text-[#ffffff] mr-1"
                                  >
                                    إرسال
                                  </button>
                                  <button
                                    onClick={() => {
                                      setShowModal(false);
                                    }}
                                    type="button"
                                    class="btn bg-[#959494] hover:text-[#707070] cancel text-[24px] w-[148px] h-[58px] rounded-[6px] font-sstbold text-[#ffffff]"
                                  >
                                    إلغاء
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
            {showSure && (
              <>
                <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative  max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[700px] bg-[#FAFAFA] outline-none focus:outline-none">
                      <div class="card h-[400px] bg-[#FFFFFF] mt-[10px]">
                        <div class="card-body">
                          <form class="form form-horizontal">
                            <div class="form-body">
                              <div class="row">
                                <div class="col-md-12 pl-[0px] pr-[0px]">
                                  <label className="text-[#484848] text-[16px] font-sstbold">
                                    {title}
                                  </label>
                                </div>

                                <div class="col-md-2 border-l-[1px] mt-[15px] pl-[0px] pr-[0px]">
                                  <label className="text-[#959494] text-[16px] font-sstbold">
                                    المرسل إلية
                                  </label>
                                </div>
                                <div class="col-md-10 text-[#484848] text-[16px] font-sstbold mt-[15px] form-group">
                                  {actualId.length} {"  "}
                                  {type == "1" ? "المستخدمين" : "المتاجر"}
                                </div>

                                <div class="col-md-12 mt-[10px] text-[#484848] text-[20px] font-sstmedium">
                                  {message}
                                </div>

                                <div class="col-sm-12 mt-[20px] d-flex justify-center">
                                  <button
                                    onClick={() => {
                                      sendSure();
                                    }}
                                    type="button"
                                    class="btn hover:text-[#707070] send bg-[#959494] text-[24px] w-[148px] h-[58px] rounded-[6px] font-sstbold text-[#ffffff] mr-1"
                                  >
                                    تأكيد
                                  </button>
                                  <button
                                    onClick={() => {
                                      setShowSure(false);
                                      setTitle("");
                                      setactualId([]);
                                      setMessage("");
                                      setShowModal(false);
                                      setAddIds([]);
                                    }}
                                    type="button"
                                    class="btn bg-[#959494] hover:text-[#707070] cancel text-[24px] w-[148px] h-[58px] rounded-[6px] font-sstbold text-[#ffffff]"
                                  >
                                    إلغاء
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
          </section>
        </div>
      </div>
    </div>
  );
}
