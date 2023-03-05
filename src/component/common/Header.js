import { set } from "date-fns";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import config from "../../config/config.json";
export default function Header() {
  const [authFails, setAuthFails] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("loginUser"));
    if (auth == null) {
      setAuthFails(true);
    }
  }, []);
  if (authFails) {
    navigate("/login");
  }
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
                    <Link
                      className="nav-link nav-menu-main menu-toggle hidden-xs"
                      href="javascript:void(0);"
                    >
                      <i className="ficon bx bx-menu"></i>
                    </Link>
                  </li>
                </ul>
                <ul className="nav navbar-nav bookmark-icons">
                  <li className="dropdown dropdown-user nav-item">
                    <Link
                      className="dropdown-toggle nav-link dropdown-user-link"
                      href="javascript:void(0);"
                      data-toggle="dropdown"
                    >
                      <span>
                        <img
                          className="round w-[68px] h-[68px] rounded-[34px]"
                          src={
                            config.domainUrl +
                            "/panel/app-assets/images/portrait/small/avatar-s-11.jpg"
                          }
                          alt="avatar"
                        />
                      </span>
                      <div className="user-nav d-sm-flex d-none  mr-[20px]">
                        <span className="user-name font-sstbold text-[20px]">
                          أهلاً عبدالعزيز
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <ul className="nav navbar-nav float-right">
                <li className="nav-item d-none d-lg-block">
                  <Link className="nav-link nav-link-expand">
                    <i className="ficon bx bx-calendar-alt"></i>
                  </Link>
                </li>
                <li className="nav-item nav-search">
                  <Link className="nav-link nav-link-search">
                    <i className="ficon bx bx-chat"></i>
                  </Link>
                </li>
                <li className="dropdown dropdown-notification nav-item">
                  <Link
                    className="nav-link nav-link-label"
                    href="javascript:void(0);"
                    data-toggle="dropdown"
                  >
                    <i className="ficon bx bx-bell bx-tada bx-flip-horizontal"></i>
                    <span className="badge badge-pill badge-danger badge-up">
                      5
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
