import React from "react";

export default function CommentsMd() {
  return (
    <div className="px-[121px] py-28 grid grid-cols-5 gap-3">
      <div className="col-span-2 flex flex-col items-start">
        <h2 className="font-ray-font font-bold text-[28px]">
          نظرات واقعی از کاربران واقعی
        </h2>
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-dana-font font-bold text-[16px]">
            تجربه خرید کاربران از کسب و کارهای آنلاین
          </h3>
          <div className="">
            <img src="./images/targetLavelcod/underlineblack.png" alt="" />
          </div>
        </div>
        <h3 className="font-dana-font font-bold text-[16px] mt-4">
          براساس تحقیقاتی که در حوزه خرید اینترنتی صورت گرفت به این نتیجه منتهی
          شد که بیش از ۷۰ درصد کاربران قبل از خرید، نظرات دیگر خریداران را در
          مورد آن کالا یا خدمات مطالعه می کنند و بعد در مورد خرید تصمیم گیری می
          کنند.بدون شک شما نیز تجربه خرید اینترنتی و غیر حضوری را داشته اید و با
          اینکه شناختی نسبت به افرادی که اقدام به گذاشتن نظر کرده اند، ندارید
          ولی در تصمیم گیری شما موثر بوده است.اگر شما هم تجربه خرید محصول و یا
          استفاده از خدمات یک کسب و کار را دارید، می توانید نظر خود را در سایت
          بنویسید تا تجربه ارزشمند خود را در اختیار دیگران قرار دهید.
        </h3>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-60">
          <img src="./images/CommentsMd/1.png" alt="" />
        </div>
        <div className="absolute top-32 right-16 ">
          <img src="./images/CommentsMd/2.png" alt="" />
        </div>
        <div className="absolute right-10 top-60">
          <img src="./images/CommentsMd/3.png" alt="" />
        </div>
        <div className="absolute left-0">
          <img src="./images/CommentsMd/4.png" alt="" />
        </div>
        <div className="absolute top-10">
          <img src="./images/CommentsMd/5.png" alt="" />
        </div>
      </div>

      <div></div>

      <div className="relative">
        <div className="absolute left-0 top-60">
          <img src="./images/CommentsMd/4.png" alt="" />
        </div>
        <div className="absolute top-32 right-16 ">
          <img src="./images/CommentsMd/1.png" alt="" />
        </div>
        <div className="absolute right-10 top-60">
          <img src="./images/CommentsMd/2.png" alt="" />
        </div>
        <div className="absolute left-0">
          <img src="./images/CommentsMd/5.png" alt="" />
        </div>
        <div className="absolute top-10">
          <img src="./images/CommentsMd/3.png" alt="" />
        </div>
      </div>
    </div>
  );
}
