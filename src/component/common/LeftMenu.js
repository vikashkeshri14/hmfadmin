import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import config from "../../config/config.json";
export default function LeftMenu({ route }) {
  const [pathUrl, setPathUrl] = useState(null);
  const [modules, setModules] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setPathUrl(location.pathname);
    const auth = JSON.parse(localStorage.getItem("loginUser"));
    setModules(auth.modules);
  }, []);
  const logoutClick = async () => {
    localStorage.clear();
    navigate("/");
  };
  // console.log();
  return (
    <div
      className="main-menu menu-fixed menu-light menu-accordion menu-shadow"
      data-scroll-to-active="true"
    >
      <div className=" flex justify-center navbar-header bg-[url('./left-menu.png')] bg-cover">
        <img
          src={config.domainUrl + "/panel/app-assets/images/logo/logo.png"}
          className="h-[95px] self-center w-[95px]"
        />
      </div>

      <div className="main-menu-content">
        <ul
          className="navigation  navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
          data-icon-style=""
        >
          {modules.includes("dashboard") && (
            <li
              className={
                pathUrl == "/dashboard"
                  ? " h-[61px] flex  active-menu-left nav-item"
                  : " h-[61px] flex  nav-item"
              }
            >
              <Link to="/dashboard">
                {pathUrl == "/dashboard" ? (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/icon/dashboard.png"
                    }
                  />
                ) : (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={config.domainUrl + "/panel/app-assets/images/dash.png"}
                  />
                )}

                <span
                  className={
                    pathUrl == "/dashboard"
                      ? "menu-title text-truncate text-[#ffffff] text-[16px] font-sstbold"
                      : "menu-title text-truncate text-[#484848] text-[16px] font-sstbold"
                  }
                  data-i18n="Dashboard"
                >
                  لوحة التحكم
                </span>
              </Link>
            </li>
          )}
          {modules.includes("users") && (
            <li
              className={
                pathUrl == "/users"
                  ? "  h-[61px] flex  nav-item  active-menu-left "
                  : " h-[61px] flex  nav-item"
              }
            >
              <Link to="/users">
                {pathUrl == "/users" ? (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/user-selected.png"
                    }
                  />
                ) : (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/icon/account-management.png"
                    }
                  />
                )}
                <span
                  className={
                    pathUrl == "/users"
                      ? "menu-title text-truncate text-[#ffffff] text-[16px] font-sstbold"
                      : "menu-title text-truncate text-[#484848] text-[16px] font-sstbold"
                  }
                  data-i18n="Account Management"
                >
                  إدارة الحسابات
                </span>
              </Link>
            </li>
          )}

          {modules.includes("order") && (
            <li
              className={
                pathUrl == "/order"
                  ? "  h-[61px] flex  nav-item  active-menu-left "
                  : " h-[61px] flex  nav-item"
              }
            >
              <Link to="/order">
                {pathUrl == "/order" ? (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={config.domainUrl + "/panel/app-assets/images/bulk.png"}
                  />
                ) : (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/icon/order-management.png"
                    }
                  />
                )}
                <span
                  className={
                    pathUrl == "/order"
                      ? "menu-title text-truncate text-[#ffffff] text-[16px] font-sstbold"
                      : "menu-title text-truncate text-[#484848] text-[16px] font-sstbold"
                  }
                  data-i18n="Order Management"
                >
                  إدارة الطلبات
                </span>
              </Link>
            </li>
          )}
          {modules.includes("report") && (
            <li
              className={
                pathUrl == "/report"
                  ? "  h-[61px] flex  nav-item  active-menu-left "
                  : " h-[61px] flex  nav-item"
              }
            >
              <Link to="/report">
                {pathUrl == "/report" ? (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/info-selected.png"
                    }
                  />
                ) : (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/icon/report.png"
                    }
                  />
                )}
                <span
                  className={
                    pathUrl == "/report"
                      ? "menu-title text-truncate text-[#ffffff] text-[16px] font-sstbold"
                      : "menu-title text-truncate text-[#484848] text-[16px] font-sstbold"
                  }
                  data-i18n="Report"
                >
                  إدارة البلاغات
                </span>
              </Link>
            </li>
          )}

          {modules.includes("sms") && (
            <li
              className={
                pathUrl == "/sms"
                  ? "  h-[61px] flex  nav-item  active-menu-left "
                  : " h-[61px] flex  nav-item"
              }
            >
              <Link to="/sms">
                {pathUrl == "/sms" ? (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/message-select.png"
                    }
                  />
                ) : (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl + "/panel/app-assets/images/icon/sms.png"
                    }
                  />
                )}
                <span
                  className={
                    pathUrl == "/sms"
                      ? "menu-title text-truncate text-[#ffffff] text-[16px] font-sstbold"
                      : "menu-title text-truncate text-[#484848] text-[16px] font-sstbold"
                  }
                  data-i18n="Sms"
                >
                  sms
                </span>
              </Link>
            </li>
          )}

          {modules.includes("tech-support") && (
            <li
              className={
                pathUrl == "/tech-support"
                  ? "  h-[61px] flex  nav-item  active-menu-left "
                  : " h-[61px] flex  nav-item"
              }
            >
              <Link to="/tech-support">
                {pathUrl == "/tech-support" ? (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={config.domainUrl + "/panel/app-assets/images/book.png"}
                  />
                ) : (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/icon/technical-support.png"
                    }
                  />
                )}
                <span
                  className={
                    pathUrl == "/tech-support"
                      ? "menu-title text-truncate text-[#ffffff] text-[16px] font-sstbold"
                      : "menu-title text-truncate text-[#484848] text-[16px] font-sstbold"
                  }
                  data-i18n="Technical Support"
                >
                  الدعم الفني
                </span>
              </Link>
            </li>
          )}

          {modules.includes("notification") && (
            <li
              className={
                pathUrl == "/notification"
                  ? "  h-[61px] flex  nav-item  active-menu-left "
                  : " h-[61px] flex  nav-item"
              }
            >
              <Link to="/notification">
                {pathUrl == "/notification" ? (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/notification-select.png"
                    }
                  />
                ) : (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/icon/notification.png"
                    }
                  />
                )}
                <span
                  className={
                    pathUrl == "/notification"
                      ? "menu-title text-truncate text-[#ffffff] text-[16px] font-sstbold"
                      : "menu-title text-truncate text-[#484848] text-[16px] font-sstbold"
                  }
                  data-i18n="Notification"
                >
                  التنبيهات
                </span>
              </Link>
            </li>
          )}

          {modules.includes("commitment") && (
            <li
              className={
                pathUrl == "/commitment"
                  ? "  h-[61px] flex  nav-item  active-menu-left "
                  : " h-[61px] flex  nav-item"
              }
            >
              <Link to="/commitment">
                {pathUrl == "/commitment" ? (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/wallet-select.png"
                    }
                  />
                ) : (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/icon/commitment.png"
                    }
                  />
                )}
                <span
                  className={
                    pathUrl == "/commitment"
                      ? "menu-title text-truncate text-[#ffffff] text-[16px] font-sstbold"
                      : "menu-title text-truncate text-[#484848] text-[16px] font-sstbold"
                  }
                  data-i18n="Commitment"
                >
                  الالتزامات
                </span>
              </Link>
            </li>
          )}

          {modules.includes("transfer") && (
            <li
              className={
                pathUrl == "/transfer"
                  ? "  h-[61px] flex  nav-item  active-menu-left "
                  : " h-[61px] flex  nav-item"
              }
            >
              <Link to="/transfer">
                {pathUrl == "/transfer" ? (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/transfer-select.png"
                    }
                  />
                ) : (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl + "/panel/app-assets/images/transfer.png"
                    }
                  />
                )}
                <span
                  className={
                    pathUrl == "/transfer"
                      ? "menu-title text-truncate text-[#ffffff] text-[16px] font-sstbold"
                      : "menu-title text-truncate text-[#484848] text-[16px] font-sstbold"
                  }
                  data-i18n="transfer"
                >
                  الحوالات المحلية الواردة
                </span>
              </Link>
            </li>
          )}

          {modules.includes("profit") && (
            <li
              className={
                pathUrl == "/profit"
                  ? "  h-[61px] flex  nav-item  active-menu-left "
                  : " h-[61px] flex  nav-item"
              }
            >
              <Link to="/profit">
                {pathUrl == "/profit" ? (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/profit-select.png"
                    }
                  />
                ) : (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/icon/profit.png"
                    }
                  />
                )}
                <span
                  className={
                    pathUrl == "/profit"
                      ? "menu-title text-truncate text-[#ffffff] text-[16px] font-sstbold"
                      : "menu-title text-truncate text-[#484848] text-[16px] font-sstbold"
                  }
                  data-i18n="Profit"
                >
                  الأرباح
                </span>
              </Link>
            </li>
          )}

          {modules.includes("management") && (
            <li
              className={
                pathUrl == "/management"
                  ? "  h-[61px] flex  nav-item  active-menu-left "
                  : " h-[61px] flex  nav-item"
              }
            >
              <Link to="/management">
                {pathUrl == "/management" ? (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/management-select.png"
                    }
                  />
                ) : (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/icon/team-management.png"
                    }
                  />
                )}
                <span
                  className={
                    pathUrl == "/management"
                      ? "menu-title text-truncate text-[#ffffff] text-[16px] font-sstbold"
                      : "menu-title text-truncate text-[#484848] text-[16px] font-sstbold"
                  }
                  data-i18n="Team Management"
                >
                  إدارة فريق العمل
                </span>
              </Link>
            </li>
          )}

          {modules.includes("blacklist") && (
            <li
              className={
                pathUrl == "/blacklist"
                  ? "  h-[61px] flex  nav-item  active-menu-left "
                  : " h-[61px] flex  nav-item"
              }
            >
              <Link to="/blacklist">
                {pathUrl == "/blacklist" ? (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/blacklist-select.png"
                    }
                  />
                ) : (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/icon/black-list.png"
                    }
                  />
                )}
                <span
                  className={
                    pathUrl == "/blacklist"
                      ? "menu-title text-truncate text-[#ffffff] text-[16px] font-sstbold"
                      : "menu-title text-truncate text-[#484848] text-[16px] font-sstbold"
                  }
                  data-i18n="Black List"
                >
                  القائمة السوداء
                </span>
              </Link>
            </li>
          )}

          {modules.includes("categories") && (
            <li
              className={
                pathUrl == "/categories"
                  ? "  h-[61px] flex  nav-item  active-menu-left "
                  : " h-[61px] flex  nav-item"
              }
            >
              <Link to="/categories">
                {pathUrl == "/categories" ? (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/edit-white.png"
                    }
                  />
                ) : (
                  <img
                    className="h-[24px] w-[24px] ml-[24px]"
                    src={
                      config.domainUrl +
                      "/panel/app-assets/images/icon/edit.png"
                    }
                  />
                )}
                <span
                  className={
                    pathUrl == "/categories"
                      ? "menu-title text-truncate text-[#ffffff] text-[16px] font-sstbold"
                      : "menu-title text-truncate text-[#484848] text-[16px] font-sstbold"
                  }
                  data-i18n="Item modification"
                >
                  تعديل الأصناف
                </span>
              </Link>
            </li>
          )}

          <li
            onClick={() => {
              logoutClick();
            }}
            className=" h-[61px] flex  nav-item"
          >
            <Link>
              <img
                className="h-[24px] w-[24px] ml-[24px]"
                src={config.domainUrl + "/panel/app-assets/images/logout.png"}
              />
              <span
                className="menu-title text-truncate text-[#484848] text-[16px] font-sstbold"
                data-i18n="Logout"
              >
                تسجيل خروج
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
