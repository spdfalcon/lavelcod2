import React from "react";

export default function AttributesLavelcod() {
  return (
    <div>
      <div className="px-[61px] py-7 flex flex-col items-center">
        <div className="top">
          <div>
            <div className="sun relative">
              <span className="block w-1 h-[15px] bg-gradient-to-t from-[#F7936F] to-[#FFEF5E] rounded-xl"></span>
              <span className="absolute rotate-45 left-4 top-1 block w-1 h-[15px] bg-gradient-to-t from-[#F7936F] to-[#FFEF5E] rounded-xl"></span>
              <span className="absolute -rotate-45 -left-4 top-1 block w-1 h-[15px] bg-gradient-to-t from-[#F7936F] to-[#FFEF5E] rounded-xl"></span>
            </div>
          </div>
        </div>
        <div className="font-ray-font font-bold text-[18px] mt-4">
          <h2>چه ویژگی هایی لاول کد را متمایز میکند؟</h2>
        </div>
        <div className="down mt-5 gap-y-6 grid grid-cols-3 w-full">
          <div className="flex gap-1 flex-col justify-center items-center">
            <img src="./images/AttributesLavelcod/Icon1.png" alt="" />
            <h3 className="font-dana-font text-[10px] font-bold">امنیت بالا</h3>
          </div>
          <div className="flex gap-1 flex-col justify-center items-center">
            <img src="./images/AttributesLavelcod/Icon2.png" alt="" />
            <h3 className="font-dana-font text-[10px] font-bold">قیمت پایین</h3>
          </div>
          <div className="flex gap-1 flex-col justify-center items-center">
            <img src="./images/AttributesLavelcod/Icon3.png" alt="" />
            <h3 className="font-dana-font text-[10px] font-bold">قیمت پایین</h3>
          </div>
          <div className="flex gap-1 flex-col justify-center items-center">
            <img src="./images/AttributesLavelcod/Icon4.png" alt="" />
            <h3 className="font-dana-font text-[10px] font-bold">امنیت بالا</h3>
          </div>
          <div className="flex gap-1 flex-col justify-center items-center">
            <img src="./images/AttributesLavelcod/Icon5.png" alt="" />
            <h3 className="font-dana-font text-[10px] font-bold">قیمت پایین</h3>
          </div>
          <div className="flex gap-1 flex-col justify-center items-center">
            <img src="./images/AttributesLavelcod/Icon6.png" alt="" />
            <h3 className="font-dana-font text-[10px] font-bold">قیمت پایین</h3>
          </div>
          
        </div>
      </div>
    </div>
  );
}
