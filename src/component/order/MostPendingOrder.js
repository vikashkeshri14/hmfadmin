import React, { useEffect, useState, useContext } from "react";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
export default function MostPendingOrder(props) {
  const navigate = useNavigate();
  const [store, setStore] = useState([]);
  const [initialdata, setinitialdata] = useState([]);
  const [initialcall, setinitialcall] = useState(true);
  const { morePendingStore, setmorePendingStore } = useContext(OrderContext);
  useEffect(() => {
    if (initialcall) {
      getMostRatedStore();
      setinitialcall(false);
    }

    searchData(props.searchData);
  }, [props]);
  const searchData = async (text) => {
    let search = initialdata;
    if (search.length > 0) {
      search = search.filter((data, i) => {
        if (data.id == text || data.username.indexOf(text) >= 0 || !text) {
          return data;
        }
      });
      setStore(search);
    }
  };
  const getMostRatedStore = async () => {
    let params = { url: apiList.getMostActiveStore };
    let response = await ApiService.getData(params);
    if (response.result.length > 0) {
      let result = response.result;
      for (let i = 0; i < result.length; i++) {
        for (let k = i + 1; k < result.length; k++) {
          if (result[i].pending_order < result[k].pending_order) {
            let temp = result[i];
            result[i] = result[k];
            result[k] = temp;
          }
        }
      }
      let fil_res = result.filter((data, i) => data.pending_order != 0);

      setStore(fil_res);
      setinitialdata(fil_res);
    }
  };
  return (
    <div className="col-md-12 col-sm-12 pl-[0px] ">
      <div className="bg-white rounded-[6px] pb-[10px]">
        <div className="flex justify-evenly">
          <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
            المتاجر التي تملك طلبات معلقة
          </div>
          <div
            onClick={() => {
              setmorePendingStore((morePendingStore) => !morePendingStore);
            }}
            className="text-[18px] w-[50%] cursor-pointer justify-start p-[10px] font-sstbold text-right text-[#959494]"
          >
            {morePendingStore ? "خلف" : " عرض المزيد"}
          </div>
        </div>
        <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
          <div
            className={
              morePendingStore
                ? "flex flex-wrap"
                : "overflow-x-auto overflow-y-hidden flex "
            }
          >
            {store.length > 0 &&
              store.map((data, i) => {
                return (
                  <div
                    key={i}
                    className={
                      morePendingStore
                        ? "w-[238px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center mb-[20px] flex flex-col align-items-center"
                        : "w-[238px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                    }
                  >
                    <div className="top-[44px] relative mr-50 ">
                      <img
                        className="w-[88px] h-[88px] rounded-[44px]"
                        src={config.imgUri + "/" + data.user_pic}
                        alt="sidebar  user image"
                      />
                    </div>
                    <div className="w-[100%]  bg-[#F9F9F9]">
                      <div className="flex justify-end ">
                        <img
                          src="../../../panel/app-assets/images/support.png"
                          className="h-[28.8px] mt-[20px] ml-[30px] w-[28.8px]"
                        />
                      </div>
                      <div className="chat-sidebar-name mt-[5px] mb-[10px]">
                        <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                          {data.username}
                        </h6>
                        <div className="text-muted pb-[10px] mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                          #{data.id}
                        </div>
                        <div className="pl-[20px]  pr-[20px]">
                          <div className="text-[#FF9800] pb-[10px] pt-[10px] text-center  border-t-[1px] text-[18px] font-sstbold">
                            {data.pending_order} طلبات معلقة
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
    </div>
  );
}
