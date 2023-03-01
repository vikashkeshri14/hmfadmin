import React from "react";

export default function AddTeam() {
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section id="basic-vertical-layouts">
            <div className="row match-height">
              <div className="col-md-6 col-12">
                <div className="card">
                  <div className="card-body">
                    <form className="form form-vertical">
                      <div className="form-body">
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <label for="full-name-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  الاسم بالكامل
                                </span>
                              </label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                className="form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                name="fname"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label for="iqama-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  الهوية الوطنية / الإقامة
                                </span>
                              </label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                className="form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                name="iqama"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label for="site-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  الموقع
                                </span>
                              </label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                className="form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                name="fname"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label for="job-title-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  المسمى الوظيفي
                                </span>
                              </label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                className="form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                name="job_title"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label for="mobile-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  رقم الجوال
                                </span>
                              </label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                className="form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                name="mobile"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label for="full-name-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  الإيميل
                                </span>
                              </label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                className="form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                name="email"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label for="password-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  كلمة المرور
                                </span>
                              </label>
                              <input
                                type="password"
                                id="first-name-vertical"
                                className="form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                name="password"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label for="confirm-password-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  إعادة كلمة المرور
                                </span>
                              </label>
                              <input
                                type="text"
                                id="first-name-vertical"
                                className="form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                name="cpassword"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title text-[#959494] text-[18px] font-sstbold">
                      صلاحيات العضو الجديد
                    </h4>
                  </div>
                  <div className="card-body">
                    <form className="form form-vertical">
                      <div className="form-body">
                        <div className="row">
                          <div className="col-12 pt-[10px] pb-[10px]">
                            <div className="flex">
                              <div className="w-[50%]">
                                <div className="form-group">
                                  <div className="checkbox">
                                    <input
                                      type="checkbox"
                                      className="checkbox-input"
                                      id="checkbox1"
                                      value="dashboard"
                                    />
                                    <label
                                      className="text-[#959494] font-sstbold text-[16px] "
                                      for="checkbox1"
                                    >
                                      لوحة التحكم
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[50%]">
                                <div className="form-group">
                                  <div className="checkbox">
                                    <input
                                      type="checkbox"
                                      className="checkbox-input"
                                      id="checkbox2"
                                      value="commitment"
                                    />
                                    <label
                                      className="text-[#959494] font-sstbold text-[16px] "
                                      for="checkbox2"
                                    >
                                      الإلتزامات
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 pt-[30px] pb-[10px] border-t-[1px] ">
                            <div className="flex">
                              <div className="w-[50%]">
                                <div className="form-group">
                                  <div className="checkbox">
                                    <input
                                      type="checkbox"
                                      className="checkbox-input"
                                      id="checkbox3"
                                      value="users"
                                    />
                                    <label
                                      className="text-[#959494] font-sstbold text-[16px] "
                                      for="checkbox3"
                                    >
                                      إدارة الحسابات
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[50%]">
                                <div className="form-group">
                                  <div className="checkbox">
                                    <input
                                      type="checkbox"
                                      className="checkbox-input"
                                      id="checkbox4"
                                      value="profit"
                                    />
                                    <label
                                      className="text-[#959494] font-sstbold text-[16px] "
                                      for="checkbox4"
                                    >
                                      الأرباح
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 pt-[30px] pb-[10px border-t-[1px] ">
                            <div className="flex">
                              <div className="w-[50%]">
                                <div className="form-group">
                                  <div className="checkbox">
                                    <input
                                      type="checkbox"
                                      className="checkbox-input"
                                      id="checkbox5"
                                      value="order-management"
                                    />
                                    <label
                                      className="text-[#959494] font-sstbold text-[16px] "
                                      for="checkbox5"
                                    >
                                      إدارة الطلبات
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[50%]">
                                <div className="form-group">
                                  <div className="checkbox">
                                    <input
                                      type="checkbox"
                                      className="checkbox-input"
                                      id="checkbox6"
                                      value="team-management"
                                    />
                                    <label
                                      className="text-[#959494] font-sstbold text-[16px] "
                                      for="checkbox6"
                                    >
                                      إدارة فريق العمل
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 pt-[30px] pb-[10px border-t-[1px] ">
                            <div className="flex">
                              <div className="w-[50%]">
                                <div className="form-group">
                                  <div className="checkbox">
                                    <input
                                      type="checkbox"
                                      className="checkbox-input"
                                      id="checkbox7"
                                      value="info"
                                    />
                                    <label
                                      className="text-[#959494] font-sstbold text-[16px] "
                                      for="checkbox7"
                                    >
                                      إدارة البلاغات
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[50%]">
                                <div className="form-group">
                                  <div className="checkbox">
                                    <input
                                      type="checkbox"
                                      className="checkbox-input"
                                      id="checkbox8"
                                      value="black-list"
                                    />
                                    <label
                                      className="text-[#959494] font-sstbold text-[16px] "
                                      for="checkbox8"
                                    >
                                      القائمة السوداء
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 pt-[30px] pb-[10px border-t-[1px] ">
                            <div className="flex">
                              <div className="w-[50%]">
                                <div className="form-group">
                                  <div className="checkbox">
                                    <input
                                      type="checkbox"
                                      className="checkbox-input"
                                      id="checkbox9"
                                      value="sms"
                                    />
                                    <label
                                      className="text-[#959494] font-sstbold text-[16px] "
                                      for="checkbox9"
                                    >
                                      SMS
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[50%]">
                                <div className="form-group">
                                  <div className="checkbox">
                                    <input
                                      type="checkbox"
                                      className="checkbox-input"
                                      id="checkbox10"
                                      value="item-modification"
                                    />
                                    <label
                                      className="text-[#959494] font-sstbold text-[16px] "
                                      for="checkbox10"
                                    >
                                      تعديل الأصناف
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 pt-[30px] pb-[10px border-t-[1px] ">
                            <div className="flex">
                              <div className="w-[50%]">
                                <div className="form-group">
                                  <div className="checkbox">
                                    <input
                                      type="checkbox"
                                      className="checkbox-input"
                                      id="checkbox11"
                                      value="technical-support"
                                    />
                                    <label
                                      className="text-[#959494] font-sstbold text-[16px] "
                                      for="checkbox11"
                                    >
                                      الدعم الفني
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[50%]">
                                <div className="form-group">
                                  <div className="checkbox">
                                    <input
                                      type="checkbox"
                                      className="checkbox-input"
                                      id="checkbox12"
                                      value="alert"
                                    />
                                    <label
                                      className="text-[#959494] font-sstbold text-[16px] "
                                      for="checkbox12"
                                    >
                                      التنبيهات
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12 d-flex mt-[120px] mb-[30px] justify-center">
                            <button
                              type="submit"
                              className="btn w-[370px] bg-[#959494] text-[18px] h-[62px] font-sstbold text-[#FFFFFF] mr-1"
                            >
                              حفظ
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
