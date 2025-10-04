'use client'

import { inter } from "@/app/fonts"
import { LettersAnimation } from "@/function/letters"
import { motion } from "framer-motion"

export default function HomeSection() {
  return (
    <section id="home" className="h-screen relative w-full flex-col text-black flex items-center justify-center">
      <motion.p  
        initial={{scale:0, opacity:0}}
        animate={{scale:1, opacity:1}}
        transition={{
          type:"spring",
          stiffness: 80, 
					damping: 12, 
          delay:0.2
        }}    
        className={`text-center ${inter.className} font-semibold text-[16px]`}>Design e criatividade</motion.p>

      <motion.div 
        initial={{scale:0, opacity:0}}
        animate={{scale:1, opacity:1}}
        transition={{
          type:"spring",
          stiffness: 80, 
					damping: 12, 
          delay:0.4
        }}    
        className="flex flex-row gap-3 flex-wrap items-center justify-center">
        <h1 className={`${inter.className} max-[430px]:text-4xl text-5xl sm:text-6xl text-center font-bold sm:text-right w-87`}>Design com </h1>
        <div className="flex justify-center sm:justify-start w-76">
           <h1 className={`${inter.className}  max-[430px]:text-4xl text-5xl sm:text-6xl font-bold text-center`}>{LettersAnimation('propósito', 0.2)}</h1>
        </div>
      </motion.div>

      <div className="flex flex-row items-end">
        <motion.h1
          initial={{scale:0, opacity:0}}
          animate={{scale:1, opacity:1}}
          transition={{
            type:"spring",
            stiffness: 80, 
            damping: 12, 
            delay:0.8
          }}    
        className={`${inter.className} flex-nowrap max-[430px]:text-4xl text-5xl sm:text-6xl font-bold text-center`}>e resultado</motion.h1>
        
        <motion.svg 
          initial={{scale:0, opacity:0}}
          animate={{scale:1, opacity:1}}
          transition={{
            type:"spring",
            stiffness: 80, 
            damping: 12, 
            delay:3
          }}    
          xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.5 0.987793C13.7277 11.2868 14.7135 12.2739 25 13.4844C14.7135 14.7136 13.7277 15.7007 12.5 26.0183C11.2909 15.7007 10.2865 14.7136 0 13.4844C10.2865 12.2739 11.2909 11.2868 12.5 0.987793Z" fill="#6719E7"/>
        </motion.svg>
      </div>

      <motion.div 
        initial={{y:100, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{
          type:"spring",
          stiffness: 80, 
					damping: 12, 
          delay:1
        }}    
        className="flex gap-2 pl-6 pr-6 pt-2 pb-2 mt-5 rounded-3xl bg-[#574FE4] items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 21 22" fill="none">
          <path d="M10.5667 22C8.89787 22 7.41094 21.7125 6.10592 21.1527C4.81671 20.5928 3.71733 19.8061 2.81568 18.7923C1.90612 17.7861 1.21011 16.6135 0.727648 15.282C0.237278 13.9354 0 12.5131 0 11.0151C0 9.50206 0.237278 8.07978 0.727648 6.74828C1.21011 5.40165 1.90612 4.22146 2.81568 3.2077C3.71733 2.20151 4.81671 1.41472 6.10592 0.847318C7.41094 0.287484 8.89787 0 10.5667 0C11.848 0 13.0186 0.105916 14.0784 0.302613C15.1541 0.506878 16.0557 0.748969 16.7992 1.02889C17.5347 1.29367 18.1042 1.53576 18.5076 1.75516C18.903 1.95942 19.1087 2.05777 19.1087 2.05777V5.53783H18.9821C18.4127 4.44842 17.6613 3.52545 16.7359 2.75378C15.8263 1.96699 14.8377 1.37689 13.762 0.968363C12.6864 0.544704 11.5949 0.332875 10.5034 0.332875C9.25378 0.332875 8.17813 0.567401 7.27648 1.02889C6.36692 1.49794 5.61555 2.11073 5.03026 2.87483C4.43707 3.64649 3.96252 4.49381 3.6066 5.41678C3.24278 6.32462 2.98968 7.26272 2.84732 8.23109C2.69704 9.19945 2.63377 10.0997 2.6575 10.9243C2.67331 12.3012 2.88686 13.5873 3.29023 14.7978C3.70942 16.0083 4.30261 17.0901 5.0619 18.0358C5.837 18.9663 6.7782 19.6926 7.87758 20.2146C8.99278 20.7442 10.2583 21.0014 11.674 21.0014C12.283 21.0014 12.9711 20.9257 13.7304 20.7593C14.4897 20.5777 15.249 20.2978 16.0083 19.912C16.7834 19.511 17.5031 18.989 18.1596 18.3384C18.8081 17.6953 19.3143 16.901 19.6781 15.9477L20.121 16.1293C19.3143 17.8693 18.0963 19.2765 16.4512 20.3659C14.8219 21.4553 12.8604 22 10.5667 22Z" fill="white"/>
          <mask id="mask0_3800_1241" maskUnits="userSpaceOnUse" x="8" y="8" width="7" height="6">
            <path d="M8.92969 8.54102H14.1139V13.4999H8.92969V8.54102Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_3800_1241)">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.5218 8.54102C11.7764 10.5814 11.9808 10.7769 14.1139 11.0168C11.9808 11.2603 11.7764 11.4558 11.5218 13.4999C11.2711 11.4558 11.0628 11.2603 8.92969 11.0168C11.0628 10.7769 11.2711 10.5814 11.5218 8.54102Z" fill="white"/>
          </g>
        </svg>
        <p className={`${inter.className} text-[14px] font-semibold text-white  text-center`}>Seja bem vindo ao meu portifólio</p>
      </motion.div>

      <div className="flex flex-row items-center gap-[10vw]">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 12,
              delay: 1
            }}
            className={`${inter.className} font-semibold text-[14px] bg-[#9FDE8D] text-center mt-8 lg:absolute lg:left-[23.5%] lg:top-[55%] text-[#487F0D] pl-8 -rotate-4 rounded-4xl pr-8 pt-2 pb-2`}
          >
            UX / UI
          </motion.p>

           <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 80, 
              damping: 12, 
              delay: 1.2
            }}
          className={`${inter.className} font-semibold text-[14px] bg-[#EBC09C] mt-8 text-center lg:absolute lg:right-[20%] lg:top-[55%] text-[#C35C08] -rotate-6 pl-4 rounded-4xl pr-4 pt-2 pb-2`}
          >
            Designer gráfico
          </motion.p>
      </div>
    </section>
  )
}
