import React, { useEffect, useState, useContext } from "react";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
export default function MostActiveUser(props) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [initialdata, setinitialdata] = useState([]);
  const [callInitial, setcallInitial] = useState(true);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const { showMoreActiveUser, setshowMoreActiveUser } = useContext(UserContext);
  useEffect(() => {
    let calldata = callInitial;
    if (moment(props.from).unix() != moment(from).unix()) {
      calldata = true;
      setFrom(props.from);
    }
    if (moment(props.to).unix() != moment(to).unix()) {
      calldata = true;
      setTo(props.to);
    }
    if (callInitial) {
      getMostActiveUser();
      setcallInitial(false);
    }
    if (props.searchData) {
      searchData(props.searchData);
    }
  }, [props]);
  const searchData = async (text) => {
    //setSearchText(text);
    let search = initialdata;
    search = search.filter((data, i) => {
      if (data.id == text || data.username.indexOf(text) >= 0 || !text) {
        return data;
      }
    });
    setUsers(search);
  };
  const getMostActiveUser = async () => {
    const obj = {
      from: props.from,
      to: props.to,
    };
    let params = { url: apiList.getMostActiveUser, body: obj };
    let response = await ApiService.postData(params);
    if (response.results.length > 0) {
      let result = response.results;

      for (let i = 0; i < result.length; i++) {
        for (let k = i + 1; k < result.length; k++) {
          if (result[i].no_of_order < result[k].no_of_order) {
            let temp = result[i];
            result[i] = result[k];
            result[k] = temp;
          }
        }
      }
      //console.log(result);
      setUsers(result);
      setinitialdata(result);
    }
  };
  return (
    <div className="col-md-12 col-sm-12 pl-[0px] ">
      <div className="bg-white rounded-[6px] pb-[10px]">
        <div className="flex justify-evenly">
          <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
            المستخدمين الأكثر نشاطاً
          </div>
          <div
            onClick={() => {
              setshowMoreActiveUser(
                (showMoreActiveUser) => !showMoreActiveUser
              );
            }}
            className="text-[18px] cursor-pointer w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]"
          >
            {showMoreActiveUser ? "خلف" : " عرض المزيد"}
          </div>
        </div>
        <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
          <div
            className={
              showMoreActiveUser
                ? "flex flex-wrap"
                : "overflow-x-auto overflow-y-hidden flex "
            }
          >
            {users.length > 0 &&
              users.map((data, i) => {
                return (
                  <div
                    key={i}
                    className={
                      showMoreActiveUser
                        ? "w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center mb-[20px] flex flex-col align-items-center"
                        : "w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                    }
                  >
                    <div
                      onClick={() => {
                        navigate("/user/" + data.id);
                      }}
                      className="top-[44px] cursor-pointer relative mr-50 "
                    >
                      <img
                        className="w-[88px] h-[88px] rounded-[44px]"
                        src={config.imgUri + "/" + data.user_pic}
                        alt="sidebar  user image"
                      />
                    </div>
                    <div className="w-[100%] bg-[#F9F9F9]">
                      <div className="chat-sidebar-name mt-[50px] mb-[10px]">
                        <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                          {data.username}
                        </h6>
                        <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                          #{data.id}
                        </div>
                      </div>
                      <div className="flex pb-[5px] justify-center">
                        <div className="w-[50%] flex-col pr-[5px] pl-[5px] ">
                          <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                            <img
                              className="h-[24px] w-[24px] mt-[2px]"
                              src="../../../panel/app-assets/images/frame.png"
                            />
                            &nbsp;0
                          </div>
                          <div className="text-[#E80000] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                            <img
                              className="h-[24px] w-[24px]"
                              src="../../../panel/app-assets/images/info-red.png"
                            />
                            &nbsp;0
                          </div>
                          <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                            <img
                              className="h-[24px] w-[24px]"
                              src="../../../panel/app-assets/images/cake.png"
                            />
                            &nbsp;{data.no_of_order}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
