'use client'

import { inter, poppins } from "@/app/fonts"
import Profile from "@/components/Profile"
import { LettersAnimation } from "@/function/letters"
import { motion } from "framer-motion"
import Image from "next/image"
import ceciliaMain from '../../../public/cecilia/cecilia.svg'
import ExperienceSection from "../Experience"
//Fazer menu como drawer

export default function AboutSection() {
  return (
    <section id="sobre" className="text-[#F0F0F0]  flex flex-col items-center">
      <div className="flex  pt-20 max-w-[1440px] px-10 gap-y-10 flex-col lg:flex-row items-center gap-x-[8vw] justify-center">
        <div className={`${inter.className} w-[clamp(0px,100%,530px)] font-light `}>
          <h1 className="font-bold text-[clamp(40px,10vw,64px)]">Sobre mim</h1>
          <p className="text-[clamp(14px,10vw,16px)] mt-4">Olá, me chamo Cecília e desde cedo, encontrei na arte uma forma de me entender e me expressar. O design entrou na minha vida como um caminho para transformar essa sensibilidade em algo funcional, ideias que ganham forma e impacto.</p>
          <p className="text-[clamp(14px,10vw,16px)] mt-4">Sou formada pela Fundação Matias Machline e hoje curso Design na UFG. Ao longo da minha trajetória, participei de projetos de UX/UI, branding, social media e design estratégico, aprendendo sobre experiência do usuário, propósito e colaboração.</p>
          <p className="text-[clamp(14px,10vw,16px)] mt-7">Atualmente, sou sócia da Nexus Skill, um app voltado ao aprimoramento de soft skills, e da NXS Hub, empresa de desenvolvimento de softwares.</p>
          <p className="text-[clamp(14px,10vw,16px)] mt-7">Acredito no design como ferramenta de transformação, uma ponte entre pessoas, tecnologia e novas possibilidades. Sigo curiosa, inquieta e comprometida com o que ainda posso criar.</p>

          <div className="flex flex-row mt-10 flex-wrap gap-4">
            <a 
              href="https://www.linkedin.com/in/cec%C3%ADlia-costa-595686350/" target="_blank" rel="noopener noreferrer"
              className={`flex flex-row gap-2 items-center px-6 py-2 font-semibold text-[14px] rounded-4xl text-[#574FE4] bg-[#D5D3FF]`}>
              <div className="rounded-full bg-[#574FE4] w-6 h-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14 14H11.2V9.10068C11.2 7.75668 10.6071 7.00684 9.5438 7.00684C8.3867 7.00684 7.7 7.78818 7.7 9.10068V14H4.9V4.9H7.7V5.92334C7.7 5.92334 8.57849 4.38184 10.5581 4.38184C12.5384 4.38184 14 5.59027 14 8.09067V14ZM1.7094 3.44463C0.765101 3.44463 0 2.67327 0 1.72197C0 0.771373 0.765101 0 1.7094 0C2.653 0 3.4181 0.771373 3.4181 1.72197C3.4188 2.67327 2.653 3.44463 1.7094 3.44463ZM0 14H3.5V4.9H0V14Z" fill="#D5D3FF"/>
                </svg>
              </div>
              Cecília costa
            </a>
            
            <a 
              href="mailto:ceciliadsgr@gmail.com" target="_blank" rel="noopener noreferrer"
              className={`flex flex-row gap-2 items-center px-6 py-2 font-semibold text-[14px] rounded-4xl text-[#574FE4] bg-[#D5D3FF]`}>
              <div className="rounded-full bg-[#574FE4] w-6 h-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M13.1211 1.34181V8.946C13.1211 9.43994 12.7207 9.84069 12.2268 9.84069H10.1386V4.77138L6.56031 7.45588L2.982 4.77138V9.84113H0.89425C0.400313 9.84113 0 9.44081 0 8.94688V1.34225C0 0.601125 0.600688 0 1.34181 0C1.64544 0 1.92544 0.101062 2.15031 0.270813L2.14681 0.268187L6.56031 3.57875L10.9738 0.268187C11.1952 0.100625 11.4752 0 11.7788 0C12.5199 0 13.1211 0.600688 13.1211 1.34181Z" fill="#D5D3FF"/>
                </svg>
              </div>
              @ceciliadsgr@gmail.com
            </a>

            <a 
              href="https://www.instagram.com/ceciliadesignn/" target="_blank" rel="noopener noreferrer"
              className={`flex flex-row gap-2 items-center px-4 py-2 font-semibold text-[14px] rounded-4xl text-[#574FE4] bg-[#D5D3FF]`}>
              <div className="rounded-full bg-[#574FE4] w-6 h-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.49357 9.99239C8.425 9.99239 9.99075 8.42665 9.99075 6.49522C9.99075 4.56378 8.425 2.99805 6.49357 2.99805C4.56214 2.99805 2.9964 4.56378 2.9964 6.49522C2.9964 8.42665 4.56214 9.99239 6.49357 9.99239ZM6.49357 8.82667C7.78117 8.82667 8.82502 7.78282 8.82502 6.49522C8.82502 5.2076 7.78117 4.16377 6.49357 4.16377C5.20595 4.16377 4.16212 5.2076 4.16212 6.49522C4.16212 7.78282 5.20595 8.82667 6.49357 8.82667Z" fill="#D5D3FF"/>
                  <path d="M9.95288 2.65186C9.74063 2.65186 9.56857 2.82392 9.56857 3.03616C9.56857 3.2484 9.74063 3.42047 9.95288 3.42047C10.1651 3.42047 10.3372 3.2484 10.3372 3.03616C10.3372 2.82392 10.1651 2.65186 9.95288 2.65186Z" fill="#D5D3FF"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.386119 1.93429C0 2.69209 0 3.68411 0 5.66815V7.32136C0 9.30538 0 10.2974 0.386119 11.0552C0.725759 11.7218 1.2677 12.2637 1.93429 12.6034C2.69209 12.9895 3.68411 12.9895 5.66815 12.9895H7.32136C9.30538 12.9895 10.2974 12.9895 11.0552 12.6034C11.7218 12.2637 12.2637 11.7218 12.6034 11.0552C12.9895 10.2974 12.9895 9.30538 12.9895 7.32136V5.66815C12.9895 3.68411 12.9895 2.69209 12.6034 1.93429C12.2637 1.2677 11.7218 0.725759 11.0552 0.386119C10.2974 0 9.30538 0 7.32136 0H5.66815C3.68411 0 2.69209 0 1.93429 0.386119C1.2677 0.725759 0.725759 1.2677 0.386119 1.93429ZM7.32136 1.18086H5.66815C4.65664 1.18086 3.96903 1.18178 3.43754 1.22521C2.91983 1.2675 2.65508 1.34417 2.47039 1.43827C2.026 1.66471 1.66471 2.026 1.43827 2.47039C1.34417 2.65508 1.2675 2.91983 1.22521 3.43754C1.18178 3.96903 1.18086 4.65664 1.18086 5.66815V7.32136C1.18086 8.33288 1.18178 9.02044 1.22521 9.55195C1.2675 10.0697 1.34417 10.3344 1.43827 10.5191C1.66471 10.9635 2.026 11.3248 2.47039 11.5512C2.65508 11.6453 2.91983 11.722 3.43754 11.7643C3.96903 11.8077 4.65664 11.8086 5.66815 11.8086H7.32136C8.33288 11.8086 9.02044 11.8077 9.55195 11.7643C10.0697 11.722 10.3344 11.6453 10.5191 11.5512C10.9635 11.3248 11.3248 10.9635 11.5512 10.5191C11.6453 10.3344 11.722 10.0697 11.7643 9.55195C11.8077 9.02044 11.8086 8.33288 11.8086 7.32136V5.66815C11.8086 4.65664 11.8077 3.96903 11.7643 3.43754C11.722 2.91983 11.6453 2.65508 11.5512 2.47039C11.3248 2.026 10.9635 1.66471 10.5191 1.43827C10.3344 1.34417 10.0697 1.2675 9.55195 1.22521C9.02044 1.18178 8.33288 1.18086 7.32136 1.18086Z" fill="#D5D3FF"/>
                </svg>
              </div>
              @ceciliadesignn
            </a>
          </div>
        </div>

       <div className="relative flex items-center">

          <Image
            src={ceciliaMain}
            alt="ceci"
            className="w-[clamp(260px,100%,514px)] h-auto"
          />

          <p className="absolute left-[-20%] top-[18%] w-[clamp(100px,50%,250px)] -rotate-10 rounded-full flex justify-center py-4 bg-[#92D1E0] text-[#1D8198] font-semibold text-[clamp(12px,1.2vw,14px)]">
            Web designer
          </p>

          <p className="absolute left-[-15%] bottom-[10%] w-[clamp(100px,50%,250px)] rotate-5 rounded-full flex justify-center py-4 bg-[#EBC09C] text-[#C35C08] font-semibold text-[clamp(12px,1.2vw,14px)]">
            Brand designer
          </p>

          <p className="absolute right-[-6%] bottom-[-5%] w-[clamp(100px,50%,250px)] -rotate-5 rounded-full flex justify-center py-4 bg-[#9FDE8D] text-[#49830A] font-semibold text-[clamp(12px,1.2vw,14px)]">
            UX/UI designer
          </p>

      </div>

      </div>

      <div className={`font-semibold mt-16 w-full text-[13px] gap-x-10 overflow-hidden flex items-center justify-around bg-[#574FE4] -rotate-2 py-2`}>
        <p>Brand designer</p>
        <p>Graphic designer</p>
        <p>Marketing</p>
        <p>Brand designer</p>
        <p>Graphic designer</p>
        <p>Marketing</p>
      </div>

      <ExperienceSection/>
    </section>
  )
}
