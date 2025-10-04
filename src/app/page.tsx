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

export default function Home() {
  const {setHeaderActive, headerActive} = useActive()
    const router = useRouter()
      
    useEffect(() => {
      setHeaderActive(true)
    }, [headerActive, setHeaderActive])
  
  return (
    <div className="bg-[#F0F0F0]">

      <main className="flex flex-col">
        <HomeSection />
        <AboutSection />
        <ExperienceSection/>
        <ProjectSection />
        <ContactSection/>
      </main>

      <Footer />
    </div>
  )
}
