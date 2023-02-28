import React from "react";

export default function ForgetPassword() {
  return (
    <div className="">
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="flex bg-[url('./forget-password.png')] bg-center flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className=" bg-[#FAFAFA] h-[425px] w-[555px]  shadow-[0_3px_6px_1px_rgba(0,0,0,0.41)]  md:mt-0 rounded-[20px] ">
            <div className="p-6 space-y-4  md:space-y-6 sm:p-8">
              <h1 className="text-[24px] font-sstbold text-center ">
                نسيت كلمة المرور
              </h1>
              <form autoComplete="nope" className="" action="#">
                <div className="mt-[45px] flex justify-center">
                  <input
                    autoFocus=""
                    autoComplete="off"
                    type="email"
                    name="email"
                    id="email"
                    className="w-[526px] text-[16px] font-sstroman pr-[20px] rounded-[20px] h-[74px] bg-white"
                    placeholder="البريد الإلكتروني"
                    required=""
                  />
                </div>

                <div className="flex justify-center ">
                  <button
                    type="button"
                    className="w-[448px] self-center rounded-[20px] mt-[80px] text-[24px] font-sstbold text-[#ffffff] h-[74px] bg-[#60BA62]"
                  >
                    إرسال
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
