import React from 'react'

export default function LeftMenu() {
    return (
        <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
            <div className=" flex justify-center navbar-header bg-[url('./left-menu.png')] bg-cover">
                <img src="../../app-assets/images/logo/logo.png" className='h-[95px] self-center w-[95px]' />

            </div>

            <div className="main-menu-content">
                <ul className="navigation  navigation-main" id="main-menu-navigation" data-menu="menu-navigation"
                    data-icon-style="">
                    <li className=" h-[61px] flex  active-menu-left nav-item"> <a href="index.html">
                        <img className='h-[24px] w-[24px] ml-[24px]' src="../../app-assets/images/icon/dashboard.png" />

                        <span className="menu-title text-truncate text-[#484848] text-[16px] font-sstbold" data-i18n="Dashboard">لوحة التحكم</span></a>

                    </li>

                    <li className=" h-[61px] flex  nav-item"><a href="app-email.html">
                        <img className='h-[24px] w-[24px] ml-[24px]' src="../../app-assets/images/icon/account-management.png" />
                        <span
                            className="menu-title text-truncate text-[#484848] text-[16px] font-sstbold" data-i18n="Account Management">إدارة الحسابات</span></a>
                    </li>

                    <li className=" h-[61px] flex  nav-item"><a href="app-email.html">
                        <img className='h-[24px] w-[24px] ml-[24px]' src="../../app-assets/images/icon/order-management.png" />
                        <span
                            className="menu-title text-truncate text-[#484848] text-[16px] font-sstbold" data-i18n="Order Management">إدارة الطلبات</span></a>
                    </li>
                    <li className=" h-[61px] flex  nav-item"><a href="app-email.html">
                        <img className='h-[24px] w-[24px] ml-[24px]' src="../../app-assets/images/icon/report.png" />
                        <span
                            className="menu-title text-truncate text-[#484848] text-[16px] font-sstbold" data-i18n="Report">إدارة البلاغات</span></a>
                    </li>
                    <li className=" h-[61px] flex  nav-item"><a href="app-email.html">
                        <img className='h-[24px] w-[24px] ml-[24px]' src="../../app-assets/images/icon/sms.png" />
                        <span
                            className="menu-title text-truncate text-[#484848] text-[16px] font-sstbold" data-i18n="Sms">sms</span></a>
                    </li>
                    <li className=" h-[61px] flex  nav-item"><a href="app-email.html">
                        <img className='h-[24px] w-[24px] ml-[24px]' src="../../app-assets/images/icon/technical-support.png" />
                        <span
                            className="menu-title text-truncate text-[#484848] text-[16px] font-sstbold" data-i18n="Technical Support">الدعم الفني</span></a>
                    </li>
                    <li className=" h-[61px] flex  nav-item"><a href="app-email.html">
                        <img className='h-[24px] w-[24px] ml-[24px]' src="../../app-assets/images/icon/notification.png" />
                        <span
                            className="menu-title text-truncate text-[#484848] text-[16px] font-sstbold" data-i18n="Notification">التنبيهات</span></a>
                    </li>
                    <li className=" h-[61px] flex  nav-item"><a href="app-email.html">
                        <img className='h-[24px] w-[24px] ml-[24px]' src="../../app-assets/images/icon/commitment.png" />
                        <span
                            className="menu-title text-truncate text-[#484848] text-[16px] font-sstbold" data-i18n="Commitment">الالتزامات</span></a>
                    </li>
                    <li className=" h-[61px] flex  nav-item"><a href="app-email.html">
                        <img className='h-[24px] w-[24px] ml-[24px]' src="../../app-assets/images/icon/profit.png" />
                        <span
                            className="menu-title text-truncate text-[#484848] text-[16px] font-sstbold" data-i18n="Profit">الأرباح</span></a>
                    </li>
                    <li className=" h-[61px] flex  nav-item"><a href="app-email.html">
                        <img className='h-[24px] w-[24px] ml-[24px]' src="../../app-assets/images/icon/team-management.png" />
                        <span
                            className="menu-title text-truncate text-[#484848] text-[16px] font-sstbold" data-i18n="Team Management">إدارة فريق العمل</span></a>
                    </li>
                    <li className=" h-[61px] flex  nav-item"><a href="app-email.html">
                        <img className='h-[24px] w-[24px] ml-[24px]' src="../../app-assets/images/icon/black-list.png" />
                        <span
                            className="menu-title text-truncate text-[#484848] text-[16px] font-sstbold" data-i18n="Black List">القائمة السوداء</span></a>
                    </li>
                    <li className=" h-[61px] flex  nav-item"><a href="app-email.html">
                        <img className='h-[24px] w-[24px] ml-[24px]' src="../../app-assets/images/icon/edit.png" />
                        <span
                            className="menu-title text-truncate text-[#484848] text-[16px] font-sstbold" data-i18n="Item modification">تعديل الأصناف</span></a>
                    </li>








                </ul>
            </div>
        </div>
    )
}
