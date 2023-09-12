import React from "react";
import "./footer.css";
import { FiMapPin } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="mt-10 p-6 flex flex-col items-center justify-center bg-footer-blue text-main-text-white rounded-t-2xl">
        <div className="logo flex flex-col items-center justify-center">
          <img src="./images/footer/1.png" alt="" />
          <h2 className="font-bold text-[16px]">Lovelcod</h2>
          <h2 className="text-[14px] font-ray-font font-bold">لاول کد</h2>
        </div>
        <div className="adres mt-5 flex flex-col gap-3">
          <div className="1 text-xs flex items-center justify-center gap-2">
            <FiMapPin></FiMapPin>
            <h4 className="text-center">
              تهران ، شهرک غرب , خیابان غرب , طبقه 3، واحد 303
            </h4>
          </div>
          <div className="2 text-xs flex items-center justify-center gap-2">
            <AiOutlinePhone></AiOutlinePhone>
            <h4 className="text-center">09392848554 - 09392848554</h4>
          </div>
          <div className="3 text-xs flex items-center justify-center gap-2">
            <AiOutlineMail></AiOutlineMail>
            <h4 className="text-center">Info@Lavelcod@gmail.com</h4>
          </div>
        </div>
        <span className="w-full h-px bg-main-text-white mt-6 mb-[10px]"></span>
        <div className="copy ">
          <div className="font-dana-font text-[10px]"><h4>تمام حقوق مادی و معنوی متعلق به لاول کد می‌باشد.</h4></div>
          <div className="flex justify-center gap-2 mt-2">
            <PiTelegramLogoLight></PiTelegramLogoLight>
            <FaInstagram></FaInstagram>
          </div>
        </div>
      </div>
    </>
  );
}
