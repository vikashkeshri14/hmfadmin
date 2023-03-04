import React from 'react'

export default function Reject() {
    return (
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
                            className=" text-center "
                        >
                            <div className="flex w-full">
                                <div className="flex-col">
                                    <div className=" flex justify-center ">
                                        <img
                                            className="w-[60px] h-[60px] rounded-[44px]"
                                            src="../../../panel/app-assets/images/user-profile.png"
                                            alt="sidebar  user image"
                                        />
                                    </div>
                                    <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                        متجر أسرتي
                                    </div>
                                    <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                                        #70
                                    </div>
                                </div>

                            </div>
                        </td>
                        <td
                            style={{ borderLeftWidth: 1 }}
                            className=" text-center "
                        >
                            <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                الفترة
                            </div>
                            <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                                22/1/2022
                            </div>
                            <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                                22/3/2022
                            </div>
                        </td>

                        <td
                            style={{ borderLeftWidth: 1 }}
                            className=" text-center "
                        >
                            <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                اجمالي الربح
                            </div>
                            <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                                1300 ريال
                            </div>
                        </td>
                        <td
                            style={{ borderLeftWidth: 1 }}
                            className=" text-center "
                        >
                            <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                الالتزام
                            </div>
                            <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                                700 ريال
                            </div>
                        </td>
                        <td
                            style={{ borderLeftWidth: 1 }}
                            className=" text-center "
                        >
                            <div className=" flex justify-center text-[#484848] text-[16px] font-sstbold ">
                                تاريخ السداد
                            </div>
                            <div className="text-[#959494] text-center text-[16px] font-sstbold ">
                                22/3/2022
                            </div>
                        </td>
                        <td
                            style={{ borderLeftWidth: 1 }}
                            className=" text-center "
                        >
                            <div className="flex justify-center">
                                <div className=" text-[#E80000] text-[16px] font-sstbold ">
                                    مرفوضة
                                </div>
                                <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                                    <img
                                        src="../panel/app-assets/images/drop-down.png"
                                        className="h-[24px] mt-[3px] w-[24px]"
                                    />
                                </div>
                            </div>
                        </td>
                        <td style={{ borderLeftWidth: 1 }} className=" text-center ">
                            <div className="flex justify-center">
                                <div className=" text-[#959494] text-[16px] font-sstbold ">
                                    عرض الإيصال
                                </div>
                                <div className="text-[#484848]   text-center text-[16px] font-sstbold ">
                                    <img
                                        src="../panel/app-assets/images/dropdown.png"
                                        className="h-[24px] mt-[3px] w-[24px]"
                                    />
                                </div>
                            </div>
                        </td>
                        <td className=" text-center ">
                            <div className="flex justify-end">
                                <div className='flex-col'>
                                    <div ><button
                                        onClick={() => {
                                            // setAlertShow(true);
                                        }}
                                        className="w-[148px] h-[58px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] "
                                    >
                                        قبول
                                    </button></div>
                                    <div>
                                        <button
                                            onClick={() => {
                                                // setAlertShow(true);
                                            }}
                                            className="w-[148px] h-[58px] rounded-[6px] mt-[10px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] "
                                        >
                                            رفض
                                        </button></div></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
