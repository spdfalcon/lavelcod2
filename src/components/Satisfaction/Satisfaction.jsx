import React from "react";

export default function Satisfaction() {
  return (
    <>
      <div className="p-6 bg-main-blue font-bold mt-8 text-main-text-white">
        <div className="flex flex-col gap-5">
            <div className="t">
                <div className=" flex flex-col gap-4 text-center">
                    <h2 className="font-dana-font text-[18px] ">درصد رضایت و آمار سایت لاول کد از زمان ایجاد آن</h2>
                    <button className="font-ray-font text-[12px] border border-main-text-white py-3 rounded-lg">اطلاعات بیشتر</button>
                </div>
            </div>



            <div className="b flex flex-col gap-4">
                <div className="flex justify-between">
                    <div className="r basis-1/2 text-base">
                        <h3>97.5 درصد</h3>
                    </div>
                    <div className="l basis-1/2 border-b border-main-text-white pb-1">
                        <h3 className="text-[14px]">نرخ رضایت مشتریان</h3>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="r basis-1/2 text-base">
                        <h3>+3000</h3>
                    </div>
                    <div className="l basis-1/2 border-b border-main-text-white pb-1">
                        <h3 className="text-[14px]">مشتری از سراسر ایران</h3>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="r basis-1/2 text-base">
                        <h3>+50000</h3>
                    </div>
                    <div className="l basis-1/2 border-b border-main-text-white pb-1">
                        <h3 className="text-[14px]">کاربران فعال محصولات ما</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
