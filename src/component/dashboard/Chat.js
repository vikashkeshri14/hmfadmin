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
    let params = { url: apiList.getLastSeen };
    let response = await ApiService.postData(params);
    if (response.result.length > 0) {
      setTeam(response.result);
    }
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
                      src={config.imgUri + "/" + data.user_pic}
                      alt="sidebar user image"
                    />
                  </div>
                  <div className="chat-sidebar-name w-[48%]">
                    <h6 className="mb-0 text-[16px] font-sstbold text-[#484848]">
                      {data.username}
                    </h6>
                    <span className="text-muted text-[12px] font-sstbold text-[#959494]">
                      {data.user_type == "1" ? "User" : "Store"}
                    </span>
                  </div>
                  <div className="chat-sidebar-name flex flex-col justify-center  w-[25%]">
                    <div className="flex self-center justify-center">
                      <img
                        src={
                          config.domainUrl + "/panel/app-assets/images/chat.png"
                        }
                        className="h-[28.8px] self-center  w-[28.8px]"
                      />
                    </div>
                    <span className="text-muted text-[12px] font-sstroman text-[#959494]">
                      {moment(data.created_at).fromNow()}
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
