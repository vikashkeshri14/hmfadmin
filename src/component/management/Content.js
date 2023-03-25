import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import { Squares } from "react-activity";
import moment from "moment";
import "react-activity/dist/library.css";
export default function Content() {
  const [team, setTeam] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modules, setModules] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getTeam();
  }, []);
  const getTeam = async () => {
    let params = { url: apiList.getTeam };
    let response = await ApiService.getData(params);
    setTeam(response.result);
  };
  const deleteUser = async (id) => {
    const obj = {
      id: id,
    };

    let params = { url: apiList.deleteTeam, body: obj };
    let response = await ApiService.postData(params);
    if (response) {
      alert("User deleted successfully");
      setDeleteModal(false);
      getTeam();
    } else {
      alert("Something went wrong please try again");
    }
  };
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section className="sms-management">
            <div className="row flex ">
              <div className="w-[37%] mr-[15px] dashboard-users">
                <div className="row">
                  <div className="col-12">
                    <div className="position-relative has-icon-left">
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

              <div className="w-[60%] flex justify-end  dashboard-users mr-[10px]">
                <button
                  onClick={() => {
                    navigate("/add-management");
                  }}
                  className="w-[249px] h-[62px] rounded-[6px] bg-[#959494] text-[#ffffff] font-sstbold text-[24px] "
                >
                  إضافة عضو جديد
                </button>
              </div>
            </div>
            <div className="row  mb-[10px] pl-[15px] pr-[15px]  ">
              <div className=" flex flex-wrap">
                {team.map((data, i) => {
                  return (
                    <div
                      key={i}
                      className="w-[208px] cursor-pointer mt-[10px] rounded-[6px] flex-none ml-[5px] mr-[5px] justify-center flex flex-col align-items-center"
                    >
                      <div className="w-[100%] bg-[#FFFFFF]">
                        <div className="flex-col pb-[5px]">
                          <div className="w-full flex-col pr-[5px] pl-[5px]">
                            <div className="flex">
                              <div className="w-[50%] flex justify-start"></div>
                              <div className="w-[50%] mt-[10px] ml-[5px] flex justify-end">
                                <div className="flex  justify-center h-[23px] w-[23px] rounded-full">
                                  <img
                                    className="w-[24px] h-[24px]"
                                    src="../../../panel/app-assets/images/chat.png"
                                    alt="user image"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              onClick={() => {
                                setUserDetails(data);
                                setModules(JSON.parse(data.modules));
                                setShowModal(true);
                              }}
                              className="flex justify-center mt-[0px]"
                            >
                              <img
                                className="w-[66px] h-[66px] rounded-[33px]"
                                src={config.imgUri + "/" + data.pic}
                                alt="user image"
                              />
                            </div>
                            <div className="text-[#484848] text-[16px] font-sstbold text-center mt-[10px]">
                              {data.name}
                            </div>
                            <div className="text-[#959494] text-[16px] font-sstmedium text-center mt-[10px] mb-[10px]">
                              {data.job_title}
                            </div>
                          </div>
                          <div className="w-full border-t-[1px] flex pr-[5px] pl-[5px]">
                            <div className="flex w-full justify-center p-[5px]">
                              <div
                                onClick={() => {
                                  //console.log(data);
                                  navigate("/edit-management/" + data.id);
                                }}
                                className="text-center p-[5px] text-[#484848] text-[16px] font-sstbold modification border-l-[1px] w-[50%]"
                              >
                                تعديل
                              </div>
                              <div
                                onClick={() => {
                                  //console.log(data);
                                  setUserDetails(data);

                                  setDeleteModal(true);
                                }}
                                className="text-center text-[#484848] cursor-pointer text-[16px] font-sstbold delete p-[5px] w-[50%]"
                              >
                                حذف
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
            {showModal && (
              <>
                <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative  max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[763px] bg-[#FAFAFA] outline-none focus:outline-none">
                      <div className="card min-h-[400px] bg-[#FAFAFA] mt-[0px]">
                        <div className="row ml-[0px] mr-[0px]">
                          <div className="col-sm-12 border-b-[1px] border-[#EBEBEB] ">
                            <div className="flex justify-center mt-[0px]">
                              <img
                                className="w-[66px] h-[66px] rounded-[33px]"
                                src={config.imgUri + "/" + userDetails.pic}
                                alt="user image"
                              />
                            </div>
                            <div className="text-center text-[#484848] text-[17px] font-sstbold">
                              {userDetails.name}
                            </div>
                            <div className="text-center mb-[10px] text-[#959494] text-[17px] font-sstmedium">
                              {userDetails.job_title}
                            </div>
                          </div>
                          <div className="col-sm-12 row ml-[0px] mr-[0px]">
                            <div class="col-md-7 border-l-[1px] border-[#EBEBEB] pl-[0px] pr-[30px]">
                              <div className="text-[16px] text-[#484848] font-sstbold pt-[20px]">
                                البيانات الشخصية
                              </div>
                              <div className="row ml-[0px] mr-[0px] mt-[15px]">
                                <div className="col-md-6  text-[#959494] text-[17px] font-sstmedium border-l-[1px]">
                                  الهوية الوطنية/الإقامة
                                </div>
                                <div className="col-md-6 text-[17px] text-[#484848] font-sstmedium pr-[20px]">
                                  {userDetails.iqama}
                                </div>
                                <div className="col-md-6 mt-[10px] text-[#959494] text-[17px] font-sstmedium border-l-[1px]">
                                  الرقم الوظيفي
                                </div>
                                <div className="col-md-6 text-[17px] text-[#484848] font-sstmedium mt-[10px] pr-[20px]">
                                  {userDetails.job_title}
                                </div>
                                <div className="col-md-6 mt-[10px] text-[#959494] text-[17px] font-sstmedium border-l-[1px]">
                                  الجوال
                                </div>
                                <div className="col-md-6 text-[17px] text-[#484848] font-sstmedium mt-[10px] pr-[20px]">
                                  {userDetails.phone}
                                </div>
                                <div className="col-md-6 mt-[10px] text-[#959494] text-[17px] font-sstmedium border-l-[1px]">
                                  الإيميل
                                </div>
                                <div className="col-md-6 text-[17px] text-[#484848] font-sstmedium mt-[10px] pr-[20px]">
                                  {userDetails.email}
                                </div>
                                <div className="col-md-6 mt-[10px] text-[#959494] text-[17px] font-sstmedium border-l-[1px]">
                                  الموقع
                                </div>
                                <div className="col-md-6 text-[17px] text-[#484848] font-sstmedium mt-[10px] pr-[20px]">
                                  {userDetails.location}
                                </div>
                                <div className="col-md-6 mt-[10px] text-[#959494] text-[17px] font-sstmedium border-l-[1px]">
                                  تاريخ اللإنضمام
                                </div>
                                <div className="col-md-6 mt-[10px] text-[17px] text-[#484848] font-sstmedium pr-[20px]">
                                  {moment(userDetails.created_at).format(
                                    "DD/MM/YYYY"
                                  )}
                                </div>
                              </div>
                            </div>
                            <div class="col-md-5 pl-[0px] pr-[20px]">
                              <div className="pt-[20px] text-[16px] text-[#484848] font-sstbold ">
                                الصلاحيات المسموح بها
                              </div>
                              <div className="row ml-[0px] mr-[0px] mt-[15px]">
                                {modules.map((data, i) => {
                                  return (
                                    <div className="col-md-6 mt-[10px] text-[#959494] text-[17px] font-sstmedium ">
                                      {data == "dashboard" && "لوحة التحكم"}
                                      {data == "users" && "إدارة الحسابات"}
                                      {data == "order" && "إدارة الطلبات"}
                                      {data == "report" && "إدارة البلاغات"}
                                      {data == "sms" && "Sms"}
                                      {data == "tech-support" && "الدعم الفني"}
                                      {data == "notification" && "التنبيهات"}
                                      {data == "commitment" && "الالتزامات"}
                                      {data == "transfer" &&
                                        "الحوالات المحلية الواردة"}
                                      {data == "profit" && "الأرباح"}
                                      {data == "management" &&
                                        "إدارة فريق العمل"}
                                      {data == "blacklist" && "القائمة السوداء"}
                                      {data == "categories" && "تعديل الأصناف"}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 mt-[20px] d-flex justify-center">
                            <button
                              onClick={() => {
                                setShowModal(false);
                              }}
                              type="button"
                              className="btn bg-[#959494] hover:text-[#707070] cancel text-[24px] w-[148px] h-[58px] rounded-[6px] font-sstbold text-[#ffffff]"
                            >
                              إلغاء
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            )}
            {deleteModal && (
              <>
                <div className="justify-center items-center flex   fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative  max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[534px] bg-[#FAFAFA] outline-none focus:outline-none">
                      <div className="card min-h-[400px] bg-[#FAFAFA] mt-[0px]">
                        <div className="row ml-[0px] mr-[0px]">
                          <div className="col-sm-12  border-[#EBEBEB] ">
                            <div className="mt-[15px] mb-[10px] text-[#484848] text-[24px] font-sstbold text-center">
                              هل أنت متأكد من حذف العضو
                            </div>
                            <div className="flex justify-center mt-[0px]">
                              <img
                                className="w-[146px] h-[146px] rounded-[73px]"
                                src={config.imgUri + "/" + userDetails.pic}
                                alt="user image"
                              />
                            </div>
                            <div className="text-center text-[#484848] text-[23px] font-sstbold">
                              {userDetails.name}
                            </div>
                            <div className="text-center mb-[10px] text-[#959494] text-[23px] font-sstmedium">
                              {userDetails.job_title}
                            </div>
                          </div>

                          <div className="col-sm-12 mt-[20px] d-flex justify-center">
                            <div>
                              <button
                                onClick={() => {
                                  deleteUser(userDetails.id);
                                }}
                                type="button"
                                className="btn bg-[#959494] hover:text-[#707070] cancel text-[24px] w-[148px] h-[58px] rounded-[6px] font-sstbold text-[#ffffff]"
                              >
                                حذف
                              </button>
                            </div>
                            <div className="mr-[15px]">
                              <button
                                onClick={() => {
                                  setDeleteModal(false);
                                }}
                                type="button"
                                className="btn bg-[#959494] hover:text-[#707070] cancel text-[24px] w-[148px] h-[58px] rounded-[6px] font-sstbold text-[#ffffff]"
                              >
                                إلغاء
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
