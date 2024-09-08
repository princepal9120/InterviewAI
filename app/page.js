import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'
import { AtomIcon, Edit, Share2 } from "lucide-react";

export default function Home() {
  return (


    <div className="flex flex-col min-h-screen">
    <Header />
    
    <main className="flex-grow">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
    </main>
    
    <Footer />
  </div>
  


 

  );
}
