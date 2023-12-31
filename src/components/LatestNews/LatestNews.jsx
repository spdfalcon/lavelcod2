import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { BsArrowLeft } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
export default function LatestNews() {
  return (
    <>
      <div className="parent px-6 pt-7">
        <div className="title px-5  text-main-text-dark text-center font-bold">
          <h2 className="text-[18px] font-ray-font md:text-2xl">آخرین اخبار و مقالات</h2>
          <h4 className="font-dana-font text-xs md:text-[16px]">
            در بلاگ لاول کد شما به آرشیو اخبار در مورد دنیای سایت و تکنولوژی
            دسترسی خواهید داشت.
          </h4>
          <div className="flex justify-center mt-1 md:mt-3">
            <img className="md:w-[88px]" src="./images/targetLavelcod/underlineblack.png" alt="" />
          </div>

          {/* slider */}

          <Swiper
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="mySwiper py-10"
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 3.5,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide className="flex justify-center">
              <div className="mt-5 pb-4 rounded-2xl shadow-md">
                <div className="img flex justify-center">
                  <img className="w-full" src="./images/LatestNews/1.png" alt="" />
                </div>
                <div className="subimg flex items-center justify-between text-[#727272] mt-4 px-5">
                  <div className="r font-dana-font text-[10px]">مقالات</div>
                  <div className="l flex items-center gap-1 text-[10px]">
                    <h4 className=" ">20 مرداد 1402</h4>
                    <FaCalendarDays></FaCalendarDays>
                  </div>
                </div>
                <div className="title px-5 text-right text-main-text-dark">
                  <h2 className="font-ray-font text-[18px] font-bold">
                    آموزش طراحی سایت
                  </h2>
                  <h4 className="text-xs font-dana-font">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="mt-5 pb-4 rounded-2xl shadow-md">
                <div className="img flex justify-center">
                  <img className="w-full" src="./images/LatestNews/1.png" alt="" />
                </div>
                <div className="subimg flex items-center justify-between text-[#727272] mt-4 px-5">
                  <div className="r font-dana-font text-[10px]">مقالات</div>
                  <div className="l flex items-center gap-1 text-[10px]">
                    <h4 className=" ">20 مرداد 1402</h4>
                    <FaCalendarDays></FaCalendarDays>
                  </div>
                </div>
                <div className="title px-5  text-right text-main-text-dark">
                  <h2 className="font-ray-font text-[18px] font-bold">
                    آموزش طراحی سایت
                  </h2>
                  <h4 className="text-xs font-dana-font">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="mt-5 pb-4 rounded-2xl shadow-md">
                <div className="img flex justify-center">
                  <img className="w-full" src="./images/LatestNews/1.png" alt="" />
                </div>
                <div className="subimg flex items-center justify-between text-[#727272] mt-4 px-5">
                  <div className="r font-dana-font text-[10px]">مقالات</div>
                  <div className="l flex items-center gap-1 text-[10px]">
                    <h4 className=" ">20 مرداد 1402</h4>
                    <FaCalendarDays></FaCalendarDays>
                  </div>
                </div>
                <div className="title px-5  text-right text-main-text-dark">
                  <h2 className="font-ray-font text-[18px] font-bold">
                    آموزش طراحی سایت
                  </h2>
                  <h4 className="text-xs font-dana-font">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="mt-5 pb-4 rounded-2xl shadow-md">
                <div className="img flex justify-center">
                  <img className="w-full" src="./images/LatestNews/1.png" alt="" />
                </div>
                <div className="subimg flex items-center justify-between text-[#727272] mt-4 px-5">
                  <div className="r font-dana-font text-[10px]">مقالات</div>
                  <div className="l flex items-center gap-1 text-[10px]">
                    <h4 className=" ">20 مرداد 1402</h4>
                    <FaCalendarDays></FaCalendarDays>
                  </div>
                </div>
                <div className="title px-5  text-right text-main-text-dark">
                  <h2 className="font-ray-font text-[18px] font-bold">
                    آموزش طراحی سایت
                  </h2>
                  <h4 className="text-xs font-dana-font">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="mt-5 pb-4 rounded-2xl shadow-md">
                <div className="img flex justify-center">
                  <img className="w-full" src="./images/LatestNews/1.png" alt="" />
                </div>
                <div className="subimg flex items-center justify-between text-[#727272] mt-4 px-5">
                  <div className="r font-dana-font text-[10px]">مقالات</div>
                  <div className="l flex items-center gap-1 text-[10px]">
                    <h4 className=" ">20 مرداد 1402</h4>
                    <FaCalendarDays></FaCalendarDays>
                  </div>
                </div>
                <div className="title px-5  text-right text-main-text-dark">
                  <h2 className="font-ray-font text-[18px] font-bold">
                    آموزش طراحی سایت
                  </h2>
                  <h4 className="text-xs font-dana-font">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* slider */}
          <div className="flex justify-center">
            <a href="#" className="w-full h-10 flex justify-center items-center gap-2 bg-[#00886B]  rounded-lg text-main-text-white md:w-36 md:h-16">
              <p className="text-xs font-dana-font">رفتن به بلاگ</p>
              <BsArrowLeft></BsArrowLeft>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
