import React, { useEffect, useState, useContext } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import { CommitmentContext } from "../../contexts/CommitmentContext";
import { Link, useNavigate } from "react-router-dom";

export default function PaidCommitments(props) {
  const navigate = useNavigate();
  const [paidList, setPaidList] = useState([]);
  const [initialdata, setinitialdata] = useState([]);
  const [initialcall, setinitialcall] = useState(true);
  const { morePaidCommitment, setmorePaidCommitment } =
    useContext(CommitmentContext);
  useEffect(() => {
    if (initialcall) {
      getPaidList();
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
    setPaidList(search);
  };
  const getPaidList = async () => {
    const obj = {
      from: "",
      to: "",
    };
    let params = { url: apiList.storePaidCommitment, body: obj };
    let response = await ApiService.postData(params);
    setPaidList(response.result);
    setinitialdata(response.result);
  };
  return (
    <div className="bg-white rounded-[6px] pb-[10px]">
      <div className="flex justify-evenly">
        <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
          الإلتزامات المدفوعة
        </div>
        <div
          onClick={() => {
            setmorePaidCommitment((morePaidCommitment) => !morePaidCommitment);
          }}
          className="text-[18px] cursor-pointer w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]"
        >
          {morePaidCommitment ? "خلف" : " عرض المزيد"}
        </div>
      </div>
      <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
        <div
          className={
            morePaidCommitment
              ? "flex flex-wrap"
              : "overflow-x-auto overflow-y-hidden flex "
          }
        >
          {paidList.length > 0 &&
            paidList.map((data, i) => {
              return (
                <div
                  key={i}
                  className={
                    morePaidCommitment
                      ? "w-[176px] flex-none ml-[10px] mr-[10px] mb-[20px] justify-center flex flex-col align-items-center"
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
                            className="w-[66px] h-[66px] rounded-[33px]"
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
                        <div className="flex-col mb-[10px]">
                          <div className="w-full text-[#60BA62] text-[20px] font-sstbold text-center  pb-[5px]">
                            {data.total_amount} ريال
                          </div>
                          <div className="w-full text-[#60BA62] text-[16px] font-sstbold text-center  pb-[5px]">
                            {data.alert.length} تنبيهات
                          </div>
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
  );
}
