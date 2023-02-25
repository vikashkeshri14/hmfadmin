import React, { useState } from "react";
import Commitment from "./Commitment";
import Graph from "./Graph";
import IncomingConveration from "./IncomingConveration";
import InfoIncoming from "./InfoIncoming";
import InfoOutgoing from "./InfoOutgoing";
import OrderReceive from "./OrderReceive";
import OutgoingConversation from "./OutgoingConversation";
import OutgoingOrder from "./OutgoingOrder";
import Products from "./Products";

export default function Content() {
  const [productShow, setProductShow] = useState(false);
  const [commitmentShow, setCommitmentShow] = useState(false);
  const [receiveShow, setReceiveShow] = useState(false);
  const [outgoingShow, setOutgoingShow] = useState(false);
  const [infoShow, setInfoShow] = useState(false);
  const [conversationShow, setConversationShow] = useState(false);

  const [infoShowIncoming, setInfoShowIncoming] = useState(false);
  const [infoShowOutgoing, setInfoShowOutgoing] = useState(false);
  const [conversationShowOutgoing, setConversationShowOutgoing] =
    useState(false);
  const [conversationShowIncoming, setConversationShowIncoming] =
    useState(true);

  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section id="store-analytics">
            <div class="row flex ">
              <div class="w-[34%] mr-[15px] dashboard-users">
                <div class="row">
                  <div class="col-12">
                    <div class="position-relative has-icon-left">
                      <div class=" absolute top-[20px] left-[10px] w-[24px] h-[24px]">
                        <i class="bx bx-slider-alt"></i>
                      </div>
                      <input
                        type="number"
                        id="contact-info-icon"
                        class="form-control text-[20px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                        name="contact-icon"
                        placeholder="البحث"
                      />
                      <div class="form-control-position top-[20px] right-[10px] w-[24px] h-[24px]">
                        <img src="../app-assets/images/search.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-[24%]  dashboard-users mr-[10px]">
                <div class="position-relative has-icon-right">
                  <div className="absolute top-[20px] left-0">
                    <i class="ficon bx bxs-calendar text-[24px] pl-[10px]"></i>
                  </div>
                  <input
                    type="number"
                    id="contact-info-icon"
                    class="form-control text-[16px] font-sstroman h-[62px] border-0 shadow-sm rounded-[6px]"
                    name="contact-icon"
                    placeholder="16/12/2022 - 16/12/2022"
                  />
                </div>
              </div>
            </div>
            <div class="  mt-[10px]">
              <div className=" flex-col bg-white rounded-[6px] ">
                <div className="flex overflow-x-auto overflow-y-hidden">
                  <div className="flex-none p-[15px]">
                    <div className="flex  h-[66px] pl-[10px] border-l-[1px]">
                      <div className="">
                        <img
                          src="../app-assets/images/store.png"
                          className="h-[64px] w-[64px] rounded-[32px]"
                        />
                      </div>
                      <div className="flex-col mr-[15px]">
                        <div className="flex">
                          <div className="text-[#484848] text-[16px] font-sstbold">
                            متجر أسرتي
                          </div>
                          <div className="mt-[10px] mr-[10px]">
                            <img
                              className="h-[15px] w-[15px]"
                              src="../app-assets/images/star.png"
                            />
                          </div>
                          <div className="text-[#484848] mt-[7px] mr-[5px] text-[13px] font-sstbold">
                            4.9
                          </div>
                        </div>
                        <div className="flex mt-[5px]">
                          <div className="text-[#959494] text-[16px] font-sstroman ">
                            #2345555
                          </div>
                          <div className="mt-[10px] mr-[12px]">
                            <img
                              className="h-[15.55px] w-[15.55px]"
                              src="../app-assets/images/frame-green.png"
                            />
                          </div>
                          <div className="text-[#484848] mt-[7px] mr-[5px] text-[13px] font-sstbold">
                            14
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-none p-[15px] pr-[0px]">
                    <div className="flex-col h-[66px]  pl-[10px] border-l-[1px]">
                      <div className="flex justify-center">
                        <img
                          src="../app-assets/images/frame.png"
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
                          src="../app-assets/images/location.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#959494] text-[16px] font-sstbold">
                        المملكة العربية السعودية، جدة
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setProductShow(true);
                      setCommitmentShow(false);
                      setConversationShowIncoming(false);
                      setConversationShowOutgoing(false);
                      setInfoShowIncoming(false);
                      setInfoShowOutgoing(false);
                      setOutgoingShow(false);
                      setReceiveShow(false);
                      setInfoShow(false);
                      setConversationShow(false);
                    }}
                    className="flex-none cursor-pointer	 p-[15px] pr-[0px]"
                  >
                    <div className="flex-col  h-[66px] pl-[10px] border-l-[1px]">
                      <div className="flex justify-center">
                        <img
                          src="../app-assets/images/shop-grey.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#959494] text-[16px] font-sstbold">
                        المتجر
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setProductShow(false);
                      setCommitmentShow(true);
                      setConversationShowIncoming(false);
                      setConversationShowOutgoing(false);
                      setInfoShowIncoming(false);
                      setInfoShowOutgoing(false);
                      setOutgoingShow(false);
                      setReceiveShow(false);
                      setInfoShow(false);
                      setConversationShow(false);
                    }}
                    className="flex-none cursor-pointer p-[15px] pr-[0px]"
                  >
                    <div className="flex-col  h-[66px] pl-[10px] border-l-[1px]">
                      <div className="flex justify-center">
                        <img
                          src="../app-assets/images/commitment.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#959494] text-[16px] font-sstbold">
                        سجل الإلتزامات
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setProductShow(false);
                      setCommitmentShow(false);
                      setConversationShowIncoming(false);
                      setConversationShowOutgoing(false);
                      setInfoShowIncoming(false);
                      setInfoShowOutgoing(false);
                      setOutgoingShow(false);
                      setReceiveShow(true);
                      setInfoShow(false);
                      setConversationShow(false);
                    }}
                    className="flex-none cursor-pointer p-[15px] pr-[0px]"
                  >
                    <div className="flex-col  h-[66px] pl-[10px] border-l-[1px]">
                      <div className="flex justify-center">
                        <img
                          src="../app-assets/images/receive-grey.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#959494] text-[16px] font-sstbold">
                        سجل الطلبات الواردة
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setProductShow(false);
                      setCommitmentShow(false);
                      setConversationShowIncoming(false);
                      setConversationShowOutgoing(false);
                      setInfoShowIncoming(false);
                      setInfoShowOutgoing(false);
                      setOutgoingShow(true);
                      setReceiveShow(false);
                      setInfoShow(false);
                      setConversationShow(false);
                    }}
                    className="flex-none cursor-pointer p-[15px] pr-[0px]"
                  >
                    <div className="flex-col  h-[66px] pl-[10px] border-l-[1px]">
                      <div className="flex justify-center">
                        <img
                          src="../app-assets/images/send.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#959494] text-[16px] font-sstbold">
                        سجل الطلبات الصادرة
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setInfoShow((infoShow) => !infoShow);
                      setConversationShow(false);
                    }}
                    className="flex-none cursor-pointer p-[15px] pr-[0px]"
                  >
                    <div className="flex-col  h-[66px] pl-[10px] border-l-[1px]">
                      <div className="flex justify-center">
                        <img
                          src="../app-assets/images/info-grey.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#959494] text-[16px] font-sstbold">
                        سجل البلاغات
                      </div>
                      <div
                        class={
                          infoShow
                            ? "absolute shadow w-[289px] mt-[-10px] left-[90px] z-50 bg-white"
                            : "absolute hidden shadow w-[289px] mt-[-10px] left-[90px] z-50 bg-white"
                        }
                      >
                        <div
                          onClick={() => {
                            setProductShow(false);
                            setCommitmentShow(false);
                            setConversationShowIncoming(false);
                            setConversationShowOutgoing(false);
                            setInfoShowIncoming(false);
                            setInfoShowOutgoing(true);
                            setOutgoingShow(false);
                            setReceiveShow(false);
                            setInfoShow(false);
                          }}
                          class="p-[10px] communication text-[#484848] text-[18px] font-sstbold text-center"
                        >
                          بلاغات صادرة
                        </div>
                        <div class="dropdown-divider mb-0"></div>
                        <div
                          onClick={() => {
                            setProductShow(false);
                            setCommitmentShow(false);
                            setConversationShowIncoming(false);
                            setConversationShowOutgoing(false);
                            setInfoShowIncoming(true);
                            setInfoShowOutgoing(false);
                            setOutgoingShow(false);
                            setReceiveShow(false);
                            setInfoShow(false);
                          }}
                          class=" p-[10px] text-[#484848] text-[18px] font-sstbold incoming-report text-center"
                        >
                          بلاغات واردة
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      setConversationShow(
                        (conversationShow) => !conversationShow
                      );
                      setInfoShow(false);
                    }}
                    className="flex-none cursor-pointer p-[15px] pr-[0px]"
                  >
                    <div className="flex-col  h-[66px] pl-[10px] ">
                      <div className="flex justify-center">
                        <img
                          src="../app-assets/images/chat.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#959494] text-[16px] font-sstbold">
                        سجل المحادثات
                      </div>
                      <div
                        class={
                          conversationShow
                            ? "absolute shadow w-[189px] mt-[-10px] left-[90px] z-50 bg-white"
                            : "absolute hidden shadow w-[289px] mt-[-10px] left-[90px] z-50 bg-white"
                        }
                      >
                        <div
                          onClick={() => {
                            setProductShow(false);
                            setCommitmentShow(false);
                            setConversationShowIncoming(false);
                            setConversationShowOutgoing(true);
                            setInfoShowIncoming(false);
                            setInfoShowOutgoing(false);
                            setOutgoingShow(false);
                            setReceiveShow(false);
                            setInfoShow(false);
                            setConversationShow(false);
                          }}
                          class="p-[10px] outgoing-conversation text-[#484848] text-[18px] font-sstbold text-center"
                        >
                          محادثات صادرة
                        </div>
                        <div class="dropdown-divider mb-0"></div>
                        <div
                          onClick={() => {
                            setProductShow(false);
                            setCommitmentShow(false);
                            setConversationShowIncoming(true);
                            setConversationShowOutgoing(false);
                            setInfoShowIncoming(false);
                            setInfoShowOutgoing(false);
                            setOutgoingShow(false);
                            setReceiveShow(false);
                            setInfoShow(false);
                            setConversationShow(false);
                          }}
                          class=" p-[10px] text-[#484848] text-[18px] font-sstbold incoming-conversation text-center"
                        >
                          محادثات واردة
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" border-t-[1px] p-[10px]">
                  <div className="flex justify-evenly">
                    <div className="text-[15px] w-[50%] p-[10px] font-sstmedium text-[#959494]">
                      نصنع الحلا و الاكلات الشعبية وكل ماتودتجربته من انواع
                      الحلا
                    </div>
                    <div className="text-[18px] w-[50%] flex  justify-end p-[10px] font-sstbold text-right text-[#959494]">
                      <div className="mr-[10px] text-[#484848] font-sstbold text-[16px] text-left ml-[10px]">
                        966553355732+
                      </div>
                      <div className="mr-[10px] ml-[10px]">
                        <img
                          className="h-[24px] w-[24px]"
                          src="../app-assets/images/phone.png"
                        />
                      </div>
                      <div className="mr-[10px] ml-[10px]">
                        <img
                          className="h-[24px] w-[24px]"
                          src="../app-assets/images/support.png"
                        />
                      </div>
                      <div className="mr-[10px] ml-[10px]">
                        <img
                          className="h-[24px] w-[24px]"
                          src="../app-assets/images/message.png"
                        />
                      </div>
                      <div className="mr-[10px] ml-[10px]">
                        <img
                          className="h-[24px] w-[24px]"
                          src="../app-assets/images/notification.png"
                        />
                      </div>
                      <div className="mr-[10px] ml-[10px]">
                        <img
                          className="h-[24px] w-[24px]"
                          src="../app-assets/images/danger.png"
                        />
                      </div>
                      <div className="mr-[10px] ">
                        <img
                          className="h-[24px] w-[24px]"
                          src="../app-assets/images/trash.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="product ">
            {productShow && <Products />}

            {commitmentShow && <Commitment />}
            {receiveShow && <OrderReceive />}
            {outgoingShow && <OutgoingOrder />}
            {infoShowIncoming && <InfoIncoming />}
            {infoShowOutgoing && <InfoOutgoing />}
            {conversationShowOutgoing && <OutgoingConversation />}
            {conversationShowIncoming && <IncomingConveration />}
          </section>
        </div>
      </div>
    </div>
  );
}
