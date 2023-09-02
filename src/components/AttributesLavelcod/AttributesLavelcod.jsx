import React, { useEffect, useState } from "react";

export default function AttributesLavelcod() {
  const [md, setMd] = useState(window.innerWidth > 768 ? true : false);
  useEffect(() => {
    console.log(navigator.userAgent);
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      window.innerWidth > 768 ? setMd(true) : setMd(false);
    });
  }, []);
  return (
    <div>
      <div className="px-[61px] py-7 flex flex-col items-center bg-bg-body">
        <div className="top">
          {md ? (
            <div>
              <div className="sun relative">
                <span className="block w-[5px] h-[25px] bg-gradient-to-t from-[#F7936F] to-[#FFEF5E] rounded-xl"></span>
                <span className="absolute rotate-45 left-7 top-1 block w-[5px] h-[25px] bg-gradient-to-t from-[#F7936F] to-[#FFEF5E] rounded-xl"></span>
                <span className="absolute -rotate-45 -left-7 top-1 block w-[5px] h-[25px] bg-gradient-to-t from-[#F7936F] to-[#FFEF5E] rounded-xl"></span>
              </div>
            </div>
          ) : (
            <div>
              <div className="sun relative">
                <span className="block w-1 h-[17px] bg-gradient-to-t from-[#F7936F] to-[#FFEF5E] rounded-xl"></span>
                <span className="absolute rotate-45 left-4 top-1 block w-1 h-[17px] bg-gradient-to-t from-[#F7936F] to-[#FFEF5E] rounded-xl"></span>
                <span className="absolute -rotate-45 -left-4 top-1 block w-1 h-[17px] bg-gradient-to-t from-[#F7936F] to-[#FFEF5E] rounded-xl"></span>
              </div>
            </div>
          )}
        </div>
        <div className="font-ray-font font-bold text-[18px] mt-4 text-center md:text-3xl">
          <h2>چه ویژگی هایی لاول کد را متمایز میکند؟</h2>
          {md ? (
            <div className="flex justify-center mt-2">
              <img
                className="w-[88px]"
                src="/images/targetLavelcod/underlineblack.png"
                alt=""
              />
            </div>
          ) : (
            null
          )}
        </div>
        {md ? (
          <div className="down mt-20 gap-x-5 gap-y-[91px] grid grid-cols-3 w-full">
            <div className="relative flex gap-1 flex-col justify-center items-center shadow-xl rounded-ss-[40px] rounded-ee-[40px] px-6 py-10">
              <img className="absolute -top-14 w-[70px]" src="./images/AttributesLavelcod/Icon1.png" alt="" />
              <h3 className="font-dana-font text-xl font-bold">
                امنیت بالا
              </h3>
              <h4 className="text-[13px] font-ray-font font-bold">در سایت لاول کد بدلیل وجود کاربران زیاد و قدمت آنها، تمامی باگ‌های امنیتی و مشکلاتی که باعث بروز اختلال و کاهش سرعت سایت‌ها می شود، رفع گردیده و بهترین گزینه برای ایجاد سایت هستند.</h4>
            </div>
            <div className="relative flex gap-1 flex-col justify-center items-center shadow-xl rounded-ss-[40px] rounded-ee-[40px] px-6 py-10">
              <img className="absolute -top-14 w-[70px]" src="./images/AttributesLavelcod/Icon2.png" alt="" />
              <h3 className="font-dana-font text-xl font-bold">
                قیمت پایین
              </h3>
              <h4 className="text-[13px] font-ray-font font-bold">هدف لاول کد ایجاد طراحی سایت ارزان تحولی جدید در بازار طراحی سایت است. و ارزان بودن قیمت به منظور کم امکانت بودن آن نیست.</h4>
            </div>
            <div className="relative flex gap-1 flex-col justify-center items-center shadow-xl rounded-ss-[40px] rounded-ee-[40px] px-6 py-10">
              <img className="absolute -top-14 w-[70px]" src="./images/AttributesLavelcod/Icon3.png" alt="" />
              <h3 className="font-dana-font text-xl font-bold">
                قیمت پایین
              </h3>
              <h4 className="text-[13px] font-ray-font font-bold">در سایت لاول کد بدلیل وجود کاربران زیاد و قدمت آنها، تمامی باگ‌های امنیتی و مشکلاتی که باعث بروز اختلال و کاهش سرعت سایت‌ها می شود، رفع گردیده و بهترین گزینه برای ایجاد سایت هستند.</h4>
            </div>
            <div className="relative flex gap-1 flex-col justify-center items-center shadow-xl rounded-ss-[40px] rounded-ee-[40px] px-6 py-10">
              <img className="absolute -top-14 w-[70px]" src="./images/AttributesLavelcod/Icon4.png" alt="" />
              <h3 className="font-dana-font text-xl font-bold">
                امنیت بالا
              </h3>
              <h4 className="text-[13px] font-ray-font font-bold">در سایت لاول کد بدلیل وجود کاربران زیاد و قدمت آنها، تمامی باگ‌های امنیتی و مشکلاتی که باعث بروز اختلال و کاهش سرعت سایت‌ها می شود، رفع گردیده و بهترین گزینه برای ایجاد سایت هستند.</h4>
            </div>
            <div className="relative flex gap-1 flex-col justify-center items-center shadow-xl rounded-ss-[40px] rounded-ee-[40px] px-6 py-10">
              <img className="absolute -top-14 w-[70px]" src="./images/AttributesLavelcod/Icon5.png" alt="" />
              <h3 className="font-dana-font text-xl font-bold">
                امنیت بالا
              </h3>
              <h4 className="text-[13px] font-ray-font font-bold">در سایت لاول کد بدلیل وجود کاربران زیاد و قدمت آنها، تمامی باگ‌های امنیتی و مشکلاتی که باعث بروز اختلال و کاهش سرعت سایت‌ها می شود، رفع گردیده و بهترین گزینه برای ایجاد سایت هستند.</h4>
            </div>
            <div className="relative flex gap-1 flex-col justify-center items-center shadow-xl rounded-ss-[40px] rounded-ee-[40px] px-6 py-10">
              <img className="absolute -top-14 w-[70px]" src="./images/AttributesLavelcod/Icon6.png" alt="" />
              <h3 className="font-dana-font text-xl font-bold">
                امنیت بالا
              </h3>
              <h4 className="text-[13px] font-ray-font font-bold">در سایت لاول کد بدلیل وجود کاربران زیاد و قدمت آنها، تمامی باگ‌های امنیتی و مشکلاتی که باعث بروز اختلال و کاهش سرعت سایت‌ها می شود، رفع گردیده و بهترین گزینه برای ایجاد سایت هستند.</h4>
            </div>
            
          </div>
        ) : (
          <div className="down mt-5 gap-y-6 grid grid-cols-3 w-full">
            <div className="flex gap-1 flex-col justify-center items-center">
              <img src="./images/AttributesLavelcod/Icon1.png" alt="" />
              <h3 className="font-dana-font text-[10px] font-bold">
                امنیت بالا
              </h3>
            </div>
            <div className="flex gap-1 flex-col justify-center items-center">
              <img src="./images/AttributesLavelcod/Icon2.png" alt="" />
              <h3 className="font-dana-font text-[10px] font-bold">
                قیمت پایین
              </h3>
            </div>
            <div className="flex gap-1 flex-col justify-center items-center">
              <img src="./images/AttributesLavelcod/Icon3.png" alt="" />
              <h3 className="font-dana-font text-[10px] font-bold">
                قیمت پایین
              </h3>
            </div>
            <div className="flex gap-1 flex-col justify-center items-center">
              <img src="./images/AttributesLavelcod/Icon4.png" alt="" />
              <h3 className="font-dana-font text-[10px] font-bold">
                امنیت بالا
              </h3>
            </div>
            <div className="flex gap-1 flex-col justify-center items-center">
              <img src="./images/AttributesLavelcod/Icon5.png" alt="" />
              <h3 className="font-dana-font text-[10px] font-bold">
                قیمت پایین
              </h3>
            </div>
            <div className="flex gap-1 flex-col justify-center items-center">
              <img src="./images/AttributesLavelcod/Icon6.png" alt="" />
              <h3 className="font-dana-font text-[10px] font-bold">
                قیمت پایین
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
