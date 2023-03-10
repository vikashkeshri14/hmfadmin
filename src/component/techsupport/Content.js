import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";

export default function Content() {
  const [checkedTrash, setCheckedTrash] = useState(false);
  const [techList, setTechList] = useState([]);
  const [countChecked, setCountChecked] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  useEffect(() => {
    getTechSupport();
  }, []);
  const getTechSupport = async () => {
    let params = { url: apiList.getTechSupportList };
    let response = await ApiService.getData(params);
    setTechList(response.result);
  };
  const checkedOnChange = async (args, event) => {
    let countValue = countChecked;
    if (event.target.checked) {
      countValue.push(args);
    } else {
      countValue = countValue.filter((value, i) => value != args);
    }
    if (countValue.length > 0) {
      setCheckedTrash(true);
    } else {
      setCheckedTrash(false);
    }
    setCountChecked(countValue);
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
              <div className="w-[15%] flex mr-[10px] justify-center">
                {checkedTrash && (
                  <button className="w-[249px] h-[62px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] ">
                    <div className="flex justify-center">
                      <div>
                        <img
                          className="self-center ml-[5px] mt-[10px] w-[24px] h-[24px]"
                          src="../panel/app-assets/images/delete.png"
                        />
                      </div>
                      <div>حذف</div>
                    </div>
                  </button>
                )}
              </div>

              <div className="w-[22.5%] flex justify-end  dashboard-users mr-[10px]">
                <button
                  onClick={() => {
                    setShowModal(true);
                  }}
                  className="w-[249px] h-[62px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] "
                >
                  عرض سجل البلاغات
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
            <div className="row  mb-[10px] pl-[15px] pr-[15px]  ">
              <div className=" flex flex-wrap">
                {techList.map((data, i) => {
                  return (
                    <div
                      key={i}
                      className="w-[153px] mt-[10px] rounded-[6px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                    >
                      <div className="w-[100%] bg-[#FFFFFF]">
                        <div className="flex pb-[5px]">
                          <div className="w-full flex-col pr-[5px] pl-[5px]">
                            <div className="flex">
                              <div className="w-[50%] flex justify-start">
                                <div className="flex mt-[10px] mr-[5px] items-center">
                                  <input
                                    id="checked-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 rounded"
                                    onChange={(event) =>
                                      checkedOnChange(data.sender_id, event)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="w-[50%] mt-[10px] ml-[5px] flex justify-end">
                                {data.cnt != 0 ? (
                                  <div className="flex bg-[rgb(232,0,0,0.36)] justify-center h-[23px] w-[23px] rounded-full">
                                    <div className=" self-center text-[#E80000]  ">
                                      {data.cnt}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="flex justify-center mt-[10px]">
                              <img
                                className="w-[66px] h-[66px] rounded-[33px]"
                                src={config.imgUri + "/" + data.user_pic}
                                alt="user image"
                              />
                            </div>
                            <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[10px]">
                              {data.username}{" "}
                            </div>
                            <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[10px] mb-[10px]">
                              #{data.sender_id}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {showModal && (
              <>
                <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative  max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[700px] bg-[#FAFAFA] outline-none focus:outline-none">
                      <div class="card h-[300px] bg-[#FAFAFA] mt-[10px]">
                        <div class="card-body">
                          <form class="form form-horizontal">
                            <div class="form-body">
                              <div class="row">
                                <div class="col-md-3 pl-[0px] pr-[0px]">
                                  <label className="text-[#484848] text-[16px] font-sstbold">
                                    الفئة المستهدفة
                                  </label>
                                </div>
                                <div class="col-md-9 form-group">
                                  <fieldset className="form-group w-[100%] h-[49px] bg-[#EBEBEB]">
                                    <select
                                      style={{
                                        background:
                                          "url('../panel/app-assets/images/dropdown.png') no-repeat 16px",
                                      }}
                                      className="form-control bg-[#EBEBEB] h-[49px]"
                                      id="basicSelect"
                                      onChange={(e) => {
                                        // setType(e.target.value);
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

                                <div class="col-md-2">
                                  <label className="text-[#484848] text-[16px] font-sstbold">
                                    نص الرسالة
                                  </label>
                                </div>
                                <div class="col-md-10 form-group">
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
                                    rows="3"
                                  >
                                    {message}
                                  </textarea>
                                </div>

                                <div class="col-sm-12 mt-[20px] d-flex justify-center">
                                  <button
                                    onClick={() => {
                                      //senSms();
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
