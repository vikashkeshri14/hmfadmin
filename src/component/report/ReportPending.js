import React, { useEffect, useState } from "react";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";

export default function ReportPending() {
  const [store, setStore] = useState([]);
  useEffect(() => {
    getNewReportPending();
    ///getDevice();
  }, []);
  const getNewReportPending = async () => {
    let params = { url: apiList.getReportPending };
    let response = await ApiService.getData(params);
    if (response.result.length > 0) {
      let result = response.result;

      setStore(result);
    }
  };
  return (
    <div className="col-md-12 col-sm-12 pl-[0px] ">
      <div className="bg-white rounded-[6px] pb-[10px]">
        <div className="flex justify-evenly">
          <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
            البلاغات المعلقة
          </div>
          <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
            عرض المزيد
          </div>
        </div>
        <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
          <div className="overflow-x-auto overflow-y-hidden flex ">
            {store.length > 0 &&
              store.map((data, i) => {
                return (
                  <div
                    key={i}
                    className="w-[381px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                  >
                    <div className="w-[100%] bg-[#F9F9F9]">
                      <div className="flex pb-[5px]">
                        <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                          <div className="flex justify-center mt-[10px]">
                            <img
                              className="w-[66px] h-[66px] rounded-[33px]"
                              src={config.imgUri + "/" + data.store.user_pic}
                              alt="sidebar  user image"
                            />
                          </div>
                          <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                            {data.store.username}
                          </div>
                          <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                            #{data.store.id}
                          </div>
                        </div>
                        <div className="w-[24%] flex justify-center pr-[5px] pl-[5px]">
                          <img
                            className="w-[76px] justify-center self-center h-[26px] rounded-[33px]"
                            src="../../../panel/app-assets/images/arrow-red.png"
                            alt="sidebar  user image"
                          />
                        </div>
                        <div className="w-[38%] flex-col pr-[5px] pl-[5px]">
                          <div className="flex justify-center mt-[10px]">
                            <img
                              className="w-[66px] h-[66px] rounded-[33px]"
                              src={config.imgUri + "/" + data.user.user_pic}
                              alt="sidebar  user image"
                            />
                          </div>
                          <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                            {data.user.username}
                          </div>
                          <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                            #{data.user.id}
                          </div>
                        </div>
                      </div>
                      <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                        <div className="border-t-[1px]"></div>
                      </div>
                      <div className="flex mb-[10px]">
                        <div className="w-[33.33%] text-[#E80000] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                          بلاغ عن مستخدم
                        </div>
                        <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center border-l-[1px] pb-[15px]">
                          حذف
                        </div>
                        <div className="w-[33.33%] text-[#484848] text-[16px] font-sstbold text-center  pb-[15px]">
                          تفاصيل أكثر
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
