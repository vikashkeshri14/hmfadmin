import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("loginUser"));
    console.log(local);
  });
  const checkLogin = () => {
    setButtonClick(true);
    if (!email) {
      setEmailError(true);
      setButtonClick((buttonClick) => !buttonClick);
      return;
    } else {
      let re = `/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/`;
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        setEmailError(false);
      } else {
        setEmailError(true);
        setButtonClick((buttonClick) => !buttonClick);
        return;
      }
    }
    if (!password || password.length < 7) {
      setPasswordError(true);
      setButtonClick((buttonClick) => !buttonClick);
      return;
    } else {
      setPasswordError(false);
    }
  };
  return (
    <div className="">
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="flex bg-[url('./login.png')] bg-center flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className=" bg-[#FAFAFA] h-[565px] w-[565px]  shadow-[0_3px_6px_1px_rgba(0,0,0,0.41)]  md:mt-0 rounded-[20px] ">
            <div className="p-6 space-y-4  md:space-y-6 sm:p-8">
              <h1 className="text-[24px] font-sstbold text-center ">
                تسجيل الدخول
              </h1>
              <form autoComplete="nope" className="" action="#">
                <div className="mt-[45px] flex justify-center">
                  <input
                    autoFocus=""
                    autoComplete="off"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    className={
                      emailError
                        ? "w-[526px] border-[#E80000] border-[1px] text-[16px] font-sstroman pr-[20px] rounded-[20px] h-[74px] bg-white"
                        : "w-[526px] text-[16px] font-sstroman pr-[20px] rounded-[20px] h-[74px] bg-white"
                    }
                    placeholder="البريد الإلكتروني"
                  />
                </div>
                <div className="mt-[45px] flex justify-center">
                  <input
                    autoComplete="new-password"
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="كلمة المرور"
                    className={
                      passwordError
                        ? "w-[526px] border-[#E80000] border-[1px] text-[16px] font-sstroman pr-[20px] rounded-[20px] h-[74px] bg-white"
                        : "w-[526px] text-[16px] font-sstroman pr-[20px] rounded-[20px] h-[74px] bg-white"
                    }
                  />
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex text-center justify-center">
                    <Link
                      to="/forget-password"
                      className="text-[16px] font-sstbold text-[#60BA62] self-center text-center mt-[35px]"
                    >
                      نسيت كلمة المرور
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <button
                    type="button"
                    disabled={buttonClick ? true : false}
                    onClick={() => checkLogin()}
                    className="w-[448px] self-center rounded-[20px] mt-[40px] text-[24px] font-sstbold text-[#ffffff] h-[74px] bg-[#60BA62]"
                  >
                    دخول
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
