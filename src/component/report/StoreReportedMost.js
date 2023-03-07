import React, { useEffect, useState } from "react";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
export default function StoreReportedMost() {
  const [store, setStore] = useState([]);
  useEffect(() => {
    getMostReported();
    ///getDevice();
  }, []);
  const getMostReported = async () => {
    let params = { url: apiList.getMostReported };
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
            أكثر المتاجر التي لديها بلاغات
          </div>
          <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
            عرض المزيد
          </div>
        </div>
        <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
          <div className="overflow-x-auto overflow-y-hidden flex ">
            {store.length > 0 &&
              store.map((data) => {
                return (
                  <div className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                    <div className="w-[100%] bg-[#F9F9F9]">
                      <div className="flex pb-[5px]">
                        <div className="w-full flex-col pr-[5px] pl-[5px]">
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
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
