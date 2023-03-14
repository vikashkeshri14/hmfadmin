import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";

export default function Products(props) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getStoreProduct(props.storeId);
    console.log(props);
  }, [props]);
  const getStoreProduct = async (id) => {
    const obj = { storeId: id };

    let params = { url: apiList.getStoreProductById, body: obj };
    let response = await ApiService.postData(params);
    setProductList(response.result);
  };
  return (
    <div className="bg-white mt-[15px] p-[15px] rounded-[6px] flex-col ">
      <div className="w-[100%] flex">
        <div className="w-[48%]  dashboard-users">
          <div className="row">
            <div className="col-12">
              <div className="position-relative has-icon-left">
                <div className=" absolute top-[20px] left-[10px] w-[24px] h-[24px]">
                  <i className="bx bx-slider-alt"></i>
                </div>
                <input
                  type="number"
                  id="contact-info-icon"
                  className="form-control text-[20px] font-sstroman h-[62px] bg-[#F9F9F9] border-0 shadow-sm rounded-[6px]"
                  name="contact-icon"
                  placeholder="البحث"
                />
                <div className="form-control-position top-[20px] right-[10px] w-[24px] h-[24px]">
                  <img
                    src={
                      config.domainUrl + "/panel/app-assets/images/search.png"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] pt-[15px] dashboard-users ml-[10px] flex justify-end">
          {productList.length} منتج
        </div>
      </div>
      <div className="flex flex-wrap  overflow-x-auto overflow-y-hidden">
        {productList.length > 0 &&
          productList.map((data) => {
            return (
              <div className="flex-col mt-[20px] ml-[20px]">
                <div className="flex ">
                  <div
                    style={{
                      backgroundImage: `url(${config.imgUri}/${
                        data.imagesAll.length > 0 && data.imagesAll[0].image
                      })`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="h-[303px] w-[216px]"
                  >
                    <div
                      style={{
                        backgroundImage: `url(
                          ${config.domainUrl}/panel/app-assets/images/shadow.png)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="h-[303px] flex justify-end w-[216px]"
                    >
                      <div className="h-[51px] w-[47px] flex justify-center bg-[#959494]">
                        <img
                          src={
                            config.domainUrl +
                            "/panel/app-assets/images/trash.png"
                          }
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                    </div>
                    <div className="mt-[-70px] mr-[10px]">
                      <div className="text-[#ffffff] text-[24px]  font-sstmedium ">
                        {data.product_name}
                      </div>
                      <div className="flex justify-evenly">
                        <div className="text-[#ffffff]  text-[14px]  font-sstmedium ">
                          المبيعات {data.cnt_sales}
                        </div>
                        <div className="text-[#ffffff] mr-[20px]  text-[14px] float-left self-end justify-end font-sstmedium ">
                          <span>ريال</span>
                          <span>{data.amount_sales}</span> <span>الربح</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
