import React, { useEffect, useState } from "react";
import moment from "moment";
export default function SmsList(props) {
  const [showVal, setShowVal] = useState("");
  const [show, setShow] = useState(false);
  return (
    <>
      {props.smslist.length > 0 &&
        props.smslist.map((data, i) => {
          return (
            <div
              key={i}
              className="row p-[10px]  bg-white rounded-[6px] mr-[0px] mt-[10px]"
            >
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
                        {data.title}
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className="w-[15%]  text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        {moment(data.created_at).format("DD/MM/YYYY")}
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 1 }}
                      className="w-[15%]  text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        {data.user_type_val == 1 ? "المستخدمين" : "المتاجر"}
                      </div>
                    </td>
                    <td
                      style={{ borderLeftWidth: 0 }}
                      className=" w-[15%] text-center "
                    >
                      <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                        {data.username}
                      </div>
                    </td>

                    <td className="w-[25%]">
                      <div
                        onClick={() => {
                          if (!show) {
                            setShowVal(data.id);
                            setShow((show) => !show);
                          } else {
                            setShowVal("");
                            setShow((show) => !show);
                          }
                        }}
                        className="flex justify-end cursor-pointer"
                      >
                        <div
                          className={
                            showVal == data.id
                              ? "text-[#60BA62] text-[16px] font-sstbold "
                              : "text-[#484848] text-[16px] font-sstbold "
                          }
                        >
                          إظهار الرسالة
                        </div>
                        <div className="text-[#484848] mt-[3px]  text-center text-[16px] font-sstbold ">
                          <img
                            src="../panel/app-assets/images/dropdown.png"
                            className={
                              showVal == data.id
                                ? "h-[24px] rotate-180 w-[24px]"
                                : "h-[24px] w-[24px]"
                            }
                          />
                        </div>
                      </div>
                      <div
                        className={
                          showVal == data.id ? "relative" : "relative hidden "
                        }
                      >
                        <div className="absolute text-[#484848] font-sstbold text-[17px] top-[30px] bg-[#ffffff] shadow rounded-bl-[6px] rounded-br-[6px]  w-[300px] p-[15px] left-[-40px]">
                          {data.message}
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
    </>
  );
}
