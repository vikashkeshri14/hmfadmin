import React, { useEffect, useState } from "react";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
export default function PendingCommitments() {
  const [pendingList, setPendingList] = useState([]);
  useEffect(() => {
    getPendingList();
  });
  const getPendingList = async () => {
    let params = { url: apiList.storePendingCommitment };
    let response = await ApiService.getData(params);
    setPendingList(response.storeCommitment);
  };
  return (
    <div className="col-md-12 col-sm-12 pl-[0px] ">
      <div className="bg-white rounded-[6px] pb-[10px]">
        <div className="flex justify-evenly">
          <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
            الالتزامات المعلقة
          </div>
          <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
            عرض المزيد
          </div>
        </div>
        <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
          <div className="overflow-x-auto overflow-y-hidden flex ">
            {pendingList.length > 0 ? (
              pendingList.map((data, i) => {
                return (
                  <div className="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                    <div className="w-[100%] bg-[#F9F9F9]">
                      <div className="flex pb-[5px]">
                        <div className="w-full flex-col pr-[5px] pl-[5px]">
                          <div className="flex justify-center mt-[10px]">
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
                              4 تنبيهات
                            </div>
                            <div className="flex justify-center">
                              <div className="mt-[5px] ml-[5px]">
                                <img
                                  className="w-[24px] h-[24px]"
                                  src="../../../panel/app-assets/images/bell.png"
                                  alt="user image"
                                />
                              </div>
                              <div className=" text-[#FF9800] text-[16px] font-sstbold text-center  pb-[5px]">
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
