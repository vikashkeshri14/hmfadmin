import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import { Squares } from "react-activity";
import moment from "moment";
import "react-activity/dist/library.css";

export default function Chat(props) {
  const bottomRef = useRef(null);
  const [team, setTeam] = useState([]);
  const [message, setMessage] = useState("");
  const [showChatArray, setShowChatArray] = useState({});
  const [showchatTrue, setshowchatTrue] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [userId, setUserId] = useState("");

  let intervalId = useRef(null);
  const sendChat = async (id) => {
    if (!message) {
      return;
    }
    const obj = {
      reply_id: userId,
      sender_id: id,
      chatRoom: "room-" + id,
      message: message,
    };

    let params = { url: apiList.sendChat, body: obj };
    let response = await ApiService.postData(params);
    console.log(response);
    getTeam();
    setMessage("");
  };
  const chatshow = async (data) => {
    if (showChatArray.hasOwnProperty("id")) {
      if (showChatArray.sender_id == data.sender_id) {
        setShowChatArray({});
        setshowchatTrue(false);
        clearInterval(intervalId.current);
      } else {
        clearInterval(intervalId.current);
        setShowChatArray(data);
        setshowchatTrue(true);
        intervalId.current = setInterval(async () => {
          console.log("hello");
          let params = { url: apiList.getLastSeen };
          let response = await ApiService.postData(params);
          setTeam(response.result);
          if (data.hasOwnProperty("id")) {
            response.result.map((item, i) => {
              if (data.id == item.id) {
                setShowChatArray(item);
              }
            });
          }
        }, 1500);
      }
    } else {
      setShowChatArray(data);
      intervalId.current = setInterval(async () => {
        console.log("helloh");
        let params = { url: apiList.getLastSeen };
        let response = await ApiService.postData(params);
        setTeam(response.result);
        if (data.hasOwnProperty("id")) {
          response.result.map((item, i) => {
            if (data.id == item.id) {
              setShowChatArray(item);
            }
          });
        }
      }, 1500);

      setshowchatTrue(true);
    }
  };
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("loginUser"));
    setUserId(auth.id);
    getTeam();
    return () => {
      console.log("hi");
      // 👇️ clear timeout when the component unmounts
      clearInterval(intervalId.current);
    };
  }, []);
  const getTeam = async () => {
    let params = { url: apiList.getLastSeen };
    let response = await ApiService.postData(params);
    if (response.result.length > 0) {
      setTeam(response.result);
    }
  };
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [showChatArray]);
  return (
    <>
      <div>
        <h1 className="text-[#959494] text-[18px] font-sstbold pt-[20px] pr-[15px]">
          أخر ظهور للأعضاء
        </h1>
        <ul className="chat-sidebar-list p-[10px]">
          {team.length > 0 &&
            team.map((data, i) => {
              return (
                <li
                  key={i}
                  className="bg-[#F9F9F9] p-[10px] rounded-[3px] mt-[10px] mb-[10px]"
                >
                  <div className="d-flex align-items-center">
                    <div className="m-0 mr-50 w-[25%]">
                      <img
                        className="w-[60px] h-[60px] rounded-[30px]"
                        src={config.imgUri + "/" + data.user_pic}
                        alt="sidebar user image"
                      />
                    </div>
                    <div className="chat-sidebar-name w-[48%]">
                      <h6 className="mb-0 text-[16px] font-sstbold text-[#484848]">
                        {data.username}
                      </h6>
                      <span className="text-muted text-[12px] font-sstbold text-[#959494]">
                        {data.user_type == "1" ? "User" : "Store"}
                      </span>
                    </div>
                    <div className="chat-sidebar-name flex flex-col justify-center  w-[25%]">
                      <div
                        onClick={() => {
                          if (data.chat.length > 0) {
                            chatshow(data);
                          } else {
                            chatshow(data);
                          }
                        }}
                        className="flex self-center justify-center"
                      >
                        <img
                          src={
                            config.domainUrl +
                            "/panel/app-assets/images/chat.png"
                          }
                          className="h-[28.8px] self-center  w-[28.8px]"
                        />
                      </div>
                      <span className="text-muted text-[12px] font-sstroman text-[#959494]">
                        {moment(data.created_at).fromNow()}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      {showchatTrue && (
        <div className="fixed top-[20%] left-[10%]">
          <div
            style={{
              background:
                "url('../panel/app-assets/images/chat-user.png') no-repeat ",
            }}
            className="h-[685px] relative  flex flex-col  w-[511px]"
          >
            <div
              onClick={() => {
                //alert("d");
                clearInterval(intervalId.current);
                setShowChatArray({});
                setshowchatTrue(false);
              }}
              className="self-end zindex-1 pt-[10px] pl-[30px]"
            >
              <img
                src="../panel/app-assets/images/close-circle.png"
                className="w-[40px] h-[40px]"
              />
            </div>
            <div className="text-[16px] font-sstbold text-[#484848] text-center pt-[0px]">
              {showChatArray.username}
            </div>
            <div className="text-[16px] font-sstbold text-[#484848] text-center pt-[0px]">
              #{showChatArray.user_id}
            </div>
            <div
              id="chat-scroll"
              className="chat-start  overflow-y-auto overflow-x-hidden  mb-[60px] p-[20px] flex flex-col"
            >
              {showChatArray.chat.map((reply, k) => {
                return reply.reply_id != null ? (
                  <div
                    key={k}
                    className="py-1  px-1 bg-[#F9F9F9] flex flex-col self-start rounded-[6px] h-min-[69px] m-1 ml-[30px] mb-[20px] w-[70%] relative"
                  >
                    <img
                      className="w-[39px] h-[27px] absolute bottom-[-5px] right-[-0px]"
                      src={
                        config.domainUrl +
                        "/panel/app-assets/images/send-chat.png"
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
                        {reply.is_seen == 1 ? (
                          <img
                            className="h-[7px] w-[10px] mt-[8px]"
                            src={
                              config.domainUrl +
                              "/panel/app-assets/images/read.png"
                            }
                          />
                        ) : (
                          <img
                            className="h-[7px] w-[10px] mt-[8px]"
                            src={
                              config.domainUrl +
                              "/panel/app-assets/images/unread.png"
                            }
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    key={k}
                    className="py-1  px-1 bg-[#ffffff] flex flex-col self-end rounded-[6px] h-min-[69px] m-1 mr-[50px] mb-3 w-[70%] relative"
                  >
                    <img
                      className="w-[39px] h-[27px]  absolute bottom-[-5px] left-[-0px]"
                      src={
                        config.domainUrl +
                        "/panel/app-assets/images/receive-chat.png"
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
                    </div>
                  </div>
                );
              })}
              <div ref={bottomRef} />
            </div>
            <div className="absolute flex self-center right-[20px]  bottom-[20px]">
              <div className="position-relative self-center  has-icon-left">
                <div
                  onClick={() => {
                    sendChat(showChatArray.user_id);
                  }}
                  className="absolute zindex-1 top-[20px] left-[20px] w-[24px] h-[24px]"
                >
                  <i className="bx rotate-180 text-[30px] bxs-send"></i>
                </div>
                <input
                  type="text"
                  id="contact-info-icon"
                  className="form-control self-center text-[20px] rounded-[12px] bg-[#EBEBEB]  w-[473px] font-sstroman h-[72px] border-0 "
                  name="contact-icon"
                  placeholder="send"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
