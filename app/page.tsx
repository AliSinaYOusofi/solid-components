import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import MainNavbar from "@/components/Navbar/MainNavbar";

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className={roboto.className}>
      <MainNavbar />
      <HeroSection />
      <Footer />
    </main>
  );
}
