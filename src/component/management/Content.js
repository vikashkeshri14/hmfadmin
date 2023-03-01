import React, { useState } from "react";

export default function Content() {
  const [checkindex, setCheckindex] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 23, 45, 23, 23,
  ]);
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section className="sms-management">
            <div className="row flex ">
              <div className="w-[37%] mr-[15px] dashboard-users">
                <div className="row">
                  <div className="col-12">
                    <div className="position-relative has-icon-left">
                      <input
                        type="number"
                        id="contact-info-icon"
                        className="form-control text-[20px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                        name="contact-icon"
                        placeholder="البحث"
                      />
                      <div className="form-control-position top-[20px] right-[10px] w-[24px] h-[24px]">
                        <img src="../panel/app-assets/images/search.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[60%] flex justify-end  dashboard-users mr-[10px]">
                <button className="w-[249px] h-[62px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] ">
                  إضافة عضو جديد
                </button>
              </div>
            </div>
            <div className="row  mb-[10px] pl-[15px] pr-[15px]  ">
              <div className=" flex flex-wrap">
                {checkindex.map((data, i) => (
                  <div className="w-[208px] mt-[10px] rounded-[6px] flex-none ml-[5px] mr-[5px] justify-center flex flex-col align-items-center">
                    <div className="w-[100%] bg-[#FFFFFF]">
                      <div className="flex-col pb-[5px]">
                        <div className="w-full flex-col pr-[5px] pl-[5px]">
                          <div className="flex">
                            <div className="w-[50%] flex justify-start"></div>
                            <div className="w-[50%] mt-[10px] ml-[5px] flex justify-end">
                              <div className="flex  justify-center h-[23px] w-[23px] rounded-full">
                                <img
                                  className="w-[24px] h-[24px]"
                                  src="../../../panel/app-assets/images/chat.png"
                                  alt="user image"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center mt-[0px]">
                            <img
                              className="w-[66px] h-[66px] rounded-[33px]"
                              src="../../../panel/app-assets/images/user-profile.png"
                              alt="user image"
                            />
                          </div>
                          <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[10px]">
                            اسم الموظف الرباعي
                          </div>
                          <div className="text-[#959494] text-[16px] font-sstmedium text-center mt-[10px] mb-[10px]">
                            المسمى الوظيفي
                          </div>
                        </div>
                        <div className="w-full border-t-[1px] flex pr-[5px] pl-[5px]">
                          <div className="flex w-full justify-center p-[5px]">
                            <div className="text-center p-[5px] border-l-[1px] w-[50%]">
                              تعديل
                            </div>
                            <div className="text-center p-[5px] w-[50%]">
                              حذف
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
