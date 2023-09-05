import React from "react";

export default function Satisfaction() {
  return (
    <>
      <div className="p-6 md:py-14 bg-main-blue font-bold mt-8 text-main-text-white">
        <div className="flex flex-col md:flex-row md:justify-around gap-5">
            <div className="t r md:basis-1/3">
                <div className=" flex flex-col gap-4 md:text-start text-center">
                    <h2 className="font-dana-font text-[18px] md:text-[28px] ">درصد رضایت و آمار سایت لاول کد از زمان ایجاد آن</h2>
                    <button className="font-ray-font text-[12px] md:text-[16px] border border-main-text-white py-3 rounded-lg md:w-36 md:h-14">اطلاعات بیشتر</button>
                </div>
            </div>



            <div className="b l flex flex-col gap-4 md:basis-1/2">
                <div className="flex justify-between">
                    <div className="r basis-1/2 md:text-start text-base font-normal md:text-[26px]">
                        <h3>97.5 درصد</h3>
                    </div>
                    <div className="l basis-1/2  border-b border-main-text-white font-dana-font pb-2">
                        <h3 className="text-[14px] md:text-[20px]">نرخ رضایت مشتریان</h3>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="r basis-1/2 md:text-start text-base font-normal md:text-[26px]">
                        <h3>+3000</h3>
                    </div>
                    <div className="l basis-1/2  border-b border-main-text-white font-dana-font pb-2">
                        <h3 className="text-[14px] md:text-[20px]">مشتری از سراسر ایران</h3>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="r basis-1/2 md:text-start text-base font-normal md:text-[26px]">
                        <h3>+50000</h3>
                    </div>
                    <div className="l basis-1/2  border-b border-main-text-white font-dana-font pb-2">
                        <h3 className="text-[14px] md:text-[20px]">کاربران فعال محصولات ما</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
