import React, { useEffect } from 'react';

import { HiOutlineLogin } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const NavBar = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true)
                console.log(window.scrollY);
            } else {
                setIsSticky(false)
                console.log(window.scrollY, 'false')
            };
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <>
            {/*------------------ phone size ----------------------------*/}
            <div className="w-full h-20 fixed top-0 right-0  px-6 flex justify-between items-center md:hidden bg-white z-50">
                <div className="flex gap-2">
                    <img src="./images/header/Group 2111.png" alt="logo" className="w-11 h-11 object-cover p-2 bg-white rounded-lg shadow-lg" />
                    <div className="flex flex-col text-sm text-logo-blue">
                        <strong>LavelCode</strong>
                        <span>لاول کد</span>
                    </div>
                </div>
                <RxHamburgerMenu className="text-lg" />
            </div>
            {/*------------------ desktop size ---------------------------*/}
            <div className={`w-full h-20 bg-white md:fixed md:right-0 z-50 hidden md:flex ${isSticky ? 'md:top-0' : 'md:top-20'} transition-all duration-700`}>
                <div className="flex w-full h-full items-center justify-between px-20 lg:px-[7.5rem] text-main-text-gray text-sm">
                    <div className="w-2/3 p-2 ">
                        <ul className="w-full flex justify-between items-center text-base font-dana-font">
                            <li className="flex cursor-pointer">
                                <div className="w-[3.5px] h-[3.5px] bg-main-blue rounded-full ml-2"></div>
                                <span className="text-main-blue">صفحه اصلی</span>
                            </li>
                            <li className="cursor-pointer flex gap-2 items-center">
                                <span>خدمات طراحی سایت</span>
                                <FiChevronDown />
                            </li>
                            <li className="cursor-pointer flex gap-2 items-center">
                                <span>نمونه کارها</span>
                                <FiChevronDown />
                            </li>
                            <li className="cursor-pointer flex gap-2 items-center">
                                <span>تعرفه ها</span>
                                <FiChevronDown />
                            </li>
                            <li className="cursor-pointer">بلاگ</li>
                            <li className="cursor-pointer">درباره ما</li>
                            <li className="cursor-pointer">تماس باما</li>
                        </ul>
                    </div>
                    <div className="md:flex p-4 bg-bg-btn w-36 items-center text-white rounded-lg cursor-pointer">
                        <button className="text-sm font-ray-font">ورود / عضویت</button>
                        <HiOutlineLogin className="text-xl mr-2" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;