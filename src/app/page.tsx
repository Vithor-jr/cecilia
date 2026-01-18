'use client'

import { useEffect, useState } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import AboutSection from "@/sections/About"
import ContactSection from "@/sections/Contacts"
import ExperienceSection from "@/sections/Experience"
import HomeSection from "@/sections/Home"
import ProjectSection from "@/sections/Projects"
import { useActive } from "@/contexts/active_provider"
import { useRouter } from "next/navigation"
import ServicesSection from "@/sections/Services"
import Results from "@/components/Results"

export default function Home() {
  const {setHeaderActive, headerActive} = useActive()
    const router = useRouter()
      
    useEffect(() => {
      setHeaderActive(true)
    }, [headerActive, setHeaderActive])
  
  return (
    <div className="bg-[#F0F0F0]">
       <main className="flex items-center flex-col">
           <HomeSection />
           <div className="mr-[30px] ml-[30px]  max-w-[1440px]  rounded-[20px] bg-[#101010] w-[calc(100%-60px)]">
              <AboutSection />
           </div>
           <ServicesSection/>
           <ProjectSection />
           <Results/>
           <div className="w-full overflow-hidden">
            <ContactSection/>
           </div>
        </main>
    </div>
  )
}
