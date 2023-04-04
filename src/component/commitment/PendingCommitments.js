import React, { useEffect, useState, useContext } from "react";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import { CommitmentContext } from "../../contexts/CommitmentContext";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

export default function PendingCommitments(props) {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [pendingList, setPendingList] = useState([]);
  const [userId, setUserId] = useState("");
  const [initialdata, setinitialdata] = useState([]);
  const [initialcall, setinitialcall] = useState(true);
  const { morePendingCommitment, setmorePendingCommitment } =
    useContext(CommitmentContext);
  useEffect(() => {
    let calldata = initialcall;
    if (moment(props.from).unix() != moment(from).unix()) {
      calldata = true;
      setFrom(props.from);
    }
    if (moment(props.to).unix() != moment(to).unix()) {
      calldata = true;
      setTo(props.to);
    }
    if (calldata) {
      const auth = JSON.parse(localStorage.getItem("loginUser"));
      setUserId(auth.id);

      getPendingList();
      setinitialcall(false);
    }
    searchData(props.searchData);
  }, [props]);

  const searchData = async (text) => {
    //setSearchText(text);
    let search = initialdata;
    search = search.filter((data, i) => {
      if (data.id == text || data.username.indexOf(text) >= 0 || !text) {
        return data;
      }
    });
    setPendingList(search);
  };

  const getPendingList = async () => {
    const obj = {
      from: props.from,
      to: props.to,
    };
    let params = { url: apiList.storePendingCommitment, body: obj };
    let response = await ApiService.postData(params);
    setPendingList(response.storeCommitment);
    setinitialdata(response.storeCommitment);
  };
  const sendAlert = async (sendTo, orderId) => {
    const obj = {
      userId: userId,
      sendTo: sendTo,
      user_type: "2",
      message: "Please pay the commitment for orderId :: " + orderId,
      orderId: orderId,
    };
    let params = { url: apiList.sendAlert, body: obj };
    let response = await ApiService.postData(params);
    alert("message send successfully");
    getPendingList();
  };
  return (
    <div className="col-md-12 col-sm-12 pl-[0px] ">
      <div className="bg-white rounded-[6px] pb-[10px]">
        <div className="flex justify-evenly">
          <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
            الالتزامات المعلقة
          </div>
          <div
            onClick={() => {
              setmorePendingCommitment(
                (morePendingCommitment) => !morePendingCommitment
              );
            }}
            className="text-[18px] w-[50%] cursor-pointer justify-start p-[10px] font-sstbold text-right text-[#959494]"
          >
            {morePendingCommitment ? "خلف" : " عرض المزيد"}
          </div>
        </div>
        <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
          <div
            className={
              morePendingCommitment
                ? "flex flex-wrap"
                : "overflow-x-auto overflow-y-hidden flex "
            }
          >
            {pendingList.length > 0 ? (
              pendingList.map((data, i) => {
                return (
                  <div
                    key={i}
                    className={
                      morePendingCommitment
                        ? "w-[176px] flex-none mb-[20px] ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                        : "w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                    }
                  >
                    <div className="w-[100%] bg-[#F9F9F9]">
                      <div className="flex pb-[5px]">
                        <div className="w-full flex-col pr-[5px] pl-[5px]">
                          <div
                            onClick={() => {
                              navigate("/store/" + data.store_id);
                            }}
                            className="flex cursor-pointer justify-center mt-[10px]"
                          >
                            <img
                              className="w-[64px] h-[64px] rounded-[32px]"
                              src={config.imgUri + "/" + data.user_pic}
                              alt="user image"
                            />
                          </div>
                          <div className="text-[#484848] text-[17px] font-sstbold text-center mt-[5px]">
                            {data.username}
                          </div>
                          <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                            #{data.id}
                          </div>
                          <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                            <div className="border-t-[1px]"></div>
                          </div>
                          <div className="flex-col  mb-[10px]">
                            <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                              {data.cnt} التزامات
                            </div>
                            <div className="w-full text-[#E80000] text-[20px] font-sstbold text-center  pb-[5px]">
                              {data.total_amount} ريال
                            </div>
                            <div className="w-full text-[#E80000] text-[16px] font-sstbold text-center  pb-[5px]">
                              {data.alert.length} تنبيهات
                            </div>
                            <div className="flex justify-center">
                              <div className="mt-[5px] ml-[5px]">
                                <img
                                  className="w-[24px] h-[24px]"
                                  src="../../../panel/app-assets/images/bell.png"
                                  alt="user image"
                                />
                              </div>
                              <div
                                onClick={() => {
                                  sendAlert(data.store_id, data.id);
                                }}
                                className=" text-[#FF9800] cursor-pointer text-[16px] font-sstbold text-center  pb-[5px]"
                              >
                                إرسال تنبية
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center w-[100%]">No Pending Commitment</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
