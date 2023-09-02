import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
export default function Comments() {
  const [md, setMd] = useState(window.innerWidth > 768 ? true : false);
  useEffect(() => {
    console.log(navigator.userAgent);
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      window.innerWidth > 768 ? setMd(true) : setMd(false);
    });
  }, []);
  return (
    <>
      <div className="mt-10 px-6 text-main-text-dark">
        <div className="flex justify-between items-center ">
          <img
            className="w-[26px] h-[19px]"
            src="./images/Comments/colon.png"
            alt=""
          />
          <div className="title flex flex-col text-center">
            <h2 className="text-[18px] font-ray-font font-bold">
              نظرات واقعی از کاربران واقعی
            </h2>
            <h3 className="text-[13px] font-dana-font font-bold">
              تجربه خرید کاربران از کسب و کارهای آنلاین
            </h3>
          </div>
          <img
            className="w-[26px] h-[19px]"
            src="./images/Comments/colon revers.png"
            alt=""
          />
        </div>

        {/* slider */}

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col gap-2 my-2 shadow-lg mt-4 mx-2 px-6 py-3 rounded-2xl ring ring-gray-100">
              <div className="top flex items-center  gap-3">
                <img src="./images/Comments/avatar.png" alt="" />
                <h4 className="text-xs font-dana-font font-bold">
                  علیرضا رحمانی
                </h4>
              </div>
              <div className="bootun">
                <h4 className="text-[10px] font-dana-font font-bold">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-2 shadow-lg mt-4 px-6 py-3 rounded-2xl ring ring-gray-100">
              <div className="top flex items-center  gap-3">
                <img src="./images/Comments/avatar.png" alt="" />
                <h4 className="text-xs font-dana-font font-bold">
                  علیرضا رحمانی
                </h4>
              </div>
              <div className="bootun">
                <h4 className="text-[10px] font-dana-font font-bold">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-2 shadow-lg mt-4 px-6 py-3 rounded-2xl ring ring-gray-100">
              <div className="top flex items-center  gap-3">
                <img src="./images/Comments/avatar.png" alt="" />
                <h4 className="text-xs font-dana-font font-bold">
                  علیرضا رحمانی
                </h4>
              </div>
              <div className="bootun">
                <h4 className="text-[10px] font-dana-font font-bold">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-2 shadow-lg mt-4 px-6 py-3 rounded-2xl ring ring-gray-100">
              <div className="top flex items-center  gap-3">
                <img src="./images/Comments/avatar.png" alt="" />
                <h4 className="text-xs font-dana-font font-bold">
                  علیرضا رحمانی
                </h4>
              </div>
              <div className="bootun">
                <h4 className="text-[10px] font-dana-font font-bold">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-2 shadow-lg mt-4 px-6 py-3 rounded-2xl ring ring-gray-100">
              <div className="top flex items-center  gap-3">
                <img src="./images/Comments/avatar.png" alt="" />
                <h4 className="text-xs font-dana-font font-bold">
                  علیرضا رحمانی
                </h4>
              </div>
              <div className="bootun">
                <h4 className="text-[10px] font-dana-font font-bold">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
