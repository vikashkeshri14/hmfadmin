import React, { useEffect, useState } from "react";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
export default function AllStore() {
  const navigate = useNavigate();
  const [store, setStore] = useState([]);
  useEffect(() => {
    getAllStore();
  }, []);
  const getAllStore = async () => {
    let params = { url: apiList.getAllStore };
    let response = await ApiService.getData(params);
    setStore(response.result);
  };
  return (
    <div className="bg-white rounded-[6px] pb-[10px]">
      <div className="flex justify-evenly">
        <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
          جميع المتاجر
        </div>
        <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
          عرض المزيد
        </div>
      </div>
      <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
        <div className="overflow-x-auto overflow-y-hidden flex ">
          {store.length > 0 &&
            store.map((data, i) => {
              return (
                <div
                  key={i}
                  className="w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                >
                  <div onClick={() => {
                    navigate("/store/" + data.id);
                  }} className="top-[44px] cursor-pointer  relative mr-50 ">
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
                    <div className="flex pb-[5px]">
                      <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                        <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                          <img
                            className="h-[24px] w-[24px]"
                            src="../../../panel/app-assets/images/star.png"
                          />
                          &nbsp;{data.rating}
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
                            src="../../../panel/app-assets/images/receive.png"
                          />
                          &nbsp;{data.incoming_order}
                        </div>
                      </div>
                      <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                        <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                          <img
                            className="h-[24px] w-[24px] mt-[2px]"
                            src="../../../panel/app-assets/images/frame.png"
                          />
                          &nbsp;{data.profile_view}
                        </div>
                        <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                          <img
                            className="h-[24px] w-[24px]"
                            src="../../../panel/app-assets/images/cake.png"
                          />
                          &nbsp;{data.no_of_product}
                        </div>
                        <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                          <img
                            className="h-[24px] w-[24px]"
                            src="../../../panel/app-assets/images/send.png"
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
  );
}
