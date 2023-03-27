import React, { useEffect, useState } from "react";
import Graph from "./Graph";

import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import moment from "moment";
import NewReport from "./NewReport";
import ReportPending from "./ReportPending";
import StoreReportedMost from "./StoreReportedMost";
import UserMostReported from "./UserMostReported";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

export default function Content() {
  const [totalReport, settotalReport] = useState(0);
  const [value, onChange] = useState([new Date(), new Date()]);

  const [resolveReport, setresolveReport] = useState(0);
  const [pendingReport, setpendingReport] = useState(0);
  const [storeNotification, setstoreNotification] = useState(0);
  const [userReport, setuserReport] = useState(0);
  const [productNotification, setproductNotification] = useState(0);
  useEffect(() => {
    getAllReport();
    ///getDevice();
  }, []);
  const getAllReport = async () => {
    let params = { url: apiList.getReport };
    let response = await ApiService.getData(params);
    if (response.allReport.length > 0) {
      settotalReport(response.allReport[0].cnt);
      setuserReport(response.allReport[0].cnt);
    }
    if (response.pendingReport.length > 0) {
      setpendingReport(response.pendingReport[0].cnt);
    }
    if (response.storeNotification.length > 0) {
      setstoreNotification(response.storeNotification[0].cnt);
    }
  };
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section className="order-management">
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
                        <img src="../panel/app-assets/images/search.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[24%]  dashboard-users mr-[10px]">
                <div className="position-relative has-icon-right">
                  <div className="absolute zindex-1 top-[20px] left-0">
                    <i className="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  {/* <input
                    type="number"
                    id="contact-info-icon"
                    className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                    name="contact-icon"
                    placeholder="16/12/2022 - 16/12/2022"
                  /> */}
                  <div>
                    <DateRangePicker
                      calendarIcon=""
                      calendarClassName="border-0 "
                      className="form-control text-[16px] font-sstroman h-[62px] border-0 shadow rounded-[6px]"
                      onChange={onChange}
                      value={value}
                    />
                  </div>
                </div>
              </div>
              <div className="w-[10%]  dashboard-users mr-[10px]">
                <div className="position-relative has-icon-right">
                  <div className="absolute top-[20px] left-0">
                    <i className="ficon bx bxs-stopwatch text-[24px] pl-[10px]"></i>
                  </div>
                  <input
                    dir="ltr"
                    type="number"
                    id="contact-info-icon"
                    className="form-control text-[16px] font-sstbold h-[62px] border-0 shadow-sm rounded-[6px]"
                    name="contact-icon"
                    placeholder=" 07 : 12  pm"
                  />
                </div>
              </div>
              <div className="w-[27.5%] flex justify-end  dashboard-users mr-[10px]">
                <button className="w-[249px] h-[62px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] ">
                  عرض سجل البلاغات
                </button>
              </div>
            </div>
            <div className="row mt-[10px]">
              <div className="col-md-6 col-sm-12  rounded-[6px]">
                <div className="row">
                  <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
                    <div className="card mb-[10px] pb-[10px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] total-no-of-report text-center font-sstbold text-[18px]">
                          عدد البلاغات
                        </div>
                        <div className="text-[#AD0000] text-center font-sstbold text-[35px]">
                          {totalReport}
                        </div>
                        <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
                    <div className="card mb-[10px] pb-[10px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] resolved-report text-center font-sstbold text-[18px]">
                          عدد البلاغات المحلولة
                        </div>
                        <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                          {totalReport - pendingReport}
                        </div>
                        <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
                    <div className="card mb-[10px] pb-[10px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] outstanding-report text-center font-sstbold text-[18px]">
                          عدد البلاغات المعلقة
                        </div>
                        <div className="text-[#FF9800] text-center font-sstbold text-[35px]">
                          {pendingReport}
                        </div>
                        <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                          5,09% أقل من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
                    <div className="card mb-[10px] pb-[10px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] store-notification text-center font-sstbold text-[18px]">
                          بلاغات المتاجر
                        </div>
                        <div className="text-[#AD0000] text-center font-sstbold text-[35px]">
                          {storeNotification}
                        </div>
                        <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
                    <div className="card mb-[10px] pb-[10px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] user-report text-center font-sstbold text-[18px]">
                          بلاغات المستخدمين
                        </div>
                        <div className="text-[#AD0000] text-center font-sstbold text-[35px]">
                          {userReport}
                        </div>
                        <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
                    <div className="card mb-[10px] pb-[10px]">
                      <div className="p-[10px]">
                        <div className="text-[#959494] product-notification text-center font-sstbold text-[18px]">
                          بلاغات المنتجات
                        </div>
                        <div className="text-[#AD0000] text-center font-sstbold text-[35px]">
                          {productNotification}
                        </div>
                        <div className="text-[#E80000] text-center font-sstbold text-[16px]">
                          5,09% أعلى من الشهر الماضي
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6  col-sm-12 pl-[0px]">
                <div className="mb-[10px] bg-white h-[423px] rounded-[6px] pb-[10px]">
                  <div className="relative">
                    <Graph />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-[20px]">
              <NewReport />
            </div>
            <div className="row mt-[20px]">
              <ReportPending />
            </div>
            <div className="row mt-[20px]">
              <StoreReportedMost />
            </div>
            <div className="row mt-[20px]">
              <UserMostReported />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
