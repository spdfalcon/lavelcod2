import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {BsArrowLeft} from 'react-icons/bs'
export default function BigCustomers() {
  const [md, setMd] = useState(window.innerWidth > 768 ? true : false);
  useEffect(() => {
    console.log(navigator.userAgent);
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      window.innerWidth > 768 ? setMd(true) : setMd(false);
    });
  }, []);
  return (
    <>
      {!md ? (
        <div>
          <div className="mt-9 bg-main-blue px-7 py-5 rounded-2xl">
            <div className=" titleHeader flex flex-col items-center justify-center gap-2">
              <h2 className="text-2xl text-main-text-white font-ray-font">
                مشتریان بزرگ به ما اعتماد کردند
              </h2>
              <div>
                <img
                  className="w-28"
                  src="./images/targetLavelcod/underlinewhite.png"
                  alt=""
                />
              </div>
            </div>
            <div className="brands grid grid-cols-2 gap-2 mt-4">
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/3.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/1.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/5.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/4.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/7.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/6.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/3.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/1.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/5.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/4.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/7.png" alt="" />
              </div>
              <div className="bg-white rounded-lg px-7 py-3 flex items-center justify-center">
                <img src="./images/BigCustomers/6.png" alt="" />
              </div>
            </div>
            <a href="#" className="more flex justify-center items-center mt-5">
                <div className="text-main-text-white flex items-center gap-2">
                    <h3 className="font-dana-font">بیشتر ببینید</h3>
                    <div className=""><BsArrowLeft></BsArrowLeft></div>
                </div>
            </a>
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
}
