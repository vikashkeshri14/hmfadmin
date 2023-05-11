import React, { useState, useEffect, useContext } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";

import { CommitmentContext } from "../../contexts/CommitmentContext";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
export default function DropCommitment(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [initialdata, setinitialdata] = useState([]);
  const [initialcall, setinitialcall] = useState(true);
  const { moreDropCommitment, setmoreDropCommitment } =
    useContext(CommitmentContext);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
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
      getDropCommitment();
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
    setData(search);
  };
  const getDropCommitment = async () => {
    const obj = {
      from: props.from,
      to: props.to,
    };
    let params = { url: apiList.getAllDropCommitment, body: obj };
    let response = await ApiService.postData(params);
    if (response.result.length > 0) {
      setData(response.result);
      setinitialdata(response.result);
    } else {
      setData([]);
      setinitialdata([]);
    }
  };
  return (
    <div className={moreDropCommitment ? "w-[100%]" : "w-[70%]"}>
      <div className="col-md-12 col-sm-12 pl-[0px] ">
        <div className="bg-white rounded-[6px] pb-[10px]">
          <div className="flex justify-evenly">
            <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
              المتاجر التي لديها التزام مسقط
            </div>
            <div
              onClick={() => {
                setmoreDropCommitment(
                  (moreDropCommitment) => !moreDropCommitment
                );
              }}
              className="text-[18px] cursor-pointer w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]"
            >
              {moreDropCommitment ? "خلف" : " عرض المزيد"}
            </div>
          </div>
          <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
            <div
              className={
                moreDropCommitment
                  ? "flex flex-wrap"
                  : "overflow-x-auto overflow-y-hidden flex "
              }
            >
              {data.map((data, i) => {
                return (
                  <div
                    key={i}
                    className={
                      moreDropCommitment
                        ? "w-[238px] mb-[20px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                        : "w-[238px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                    }
                  >
                    <div
                      onClick={() => {
                        navigate("/store/" + data.store_id);
                      }}
                      className="top-[44px] cursor-pointer relative mr-50 "
                    >
                      <img
                        className="w-[88px]  h-[88px] rounded-[44px]"
                        src={config.imgUri + "/" + data.user_pic}
                        alt="user image"
                      />
                    </div>
                    <div className="w-[100%]  bg-[#F9F9F9]">
                      <div className="chat-sidebar-name mt-[40px] mb-[10px]">
                        <div className="pt-[10px]">
                          <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                            {data.username}
                          </h6>
                        </div>
                        <div className="text-muted pb-[10px] mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                          #{data.store_id}
                        </div>
                        <div className="pl-[20px]  pr-[20px]">
                          <div className="text-[#9D40AD] pb-[10px] pt-[10px] text-center  border-t-[1px] text-[18px] font-sstbold">
                            {data.cnt} التزام مسقط
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
    </div>
  );
}
