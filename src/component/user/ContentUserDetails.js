import React, { useState } from "react";
import Conversation from "./Conversation";
import InfoIncomingReport from "./InfoIncomingReport";
import InfoOutgoingReport from "./InfoOutgoingReport";
import OrderHistory from "./OrderHistory";

export default function ContentUserDetails() {
  const [orderHistory, setOrderHistory] = useState(false);
  const [infoOutgoingReport, setInfoOutgoingReport] = useState(false);

  const [infoIncomingReport, setInfoIncomingReport] = useState(false);
  const [infoShow, setInfoShow] = useState(false);
  const [conversation, setConversation] = useState(true);
  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section id="store-analytics">
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
            </div>
            <div className="  mt-[10px]">
              <div className=" flex-col bg-white rounded-[6px] ">
                <div className="flex overflow-x-auto overflow-y-hidden">
                  <div className="flex-none p-[15px]">
                    <div className="flex  h-[66px] pl-[10px] border-l-[1px]">
                      <div className="">
                        <img
                          src="../panel/app-assets/images/user-profile.png"
                          className="h-[64px] w-[64px] rounded-[32px]"
                        />
                      </div>
                      <div className="flex-col mr-[15px]">
                        <div className="flex">
                          <div className="text-[#484848] text-[16px] font-sstbold">
                            متجر أسرتي
                          </div>
                        </div>
                        <div className="flex mt-[5px]">
                          <div className="text-[#959494] text-[16px] font-sstroman ">
                            #2345555
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-none p-[15px] pr-[0px]">
                    <div className="flex-col h-[66px]  pl-[10px] border-l-[1px]">
                      <div className="flex justify-center">
                        <img
                          src="../panel/app-assets/images/frame.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#959494] text-[16px] font-sstbold">
                        قبل ساعة
                      </div>
                    </div>
                  </div>
                  <div className="flex-none p-[15px] pr-[0px]">
                    <div className="flex-col  h-[66px] pl-[10px] border-l-[1px]">
                      <div className="flex justify-center">
                        <img
                          src="../panel/app-assets/images/location.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#959494] text-[16px] font-sstbold">
                        المملكة العربية السعودية، جدة
                      </div>
                    </div>
                  </div>
                  <div className="flex-none cursor-pointer	 p-[15px] pr-[0px]">
                    <div className="flex-col  h-[66px] pl-[10px] border-l-[1px]">
                      <div className="flex justify-center">
                        <img
                          src="../panel/app-assets/images/phone.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#484848] text-[16px] font-sstbold">
                        966553355732+
                      </div>
                    </div>
                  </div>
                  <div className="flex-none cursor-pointer p-[15px] pr-[0px]">
                    <div className="flex-col  h-[66px] pl-[10px] border-l-[1px]">
                      <div className="flex justify-center">
                        <img
                          src="../panel/app-assets/images/order-history.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#484848] text-[16px] font-sstbold">
                        سجل الطلبات
                      </div>
                    </div>
                  </div>
                  <div className="flex-none cursor-pointer p-[15px] pr-[0px]">
                    <div
                      onClick={() => {
                        setInfoShow((infoShow) => !infoShow);
                      }}
                      className="flex-col  h-[66px] pl-[10px] border-l-[1px]"
                    >
                      <div className="flex justify-center">
                        <img
                          src="../panel/app-assets/images/info-grey.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#484848] text-[16px] font-sstbold">
                        سجل البلاغات
                      </div>
                      <div
                        class={
                          infoShow
                            ? "absolute shadow w-[289px] mt-[-10px] mr-[-60px] z-50 bg-white"
                            : "absolute hidden shadow w-[289px] mt-[-10px] left-[90px] z-50 bg-white"
                        }
                      >
                        <div
                          onClick={() => {
                            setInfoOutgoingReport(true);
                            setInfoIncomingReport(false);
                            setInfoShow(false);
                          }}
                          className="p-[10px] communication text-[#484848] text-[18px] font-sstbold text-center"
                        >
                          بلاغات صادرة
                        </div>
                        <div className="dropdown-divider mb-0"></div>
                        <div
                          onClick={() => {
                            setInfoIncomingReport(true);
                            setInfoOutgoingReport(false);
                            setInfoShow(false);
                          }}
                          className=" p-[10px] text-[#484848] text-[18px] font-sstbold incoming-report text-center"
                        >
                          بلاغات واردة
                        </div>
                        <div className="dropdown-divider mb-0"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-none cursor-pointer p-[15px] pr-[0px]">
                    <div className="flex-col  h-[66px] pl-[10px] ">
                      <div className="flex justify-center">
                        <img
                          src="../panel/app-assets/images/chat.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#484848] text-[16px] font-sstbold">
                        سجل المحادثات
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-[15px] pr-[0px]">
                    <div className=" self-center flex justify-end h-[66px] pl-[10px]">
                      <div className="flex justify-end cursor-pointer self-center">
                        <img
                          src="../panel/app-assets/images/support.png"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                      <div className="flex justify-end cursor-pointer mr-[20px] self-center">
                        <img
                          src="../panel/app-assets/images/message.png"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                      <div className="flex justify-end cursor-pointer mr-[20px] self-center">
                        <img
                          src="../panel/app-assets/images/notification.png"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                      <div className="flex justify-end cursor-pointer mr-[20px] self-center">
                        <img
                          src="../panel/app-assets/images/danger.png"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                      <div className="flex justify-end cursor-pointer mr-[20px] self-center">
                        <img
                          src="../panel/app-assets/images/trash.png"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="userDetails">
            {orderHistory && <OrderHistory />}
            {infoOutgoingReport && <InfoOutgoingReport />}
            {infoIncomingReport && <InfoIncomingReport />}
            {conversation && <Conversation />}
          </section>
        </div>
      </div>
    </div>
  );
}
