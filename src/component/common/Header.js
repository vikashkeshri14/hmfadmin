import React from "react";

export default function Header() {
  return (
    <>
      <div className="header-navbar-shadow"></div>
      <nav className="header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top ">
        <div className="navbar-wrapper">
          <div className="navbar-container content">
            <div className="navbar-collapse" id="navbar-mobile">
              <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                <ul className="nav navbar-nav">
                  <li className="nav-item mobile-menu d-xl-none mr-auto">
                    <a
                      className="nav-link nav-menu-main menu-toggle hidden-xs"
                      href="javascript:void(0);"
                    >
                      <i className="ficon bx bx-menu"></i>
                    </a>
                  </li>
                </ul>
                <ul className="nav navbar-nav bookmark-icons">
                  <li className="dropdown dropdown-user nav-item">
                    <a
                      className="dropdown-toggle nav-link dropdown-user-link"
                      href="javascript:void(0);"
                      data-toggle="dropdown"
                    >
                      <span>
                        <img
                          className="round w-[68px] h-[68px] rounded-[34px]"
                          src="../app-assets/images/portrait/small/avatar-s-11.jpg"
                          alt="avatar"
                        />
                      </span>
                      <div className="user-nav d-sm-flex d-none  mr-[20px]">
                        <span className="user-name font-sstbold text-[20px]">
                          أهلاً عبدالعزيز
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="nav navbar-nav float-right">
                <li className="nav-item d-none d-lg-block">
                  <a className="nav-link nav-link-expand">
                    <i className="ficon bx bx-calendar-alt"></i>
                  </a>
                </li>
                <li className="nav-item nav-search">
                  <a className="nav-link nav-link-search">
                    <i className="ficon bx bx-chat"></i>
                  </a>
                </li>
                <li className="dropdown dropdown-notification nav-item">
                  <a
                    className="nav-link nav-link-label"
                    href="javascript:void(0);"
                    data-toggle="dropdown"
                  >
                    <i className="ficon bx bx-bell bx-tada bx-flip-horizontal"></i>
                    <span className="badge badge-pill badge-danger badge-up">
                      5
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
