'use client'

import { inter } from "@/app/fonts" 
import { useState } from "react"
import Projeto from "@/components/Projeto"

import nexus from "../../../public/cards/nexus_card.png"
import aura from "../../../public/cards/aura_card.png"
import magnnuz from "../../../public/cards/magnnuz_card.png"
import veeg from "../../../public/cards/veeg_card.png"
import fiocafe from "../../../public/cards/fiocafe.svg"
import verame from "../../../public/cards/verame.png"
import nomad from '../../../public/cards/nomad.svg'
import vithor from '../../../public/cards/vithor_card.png'

import studus from "../../../public/cards/studus_card.png"
import nexus_UI from "../../../public/cards/card_nexus.png"

const cards = [
  { 
    title: "Nexus", 
    type: "Identidade Visual", 
    desc: "Aplicativo de aprimoramento de softskills, através de IA e gamificação.", 
    img: nexus,
    href:"identidade-visual/nexus",
    tec: ["figma", "ai", "photoshop"]
  },
  { 
    title: "Âura", 
    type: "Identidade Visual",
    desc: "Uma marca de bem-estar que integra pilates, estética e autocuidado para mulheres em busca de equilíbrio.",
    img: aura,
    href:"identidade-visual/aura",
    tec: ["ai", "photoshop"]
  },
  { 
    title: "Magnnuz",
    type: "Identidade Visual",
    desc: "Dispositivo interativo para aprendizado e prática do xadrez.",
    img: magnnuz,
    href:"identidade-visual/magnnuz",
    tec: ["figma", "ai", "photoshop"]
  },
  { 
    title: "VEEG", 
    type: "Identidade Visual",
    desc: "Empresa de transporte de cargas secas com foco em confiança e profissionalismo.",
    img: veeg,
    href:"identidade-visual/veeg",
    tec: ["figma", "ai", "photoshop"]
  },
  { 
    title: "Fio café", 
    type: "Identidade Visual",
    desc: "Uma cafeteria de cafés especiais com atmosfera tranquila e instagramável.",
    img: fiocafe,
    href:"identidade-visual/fiocafe",
    tec: ["ai", "photoshop"]
  },
   { 
    title: "Vérame", 
    type: "Identidade Visual",
    desc: "Restaurante noturno contemporâne0 com atmosfera intimista, estética refinada e experiência sensorial completa.",
    img: verame,
    href:"identidade-visual/verame",
    tec: ["ai", "photoshop"]
  },
  { 
    title: "Nomad Studio", 
    type: "Identidade Visual",
    desc: "Identidade visual para ateliê de mobiliário artesanal",
    img: nomad,
    href:"identidade-visual/nomadstudio",
    tec: ["ai", "photoshop"]
  },
  { 
    title: "Nexus", 
    type: "UX / UI Design", 
    desc: "Aplicativo de aprimoramento de softskills, através de IA e gamificação.", 
    img: nexus_UI,
    href:"ux-ui-design/nexus",
    tec: ["figma"]
  },
  {
    title: "Studus",
    type: "UX / UI Design",
    desc: "Plataforma educacional que conecta estudantes a cursos online de diversas áreas do conhecimento.",
    img: studus,
    href:"ux-ui-design/studus",
    tec: ["figma"]
  },
  {
    title: "Vithor - landing page",
    type: "UX / UI Design",
    desc: "Landing page para programador full-stack, com foco em apresentar trajetória, tecnologias e projetos..",
    img: vithor,
    href:"ux-ui-design/vithor",
    tec: ["figma"]
  }
]

export default function ProjectSection() {
  const [active, setActive] = useState("visual")
  const [input, setInput] = useState("");

  const filteredCards = cards.filter((item) => {
    if (active === "all") return true
    if (active === "visual") return item.type === "Identidade Visual"
    if (active === "ux") return item.type === "UX / UI Design"
    return false
  })

  const tab = [
    {label: "Identidade visual", id: "visual" },
    {label: "UX / UI design", id: "ux" },
    {label: "Todos", id: "all" },
  ]

  return (
    <section id="projetos" className={`${inter.className} pt-20 px-10 relative overflow-hidden z-1 w-full flex-col text-black flex items-center`}>
      <h1 className=" min-[1140px]:text-[65px] text-[50px] font-bold z-2">Projetos</h1>
      <div className="flex flex-row gap-1 items-center">
        <svg className="w-[25px]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <g clipPath="url(#clip0_3878_2602)">
            <path d="M5 6.25H20" stroke="#808080" strokeWidth="2" strokeLinecap="round"/>
            <path d="M5 15H12.5" stroke="#808080" strokeWidth="2" strokeLinecap="round"/>
            <path d="M17.5 15H25" stroke="#808080" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10 23.75H25" stroke="#808080" strokeWidth="2" strokeLinecap="round"/>
            <path d="M22.5 8.75C23.8807 8.75 25 7.63071 25 6.25C25 4.86929 23.8807 3.75 22.5 3.75C21.1193 3.75 20 4.86929 20 6.25C20 7.63071 21.1193 8.75 22.5 8.75Z" stroke="#808080" strokeWidth="2" strokeLinecap="round"/>
            <path d="M15 17.5C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6193 16.3807 12.5 15 12.5C13.6193 12.5 12.5 13.6193 12.5 15C12.5 16.3807 13.6193 17.5 15 17.5Z" stroke="#808080" strokeWidth="2" strokeLinecap="round"/>
            <path d="M7.5 26.25C8.88071 26.25 10 25.1307 10 23.75C10 22.3693 8.88071 21.25 7.5 21.25C6.11929 21.25 5 22.3693 5 23.75C5 25.1307 6.11929 26.25 7.5 26.25Z" stroke="#808080" strokeWidth="2" strokeLinecap="round"/>
          </g>
          <defs>
            <clipPath id="clip0_3878_2602">
              <rect width="30" height="30" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <p className={`${inter.className} font-semibold text-[#808080] text-[18px]`}>Explore por tipo de design</p>
      </div>

      <div className="flex mt-5 flex-row flex-wrap gap-2 justify-between">
        {
          tab.map((item, index) => (
            <button key={index}
              onClick={() => setActive(item.id)}
              className={`w-[clamp(80px,20vw,200px)]  cursor-pointer py-4 rounded-2xl flex-1
                text-[clamp(8px,2vw,16px)] font-semibold
                ${active === item.id 
                  ? "text-[#FDFDFD] bg-[#574FE4]" 
                  : "text-[#574FE4] bg-[#E7E6F4]"
                }`}
              >
              {item.label}
            </button>
          )) 
        }
      </div>

     <div className="flex justify-center w-full">
       <div className="flex mt-10 md:flex-row gap-x-[2%] flex-col gap-y-4 flex-wrap max-w-[1200px]">
        {
          filteredCards.map((item, index) => (
            <Projeto
              tec={item.tec}
              key={index}
              title={item.title}
              href={item.href}
              type={item.type}
              desc={item.desc}
              img={item.img}
            />
          ))
          }
        </div>
     </div>
    </section>
  )
}
