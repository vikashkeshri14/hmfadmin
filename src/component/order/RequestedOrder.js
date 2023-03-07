import React, { useEffect, useState } from "react";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
export default function RequestedOrder() {
    const [requested, setRequested] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [loadChat, setLoadChat] = useState([])
    const [rejectReason, setRejectReason] = useState(false);
    const [reason, setReason] = useState("");
    useEffect(() => {
        getAllRequest();
        ///getDevice();
    }, []);
    const getAllRequest = async () => {
        let params = { url: apiList.allRequestedOrder };
        let response = await ApiService.getData(params);
        if (response.result.length > 0) {
            setRequested(response.result);
        }
    };
    return (
        <>
            {requested.length > 0 && requested.map((data, i) => {
                let status = '';
                let reject = 0;
                let pending = 0;
                let accept = 0;
                if (data.status == '2' && data.accepted_at != null) {
                    status = 'مرفوضة بعد القبول المبدئي';
                    reject = 1;
                } else if (data.status == '2' && data.accepted_at == null) {
                    status = 'مرفوضة';
                    reject = 1;
                } else if (data.status == '1' && data.payment_status == '1') {
                    status = "مدفوعة";
                }
                else if (data.status == '1') {
                    status = "مقبولة";
                    accept = 1;
                } else {
                    status = "معلق";
                    pending = 1;
                }
                return (<div className="row p-[10px]  bg-white rounded-[6px] mr-[0px] mt-[10px]">
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
                                    className=" w-[20%] text-center "
                                >
                                    <div className="flex w-full">
                                        <div className="flex-col">
                                            <div className=" flex justify-center ">
                                                <img
                                                    className="w-[60px] h-[60px] rounded-[44px]"
                                                    src={config.imgUri + "/" + data.user.user_pic}
                                                    alt="sidebar  user image"
                                                />
                                            </div>
                                            <div className=" flex justify-center mt-[5px] text-[#484848] text-[16px] font-sstbold ">
                                                {data.user.username}
                                            </div>
                                            <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                                                #{data.user.id}
                                            </div>
                                        </div>
                                        <div className="flex-col self-center justify-center">
                                            <img
                                                className="h-[26px] self-center w-[64px]"
                                                src="../../../panel/app-assets/images/arrow.png"
                                            />
                                        </div>
                                        <div className="flex-col">
                                            <div className=" flex justify-center ">
                                                <img
                                                    className="w-[60px] h-[60px] rounded-[44px]"
                                                    src={config.imgUri + "/" + data.store.user_pic}
                                                    alt="sidebar  user image"
                                                />
                                            </div>
                                            <div className=" flex justify-center mt-[5px] text-[#484848] text-[16px] font-sstbold ">
                                                {data.store.username}
                                            </div>
                                            <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                                                #{data.store.id}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td
                                    style={{ borderLeftWidth: 1 }}
                                    className=" text-center "
                                >
                                    <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                        {data.store.store_address}
                                    </div>

                                </td>
                                <td
                                    style={{ borderLeftWidth: 1 }}
                                    className=" text-center "
                                >
                                    <div dir="ltr" className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                        {moment(data.created_at).format("DD/MM/YYYY hh:mm A")}
                                    </div>

                                </td>
                                <td
                                    style={{ borderLeftWidth: 1 }}
                                    className=" w-[15%] text-center "
                                >
                                    <div className=" flex justify-center text-[#60BA62] text-[16px] font-sstbold ">
                                        {data.total} ريال
                                    </div>
                                </td>
                                <td
                                    style={{ borderLeftWidth: 1 }}
                                    className=" w-[15%] text-center "
                                >
                                    <div className={reject == '1' ? "flex justify-center text-[#E80000] text-[20px] font-sstbold " : pending == '1' ? "flex justify-center text-[#FF9800] text-[20px] font-sstbold " : accept == '1' ? "flex justify-center text-[#AAD0AB] text-[20px] font-sstbold " : "flex justify-center text-[#60BA62] text-[20px] font-sstbold "}>
                                        {status}
                                    </div>
                                </td>
                                {reject == '1' && (<td
                                    style={{ borderLeftWidth: 1 }}
                                    className="  text-center "
                                >
                                    <div onClick={() => {
                                        if (data.cancelReason.length > 0) {
                                            //  console.log()
                                            setReason(data.cancelReason[0].message);
                                            setRejectReason(rejectReason => !rejectReason);
                                        } else {
                                            alert("Empty Reason!!")
                                        }
                                    }} className="flex-col justify-center">
                                        <div className=" text-[#959494] text-[16px] font-sstbold ">
                                            سبب الرفض
                                        </div>
                                        <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                                            <img
                                                src="../panel/app-assets/images/dropdown.png"
                                                className="h-[24px] mt-[3px] w-[24px]"
                                            />
                                        </div>
                                    </div>
                                </td>)}
                                <td className="w-[25%]  text-center ">
                                    <div onClick={() => {
                                        if (data.loadChat.length > 0) {
                                            setLoadChat(data.loadChat)
                                            setShowModal(showModal => !showModal);
                                        } else {
                                            alert("Empty chat")
                                        }
                                    }} className="flex justify-end">
                                        <div className=" text-[#959494] text-[16px] font-sstbold ">
                                            عرض المحادثة
                                        </div>
                                        <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                                            <img
                                                src="../panel/app-assets/images/dropdown.png"
                                                className="h-[24px] mt-[3px] w-[24px]"
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>)

            })}
            {rejectReason && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="relative p-[10px] flex-auto">
                                    <div class="flex flex-col mt-[10px]">

                                        <div class="flex-col justify-end mb-1">

                                            <div
                                                class="mr-2 py-1 px-2 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                                            >
                                                {reason}
                                            </div>


                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end  border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-1 py-1 text-sm outline-none focus:outline-none  ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setRejectReason(false)}
                                        >
                                            Close
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>)}
            {showModal && (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}

                                {/*body*/}
                                <div className="relative p-[10px] flex-auto">
                                    <div class="flex flex-col mt-[10px]">
                                        {loadChat.length > 0 && loadChat.map((data, i) => {
                                            return (
                                                <div class="flex-col justify-end mb-1">
                                                    <div className="mr-2">{data.sendername}</div>
                                                    <div
                                                        class="mr-2 py-1 px-2 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                                                    >
                                                        {data.message}
                                                    </div>

                                                </div>)
                                        })}



                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end  border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-1 py-1 text-sm outline-none focus:outline-none  ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </>
    )
}
