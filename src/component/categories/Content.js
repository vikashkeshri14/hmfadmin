import React, { useEffect, useState } from 'react'
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import { Squares } from "react-activity";
import "react-activity/dist/library.css";
export default function Content() {
    const [item, setItem] = useState("")
    const [itemError, setItemError] = useState(false);
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getItem()
    }, [])
    const getItem = async () => {
        let params = { url: apiList.getItemType };
        let response = await ApiService.getData(params);

        setItemList(response.result);
    }
    const addItems = async () => {
        setLoading(true)
        if (!item) {
            setItemError(true);
            setLoading(false)
            return
        }
        setItemError(false);
        const obj = {
            name: item
        }

        let params = { url: apiList.addItem, body: obj };
        let response = await ApiService.postData(params);
        if (response.success) {
            getItem()
            setLoading(false)
            setItem("")
        } else {
            alert("something went wrong please try again");
            setLoading(false)
            setItem("")
        }


    }
    const resetItem = async () => {
        setItem("")
    }
    return (
        <div className="app-content content">
            <div className="content-overlay"></div>
            <div className="content-wrapper">
                <div className="content-header row"></div>
                <div className="content-body">
                    <section id="dashboard-analytics">
                        <div className='flex-col justify-evenly'>
                            <div className="row flex">
                                <div className={itemError ? "w-[600px] border-[#E80000] rounded-[6px] shadow border-[1px] dashboard-users mr-[30px] " : "rounded-[6px] w-[600px]  dashboard-users mr-[30px]"}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="position-relative has-icon-left">
                                                <input
                                                    value={item}
                                                    type="text"
                                                    id="contact-info-icon"
                                                    className="form-control text-[20px]  font-sstroman h-[58px] border-0"
                                                    name="contact-icon"
                                                    placeholder="أدخل نوع الصنف"
                                                    onChange={(e) => setItem(e.target.value)}
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" dashboard-users mr-[60px]">
                                    <div className="row">
                                        <button disabled={loading} onClick={() => addItems()} className="w-[148px] h-[58px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] add-cat">إضافة</button>

                                    </div>
                                </div>
                                <div className=" dashboard-users mr-[60px]">
                                    <div className="row">
                                        <button onClick={() => resetItem()} className="w-[148px] h-[58px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] cancellation ">إلغاء</button>


                                    </div>
                                </div>

                            </div>
                            <div className="row w-[970px] shadow mr-[20px]  flex flex-wrap bg-[#ffffff] rounded-[6px] mt-[30px]">
                                {loading && (
                                    <div className='relative w-full'>
                                        <div className="absolute left-[50%] top-[30px]">
                                            <Squares />
                                        </div> </div>
                                )}
                                {itemList.length > 0 && itemList.map((data, i) => {
                                    return (<div key={i} className='pl-[10px] pr-[10px]  self-center text-[#484848] text-[20px] font-sstmedium border-l-[1px] m-[10px]'>{data.name_ar}</div>)
                                })}
                            </div>
                        </div>
                    </section>
                </div></div>
        </div>
    )
}
