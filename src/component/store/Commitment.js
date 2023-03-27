import React from "react";
import Graph from "./Graph";

export default function Commitment() {
  return (
    <div className="row mt-[10px]">
      <div className="col-md-12  col-sm-12  rounded-[6px]">
        <div className="row">
          <div className="col-md-6 col-sm-12 pl-[0px]  rounded-[6px]">
            <div className="card mb-[10px] pb-[10px]">
              <div className="p-[10px]">
                <div className="text-[#959494] total-no-of-commitment text-center font-sstbold text-[18px]">
                  إجمالي عدد الإلتزامات
                </div>
                <div className="text-[#498A4A] text-center font-sstbold text-[35px]">
                  7007
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
                <div className="text-[#959494] total-amount-of-commitment text-center font-sstbold text-[18px]">
                  إجمالي قيمة الإلتزامات
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
                <div className="text-[#959494] no-of-commitment-paid text-center font-sstbold text-[18px]">
                  عدد الالتزامات المدفوعة
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
                <div className="text-[#959494] total-amount-of-commitment-paid text-center font-sstbold text-[18px]">
                  قيمة الإلتزامات المدفوعة
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
                <div className="text-[#959494] text-center total-no-commitment-pending font-sstbold text-[18px]">
                  عدد الالتزامات المعلقة
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
                <div className="text-[#959494] total-amount-of-commitment-pending text-center font-sstbold text-[18px]">
                  قيمة الإلتزامات المعلقة
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
                <div className="text-[#959494] total-no-of-drop-commitment text-center font-sstbold text-[18px]">
                  عدد الإلتزامات المسقطة
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
                <div className="text-[#959494] total-amount-of-drop-commitment text-center font-sstbold text-[18px]">
                  مبلغ الإلتزامات المسقطة
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
      {/* <div className="col-md-6 col-sm-12 rounded-[6px] pl-[0px]">
        <div className="card mb-[10px] pb-[10px]">
          <h4 className="p-[10px] text-[18px] font-sstbold text-[#959494]">
            أوقات النشاط في التطبيق
          </h4>
          <Graph />
        </div>
      </div> */}
    </div>
  );
}
