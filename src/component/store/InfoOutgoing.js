import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
export default function InfoOutgoing() {
  return (
    <>
      <div className="row flex mt-[10px]">
        <div className="w-[191px] mr-[15px] dashboard-users">
          <div className="row">
            <div className="col-12">
              <div className="flex justify-evenly p-[10px] h-[71px] bg-white rounded-[6px]">
                <div className="text-[#E80000]  text-[18px] font-sstbold self-center justify-center">
                  عدد البلاغات
                </div>
                <div className=" border-l-[1px]"></div>
                <div className="text-[#E80000] text-center pl-[10px] text-[18px] font-sstbold self-center justify-center">
                  1
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[262px] mr-[15px] dashboard-users">
          <div className="row">
            <div className="col-12">
              <div className="flex justify-evenly p-[10px] h-[71px] bg-white rounded-[6px]">
                <div className="text-[#FF9800]  text-[18px] font-sstbold self-center justify-center">
                  عدد البلاغات المعلقة
                </div>
                <div className=" border-l-[1px]"></div>
                <div className="text-[#FF9800] text-center pl-[10px] text-[18px] font-sstbold self-center justify-center">
                  1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row  rounded-[6px] mr-[0px] mt-[10px]">
        <div className="col-12 p-[0px]">
          <div className="divider">
            <div className="divider-text">2023</div>
          </div>
        </div>
      </div>
      <div className="row p-[10px]  bg-white rounded-[6px] mr-[0px] mt-[10px]">
        <table className="table mb-0">
          <tbody>
            <tr
              style={{
                borderRightWidth: 0,
              }}
              className=""
            >
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  محمد علي محمد
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  1/12/2022
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className="w-[15%]  text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  بلاغ عن مستخدم
                </div>
              </td>
              <td
                style={{ borderLeftWidth: 1 }}
                className=" w-[15%] text-center "
              >
                <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                  اسم الموظف
                </div>
              </td>

              <td className="w-[25%]">
                <div className="flex justify-end">
                  <div className="   text-[#484848] text-[16px] font-sstbold ">
                    ملخص الطلب
                  </div>
                  <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                    <img
                      src={
                        config.domainUrl +
                        "/panel/app-assets/images/dropdown.png"
                      }
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
