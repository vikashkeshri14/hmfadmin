import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
export default function AddTeam() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [iqama, setIqama] = useState("");
  const [fullnameError, setFullNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [iqamaError, setIqamaError] = useState(false);
  const [location, setLocation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [modules, setModules] = useState([]);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [cpassword, setCpassword] = useState("");
  const [cpasswordError, setCpasswordError] = useState(false);

  const [buttonClick, setButtonClick] = useState(false);
  const [success, setSuccess] = useState(false);

  const checkedOnChange = async (args, event) => {
    let countValue = modules;
    if (event.target.checked) {
      countValue.push(args);
    } else {
      countValue = countValue.filter((value, i) => value != args);
    }
    // console.log(countValue);
    setModules(countValue);
  };

  const addTeam = async () => {
    setButtonClick(true);
    if (!fullname) {
      setFullNameError(true);
      setButtonClick(false);
      return;
    }
    setFullNameError(false);
    if (!iqama) {
      setIqamaError(true);
      setButtonClick(false);
      return;
    }
    setIqamaError(false);
    if (!phone) {
      setPhoneError(true);
      setButtonClick(false);
      return;
    }
    setPhoneError(false);
    if (!email) {
      setEmailError(true);
      setButtonClick(false);
      return;
    }
    setEmailError(false);
    if (!password) {
      setPasswordError(true);
      setButtonClick(false);
      return;
    }
    setPasswordError(false);
    if (!cpassword) {
      setCpasswordError(true);
      setButtonClick(false);
      return;
    }
    if (cpassword != password) {
      setCpasswordError(true);
      setButtonClick(false);
      return;
    }
    setCpasswordError(false);
    if (modules.length == 0) {
      alert("Please select the modules");
      setButtonClick(false);
      return;
    }
    setButtonClick(false);
    const obj = {
      fullname: fullname,
      iqama: iqama,
      location: location,
      jobTitle: jobTitle,
      phone: phone,
      email: email,
      password: password,
      modules: JSON.stringify(modules),
    };
    console.log(obj);
    return;
    let params = { url: apiList.addTeam, body: obj };
    let response = await ApiService.postData(params);
    if (response.success) {
      if (response.email) {
        alert("Email id already exist in the database, try with another email");
      } else {
        setFullName("");
        setEmail("");
        setPhone("");
        setIqama("");
        setPassword("");
        setCpassword("");
        setJobTitle("");
        setLocation("");
        document.getElementById("formteam").reset();
        setModules([]);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } else {
      alert("something went wrong please try again");
    }
  };
  return (
    <div className="app-content  content">
      <div className="content-overlay "></div>
      <div className="content-wrapper">
        <div className="content-header row"></div>
        <div className="content-body">
          <section id="basic-vertical-layouts">
            <div className="row match-height">
              {success && (
                <div className="col-12 col-md-12 ">
                  <div className="card text-[#60BA62] text-center p-[10px] text-[20px] font-sstbold">
                    User Added Successfully
                  </div>
                </div>
              )}
              <form id="formteam" className="form row form-vertical">
                <div className="col-md-6 col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="form-body">
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="full-name-vertical ">
                                <span className="font-sstbold full-name text-[#959494] text-[16px]">
                                  الاسم بالكامل
                                </span>
                              </label>
                              <input
                                value={fullname}
                                onChange={(e) => setFullName(e.target.value)}
                                type="text"
                                id="full-name-vertical"
                                className={
                                  fullnameError
                                    ? "form-control bg-[#FAFAFA] border-[#E80000] font-sstbold text-[#959494] text-[16px]"
                                    : "form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                }
                                name="fullname"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="iqama-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  الهوية الوطنية / الإقامة
                                </span>
                              </label>
                              <input
                                value={iqama}
                                onChange={(e) => setIqama(e.target.value)}
                                type="text"
                                id="iqama-vertical"
                                className={
                                  iqamaError
                                    ? "form-control bg-[#FAFAFA] border-[#E80000] font-sstbold text-[#959494] text-[16px]"
                                    : "form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                }
                                name="iqama"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="location-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  الموقع
                                </span>
                              </label>
                              <input
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                type="text"
                                id="location-vertical"
                                className="form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                name="location"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="job-title-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  المسمى الوظيفي
                                </span>
                              </label>
                              <input
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                                type="text"
                                id="job-title-vertical"
                                className="form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                name="job_title"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="mobile-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  رقم الجوال
                                </span>
                              </label>
                              <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                                id="mobile-vertical"
                                className={
                                  phoneError
                                    ? "form-control bg-[#FAFAFA] border-[#E80000] font-sstbold text-[#959494] text-[16px]"
                                    : "form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                }
                                name="mobile"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="email-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  الإيميل
                                </span>
                              </label>
                              <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                id="email-vertical"
                                className={
                                  emailError
                                    ? "form-control bg-[#FAFAFA] border-[#E80000] font-sstbold text-[#959494] text-[16px]"
                                    : "form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                }
                                name="email"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="password-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  كلمة المرور
                                </span>
                              </label>
                              <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                id="password-vertical"
                                className={
                                  passwordError
                                    ? "form-control bg-[#FAFAFA] border-[#E80000] font-sstbold text-[#959494] text-[16px]"
                                    : "form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                }
                                name="password"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="cpassword-vertical ">
                                <span className="font-sstbold text-[#959494] text-[16px]">
                                  إعادة كلمة المرور
                                </span>
                              </label>
                              <input
                                onChange={(e) => setCpassword(e.target.value)}
                                type="password"
                                value={cpassword}
                                id="cpassword-vertical"
                                className={
                                  cpasswordError
                                    ? "form-control bg-[#FAFAFA] border-[#E80000] font-sstbold text-[#959494] text-[16px]"
                                    : "form-control bg-[#FAFAFA] border-[#FAFAFA] font-sstbold text-[#959494] text-[16px]"
                                }
                                name="cpassword"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
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
                                        onChange={(event) =>
                                          checkedOnChange("dashboard", event)
                                        }
                                      />
                                      <label
                                        className="text-[#959494] font-sstbold text-[16px] "
                                        htmlFor="checkbox1"
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
                                        onChange={(event) =>
                                          checkedOnChange("commitment", event)
                                        }
                                        type="checkbox"
                                        className="checkbox-input"
                                        id="checkbox2"
                                        value="commitment"
                                      />
                                      <label
                                        className="text-[#959494] font-sstbold text-[16px] "
                                        htmlFor="checkbox2"
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
                                        onChange={(event) =>
                                          checkedOnChange("users", event)
                                        }
                                        type="checkbox"
                                        className="checkbox-input"
                                        id="checkbox3"
                                        value="users"
                                      />
                                      <label
                                        className="text-[#959494] font-sstbold text-[16px] "
                                        htmlFor="checkbox3"
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
                                        onChange={(event) =>
                                          checkedOnChange("profit", event)
                                        }
                                        type="checkbox"
                                        className="checkbox-input"
                                        id="checkbox4"
                                        value="profit"
                                      />
                                      <label
                                        className="text-[#959494] font-sstbold text-[16px] "
                                        htmlFor="checkbox4"
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
                                        onChange={(event) =>
                                          checkedOnChange("order", event)
                                        }
                                        type="checkbox"
                                        className="checkbox-input"
                                        id="checkbox5"
                                        value="order"
                                      />
                                      <label
                                        className="text-[#959494] font-sstbold text-[16px] "
                                        htmlFor="checkbox5"
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
                                        onChange={(event) =>
                                          checkedOnChange("management", event)
                                        }
                                        type="checkbox"
                                        className="checkbox-input"
                                        id="checkbox6"
                                        value="management"
                                      />
                                      <label
                                        className="text-[#959494] font-sstbold text-[16px] "
                                        htmlFor="checkbox6"
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
                                        onChange={(event) =>
                                          checkedOnChange("report", event)
                                        }
                                        type="checkbox"
                                        className="checkbox-input"
                                        id="checkbox7"
                                        value="report"
                                      />
                                      <label
                                        className="text-[#959494] font-sstbold text-[16px] "
                                        htmlFor="checkbox7"
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
                                        onChange={(event) =>
                                          checkedOnChange("blacklist", event)
                                        }
                                        type="checkbox"
                                        className="checkbox-input"
                                        id="checkbox8"
                                        value="blacklist"
                                      />
                                      <label
                                        className="text-[#959494] font-sstbold text-[16px] "
                                        htmlFor="checkbox8"
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
                                        onChange={(event) =>
                                          checkedOnChange("sms", event)
                                        }
                                        type="checkbox"
                                        className="checkbox-input"
                                        id="checkbox9"
                                        value="sms"
                                      />
                                      <label
                                        className="text-[#959494] font-sstbold text-[16px] "
                                        htmlFor="checkbox9"
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
                                        onChange={(event) =>
                                          checkedOnChange("categories", event)
                                        }
                                        type="checkbox"
                                        className="checkbox-input"
                                        id="checkbox10"
                                        value="categories"
                                      />
                                      <label
                                        className="text-[#959494] font-sstbold text-[16px] "
                                        htmlFor="checkbox10"
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
                                        onChange={(event) =>
                                          checkedOnChange("tech-support", event)
                                        }
                                        type="checkbox"
                                        className="checkbox-input"
                                        id="checkbox11"
                                        value="tech-support"
                                      />
                                      <label
                                        className="text-[#959494] font-sstbold text-[16px] "
                                        htmlFor="checkbox11"
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
                                        onChange={(event) =>
                                          checkedOnChange("notification", event)
                                        }
                                        type="checkbox"
                                        className="checkbox-input"
                                        id="checkbox12"
                                        value="notification"
                                      />
                                      <label
                                        className="text-[#959494] font-sstbold text-[16px] "
                                        htmlFor="checkbox12"
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
                                disabled={buttonClick}
                                onClick={() => addTeam()}
                                type="button"
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
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
