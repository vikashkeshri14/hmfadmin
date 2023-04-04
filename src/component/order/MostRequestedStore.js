import React, { useEffect, useState, useContext } from "react";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import { Link, useNavigate } from "react-router-dom";
import { OrderContext } from "../../contexts/OrderContext";
import moment from "moment";
export default function MostRequestedStore(props) {
  const navigate = useNavigate();
  const [store, setStore] = useState([]);
  const [initialdata, setinitialdata] = useState([]);
  const [initialcall, setinitialcall] = useState(true);
  const { moreRequestedStore, setmoreRequestedStore } =
    useContext(OrderContext);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    let calldata = initialcall;
    if (moment(props.from).unix() != moment(from).unix()) {
      calldata = true;
      setFrom(props.from);
    }
    if (moment(props.to).unix() != moment(to).unix()) {
      calldata = true;
      setTo(props.to);
    }
    if (calldata) {
      getMostRatedStore();
      setinitialcall(false);
    }

    searchData(props.searchData);
  }, [props]);
  const searchData = async (text) => {
    //setSearchText(text);
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
    const obj = {
      from: props.from,
      to: props.to,
    };

    let params = { url: apiList.getMostActiveStore, body: obj };
    let response = await ApiService.postData(params);
    //console.log(obj)
    if (response.result.length > 0) {
      let result = response.result;
      for (let i = 0; i < result.length; i++) {
        for (let k = i + 1; k < result.length; k++) {
          if (result[i].incoming_order < result[k].incoming_order) {
            let temp = result[i];
            result[i] = result[k];
            result[k] = temp;
          }
        }
      }
      setStore(result);
      setinitialdata(result);
    } else {

      setStore([]);
      setinitialdata([]);
    }
  };
  return (
    <div className="col-md-12 col-sm-12 pl-[0px] ">
      <div className="bg-white rounded-[6px] pb-[10px]">
        <div className="flex justify-evenly">
          <div className="text-[18px] w-[50%] p-[10px] font-sstbold text-[#959494]">
            المتاجر الأكثر طلب
          </div>
          <div
            onClick={() => {
              setmoreRequestedStore(
                (moreRequestedStore) => !moreRequestedStore
              );
            }}
            className="text-[18px] w-[50%] cursor-pointer  justify-start p-[10px] font-sstbold text-right text-[#959494]"
          >
            {moreRequestedStore ? "خلف" : " عرض المزيد"}
          </div>
        </div>
        <div className="row mt-[20px] pl-[15px] pr-[15px]  ">
          <div
            className={
              moreRequestedStore
                ? "flex flex-wrap"
                : "overflow-x-auto overflow-y-hidden flex "
            }
          >
            {store.length > 0 &&
              store.map((data, i) => {
                return (
                  <div
                    key={data.id}
                    className={
                      moreRequestedStore
                        ? "w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col mb-[20px] align-items-center"
                        : "w-[205px] mt-[-44px] flex-none ml-[10px] mr-[10px] justify-center flex flex-col align-items-center"
                    }
                  >
                    <div
                      onClick={() => {
                        navigate("/store/" + data.id);
                      }}
                      className="top-[44px] cursor-pointer relative mr-50 "
                    >
                      <img
                        className="w-[88px] h-[88px] rounded-[44px]"
                        src={config.imgUri + "/" + data.user_pic}
                        alt="sidebar  user image"
                      />
                    </div>
                    <div className="w-[100%] bg-[#F9F9F9]">
                      <div className="chat-sidebar-name mt-[50px] mb-[10px]">
                        <h6 className="mb-0 text-[16px] text-center font-sstbold text-[#484848]">
                          {data.username}
                        </h6>
                        <div className="text-muted mt-[10px] text-center text-[16px] font-sstroman  text-[#959494]">
                          #{data.id}
                        </div>
                      </div>
                      <div className="flex pb-[5px]">
                        <div className="w-[50%] flex-col pr-[5px] pl-[5px]">
                          <div className="text-[#FF9800] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                            <img
                              className="h-[24px] w-[24px]"
                              src="../../../panel/app-assets/images/star.png"
                            />
                            &nbsp;{data.rating}
                          </div>
                          <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                            <img
                              className="h-[24px] w-[24px]"
                              src="../../../panel/app-assets/images/location.png"
                            />
                            &nbsp;جدة
                          </div>
                          <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                            <img
                              className="h-[24px] w-[24px]"
                              src="../../../panel/app-assets/images/receipt.png"
                            />
                            &nbsp;{data.incoming_order}
                          </div>
                        </div>
                        <div className="w-[50%] flex-col pr-[5px] pl-[5px] border-r-[1px] border-[#EBEBEB]">
                          <div className="text-[#484848] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                            <img
                              className="h-[24px] w-[24px] mt-[2px]"
                              src="../../../panel/app-assets/images/frame.png"
                            />
                            &nbsp;{data.profile_view}
                          </div>
                          <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                            <img
                              className="h-[24px] w-[24px]"
                              src="../../../panel/app-assets/images/cake.png"
                            />
                            &nbsp;{data.no_of_product}
                          </div>
                          <div className="text-[#60BA62] flex justify-center pb-[10px] mb-[10px] border-b-[1px] border-[#EBEBEB] text-[16px] font-sstbold">
                            <img
                              className="h-[24px] w-[24px]"
                              src="../../../panel/app-assets/images/wallet.png"
                            />
                            &nbsp;{data.issue_order}
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
