import React from "react";
import { FiMapPin } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { TiPhoneOutline } from "react-icons/ti";
export default function FooterMd() {
  return (
    <>
      <div className="relative mt-56 text-main-text-white bg-footer-blue px-[120px] pb-5 pt-20">
        <div className="t grid md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-20">
          <div className=" flex flex-col gap-[14px]">
            <div className="t ">
              <div className="flex gap-2 items-center justify-start">
                <img src="./images/footer/1.png" alt="" />
                <div className="flex flex-col ">
                  <h3 className="">LavelCod</h3>
                  <h3 className="text-[14px] font-ray-font">لاول کد</h3>
                </div>
              </div>
            </div>
            <div className="b">
              <h3 className="font-dana-font text-[14px]">
                ما یک آژانس دیجیتال مارکتینگ تمام خدمت هستیم که کلیه خدماتی که
                کسب و کارشما، برای رشد در فضای دیجیتال به آنها نیاز دارد را
                برنامه ریزی و اجرا میکنیم.
              </h3>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="font-ray-font text-xl">خدمات اصلی ما</h2>
            <ul className="list-disc flex flex-col gap-3 mt-3">
              <li className="font-dana-font text-[14px]">طراحی سایت</li>
              <li className="font-dana-font text-[14px]">
                سئو و بهینه سازی سایت
              </li>
              <li className="font-dana-font text-[14px]">
                پشتیبانی و نگهداری سایت
              </li>
              <li className="font-dana-font text-[14px]">طراحی Ui/Ux</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-ray-font text-xl">خدمات دیگر</h2>
            <ul className="list-disc flex flex-col gap-3 mt-3">
              <li className="font-dana-font text-[14px]">طراحی سایت</li>
              <li className="font-dana-font text-[14px]">
                سئو و بهینه سازی سایت
              </li>
              <li className="font-dana-font text-[14px]">
                پشتیبانی و نگهداری سایت
              </li>
              <li className="font-dana-font text-[14px]">طراحی Ui/Ux</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:col-span-3 lg:col-span-1">
            <div className="t font-ray-font text-xl">راه های تماس با ما</div>
            <div className="b">
              <div className="adres mt-5 flex flex-col gap-3 items-start">
                <div className="1 font-dana-font text-[14px] flex items-center justify-center gap-2">
                  <FiMapPin></FiMapPin>
                  <h4 className="text-center">
                    تهران ، شهرک غرب , خیابان غرب , طبقه 3، واحد 303
                  </h4>
                </div>
                <div className="2 font-dana-font text-[14px] flex items-center justify-center gap-2">
                  <AiOutlinePhone></AiOutlinePhone>
                  <h4 className="text-center">09392848554 - 09392848554</h4>
                </div>
                <div className="3 font-dana-font text-[14px] flex items-center justify-center gap-2">
                  <AiOutlineMail></AiOutlineMail>
                  <h4 className="text-center">Info@Lavelcod@gmail.com</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="b flex justify-between mt-12">
          <div>
            <p>تمام حقوق مادی و معنوی متعلق به لاول کد می‌باشد.</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center justify-center">
              <p>همراه ما باشید</p>
              <div className="flex gap-2 text-2xl">
                <PiTelegramLogoLight></PiTelegramLogoLight>
                <FaInstagram></FaInstagram>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-20 left-1/2 -translate-x-1/2 shadow-md border-2 w-3/4 px- py-4 bg-main-text-white rounded-2xl">
          <div className="flex items-center justify-around">
            <img src="./images/footer/2.png" alt="" />
            <h2 className="text-main-text-dark text-[18px] font-bold font-dana-font">
              آنلاین هستیم :)
            </h2>
            <a className="px-5 flex items-center py-3 bg-[#00886B] rounded-2xl gap-1" href="#">
              <TiPhoneOutline></TiPhoneOutline>
              فرم مشاوره سریع
            </a>
            <a className="px-5 flex items-center py-3 bg-[#00886B] rounded-2xl gap-1" href="#">
              <TiPhoneOutline></TiPhoneOutline>
              فرم مشاوره سریع
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
