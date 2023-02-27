import React, { useState } from "react";

export default function Content() {
  const [checkedTrash, setCheckedTrash] = useState(false);
  const [checkindex, setCheckindex] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 23, 45, 23, 23,
  ]);
  const [countChecked, setCountChecked] = useState([]);
  const checkedOnChange = (args, event) => {
    let countValue = countChecked;
    if (event.target.checked) {
      countValue.push(args);
    } else {
      countValue = countValue.filter((value, i) => value != args);
    }
    if (countValue.length > 0) {
      setCheckedTrash(true);
    } else {
      setCheckedTrash(false);
    }
    setCountChecked(countValue);
  };
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section className="sms-management">
            <div className="row flex ">
              <div className="w-[34%] mr-[15px] dashboard-users">
                <div className="row">
                  <div className="col-12">
                    <div className="position-relative has-icon-left">
                      <div className=" absolute top-[20px] left-[10px] w-[24px] h-[24px]">
                        <i className="bx bx-slider-alt"></i>
                      </div>
                      <input
                        type="number"
                        id="contact-info-icon"
                        className="form-control text-[20px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                        name="contact-icon"
                        placeholder="البحث"
                      />
                      <div className="form-control-position top-[20px] right-[10px] w-[24px] h-[24px]">
                        <img src="../app-assets/images/search.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[24%]  dashboard-users mr-[10px]">
                <div className="position-relative has-icon-right">
                  <div className="absolute top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  <input
                    type="number"
                    id="contact-info-icon"
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                    name="contact-icon"
                    placeholder="16/12/2022 - 16/12/2022"
                  />
                </div>
              </div>
              <div className="w-[15%] flex mr-[10px] justify-center">
                {checkedTrash && (
                  <button className="w-[249px] h-[62px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] ">
                    <div className="flex justify-center">
                      <div>
                        <img
                          className="self-center ml-[5px] mt-[10px] w-[24px] h-[24px]"
                          src="../app-assets/images/delete.png"
                        />
                      </div>
                      <div>حذف</div>
                    </div>
                  </button>
                )}
              </div>

              <div className="w-[22.5%] flex justify-end  dashboard-users mr-[10px]">
                <button className="w-[249px] h-[62px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] ">
                  عرض سجل البلاغات
                </button>
              </div>
            </div>
            <div className="row  rounded-[6px] mr-[0px] mt-[10px]">
              <div className="col-12 p-[0px]">
                <div className="divider">
                  <div className="divider-text">2023</div>
                </div>
              </div>
            </div>
            <div className="row  mb-[10px] pl-[15px] pr-[15px]  ">
              <div className=" flex flex-wrap">
                {checkindex.map((data, i) => {
                  return (
                    <div
                      key={i}
                      className="w-[153px] mt-[10px] rounded-[6px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                    >
                      <div className="w-[100%] bg-[#FFFFFF]">
                        <div className="flex pb-[5px]">
                          <div className="w-full flex-col pr-[5px] pl-[5px]">
                            <div className="flex">
                              <div className="w-[50%] flex justify-start">
                                <div className="flex mt-[10px] mr-[5px] items-center">
                                  <input
                                    id="checked-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 rounded"
                                    onChange={(event) =>
                                      checkedOnChange(data, event)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="w-[50%] mt-[10px] ml-[5px] flex justify-end">
                                <div className="flex bg-[rgb(232,0,0,0.36)] justify-center h-[23px] w-[23px] rounded-full">
                                  <div className=" self-center text-[#E80000]  ">
                                    2
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-center mt-[10px]">
                              <img
                                className="w-[66px] h-[66px] rounded-[33px]"
                                src="../../../app-assets/images/user-profile.png"
                                alt="user image"
                              />
                            </div>
                            <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[10px]">
                              محمد علي محمد
                            </div>
                            <div className="text-[#959494] text-[16px] font-sstroman text-center mt-[10px] mb-[10px]">
                              #445666
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
