import React from "react";
import Graph from "./Graph";

export default function Commitment() {
  return (
    <div className="row mt-[10px]">
      <div className="col-md-6 col-sm-12  rounded-[6px]">
        <div className="row">
          <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
            <div className="card mb-[10px] pb-[10px]">
              <div className="p-[10px]">
                <div className="text-[#959494] text-center font-sstbold text-[18px]">
                  عدد المتاجر
                </div>
                <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                  700
                </div>
                <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                  5,09% أعلى من الشهر الماضي
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
            <div className="card mb-[10px] pb-[10px]">
              <div className="p-[10px]">
                <div className="text-[#959494] text-center font-sstbold text-[18px]">
                  عدد المستخدمين
                </div>
                <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                  1,400
                </div>
                <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                  5,09% أعلى من الشهر الماضي
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
            <div className="card mb-[10px] pb-[10px]">
              <div className="p-[10px]">
                <div className="text-[#959494] text-center font-sstbold text-[18px]">
                  عدد المتاجر
                </div>
                <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                  700
                </div>
                <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                  5,09% أعلى من الشهر الماضي
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
            <div className="card mb-[10px] pb-[10px]">
              <div className="p-[10px]">
                <div className="text-[#959494] text-center font-sstbold text-[18px]">
                  عدد المستخدمين
                </div>
                <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                  1,400
                </div>
                <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                  5,09% أعلى من الشهر الماضي
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
            <div className="card mb-[10px] pb-[10px]">
              <div className="p-[10px]">
                <div className="text-[#959494] text-center font-sstbold text-[18px]">
                  عدد المتاجر
                </div>
                <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                  700
                </div>
                <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                  5,09% أعلى من الشهر الماضي
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
            <div className="card mb-[10px] pb-[10px]">
              <div className="p-[10px]">
                <div className="text-[#959494] text-center font-sstbold text-[18px]">
                  عدد المستخدمين
                </div>
                <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                  1,400
                </div>
                <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                  5,09% أعلى من الشهر الماضي
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
            <div className="card mb-[10px] pb-[10px]">
              <div className="p-[10px]">
                <div className="text-[#959494] text-center font-sstbold text-[18px]">
                  عدد المتاجر
                </div>
                <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                  700
                </div>
                <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                  5,09% أعلى من الشهر الماضي
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
            <div className="card mb-[10px] pb-[10px]">
              <div className="p-[10px]">
                <div className="text-[#959494] text-center font-sstbold text-[18px]">
                  عدد المستخدمين
                </div>
                <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                  1,400
                </div>
                <div className="text-[#60BA62] text-center font-sstbold text-[16px]">
                  5,09% أعلى من الشهر الماضي
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
        <div className="card mb-[10px] pb-[10px]">
          <h4 className="p-[10px] text-[18px] font-sstbold text-[#959494]">
            أوقات النشاط في التطبيق
          </h4>
          <Graph />
        </div>
      </div>
    </div>
  );
}
