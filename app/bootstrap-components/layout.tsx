import GlobalBigHeader from "@/components/Global/GlobalBigHeader";
import MainNavbar from "@/components/Navbar/MainNavbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bootstrap components",
  description: "Free and open-source bootstrap components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className} lang="en">
      <MainNavbar />
      <GlobalBigHeader longDescription="collection of free Bootstrap CSS components that can be used in your next project. With a range of components, you can build your next marketing website, admin dashboard, eCommerce store and much more." title="Bootstrap Components" shortDescription="Free and beautiful Bootstrap components"/>
      {children}
    </div>
  );
}
