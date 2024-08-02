"use client"

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const MainNavbar: React.FC = () => {

    const router = useRouter()
    
    useEffect( () => {
        
        const handleKeyDownForLogin = (event: KeyboardEvent) : void => {
            if (event.key === "l") {
                router.push("/login")
            }
        }

        const handleKeyDownForSignup = (event: KeyboardEvent) : void => {
            if (event.key === "s") {
                router.push("/signup")
            }
        }

        window.addEventListener("keydown", handleKeyDownForSignup)
        window.addEventListener("keydown", handleKeyDownForLogin)

        return () => {
            window.removeEventListener("keydown", handleKeyDownForLogin)
            window.removeEventListener("keydown", handleKeyDownForSignup)
        }
    }, [])

    return (
        <nav className="mx-auto mt-0 w-[70%]">
            
            <div className="flex gap-20 justify-between items-center border-[1px] outline-none border-gray-50 px-10 py-2 rounded-full ">
            
                <div className="flex items-center">
                    <span className="text-xl font-bold">SR</span>
                </div>

                <div className="flex items-center">
                    <ul className="flex items-center  gap-10  ">
                        <li className="text-gray-400 hover:text-white hover:bg-[#555555] transition-all text-[13px] duration-3 py-2 px-4 rounded-lg 00 cursor-pointer"> Components </li>
                        <li className="text-gray-400 hover:text-white hover:bg-[#555555] transition-all text-[13px] duration-3 py-2 px-4 rounded-lg 00 cursor-pointer"> About </li>
                        <li className="text-gray-400 hover:text-white hover:bg-[#555555] transition-all text-[13px] duration-3 py-2 px-4 rounded-lg 00 cursor-pointer"> Blog </li>
                    </ul>
                </div>
            
                <div className="flex items-center gap-10">
            
                    <button className="bg-[#2C2C2C] py-2 px-3 rounded-lg text-[13px] font-bold">
                        Login
                        <span className="bg-[#555555]  text-[13px] rounded-full px-2 py-1 ml-2">L</span>
                    </button>
            
                    <button className="py-2 px-3 rounded-lg text-[13px] bg-white text-black">
                        Sign Up
                        <span className="bg-gray-200  text-[13px] rounded-full px-2 py-1 ml-2">S</span>
                    </button>
                </div>
            </div>
            
        </nav>
    );
};

export default MainNavbar;
