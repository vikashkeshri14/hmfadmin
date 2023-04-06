import React, { useEffect, useState, useRef } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

export default function Content() {
  const [value, onChange] = useState([new Date(), new Date()]);
  const [checkedTrash, setCheckedTrash] = useState(false);
  const [techList, setTechList] = useState([]);
  const [countChecked, setCountChecked] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState("");
  const [userId, setUserId] = useState("");
  const [showChatArray, setShowChatArray] = useState("");
  const [messageError, setMessageError] = useState(false);
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("loginUser"));
    setUserId(auth.id);
    getTechSupport();
  }, []);
  const sendChat = async (id) => {
    if (!chat) {
      return;
    }

    const obj = {
      reply_id: userId,
      sender_id: id,
      chatRoom: "room-" + id,
      message: chat,
    };
    let params = { url: apiList.sendChat, body: obj };
    let response = await ApiService.postData(params);
    console.log(response);
    getTechSupport();
    setChat("");
  };
  const getTechSupport = async () => {
    let params = { url: apiList.getTechSupportList };
    let response = await ApiService.postData(params);

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
  const chatshow = async (id) => {
    let chatId = showChatArray;
    // let techlist = techList;
    if (showChatArray == id) {
      setShowChatArray("");
      //setTechList(techlist);
    } else {
      setShowChatArray(id);
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
                  <div className="absolute top-[20px] zindex-1 left-0">
                    <i className="ficon bx bxs-calendar  text-[24px] pl-[10px]"></i>
                  </div>
                  <DateRangePicker
                    calendarIcon=""
                    calendarClassName="border-0 "
                    className="form-control  text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                    onChange={onChange}
                    value={value}
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
                  إنشاء رسالة
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
              <div className="flex min-h-[1300px] flex-wrap">
                {techList.map((data, i) => {
                  console.log(data.showchat);
                  return (
                    <div key={i} className="relative">
                      <div className="w-[153px]  mt-[10px] rounded-[6px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                        <div className="w-[100%] min-h-[200px] bg-[#FFFFFF]">
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
                                    <div
                                      onClick={() => {
                                        chatshow(data.sender_id);
                                      }}
                                      className="flex bg-[rgb(232,0,0,0.36)] justify-center h-[23px] w-[23px] rounded-full"
                                    >
                                      <div className=" self-center text-[#E80000]  ">
                                        {data.cnt}
                                      </div>
                                    </div>
                                  ) : (
                                    <div
                                      onClick={() => {
                                        chatshow(data.sender_id);
                                      }}
                                      className="flex  justify-center h-[23px] w-[23px] "
                                    >
                                      <div className="text-center">
                                        <img
                                          src="../../../panel/app-assets/images/support.png"
                                          className="h-[28.8px] ml-[30px] w-[28.8px]"
                                        />
                                      </div>
                                    </div>
                                  )}
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
                                {data.username}
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[10px] mb-[10px]">
                                #{data.sender_id}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          showChatArray == data.sender_id
                            ? "absolute w-full"
                            : "hidden w-full"
                        }
                      >
                        <div
                          style={{
                            background:
                              "url('../panel/app-assets/images/chat_back.png') no-repeat ",
                          }}
                          className="h-[610px]  flex flex-col  w-[439px]"
                        >
                          <div
                            onClick={() => {
                              //alert("d");
                              setShowChatArray("");
                            }}
                            className="self-end zindex-1 pt-[40px] pl-[30px]"
                          >
                            <img
                              src="../panel/app-assets/images/close-circle.png"
                              className="w-[40px] h-[40px]"
                            />
                          </div>
                          <div className="text-[16px] font-sstbold text-[#484848] text-center pt-[0px]">
                            {data.username}
                          </div>
                          <div className="text-[16px] font-sstbold text-[#484848] text-center pt-[0px]">
                            #{data.sender_id}
                          </div>
                          <div className="chat-start overflow-y-scroll mb-[40px] p-[20px] flex flex-col">
                            {data.chat.map((reply, k) => {
                              return reply.reply_id != null ? (
                                <div
                                  key={k}
                                  className="py-2 px-2 bg-[#E9F2E9] flex flex-col self-start rounded-[27px] h-min-[69px] m-1 ml-[30px] mb-[20px] w-[70%] relative"
                                >
                                  <img
                                    className="w-[39px] h-[27px] absolute bottom-[-3px] right-[-12px]"
                                    src={
                                      config.domainUrl +
                                      "/panel/app-assets/images/mesreceive.png"
                                    }
                                  />
                                  <div className="text-[#484848] leading-[20px] text-left text-[14px] pl-[10px] pr-[10px] mb-3">
                                    {reply.message}
                                  </div>
                                  <div className="flex-row flex justify-end pr-[20px]">
                                    <div className="pl-[10px] ">
                                      <div className="text-[10px] leading-[20px] text-[#959494] text-right">
                                        {moment(reply.created_at).fromNow()}
                                      </div>
                                    </div>
                                    <div>
                                      <img
                                        className="h-[7px] w-[10px] mt-[8px]"
                                        src={
                                          config.domainUrl +
                                          "/panel/app-assets/images/unread.png"
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  key={k}
                                  className="py-2 px-2 bg-[#F7EAD7] flex flex-col self-end rounded-[27px] h-min-[69px] m-1 mr-[50px] mb-3 w-[70%] relative"
                                >
                                  <img
                                    className="w-[39px] h-[27px]  absolute bottom-[-3px] left-[-11px]"
                                    src={
                                      config.domainUrl +
                                      "/panel/app-assets/images/messend.png"
                                    }
                                  />
                                  <div className="text-[#484848] leading-[20px] text-left text-[14px] pl-[10px] pr-[10px] mb-3">
                                    {reply.message}
                                  </div>
                                  <div className="flex flex-row justify-end pr-[20px]">
                                    <div className="pl-[10px] flex">
                                      <div className="text-[10px] pr-[10px] leading-[20px] text-[#959494] text-left">
                                        {moment(reply.created_at).fromNow()}
                                      </div>
                                    </div>
                                    <div className=" flex">
                                      <img
                                        className="h-[7px]  w-[10px] mt-[8px]"
                                        src={
                                          config.domainUrl +
                                          "/panel/app-assets/images/unread.png"
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <div className="absolute flex self-center right-[20px]  bottom-[20px]">
                            <div className="position-relative self-center  has-icon-left">
                              <div
                                onClick={() => {
                                  sendChat(data.sender_id);
                                }}
                                className="absolute zindex-1 top-[20px] left-[20px] w-[24px] h-[24px]"
                              >
                                <i className="bx rotate-180 text-[30px] bxs-send"></i>
                              </div>
                              <input
                                type="text"
                                id="contact-info-icon"
                                className="form-control self-center text-[20px] rounded-[12px] bg-[#FAFAFA]  w-[394px] font-sstroman h-[72px] border-0 "
                                name="contact-icon"
                                placeholder="send"
                                value={chat}
                                onChange={(e) => setChat(e.target.value)}
                              />
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
