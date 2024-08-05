import GlobalBigHeader from "@/components/Global/GlobalBigHeader";
import MainNavbar from "@/components/Navbar/MainNavbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Free and open-source tailwind components",
    description: "The tailwind components you need for your projects",
};


export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <div className={inter.className}>
        <MainNavbar />
        <GlobalBigHeader longDescription="collection of free Tailwind CSS components that can be used in your next project. With a range of components, you can build your next marketing website, admin dashboard, eCommerce store and much more." title="Tailwind Components" shortDescription="Free and beautiful tailwind components"/>
        {children}
      </div>
    );
}
