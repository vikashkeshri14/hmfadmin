import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
export default function PaidCommitments() {
  const [paidList, setPaidList] = useState([]);
  useEffect(() => {
    getPaidList();
  });
  const getPaidList = async () => {
    let params = { url: apiList.storePaidCommitment };
    let response = await ApiService.getData(params);
    setPaidList(response.result);
  };
  return (
    <div className="bg-white rounded-[6px] pb-[10px]">
      <div className="flex justify-evenly">
        <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
          الإلتزامات المدفوعة
        </div>
        <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
          عرض المزيد
        </div>
      </div>
      <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
        <div className="overflow-x-auto overflow-y-hidden flex ">
          {paidList.length > 0 &&
            paidList.map((data, i) => {
              return (
                <div className="w-[176px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center">
                  <div className="w-[100%] bg-[#F9F9F9]">
                    <div className="flex pb-[5px]">
                      <div className="w-full flex-col pr-[5px] pl-[5px]">
                        <div className="flex justify-center mt-[10px]">
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
                            {data.cnt} تنبيهات
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
