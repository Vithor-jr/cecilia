'use client'

import { inter, montserrat, poppins } from "@/app/fonts"
import Footer from "@/components/Footer"
import InputForm from "@/components/InputForm"
import { LettersAnimation } from "@/function/letters"
import { Input } from "@mui/material"
import { motion } from "framer-motion"

export default function ContactSection() {
  return (
    <section id="contato" className={`${poppins.className} pb-10 px-5 relative w-full flex-col text-black flex items-center`}>
      <div className="z-1 w-full  flex flex-col mt-22 items-center gap-5">
        <h1 className={` ${inter.className} mt-5 text-[45px] text-white text-center font-bold`}>Pronto para dar o 
          <span className="bg-white rounded-3xl ml-2 text-[#574FE4] px-2">próximo passo?</span>
        </h1>

        <h2 className={`${inter.className} w-full max-w-[1046px] text-[32px] text-white text-center`}>Fale diretamente comigo no WhatsApp e vamos transformar sua ideia em um projeto digital de alto impacto.</h2>
        
        <a  
          href="https://wa.me/5592991556772" target="_blank" rel="noopener noreferrer"
          className={`${poppins.className} flex flex-row gap-1 cursor-pointer items-center px-7 py-2 rounded-3xl text-[#49830A] bg-[#9FDE8D] font-bold`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.2389 12.709C14.022 13.323 13.1598 13.8309 12.4722 13.9794C12.0015 14.0794 11.3877 14.1584 9.3195 13.3014C6.9966 12.339 3.771 8.91087 3.771 6.62959C3.771 5.46824 4.4406 4.11592 5.6115 4.11592C6.1749 4.11592 6.2991 4.1269 6.4845 4.57163C6.7014 5.09559 7.2306 6.38651 7.2936 6.51885C7.5537 7.06171 7.02899 7.3795 6.64829 7.85215C6.52679 7.99438 6.3891 8.14822 6.543 8.41289C6.696 8.67217 7.2252 9.53465 8.0028 10.227C9.0072 11.1218 9.8217 11.4075 10.1133 11.5291C10.3302 11.6191 10.5894 11.5981 10.7478 11.4289C10.9485 11.2119 11.1978 10.8519 11.4516 10.4972C11.6307 10.2433 11.8584 10.2116 12.0969 10.3017C12.258 10.3575 14.3055 11.3084 14.3919 11.4605C14.4558 11.5712 14.4558 12.095 14.2389 12.709ZM9.0018 0H8.99729C4.03559 0 0 4.03682 0 9C0 10.968 0.634506 12.7938 1.71361 14.2748L0.592204 17.619L4.05091 16.5138C5.47381 17.4555 7.1721 18 9.0018 18C13.9635 18 18 13.9632 18 9C18 4.03682 13.9635 0 9.0018 0Z" fill="#49830A"/>
          </svg>
        
          Chamar no WhatsApp
        </a>
        <Footer/>
      </div>

      <div className="bg-[#574FE4] max-w-[1520.82px]  rotate-6 top-18 rounded-[30px] w-[calc(100vw+100px)] h-[1300px] absolute z-0"/>
    </section>
  )
}
