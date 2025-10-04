'use client'

import { inter, poppins } from "@/app/fonts"
import Profile from "@/components/Profile"
import { LettersAnimation } from "@/function/letters"
import { motion } from "framer-motion"
import Image from "next/image"

//Fazer menu como drawer

export default function AboutSection() {
  return (
    <section id="sobre" className="pr-10 pl-10 rounded-[20px] items-center bg-[#574FE4] relative w-full flex-col text-black flex">
       
       <div className="flex w-full flex-row items-center flex-wrap justify-center mt-10 gap-10">

          <Profile/>

          <div className="flex flex-col items-start gap-7 flex-1">
            <div className="flex flex-row relative">
              <div className='text-white bg-[#574FE4] pl-6 rotate-[-3deg] pr-6 text-[13px] absolute -right-10 -bottom-0 border-white border-2 rounded-3xl'>
                <h1>Sobre mim</h1>
              </div>

              <h1 className={`${inter.className} 
              font-bold text-white
              min-[1140px]:text-[90px] min-[1140px]:leading-[90px] 
              text-[60px] leading-[60px]
              `}>Sobre</h1>
            </div>
            <p className={`${inter.className} text-white font-medium 
              min-[1140px]:text-[22px] text-[18px]`}>
              Desde cedo, encontrei na arte minha forma de expressão e, no design e na tecnologia, uma maneira de transformar criatividade em soluções reais. Formada pela Fundação Matias Machline, desenvolvi projetos como o studUs e atuei em UX/UI e Social Media, aprendendo sobre experiência do usuário e trabalho em equipe. Hoje, curso Design na UFG e atuo como sócia na startup Nexus Skill, um app para aprimoramento de softskills. Acredito no design como ferramenta de transformação e sigo curiosa e comprometida com o que ainda posso criar.
            </p>
          </div>
       </div>

       <div className="flex flex-row mt-4 mb-20 gap-2 items-center flex-wrap justify-center">
          <div className="bg-white relative pb-5 mt-10 w-[90vw] flex max-w-[400px] min-h-[273px] pt-10 flex-col items-center rounded-[20px]">
            <div className={`${inter.className} font-semibold absolute -top-4 rotate-2 text-[14px] px-10 py-3 rounded-4xl bg-[#9FDE8D]`}>
              <p className="text-[#49830A]">Educação</p>
            </div>
            
            <svg className="w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
              <path 
                d="M17.9455 3.73687C18.2108 3.8496 18.2108 4.03418 17.9455 4.14581L9.98322 7.52571C9.67106 7.6383 9.32938 7.6383 9.01722 7.52571L1.0549 4.14692C0.789641 4.03418 0.789641 3.8485 1.0549 3.73687L9.01722 0.356973C9.32936 0.24429 9.67108 0.24429 9.98322 0.356973L17.9455 3.73687ZM10.3933 8.49282L14.7955 6.62492V8.92497C14.7955 10.4657 12.4247 11.7147 9.50022 11.7147C6.57569 11.7147 4.20601 10.4657 4.20601 8.92497V6.62382L8.60717 8.49171C9.18152 8.71545 9.81893 8.71545 10.3933 8.49171V8.49282ZM15.8533 10.3463H17.6681V9.1405C17.6724 9.0186 17.652 8.89709 17.6083 8.78321C17.5646 8.66934 17.4984 8.56543 17.4137 8.47769C17.3289 8.38995 17.2274 8.32017 17.1151 8.27251C17.0028 8.22485 16.8821 8.20029 16.7601 8.20029C16.6382 8.20029 16.5174 8.22485 16.4052 8.27251C16.2929 8.32017 16.1913 8.38995 16.1066 8.47769C16.0219 8.56543 15.9557 8.66934 15.912 8.78321C15.8683 8.89709 15.8479 9.0186 15.8522 9.1405L15.8533 10.3463ZM16.7596 6.36408C16.8807 6.3643 16.9992 6.32857 17.1001 6.26142C17.2009 6.19427 17.2796 6.09872 17.3261 5.98685C17.3726 5.87499 17.3849 5.75183 17.3614 5.63298C17.3379 5.51413 17.2796 5.40493 17.1941 5.31918C17.1085 5.23344 16.9994 5.17501 16.8806 5.15129C16.7618 5.12758 16.6386 5.13964 16.5266 5.18595C16.4147 5.23226 16.319 5.31074 16.2516 5.41146C16.1843 5.51218 16.1484 5.63061 16.1484 5.75176C16.1484 5.91416 16.2129 6.0699 16.3277 6.18474C16.4426 6.29957 16.5983 6.36408 16.7607 6.36408H16.7596ZM16.7596 7.92802C16.8807 7.92824 16.9991 7.89255 17.1 7.82545C17.2008 7.75835 17.2794 7.66286 17.326 7.55105C17.3725 7.43925 17.3849 7.31616 17.3615 7.19734C17.338 7.07852 17.2799 6.96931 17.1944 6.88352C17.109 6.79773 17 6.73922 16.8812 6.71538C16.7625 6.69154 16.6394 6.70344 16.5274 6.74958C16.4154 6.79572 16.3197 6.87403 16.2522 6.97461C16.1847 7.07518 16.1486 7.1935 16.1484 7.3146C16.1482 7.39511 16.164 7.47485 16.1947 7.54927C16.2254 7.62368 16.2705 7.69132 16.3273 7.74829C16.3842 7.80527 16.4518 7.85047 16.5261 7.88131C16.6005 7.91215 16.6802 7.92802 16.7607 7.92802H16.7596Z" 
                fill="#6D6D6D"
              />
            </svg>
           
            <p className={`text-[#6D6D6D] ${poppins.className} text-[20px] font-bold text-center`}>Fundação Matias Machline</p>
            <h1 className={`${poppins.className} text-center`}>
              <span className="font-medium text-[12px] text-[#B5B5B5]">2022 | 2024 </span>
              <span className="font-medium text-[14px] text-[#858585]">Técnica em informática</span>
            </h1>

            <svg className="mt-10 w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
              <path 
                d="M17.9455 3.73687C18.2108 3.8496 18.2108 4.03418 17.9455 4.14581L9.98322 7.52571C9.67106 7.6383 9.32938 7.6383 9.01722 7.52571L1.0549 4.14692C0.789641 4.03418 0.789641 3.8485 1.0549 3.73687L9.01722 0.356973C9.32936 0.24429 9.67108 0.24429 9.98322 0.356973L17.9455 3.73687ZM10.3933 8.49282L14.7955 6.62492V8.92497C14.7955 10.4657 12.4247 11.7147 9.50022 11.7147C6.57569 11.7147 4.20601 10.4657 4.20601 8.92497V6.62382L8.60717 8.49171C9.18152 8.71545 9.81893 8.71545 10.3933 8.49171V8.49282ZM15.8533 10.3463H17.6681V9.1405C17.6724 9.0186 17.652 8.89709 17.6083 8.78321C17.5646 8.66934 17.4984 8.56543 17.4137 8.47769C17.3289 8.38995 17.2274 8.32017 17.1151 8.27251C17.0028 8.22485 16.8821 8.20029 16.7601 8.20029C16.6382 8.20029 16.5174 8.22485 16.4052 8.27251C16.2929 8.32017 16.1913 8.38995 16.1066 8.47769C16.0219 8.56543 15.9557 8.66934 15.912 8.78321C15.8683 8.89709 15.8479 9.0186 15.8522 9.1405L15.8533 10.3463ZM16.7596 6.36408C16.8807 6.3643 16.9992 6.32857 17.1001 6.26142C17.2009 6.19427 17.2796 6.09872 17.3261 5.98685C17.3726 5.87499 17.3849 5.75183 17.3614 5.63298C17.3379 5.51413 17.2796 5.40493 17.1941 5.31918C17.1085 5.23344 16.9994 5.17501 16.8806 5.15129C16.7618 5.12758 16.6386 5.13964 16.5266 5.18595C16.4147 5.23226 16.319 5.31074 16.2516 5.41146C16.1843 5.51218 16.1484 5.63061 16.1484 5.75176C16.1484 5.91416 16.2129 6.0699 16.3277 6.18474C16.4426 6.29957 16.5983 6.36408 16.7607 6.36408H16.7596ZM16.7596 7.92802C16.8807 7.92824 16.9991 7.89255 17.1 7.82545C17.2008 7.75835 17.2794 7.66286 17.326 7.55105C17.3725 7.43925 17.3849 7.31616 17.3615 7.19734C17.338 7.07852 17.2799 6.96931 17.1944 6.88352C17.109 6.79773 17 6.73922 16.8812 6.71538C16.7625 6.69154 16.6394 6.70344 16.5274 6.74958C16.4154 6.79572 16.3197 6.87403 16.2522 6.97461C16.1847 7.07518 16.1486 7.1935 16.1484 7.3146C16.1482 7.39511 16.164 7.47485 16.1947 7.54927C16.2254 7.62368 16.2705 7.69132 16.3273 7.74829C16.3842 7.80527 16.4518 7.85047 16.5261 7.88131C16.6005 7.91215 16.6802 7.92802 16.7607 7.92802H16.7596Z" 
                fill="#6D6D6D"
              />
            </svg>

            <p className={`text-[#6D6D6D] ${poppins.className} text-[20px] font-bold text-center`}>Universidade federal de Goías</p>
            <h1 className={`${poppins.className} text-center`}>
              <span className="font-medium text-[12px] text-[#B5B5B5]">2025 | 2028 </span>
              <span className="font-medium text-[14px] text-[#858585]">Design</span>
            </h1>
          </div>

          <div className="bg-white relative mt-10 w-[90vw] flex max-w-[400px] min-h-[273px] pt-8 flex-col items-center rounded-[20px]">
              <div className={`${inter.className} font-semibold absolute -top-4 -rotate-8 text-[14px] px-10 py-3 rounded-4xl bg-[#EBC09C]`}>
                <p className="text-[#C35C08]">Softskills</p>
              </div>

              <div className={`${poppins.className} text-[12px] mb-5 items-center justify-center px-5 gap-3 mt-4 font-medium flex flex-row flex-wrap`}>
                <p className="text-[#8B8B8B] bg-[#EEEEEE] w-[170px] py-3 rounded-3xl text-center">Comunicação</p>
                <p className="text-[#8B8B8B] bg-[#EEEEEE] w-[170px] py-3 rounded-3xl text-center">Trabalho em equipe</p>
                <p className="text-[#8B8B8B] bg-[#EEEEEE] w-[170px] py-3 rounded-3xl text-center">Empatia</p>
                <p className="text-[#8B8B8B] bg-[#EEEEEE] w-[170px] py-3 rounded-3xl text-center">Resolução de problemas</p>
                <p className="text-[#8B8B8B] bg-[#EEEEEE] w-[170px] py-3 rounded-3xl text-center">Gestão de tempo</p>
                <p className="text-[#8B8B8B] bg-[#EEEEEE] w-[170px] py-3 rounded-3xl text-center">Visão estratégica</p>
                <p className="text-[#8B8B8B] bg-[#EEEEEE] w-[170px] py-3 rounded-3xl text-center">Resiliência</p>
                <p className="text-[#8B8B8B] bg-[#EEEEEE] w-[170px] py-3 rounded-3xl text-center ">Pensamento crítico</p>
              </div>
          </div>

          <div className="relative flex mt-10 max-w-[400px] w-[90vw] gap-2 px-5 min-h-[273px] pt-12 flex-col items-center rounded-[20px]">
                <div className={`${inter.className} font-semibold absolute -top-4 -rotate-4 text-[14px] px-10 py-3 rounded-4xl bg-[#D5D3FF]`}>
                  <p className="text-[#574FE4]">Hardskills</p>
                </div>

                <div className="w-full justify-center items-center flex flex-row gap-2">
                  <Image
                    src="/photoshop.svg"
                    width={43}
                    height={43}
                    alt="Photoshop"
                  />
                  <div className="flex-1 h-3 rounded-2xl bg-[rgba(0,0,0,0.15)]">
                    <div className="bg-[#001E36]  rounded-2xl h-3 w-[90%]"/>
                  </div>
                </div>

                <div className="w-full justify-center items-center flex flex-row gap-2">
                  <Image
                    src="/ai.svg"
                    width={43}
                    height={43}
                    alt="Ai"
                  />
                  <div className="flex-1 h-3 rounded-2xl bg-[rgba(0,0,0,0.15)]">
                    <div className="bg-[#320000]  rounded-2xl h-3 w-[90%]"/>
                  </div>
                </div>

                 <div className="w-full justify-center items-center flex flex-row gap-2">
                  <Image
                    src="/figma.svg"
                    width={43}
                    height={43}
                    alt="Figam"
                  />
                  <div className="flex-1 h-3 rounded-2xl bg-[rgba(0,0,0,0.15)]">
                    <div className="bg-[#03011C]  rounded-2xl h-3 w-[90%]"/>
                  </div>
                </div>

                 <div className="w-full justify-center items-center flex flex-row gap-2">
                  <Image
                    src="/canva.svg"
                    width={43}
                    height={43}
                    alt="Canva"
                  />
                  <div className="flex-1 h-3 rounded-2xl bg-[rgba(0,0,0,0.15)]">
                    <div className="bg-[#02C2CD]  rounded-2xl h-3 w-[90%]"/>
                  </div>
                </div>
          </div>
       </div>

    </section>
  )
}
