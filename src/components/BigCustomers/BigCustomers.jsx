import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
export default function BigCustomers() {
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
      {!md ? (
        <div>
          <div className="mt-9 bg-main-blue px-7 py-5 rounded-2xl">
            <div className=" titleHeader flex flex-col items-center justify-center gap-2">
              <h2 className="text-2xl text-main-text-white font-ray-font">
                مشتریان بزرگ به ما اعتماد کردند
              </h2>
              <div>
                <img
                  className="w-28"
                  src="./images/targetLavelcod/underlinewhite.png"
                  alt=""
                />
              </div>
            </div>
            <div className="brands grid grid-cols-2 gap-2 mt-4">
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/3.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/1.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/5.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/4.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/7.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/6.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/3.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/1.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/5.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/4.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/7.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/6.png" alt="" />
              </div>
            </div>
            <a href="#" className="more flex justify-center items-center mt-5">
              <div className="text-main-text-white flex items-center gap-2">
                <h3 className="font-dana-font">بیشتر ببینید</h3>
                <div className="">
                  <BsArrowLeft></BsArrowLeft>
                </div>
              </div>
            </a>
          </div>
        </div>
      ) : (
        <div className="mt-14">
          <div
            style={{
              backgroundImage: `url(./images/BigCustomers/bg-slider.png)`,
            }}
            className="top 
          w-full relative h-36"
          >
            <div className="absolute bg-main-blue/[85%] top-0 left-0 h-full w-full"></div>
            <div className="absolute text-main-text-white w-full h-full flex flex-col items-center top-7 font-bold">
              <h3 className="font-dana-font text-[16px]">مشتریان ما</h3>
              <h3 className="font-ray-font text-[28px]">انتخاب درست این ها بوده ایم</h3>
              <div className="mt-2">
                <img className="w-[88px]" src="./images/targetLavelcod/underlinewhite.png" alt="" />
              </div>
            </div>
          </div>
          <div className="slider">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={5.5}
              loop={true}
              className="mySwiper py-10"
            >
              <SwiperSlide>
                <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                  <img src="./images/BigCustomers/1.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                  <img src="./images/BigCustomers/2.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                  <img src="./images/BigCustomers/3.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                  <img src="./images/BigCustomers/4.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                  <img src="./images/BigCustomers/5.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                  <img src="./images/BigCustomers/6.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                  <img src="./images/BigCustomers/7.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                  <img src="./images/BigCustomers/8.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                  <img src="./images/BigCustomers/9.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                  <img src="./images/BigCustomers/10.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                  <img src="./images/BigCustomers/11.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                  <img src="./images/BigCustomers/12.png" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}
