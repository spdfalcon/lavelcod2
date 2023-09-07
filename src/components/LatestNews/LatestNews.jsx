import React from "react";
import {FaCalendarDays} from 'react-icons/fa6'
export default function LatestNews() {
  return (
    <>
      <div className="parent px-6 pt-7">
        <div className="title text-main-text-dark text-center font-bold">
            <h2 className="text-[18px] font-ray-font">آخرین اخبار و مقالات</h2>
            <h4 className="font-dana-font text-xs ">در بلاگ لاول کد شما به آرشیو اخبار در مورد دنیای سایت و تکنولوژی دسترسی خواهید داشت.</h4>
            <div className="flex justify-center mt-1"><img src="./images/targetLavelcod/underlineblack.png" alt="" /></div>

            {/* slider */}



            <div className="mt-5">
                <div className="img"><img src="./images/LatestNews/1.png" alt="" /></div>
                <div className="subimg flex items-center justify-between text-[#727272] mt-4 px-2">
                    <div className="r font-dana-font text-[10px]">مقالات</div>
                    <div className="l flex gap-1 text-[10px]">
                        <h4 className=" ">20 مرداد 1402</h4>
                        <FaCalendarDays></FaCalendarDays>
                    </div>
                </div>
                <div className="title text-right text-main-text-dark">
                  <h2 className="font-ray-font text-[18px] font-bold">آموزش طراحی سایت</h2>
                  <h4 className="text-xs font-dana-font">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</h4>
                </div>
            </div>


            {/* slider */}
        </div>
      </div>
    </>
  );
}
