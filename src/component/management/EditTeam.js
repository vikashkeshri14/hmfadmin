import React, { useEffect, useState } from "react";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import { useParams, useNavigate } from "react-router-dom";
export default function EditTeam() {
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
  const [id, setId] = useState("");

  const [buttonClick, setButtonClick] = useState(false);
  const [success, setSuccess] = useState(false);
  const [allModules, setAllModules] = useState([
    {
      name: "لوحة التحكم",
      eng: "dashboard",
      checked: false,
    },

    {
      name: "الإلتزامات",
      eng: "commitment",
      checked: false,
    },

    {
      name: " إدارة الحسابات",
      eng: "users",
      checked: false,
    },

    {
      name: "الأرباح",
      eng: "profit",
      checked: false,
    },

    {
      name: "إدارة الطلبات",
      eng: "order",
      checked: false,
    },

    {
      name: "إدارة فريق العمل",
      eng: "management",
      checked: false,
    },

    {
      name: "إدارة البلاغات",
      eng: "report",
      checked: false,
    },

    {
      name: "القائمة السوداء",
      eng: "blacklist",
      checked: false,
    },

    {
      name: "sms",
      eng: "sms",
      checked: false,
    },

    {
      name: " تعديل الأصناف",
      eng: "categories",
      checked: false,
    },

    {
      name: "الدعم الفني",
      eng: "tech-support",
      checked: false,
    },

    {
      name: "التنبيهات",
      eng: "notification",
      checked: false,
    },
  ]);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getTeamById(params.slug);
  }, [params.slug]);
  const getTeamById = async (id) => {
    const obj = {
      id: id,
    };
    let params = { url: apiList.getTeamById, body: obj };
    let response = await ApiService.postData(params);
    if (response.result.length > 0) {
      let users = response.result[0];
      setFullName(users.name);
      setEmail(users.email);
      setPhone(users.phone);
      setJobTitle(users.job_title);
      setLocation(users.location);
      setIqama(users.iqama);
      let modules = users.modules;
      modules = modules.replace(/'/g, '"'); //replacing all ' with "
      modules = JSON.parse(modules);

      let getChecked = allModules;
      getChecked.map((data, i) => {
        if (modules.includes(data.eng)) {
          data.checked = true;
        }
      });
      setAllModules(getChecked);
      setModules(modules);
      setId(users.id);
    } else {
      navigate("/management");
    }
    //console.log(response);
  };
  const checkedOnChange = async (args, event) => {
    let countValue = modules;
    let getChecked = allModules;
    if (event.target.checked) {
      countValue.push(args);
      getChecked.map((data, i) => {
        if (countValue.includes(data.eng)) {
          data.checked = true;
        } else {
          data.checked = false;
        }
        return data;
      });
      setAllModules((allModules) => getChecked);
      // countValue = countValue.filter((value, i) => value != args);
    } else {
      countValue = countValue.filter((value, i) => value != args);
      getChecked.map((data, i) => {
        if (countValue.includes(data.eng)) {
          data.checked = true;
        } else {
          data.checked = false;
        }
        return data;
      });
      setAllModules((allModules) => getChecked);
    }

    //console.log(countValue);
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

    if (modules.length == 0) {
      alert("Please select the modules");
      setButtonClick(false);
      return;
    }
    setButtonClick(false);
    const obj = {
      id: id,
      fullname: fullname,
      iqama: iqama,
      location: location,
      jobTitle: jobTitle,
      phone: phone,
      email: email,
      password: password,
      modules: JSON.stringify(modules),
    };
    // console.log(obj);
    // return;
    let params = { url: apiList.updateTeam, body: obj };
    let response = await ApiService.postData(params);
    if (response.success) {
      if (response.email) {
        alert("Email id already exist in the database, try with another email");
      } else {
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
                    User Updated Successfully
                  </div>
                </div>
              )}

              <>
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
                                autoComplete="false"
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
                              <div className="flex flex-wrap">
                                {allModules.map((data, i) => {
                                  return data.checked ? (
                                    <div key={i} className="w-[50%] mt-[10px]">
                                      <div className="form-group">
                                        <div className="checkbox">
                                          <input
                                            type="checkbox"
                                            className="checkbox-input"
                                            id={data.eng}
                                            value={data.eng}
                                            checked={data.checked}
                                            onChange={(event) =>
                                              checkedOnChange(data.eng, event)
                                            }
                                          />
                                          <label
                                            className="text-[#959494] font-sstbold text-[16px] "
                                            htmlFor={data.eng}
                                          >
                                            {data.name}
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <div key={i} className="w-[50%] mt-[10px]">
                                      <div className="form-group">
                                        <div className="checkbox">
                                          <input
                                            type="checkbox"
                                            className="checkbox-input"
                                            id={data.eng}
                                            value={data.eng}
                                            onChange={(event) =>
                                              checkedOnChange(data.eng, event)
                                            }
                                          />
                                          <label
                                            className="text-[#959494] font-sstbold text-[16px] "
                                            htmlFor={data.eng}
                                          >
                                            {data.name}
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
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
              </>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
