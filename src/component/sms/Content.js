import React, { useEffect, useState } from "react";
import Graph from "./Graph";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import SmsList from "./SmsList";
export default function Content() {
  const [totalSms, setTotalSms] = useState("0");
  const [showModal, setShowModal] = useState(false);
  const [addIds, setAddIds] = useState([]);
  const [iderror, setIderror] = useState(false);
  const [actualId, setactualId] = useState([]);
  const [type, setType] = useState("2");
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    getSms();
  }, []);
  const getSms = async () => {
    let params = { url: apiList.getSms };
    let response = await ApiService.getData(params);
    if (response.result.length > 0) {
      setTotalSms(response.result[0].cnt);
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
    // isNaN
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
    const obj = {
      type: type,
      ids: actualId,
      message: message,
    };
    console.log(obj);
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
              <div className="w-[10%]  dashboard-users mr-[10px]">
                <div className="position-relative has-icon-right">
                  <div className="absolute top-[20px] left-0">
                    <i className="ficon bx bxs-stopwatch text-[24px] pl-[10px]"></i>
                  </div>
                  <input
                    dir="ltr"
                    type="number"
                    id="contact-info-icon"
                    className="form-control text-[16px] font-sstbold h-[62px] border-0 shadow-sm rounded-[6px]"
                    name="contact-icon"
                    placeholder=" 07 : 12  pm"
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
                  عرض سجل البلاغات
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
                  <Graph />
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
            <SmsList />
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
                                        محددة
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
                                    class="form-control h-[128px] bg-[#EBEBEB]"
                                    name="password"
                                    placeholder="  نص الرسالة"
                                    rows="3"
                                  ></textarea>
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
          </section>
        </div>
      </div>
    </div>
  );
}
