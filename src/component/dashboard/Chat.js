import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ApiService from "../../config/config";
import apiList from "../../config/apiList.json";
import config from "../../config/config.json";
import { Squares } from "react-activity";
import moment from "moment";
import "react-activity/dist/library.css";

export default function Chat(props) {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    getTeam();
  }, []);
  const getTeam = async () => {
    let params = { url: apiList.getTeam };
    let response = await ApiService.getData(params);
    setTeam(response.result);
  };
  return (
    <div>
      <h1 className="text-[#959494] text-[18px] font-sstbold pt-[20px] pr-[15px]">
        أخر ظهور للأعضاء
      </h1>
      <ul className="chat-sidebar-list p-[10px]">
        {team.length > 0 &&
          team.map((data, i) => {
            return (
              <li
                key={i}
                className="bg-[#F9F9F9] p-[10px] rounded-[3px] mt-[10px] mb-[10px]"
              >
                <div className="d-flex align-items-center">
                  <div className="m-0 mr-50 w-[25%]">
                    <img
                      className="w-[60px] h-[60px] rounded-[30px]"
                      src="../../../panel/app-assets/images/user-profile.png"
                      alt="sidebar user image"
                    />
                  </div>
                  <div className="chat-sidebar-name w-[48%]">
                    <h6 className="mb-0 text-[16px] font-sstbold text-[#484848]">
                      {data.name}
                    </h6>
                    <span className="text-muted text-[12px] font-sstbold text-[#959494]">
                      {data.job_title}
                    </span>
                  </div>
                  <div className="chat-sidebar-name text-right w-[22%]">
                    <div className="text-center">
                      <i className="ficon bx bx-chat"></i>
                    </div>
                    <span className="text-muted text-[12px] font-sstroman text-[#959494]">
                      قبل ساعة
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
