"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MainNavbar: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    
    const handleKeyDownForLogin = (event: KeyboardEvent): void => {
      if (event.key === "l") {
        router.push("/login");
      }
    };

    const handleKeyDownForSignup = (event: KeyboardEvent): void => {
      if (event.key === "s") {
        router.push("/signup");
      }
    };

    window.addEventListener("keydown", handleKeyDownForSignup);
    window.addEventListener("keydown", handleKeyDownForLogin);

    return () => {
      window.removeEventListener("keydown", handleKeyDownForLogin);
      window.removeEventListener("keydown", handleKeyDownForSignup);
    };
  }, []);

  return (
    <nav className="mx-auto mt-0 w-[70%]">
      
      <div className="flex gap-20 mt-3 justify-between items-center border border-gray-200 px-10 py-3 rounded-full shadow-md bg-black/40">
        
        <div className="flex items-center">
       
          <Link href="/">
            <span className="text-2xl font-bold cursor-pointer text-gray-800">SR</span>
          </Link>
        </div>

        <div className="flex items-center">
          <ul className="flex items-center gap-8">

            <Link href="/components">
                <li className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all text-sm py-2 px-4 rounded-lg cursor-pointer">
                    Components
                </li>
            </Link>

            <Link href="/about">

                <li className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all text-sm py-2 px-4 rounded-lg cursor-pointer">
                About
                </li>
            </Link>

            <Link href="/blog">
            
                <li className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all text-sm py-2 px-4 rounded-lg cursor-pointer">
                    Blog
                </li>
            </Link>
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <button className="bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all">
            Login
            <span className="bg-gray-600 text-white text-sm rounded-full px-2 py-1 ml-2">
              L
            </span>
          </button>

          <button className="bg-white text-gray-800 py-2 px-4 rounded-lg text-sm font-semibold border border-gray-300 hover:bg-gray-100 transition-all">
            Sign Up
            <span className="bg-gray-200 text-gray-800 text-sm rounded-full px-2 py-1 ml-2">
              S
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
