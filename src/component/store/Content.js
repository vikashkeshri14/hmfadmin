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
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
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
    useState(false);
  const [ban, showBan] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [perblocked, setPerBlocked] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div
        className={
          blocked || perblocked ? "content-wrapper blur-sm" : "content-wrapper"
        }
      >
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
                          src="../panel/app-assets/images/store.png"
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
                              src="../panel/app-assets/images/star.png"
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
                              src="../panel/app-assets/images/frame-green.png"
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
                          src="../panel/app-assets/images/shop-grey.png"
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
                          src="../panel/app-assets/images/commitment.png"
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
                          src="../panel/app-assets/images/receive-grey.png"
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
                          src="../panel/app-assets/images/send.png"
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
                          src="../panel/app-assets/images/info-grey.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#959494] text-[16px] font-sstbold">
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
                          className="p-[10px] communication text-[#484848] text-[18px] font-sstbold text-center"
                        >
                          بلاغات صادرة
                        </div>
                        <div className="dropdown-divider mb-0"></div>
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
                          className=" p-[10px] text-[#484848] text-[18px] font-sstbold incoming-report text-center"
                        >
                          بلاغات واردة
                        </div>
                        <div className="dropdown-divider mb-0"></div>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      setConversationShow(
                        (conversationShow) => !conversationShow
                      );
                      setInfoShow(false);
                      setDeleteShow(false);
                    }}
                    className="flex-none cursor-pointer p-[15px] pr-[0px]"
                  >
                    <div className="flex-col  h-[66px] pl-[10px] ">
                      <div className="flex justify-center">
                        <img
                          src="../panel/app-assets/images/chat.png"
                          className="h-[24px] self-center w-[24px]"
                        />
                      </div>
                      <div className="text-[#959494] text-[16px] font-sstbold">
                        سجل المحادثات
                      </div>
                      <div
                        class={
                          conversationShow
                            ? "absolute shadow w-[289px] mt-[-10px] mr-[-60px] z-50 bg-white"
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
                          className="p-[10px] outgoing-conversation text-[#484848] text-[18px] font-sstbold text-center"
                        >
                          محادثات صادرة
                        </div>
                        <div className="dropdown-divider mb-0"></div>
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
                          className=" p-[10px] text-[#484848] text-[18px] font-sstbold incoming-conversation text-center"
                        >
                          محادثات واردة
                        </div>
                        <div className="dropdown-divider mb-0"></div>
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
                          src="../panel/app-assets/images/phone.png"
                        />
                      </div>
                      <div className="mr-[10px] ml-[10px]">
                        <img
                          className="h-[24px] w-[24px]"
                          src="../panel/app-assets/images/support.png"
                        />
                      </div>
                      <div className="mr-[10px] ml-[10px]">
                        <img
                          className="h-[24px] w-[24px]"
                          src="../panel/app-assets/images/message.png"
                        />
                      </div>
                      <div className="mr-[10px] ml-[10px]">
                        <img
                          className="h-[24px] w-[24px]"
                          src="../panel/app-assets/images/notification.png"
                        />
                      </div>
                      <div
                        onClick={() => {
                          showBan((ban) => !ban);
                        }}
                        className="mr-[10px] cursor-pointer ml-[10px]"
                      >
                        <img
                          className="h-[24px] w-[24px]"
                          src="../panel/app-assets/images/danger.png"
                        />
                        <div
                          class={
                            ban
                              ? "absolute shadow w-[332px] mt-[20px] left-[90px] z-50 bg-white"
                              : "absolute hidden shadow w-[289px] mt-[-10px] left-[90px] z-50 bg-white"
                          }
                        >
                          <div
                            onClick={() => {
                              setBlocked(true);
                              setPerBlocked(false);
                              setDeleteShow(false);
                            }}
                            className="p-[10px] temprorary-ban text-[#484848] text-[18px] font-sstbold text-center"
                          >
                            حظر مؤقت
                          </div>
                          <div className="dropdown-divider mb-0"></div>
                          <div
                            onClick={() => {
                              setPerBlocked(true);
                              setBlocked(false);
                              setDeleteShow(false);
                            }}
                            className=" p-[10px] permanent-ban text-[#484848] text-[18px] font-sstbold text-center"
                          >
                            حظر دائم
                          </div>
                          <div className="dropdown-divider mb-0"></div>
                          <div
                            onClick={() => {
                              setConversationShow(false);
                            }}
                            className=" p-[10px] text-[#484848] text-[18px] font-sstbold incoming-conversation text-center"
                          >
                            إلغاء الحظر
                          </div>
                          <div className="dropdown-divider mb-0"></div>
                        </div>
                      </div>
                      <div
                        onClick={() => {
                          setDeleteShow((deleteShow) => !deleteShow);
                          setBlocked(false);
                          setPerBlocked(false);
                        }}
                        className="mr-[10px] cursor-pointer "
                      >
                        <img
                          className="h-[24px] w-[24px]"
                          src="../panel/app-assets/images/trash.png"
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
      {blocked && (
        <>
          <div className="initial">
            <div className="absolute   top-1/2 left-1/2 transform -translate-x-1/2   w-[500px]  ">
              <div className="relative bg-[#FAFAFA] rounded-lg shadow dark:bg-gray-700">
                <h3 className="text-[24px] pt-[20px] font-sstbold text-[#484848] text-center">
                  هل أنت متأكد من حظر
                </h3>

                <div className="flex justify-center mt-[10px]">
                  <img
                    className="w-[68px] self-center h-[68px] rounded-[34px]"
                    src="../../../panel/app-assets/images/store.png"
                  />
                </div>
                <div className="text-[#484848] text-[20px] font-sstbold text-center">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] mt-[5px] text-[20px] font-sstroman text-center">
                  #23456
                </div>
                <div className="text-[#484848] mt-[5px] text-[20px] font-sstbold mr-[30px] mb-[5px] ">
                  سبب الحظر
                </div>
                <fieldset className=" mb-[30px] ml-[30px] mr-[30px]">
                  <textarea className="w-full rounded-[6px] h-[155px] bg-[#EBEBEB] text-[#ffffff] "></textarea>
                </fieldset>
                <div className="flex justify-center pb-[30px]">
                  <button
                    onClick={() => setBlocked(false)}
                    className="cancellation text-[24px] rounded-[6px] text-[#ffffff] bg-[#959494] w-[148px] h-[58px] font-sstbold ml-[10px]"
                  >
                    إلغاء
                  </button>
                  <button className="ban text-[24px] rounded-[6px] bg-[#959494] text-[#ffffff] w-[148px] h-[58px] font-sstbold ">
                    حظر
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {perblocked && (
        <>
          <div className="initial">
            <div className="absolute   top-1/2 left-1/2 transform -translate-x-1/2   w-[500px]  ">
              <div className="relative bg-[#FAFAFA] rounded-lg shadow dark:bg-gray-700">
                <h3 className="text-[24px] pt-[20px] font-sstbold text-[#484848] text-center">
                  هل أنت متأكد من حظر
                </h3>

                <div className="flex justify-center mt-[10px]">
                  <img
                    className="w-[68px] self-center h-[68px] rounded-[34px]"
                    src="../../../panel/app-assets/images/store.png"
                  />
                </div>
                <div className="text-[#484848] text-[20px] font-sstbold text-center">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] mt-[5px] text-[20px] font-sstroman text-center">
                  #23456
                </div>
                <div className="mr-[30px] ml-[30px]"></div>
                <div dir="ltr" className="flex justify-center">
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                  />
                </div>
                <div className="text-[#484848] mt-[5px] text-[20px] font-sstbold mr-[30px] mb-[5px] ">
                  سبب الحظر
                </div>
                <fieldset className=" mb-[30px] ml-[30px] mr-[30px]">
                  <textarea className="w-full rounded-[6px] h-[155px] bg-[#EBEBEB] text-[#ffffff] "></textarea>
                </fieldset>

                <div className="flex justify-center pb-[30px]">
                  <button
                    onClick={() => setPerBlocked(false)}
                    className="cancellation text-[24px] rounded-[6px] text-[#ffffff] bg-[#959494] w-[148px] h-[58px] font-sstbold ml-[10px]"
                  >
                    إلغاء
                  </button>
                  <button className="ban text-[24px] rounded-[6px] bg-[#959494] text-[#ffffff] w-[148px] h-[58px] font-sstbold ">
                    حظر
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {deleteShow && (
        <>
          <div className="initial">
            <div className="absolute   top-1/2 left-1/2 transform -translate-x-1/2   w-[500px]  ">
              <div className="relative bg-[#FAFAFA] rounded-lg shadow dark:bg-gray-700">
                <h3 className="text-[24px] pt-[20px] font-sstbold text-[#484848] text-center">
                  هل أنت متأكد من حظر
                </h3>

                <div className="flex justify-center mt-[10px]">
                  <img
                    className="w-[68px] self-center h-[68px] rounded-[34px]"
                    src="../../../panel/app-assets/images/store.png"
                  />
                </div>
                <div className="text-[#484848] text-[20px] font-sstbold text-center">
                  محمد علي محمد
                </div>
                <div className="text-[#959494] mt-[5px] text-[20px] font-sstroman text-center">
                  #23456
                </div>
                <div className="mr-[30px] ml-[30px]"></div>

                <div className="flex justify-center mt-[30px] pb-[30px]">
                  <button className="ban text-[24px] rounded-[6px] bg-[#959494] ml-[10px] text-[#ffffff] w-[148px] h-[58px] font-sstbold ">
                    حذف
                  </button>
                  <button
                    onClick={() => setDeleteShow(false)}
                    className="cancellation text-[24px] rounded-[6px] text-[#ffffff] bg-[#959494] w-[148px] h-[58px] font-sstbold "
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
