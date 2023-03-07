import React, { useState } from "react";

export default function UserMostReported() {
  const [store, setStore] = useState([]);
  return (
    <div className="col-md-12 col-sm-12 pl-[0px] ">
      <div className="bg-white rounded-[6px] pb-[10px]">
        <div className="flex justify-evenly">
          <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
            أكثر المستخدمين الذين لديهم بلاغات
          </div>
          <div className="text-[18px] w-[50%]  justify-start p-[10px] font-sstbold text-right text-[#959494]">
            عرض المزيد
          </div>
        </div>
        <div className="row mt-[20px] mb-[10px] pl-[15px] pr-[15px]  ">
          <div className="overflow-x-auto overflow-y-hidden flex ">
            {store.length > 0 ? (
              store.map((data, i) => {
                return (
                  <div
                    key={i}
                    className="w-[214px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                  >
                    <div className="w-[100%] bg-[#F9F9F9]">
                      <div className="flex pb-[5px]">
                        <div className="w-full flex-col pr-[5px] pl-[5px]">
                          <div className="flex justify-center mt-[10px]">
                            <img
                              className="w-[66px] h-[66px] rounded-[33px]"
                              src="../../../panel/app-assets/images/user-profile.png"
                              alt="user image"
                            />
                          </div>
                          <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[5px]">
                            محمد علي محمد
                          </div>
                          <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[5px]">
                            #445666
                          </div>
                          <div className="pl-[20px] mt-[10px] mb-[10px] pr-[20px]">
                            <div className="border-t-[1px]"></div>
                          </div>
                          <div className="flex mb-[10px]">
                            <div className="w-full text-[#E80000] text-[18px] font-sstbold text-center  pb-[5px]">
                              5 بلاغات
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
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
