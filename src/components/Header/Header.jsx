import NavBar from "./NavBar";
// import "./header.css";
import { LuPhoneCall } from "react-icons/lu";

export default function Header() {
  return (
    <section className="flex px-6 w-full h-auto md:px-0">
      <NavBar />
      {/*----------------------- phone size --------------------------------*/}
      <div className="bg-header-blue w-full h-auto flex flex-col rounded-2xl mt-20 items-center text-main-text-white px-5 pt-7 pb-4 font-dana-font md:hidden">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-xl ">شرکت نرم افزاری لاول کد</h2>
          <span className="text-sm mt-1">متخصص ایجاد کسب و کاربر بستر اینترنت</span>
          <img src="/images/targetLavelcod/underlinewhite.png" alt="underline" className="mt-2" />
          <p className="text-xs mt-3 ">شرکت نرم افزاری لاول کد فعال در عرصه خدماتی همچون طراحی وبسایت،سئو و بهینه سازی، طراحی اپلیکیشن های موبایلی و نرم افزار های تحت وب و ارائه دیگر خدمات در حوزه نرم افزار در تلاش است تا تمام نیازهای کاربران در زمینه آنلاین سازی کسب و کار به بهترین شکل ممکن و بهره‌گیری از جدیدترین استانداردها و اصول روز در حداقل زمان و با کمترین هزینه پوشش دهد.</p>
        </div>
        <img src="/images/header/header-img.png" alt="img" className="w-[11.5rem] mt-5" />
      </div>
      {/*------------------------- desktop size -----------------------------*/}
      <div className="hidden md:flex w-full h-auto relative">
        <img src="../../../public/images/header/bg-header.png" alt="bg" className="object-cover w-full" />
        <div className="w-full h-full bg-main-blue absolute top-0 right-0 opacity-[90%]"></div>
        <div className="w-full h-20 absolute top-0 right-0 flex justify-between items-center md:px-[5rem] lg:px-[8.1rem]">

          <div className="flex gap-2">
            <img src="/images/header/Group 2111.png" alt="logo" className="w-11 h-11 object-cover p-2 bg-white rounded-lg shadow-lg" />
            <div className="flex flex-col text-sm text-main-text-white">
              <strong>LavelCode</strong>
              <span>لاول کد</span>
            </div>
          </div>
          <div className="flex gap-1 items-center text-main-text-white">
            <span>(021)952761 - (021)713458</span>
            <LuPhoneCall />
          </div>
        </div>

        <div className="w-[50vw] absolute top-[19rem] right-0 flex flex-col gap-1 items-start text-main-text-white px-[8.2rem]">
          <h2 className="text-4xl font-ray-font">شرکت نرم افزاری لاول کد</h2>
          <span className="text-base mt-1 font-dana-font">متخصص ایجاد کسب و کاربر بستر اینترنت</span>
          <img src="/images/targetLavelcod/underlinewhite.png" alt="underline" className="mt-2 mr-[5.3rem] object-cover" />
          <p className="w-[41rem] text-lg mt-2 font-dana-font">شرکت نرم افزاری لاول کد فعال در عرصه خدماتی همچون طراحی وبسایت،سئو و بهینه سازی، طراحی اپلیکیشن های موبایلی و نرم افزار های تحت وب و ارائه دیگر خدمات در حوزه نرم افزار در تلاش است تا تمام نیازهای کاربران در زمینه آنلاین سازی کسب و کار به بهترین شکل ممکن و بهره‌گیری از جدیدترین استانداردها و اصول روز در حداقل زمان و با کمترین هزینه پوشش دهد.</p>
          <img src="../../../public/images/header/path.png" alt="path" className="w-[95px] absolute top-0 left-10 object-cover" />
        </div>
        <div className="w-auto absolute top-60 left-32">
          <img src="/images/header/header-img.png" alt="img" className="w-[26.5rem]" />
        </div>

      </div>
    </section>
  );
}
