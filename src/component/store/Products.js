import React from "react";

export default function Products() {
  return (
    <div class="bg-white mt-[15px] p-[15px] rounded-[6px] flex-col ">
      <div className="w-[100%] flex">
        <div class="w-[48%]  dashboard-users">
          <div class="row">
            <div class="col-12">
              <div class="position-relative has-icon-left">
                <div class=" absolute top-[20px] left-[10px] w-[24px] h-[24px]">
                  <i class="bx bx-slider-alt"></i>
                </div>
                <input
                  type="number"
                  id="contact-info-icon"
                  class="form-control text-[20px] font-sstroman h-[62px] bg-[#F9F9F9] border-0 shadow-sm rounded-[6px]"
                  name="contact-icon"
                  placeholder="البحث"
                />
                <div class="form-control-position top-[20px] right-[10px] w-[24px] h-[24px]">
                  <img src="../app-assets/images/search.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[50%] pt-[15px] dashboard-users ml-[10px] flex justify-end">
          98 منتج
        </div>
      </div>
      <div className="flex mt-[20px] overflow-x-auto overflow-y-hidden">
        <div className="flex-col">
          <div className="flex">
            <div
              style={{
                backgroundImage: "url('../app-assets/images/product.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[303px] w-[216px]"
            >
              <div
                style={{
                  backgroundImage: "url('../app-assets/images/shadow.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-[303px] flex justify-end w-[216px]"
              >
                <div className="h-[51px] w-[47px] flex justify-center bg-[#959494]">
                  <img
                    src="../app-assets/images/trash.png"
                    className="h-[24px] self-center w-[24px]"
                  />
                </div>
              </div>
              <div className="mt-[-70px] mr-[10px]">
                <div className="text-[#ffffff] text-[24px]  font-sstmedium ">
                  كيكة التين
                </div>
                <div className="flex justify-evenly">
                  <div className="text-[#ffffff]  text-[14px]  font-sstmedium ">
                    المبيعات 70
                  </div>
                  <div className="text-[#ffffff] mr-[20px]  text-[14px] float-left self-end justify-end font-sstmedium ">
                    <span>ريال</span>
                    <span>200</span> <span>الربح</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-[15px]">
            <div
              style={{
                backgroundImage: "url('../app-assets/images/product.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[303px] w-[216px]"
            >
              <div
                style={{
                  backgroundImage: "url('../app-assets/images/shadow.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-[303px] flex justify-end w-[216px]"
              >
                <div className="h-[51px] w-[47px] flex justify-center bg-[#959494]">
                  <img
                    src="../app-assets/images/trash.png"
                    className="h-[24px] self-center w-[24px]"
                  />
                </div>
              </div>
              <div className="mt-[-70px] mr-[10px]">
                <div className="text-[#ffffff] text-[24px]  font-sstmedium ">
                  كيكة التين
                </div>
                <div className="flex justify-evenly">
                  <div className="text-[#ffffff]  text-[14px]  font-sstmedium ">
                    المبيعات 70
                  </div>
                  <div className="text-[#ffffff] mr-[20px]  text-[14px] float-left self-end justify-end font-sstmedium ">
                    <span>ريال</span>
                    <span>200</span> <span>الربح</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col mr-[15px]">
          <div className="flex">
            <div
              style={{
                backgroundImage: "url('../app-assets/images/product.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[303px] w-[216px]"
            >
              <div
                style={{
                  backgroundImage: "url('../app-assets/images/shadow.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-[303px] flex justify-end w-[216px]"
              >
                <div className="h-[51px] w-[47px] flex justify-center bg-[#959494]">
                  <img
                    src="../app-assets/images/trash.png"
                    className="h-[24px] self-center w-[24px]"
                  />
                </div>
              </div>
              <div className="mt-[-70px] mr-[10px]">
                <div className="text-[#ffffff] text-[24px]  font-sstmedium ">
                  كيكة التين
                </div>
                <div className="flex justify-evenly">
                  <div className="text-[#ffffff]  text-[14px]  font-sstmedium ">
                    المبيعات 70
                  </div>
                  <div className="text-[#ffffff] mr-[20px]  text-[14px] float-left self-end justify-end font-sstmedium ">
                    <span>ريال</span>
                    <span>200</span> <span>الربح</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-[15px]">
            <div
              style={{
                backgroundImage: "url('../app-assets/images/product.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[303px] w-[216px]"
            >
              <div
                style={{
                  backgroundImage: "url('../app-assets/images/shadow.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-[303px] flex justify-end w-[216px]"
              >
                <div className="h-[51px] w-[47px] flex justify-center bg-[#959494]">
                  <img
                    src="../app-assets/images/trash.png"
                    className="h-[24px] self-center w-[24px]"
                  />
                </div>
              </div>
              <div className="mt-[-70px] mr-[10px]">
                <div className="text-[#ffffff] text-[24px]  font-sstmedium ">
                  كيكة التين
                </div>
                <div className="flex justify-evenly">
                  <div className="text-[#ffffff]  text-[14px]  font-sstmedium ">
                    المبيعات 70
                  </div>
                  <div className="text-[#ffffff] mr-[20px]  text-[14px] float-left self-end justify-end font-sstmedium ">
                    <span>ريال</span>
                    <span>200</span> <span>الربح</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col mr-[15px]">
          <div className="flex">
            <div
              style={{
                backgroundImage: "url('../app-assets/images/product.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[303px] w-[216px]"
            >
              <div
                style={{
                  backgroundImage: "url('../app-assets/images/shadow.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-[303px] flex justify-end w-[216px]"
              >
                <div className="h-[51px] w-[47px] flex justify-center bg-[#959494]">
                  <img
                    src="../app-assets/images/trash.png"
                    className="h-[24px] self-center w-[24px]"
                  />
                </div>
              </div>
              <div className="mt-[-70px] mr-[10px]">
                <div className="text-[#ffffff] text-[24px]  font-sstmedium ">
                  كيكة التين
                </div>
                <div className="flex justify-evenly">
                  <div className="text-[#ffffff]  text-[14px]  font-sstmedium ">
                    المبيعات 70
                  </div>
                  <div className="text-[#ffffff] mr-[20px]  text-[14px] float-left self-end justify-end font-sstmedium ">
                    <span>ريال</span>
                    <span>200</span> <span>الربح</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-[15px]">
            <div
              style={{
                backgroundImage: "url('../app-assets/images/product.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[303px] w-[216px]"
            >
              <div
                style={{
                  backgroundImage: "url('../app-assets/images/shadow.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-[303px] flex justify-end w-[216px]"
              >
                <div className="h-[51px] w-[47px] flex justify-center bg-[#959494]">
                  <img
                    src="../app-assets/images/trash.png"
                    className="h-[24px] self-center w-[24px]"
                  />
                </div>
              </div>
              <div className="mt-[-70px] mr-[10px]">
                <div className="text-[#ffffff] text-[24px]  font-sstmedium ">
                  كيكة التين
                </div>
                <div className="flex justify-evenly">
                  <div className="text-[#ffffff]  text-[14px]  font-sstmedium ">
                    المبيعات 70
                  </div>
                  <div className="text-[#ffffff] mr-[20px]  text-[14px] float-left self-end justify-end font-sstmedium ">
                    <span>ريال</span>
                    <span>200</span> <span>الربح</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col mr-[15px]">
          <div className="flex">
            <div
              style={{
                backgroundImage: "url('../app-assets/images/product.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[303px] w-[216px]"
            >
              <div
                style={{
                  backgroundImage: "url('../app-assets/images/shadow.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-[303px] flex justify-end w-[216px]"
              >
                <div className="h-[51px] w-[47px] flex justify-center bg-[#959494]">
                  <img
                    src="../app-assets/images/trash.png"
                    className="h-[24px] self-center w-[24px]"
                  />
                </div>
              </div>
              <div className="mt-[-70px] mr-[10px]">
                <div className="text-[#ffffff] text-[24px]  font-sstmedium ">
                  كيكة التين
                </div>
                <div className="flex justify-evenly">
                  <div className="text-[#ffffff]  text-[14px]  font-sstmedium ">
                    المبيعات 70
                  </div>
                  <div className="text-[#ffffff] mr-[20px]  text-[14px] float-left self-end justify-end font-sstmedium ">
                    <span>ريال</span>
                    <span>200</span> <span>الربح</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-[15px]">
            <div
              style={{
                backgroundImage: "url('../app-assets/images/product.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[303px] w-[216px]"
            >
              <div
                style={{
                  backgroundImage: "url('../app-assets/images/shadow.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-[303px] flex justify-end w-[216px]"
              >
                <div className="h-[51px] w-[47px] flex justify-center bg-[#959494]">
                  <img
                    src="../app-assets/images/trash.png"
                    className="h-[24px] self-center w-[24px]"
                  />
                </div>
              </div>
              <div className="mt-[-70px] mr-[10px]">
                <div className="text-[#ffffff] text-[24px]  font-sstmedium ">
                  كيكة التين
                </div>
                <div className="flex justify-evenly">
                  <div className="text-[#ffffff]  text-[14px]  font-sstmedium ">
                    المبيعات 70
                  </div>
                  <div className="text-[#ffffff] mr-[20px]  text-[14px] float-left self-end justify-end font-sstmedium ">
                    <span>ريال</span>
                    <span>200</span> <span>الربح</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col mr-[15px]">
          <div className="flex">
            <div
              style={{
                backgroundImage: "url('../app-assets/images/product.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[303px] w-[216px]"
            >
              <div
                style={{
                  backgroundImage: "url('../app-assets/images/shadow.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-[303px] flex justify-end w-[216px]"
              >
                <div className="h-[51px] w-[47px] flex justify-center bg-[#959494]">
                  <img
                    src="../app-assets/images/trash.png"
                    className="h-[24px] self-center w-[24px]"
                  />
                </div>
              </div>
              <div className="mt-[-70px] mr-[10px]">
                <div className="text-[#ffffff] text-[24px]  font-sstmedium ">
                  كيكة التين
                </div>
                <div className="flex justify-evenly">
                  <div className="text-[#ffffff]  text-[14px]  font-sstmedium ">
                    المبيعات 70
                  </div>
                  <div className="text-[#ffffff] mr-[20px]  text-[14px] float-left self-end justify-end font-sstmedium ">
                    <span>ريال</span>
                    <span>200</span> <span>الربح</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-[15px]">
            <div
              style={{
                backgroundImage: "url('../app-assets/images/product.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[303px] w-[216px]"
            >
              <div
                style={{
                  backgroundImage: "url('../app-assets/images/shadow.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-[303px] flex justify-end w-[216px]"
              >
                <div className="h-[51px] w-[47px] flex justify-center bg-[#959494]">
                  <img
                    src="../app-assets/images/trash.png"
                    className="h-[24px] self-center w-[24px]"
                  />
                </div>
              </div>
              <div className="mt-[-70px] mr-[10px]">
                <div className="text-[#ffffff] text-[24px]  font-sstmedium ">
                  كيكة التين
                </div>
                <div className="flex justify-evenly">
                  <div className="text-[#ffffff]  text-[14px]  font-sstmedium ">
                    المبيعات 70
                  </div>
                  <div className="text-[#ffffff] mr-[20px]  text-[14px] float-left self-end justify-end font-sstmedium ">
                    <span>ريال</span>
                    <span>200</span> <span>الربح</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col mr-[15px]">
          <div className="flex">
            <div
              style={{
                backgroundImage: "url('../app-assets/images/product.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[303px] w-[216px]"
            >
              <div
                style={{
                  backgroundImage: "url('../app-assets/images/shadow.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-[303px] flex justify-end w-[216px]"
              >
                <div className="h-[51px] w-[47px] flex justify-center bg-[#959494]">
                  <img
                    src="../app-assets/images/trash.png"
                    className="h-[24px] self-center w-[24px]"
                  />
                </div>
              </div>
              <div className="mt-[-70px] mr-[10px]">
                <div className="text-[#ffffff] text-[24px]  font-sstmedium ">
                  كيكة التين
                </div>
                <div className="flex justify-evenly">
                  <div className="text-[#ffffff]  text-[14px]  font-sstmedium ">
                    المبيعات 70
                  </div>
                  <div className="text-[#ffffff] mr-[20px]  text-[14px] float-left self-end justify-end font-sstmedium ">
                    <span>ريال</span>
                    <span>200</span> <span>الربح</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-[15px]">
            <div
              style={{
                backgroundImage: "url('../app-assets/images/product.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[303px] w-[216px]"
            >
              <div
                style={{
                  backgroundImage: "url('../app-assets/images/shadow.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-[303px] flex justify-end w-[216px]"
              >
                <div className="h-[51px] w-[47px] flex justify-center bg-[#959494]">
                  <img
                    src="../app-assets/images/trash.png"
                    className="h-[24px] self-center w-[24px]"
                  />
                </div>
              </div>
              <div className="mt-[-70px] mr-[10px]">
                <div className="text-[#ffffff] text-[24px]  font-sstmedium ">
                  كيكة التين
                </div>
                <div className="flex justify-evenly">
                  <div className="text-[#ffffff]  text-[14px]  font-sstmedium ">
                    المبيعات 70
                  </div>
                  <div className="text-[#ffffff] mr-[20px]  text-[14px] float-left self-end justify-end font-sstmedium ">
                    <span>ريال</span>
                    <span>200</span> <span>الربح</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
