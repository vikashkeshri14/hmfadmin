import React from 'react'

export default function Login() {
    return (
        <div className="">
            <section className="bg-gray-50 dark:bg-gray-900 ">
                <div className="flex bg-[url('./login.png')] bg-center flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-[#FAFAFA] h-[565px] w-[565px]  shadow-[0_3px_6px_1px_rgba(0,0,0,0.41)]  md:mt-0 rounded-[20px] ">
                        <div className="p-6 space-y-4  md:space-y-6 sm:p-8">
                            <h1 className="text-[24px] font-sstbold text-center ">
                                تسجيل الدخول
                            </h1>
                            <form autoComplete="nope" className="" action="#">
                                <div className='mt-[45px] flex justify-center'>

                                    <input autofocus="" autocomplete="off" type="email" name="email" id="email" className="w-[526px] text-[16px] font-sstroman pr-[20px] rounded-[20px] h-[74px] bg-white" placeholder="البريد الإلكتروني" required="" />
                                </div>
                                <div className='mt-[45px] flex justify-center'>

                                    <input autoComplete="new-password" type="password" name="password" id="password" placeholder="••••••••" className="w-[526px] text-[16px] font-sstroman pr-[20px] rounded-[20px] h-[74px] bg-white" required="" />
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="flex text-center justify-center">
                                        <a href="#" className="text-[16px] font-sstbold text-[#60BA62] self-center text-center mt-[35px]">نسيت كلمة المرور</a>
                                    </div>

                                </div>
                                <div className="flex justify-center ">
                                    <button type="submit" className="w-[448px] self-center rounded-[20px] mt-[40px] text-[24px] font-sstbold text-[#ffffff] h-[74px] bg-[#60BA62]">دخول</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
