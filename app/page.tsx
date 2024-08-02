import HeroSection from "@/components/HeroSection/HeroSection";
import MainNavbar from "@/components/Navbar/MainNavbar";

export default function Home() {
  return (
    <main className="relative w-screen h-screen bg-gradient-to-r from-black via-gray-800 to-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-spin-slow w-96 h-96 bg-gradient-to-r from-black via-gray-800 to-white rounded-full opacity-30"></div>
      </div>
      <div className="relative z-10">
        <MainNavbar />
        <HeroSection />
      </div>
    </main>
  );
}
