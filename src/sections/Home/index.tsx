'use client'

import { inter } from "@/app/fonts"
import { LettersAnimation } from "@/function/letters"
import { motion } from "framer-motion"
import cecilia from '../../../public/cecilia/ceci_home.svg'
import Image from "next/image"

export default function HomeSection() {
  return (
    <section id="home" className="h-[650px] max-w-[1440px] mt-20 p-[30px] gap-10 flex-wrap relative w-full flex-row text-black flex items-center justify-between">
      <div className="flex flex-col relative">
          <p className={`${inter.className} font-semibold text-[20px] text-[#A2A2A2]`}>Hey, eu sou</p>
          <motion.p  
            initial={{scale:0, opacity:0}}
            animate={{scale:1, opacity:1}}
            transition={{
              type:"spring",
              stiffness: 80, 
              damping: 12, 
              delay:0.2
            }}    
            className={`text-left ${inter.className} -mt-3 md:-mt-5 font-bold text-[clamp(50px,10vw,96px)]`}>
              Branding
          </motion.p>

          <motion.p  
            initial={{scale:0, opacity:0}}
            animate={{scale:1, opacity:1}}
            transition={{
              type:"spring",
              stiffness: 80, 
              damping: 12, 
              delay:0.4
            }}  
            className={`text-left -mt-4 md:-mt-12 ${inter.className} font-bold text-[clamp(50px,10vw,96px)]`}>& interface
          </motion.p>
          
          <motion.p  
            initial={{scale:0, opacity:0}}
            animate={{scale:1, opacity:1}}
            transition={{
              type:"spring",
              stiffness: 80, 
              damping: 12, 
              delay:0.6
            }}  
             className={`text-left -mt-4 text-white md:-mt-12 ${inter.className} font-bold z-2 text-[clamp(50px,10vw,96px)]`}>designer
          </motion.p>

          <motion.div
            initial={{scale:0, opacity:0}}
            animate={{scale:1, opacity:1}}
            transition={{
              type:"spring",
              stiffness: 80, 
              damping: 12, 
              delay:0.6
            }} className="bg-[#574FE4] absolute -left-2 bottom-3 -rotate-2 z-1 w-[clamp(230px,50vw,450px)] h-[clamp(50px,10vw,96px)] rounded-3xl"/>
      </div>

      <div className="mr-7">
        <p className={`${inter.className} max-w-[330px] leading-[32px] text-[30px] font-bold`}>Um bom design deve ser sentido.</p>
        <p className={`${inter.className} font-semibold text-[22px] text-[#A2A2A2]`}>e oque é sentido, permanece</p>

        <div className="flex mt-3 flex-row items-center gap-5">
          <Image
            src={cecilia}
            alt="cecilia"
          />

          <p className={`${inter.className} text-[16px] w-[200px] font-semibold text-[#574FE4]`}>E esse é o meu compromisso.</p>
        </div>
      </div>
    </section>
  )
}
