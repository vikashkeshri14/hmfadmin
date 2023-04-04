import React, { useEffect, useState, useContext } from "react";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import { ReportContext } from "../../contexts/ReportContext";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
export default function UserMostReported(props) {
  const navigate = useNavigate();
  const [store, setStore] = useState([]);
  const [initialdata, setinitialdata] = useState([]);
  const [initialcall, setinitialcall] = useState(true);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const { moreMostReportUser, setmoreMostReportUser } =
    useContext(ReportContext);
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
      getMostReported();
      setinitialcall(false);
    }

    searchData(props.searchData);
  }, [props]);
  const searchData = async (text) => {
    let search = initialdata;

    if (search.length > 0) {
      search = search.filter((data, i) => {
        if (
          data.user.id == text ||
          data.user.username.indexOf(text) >= 0 ||
          !text
        ) {
          return data;
        }
      });
      setStore(search);
    }
  };
  const getMostReported = async () => {
    const obj = {
      from: props.from,
      to: props.to,
    };
    let params = { url: apiList.getMostReportedUser, body: obj };
    let response = await ApiService.postData(params);
    if (response.result.length > 0) {
      let result = response.result;
      setStore(result);
      setinitialdata(result);
    } else {
      setStore([]);
      setinitialdata([]);
    }
  };
  return (
    <div className="col-md-12 col-sm-12 pl-[0px] ">
      <div className="bg-white rounded-[6px] pb-[10px]">
        <div className="flex justify-evenly">
          <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
            أكثر المستخدمين الذين لديهم بلاغات
          </div>
          <div
            onClick={() => {
              setmoreMostReportUser(
                (moreMostReportUser) => !moreMostReportUser
              );
            }}
            className="text-[18px] w-[50%] cursor-pointer  justify-start p-[10px] font-sstbold text-right text-[#959494]"
          >
            {moreMostReportUser ? "خلف" : " عرض المزيد"}
          </div>
        </div>
        <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
          <div
            className={
              moreMostReportUser
                ? " flex flex-wrap "
                : "overflow-x-auto overflow-y-hidden flex "
            }
          >
            {store.length > 0 ? (
              store.map((data, i) => {
                if (moreMostReportUser) {
                  return (
                    <div
                      key={i}
                      className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                    >
                      <div className="w-[100%] bg-[#F9F9F9]">
                        <div className="flex pb-[5px]">
                          <div className="w-full flex-col pr-[5px] pl-[5px]">
                            <div
                              onClick={() => {
                                navigate("/user/" + data.user.id);
                              }}
                              className="flex cursor-pointer justify-center mt-[10px]"
                            >
                              <img
                                className="w-[66px] h-[66px] rounded-[33px]"
                                src={config.imgUri + "/" + data.user.user_pic}
                                alt="user image"
                              />
                            </div>
                            <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                              {data.user.username}
                            </div>
                            <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                              # {data.user.id}
                            </div>
                            <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                              <div className="border-t-[1px]"></div>
                            </div>
                            <div className="flex mb-[10px]">
                              <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                                {data.cnt} بلاغات
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  if (i < 8) {
                    return (
                      <div
                        key={i}
                        className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                      >
                        <div className="w-[100%] bg-[#F9F9F9]">
                          <div className="flex pb-[5px]">
                            <div className="w-full flex-col pr-[5px] pl-[5px]">
                              <div
                                onClick={() => {
                                  navigate("/user/" + data.user.id);
                                }}
                                className="flex cursor-pointer justify-center mt-[10px]"
                              >
                                <img
                                  className="w-[66px] h-[66px] rounded-[33px]"
                                  src={config.imgUri + "/" + data.user.user_pic}
                                  alt="user image"
                                />
                              </div>
                              <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                                {data.user.username}
                              </div>
                              <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                                # {data.user.id}
                              </div>
                              <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                                <div className="border-t-[1px]"></div>
                              </div>
                              <div className="flex mb-[10px]">
                                <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                                  {data.cnt} بلاغات
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                }
              })
            ) : (
              <div className="text-center text-[#959494] text-[16px] font-sstroman flex self-center justify-center w-full p-1">
                No one reported
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
