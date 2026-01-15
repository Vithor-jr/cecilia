'use client'

import { inter, poppins } from "@/app/fonts"
import { motion } from "framer-motion"

import ceci from '../../../public/cecilia/about.svg'

import Image from "next/image"
import ExperienceItem from "@/components/ExperienceItem"
import SoftSkills from "@/components/SoftSkills"
import Hardskills from "@/components/Hardskills"

const formation = [
  {
		title: "Fundação Matias Machline",
		date: "2022 | 2024",
		prof: "Técnica em informática",
		labels: "Design ✦ Programação ✦ Social midia"
	},
  {
		title: "Universidade federal de Goías",
		date: "2025 | atual",
		prof: "Graduanda em design",
		labels: "Design ✦ Ambientes ✦ Marketing ✦ Produto"
	}
]

const prof = [
  {
		title: "Canindé - Empresa júnior",
		date: "2025 | atual",
		prof: "Design e marketing",
		labels: "Design ✦ Ambientes ✦ Marketing ✦ Produto ✦ Gráfico"
	},
  {
		title: "Nexus Skill",
		date: "2024 | atual",
		prof: "Sócia, design e marketing",
		labels: "Design ✦ Sócia ✦ Marketing"
	},
  {
		title: "Nxs hub",
		date: "2024 | atual",
		prof: "Sócia, design e marketing",
		labels: "Design ✦ Sócia ✦ Marketing"
	},
]

export default function ExperienceSection() {
  return (
    <div className={`${inter.className} gap-y-10 mt-24 pb-30 px-10 flex flex-row flex-wrap justify-center gap-x-[20px]`}>
      <div className="flex w-[400px] gap-5">
        <div className="w-2 h-full rounded-full bg-[#574FE4]"/>

        <div className="py-3">
            <div className="flex ml-8 flex-row gap-2 mb-7 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" viewBox="0 0 33 22" fill="none">
                 <path d="M31.7378 6.4339C32.2304 6.64327 32.2304 6.98605 31.7378 7.19337L16.9506 13.4703C16.3709 13.6794 15.7364 13.6794 15.1566 13.4703L0.369474 7.19542C-0.123158 6.98606 -0.123158 6.64121 0.369474 6.4339L15.1566 0.15695C15.7363 -0.0523167 16.3709 -0.0523167 16.9506 0.15695L31.7378 6.4339ZM17.7122 15.2664L25.8878 11.7974V16.0689C25.8878 18.9303 21.4849 21.2498 16.0536 21.2498C10.6224 21.2498 6.22153 18.9303 6.22153 16.0689V11.7954L14.3951 15.2643C15.4618 15.6798 16.6455 15.6798 17.7122 15.2643V15.2664ZM27.8522 18.7086H31.2226V16.4692C31.2305 16.2428 31.1927 16.0172 31.1115 15.8057C31.0303 15.5942 30.9074 15.4012 30.75 15.2383C30.5927 15.0753 30.4041 14.9457 30.1956 14.8572C29.9871 14.7687 29.7629 14.7231 29.5363 14.7231C29.3098 14.7231 29.0856 14.7687 28.8771 14.8572C28.6686 14.9457 28.48 15.0753 28.3226 15.2383C28.1653 15.4012 28.0423 15.5942 27.9612 15.8057C27.88 16.0172 27.8422 16.2428 27.8501 16.4692L27.8522 18.7086ZM29.5353 11.313C29.7603 11.3134 29.9804 11.2471 30.1676 11.1224C30.3549 10.9976 30.501 10.8202 30.5874 10.6124C30.6738 10.4047 30.6966 10.176 30.6529 9.95526C30.6093 9.73453 30.5011 9.53172 30.3422 9.37248C30.1832 9.21324 29.9806 9.10473 29.76 9.06069C29.5393 9.01665 29.3106 9.03905 29.1027 9.12505C28.8948 9.21106 28.717 9.35681 28.592 9.54386C28.467 9.73091 28.4002 9.95085 28.4002 10.1758C28.4002 10.4774 28.52 10.7667 28.7333 10.9799C28.9465 11.1932 29.2358 11.313 29.5374 11.313H29.5353ZM29.5353 14.2175C29.7602 14.2179 29.9802 14.1516 30.1674 14.027C30.3547 13.9024 30.5007 13.725 30.5872 13.5174C30.6736 13.3098 30.6966 13.0812 30.6531 12.8605C30.6096 12.6398 30.5017 12.437 30.3429 12.2777C30.1842 12.1184 29.9817 12.0097 29.7612 11.9654C29.5407 11.9211 29.312 11.9432 29.1041 12.0289C28.8962 12.1146 28.7183 12.2601 28.593 12.4468C28.4677 12.6336 28.4006 12.8534 28.4002 13.0783C28.3999 13.2278 28.4292 13.3759 28.4862 13.5141C28.5432 13.6523 28.6269 13.7779 28.7325 13.8837C28.8382 13.9895 28.9636 14.0734 29.1017 14.1307C29.2398 14.188 29.3879 14.2175 29.5374 14.2175H29.5353Z" fill="#574FE4"/>
              </svg>
              <h1 className="font-bold text-[20px] text-[#574FE4]">Formação</h1>
            </div>

            <div className="flex flex-col gap-7">
               {
                formation.map((item, index)=>{
                  return(
                    <ExperienceItem key={index} data={item}/>
                  )
                })
              }
            </div>
           
            <div className="flex ml-8 flex-row gap-2 mt-12 mb-7 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M17.2268 15.3993C17.0851 15.3852 16.9151 15.3852 16.7593 15.3993C13.3876 15.286 10.7101 12.5235 10.7101 9.1235C10.7101 5.65266 13.5151 2.8335 17.0001 2.8335C20.471 2.8335 23.2901 5.65266 23.2901 9.1235C23.276 12.5235 20.5985 15.286 17.2268 15.3993Z" stroke="#574FE4" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.1433 20.6265C6.71497 22.9215 6.71497 26.6615 10.1433 28.9423C14.0391 31.549 20.4283 31.549 24.3242 28.9423C27.7525 26.6473 27.7525 22.9073 24.3242 20.6265C20.4425 18.034 14.0533 18.034 10.1433 20.6265Z" stroke="#574FE4" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h1 className="font-bold text-[20px] text-[#574FE4]">Experiência profissional</h1>
            </div>

           <div className="flex flex-col gap-7">
             {
                prof.map((item, index)=>{
                  return(
                    <ExperienceItem key={index} data={item}/>
                  )
                })
             }
           </div>
        </div>
      </div>

      <div className="flex overflow-hidden flex-col gap-7 w-[700px]">
        <div className="flex w-full items-center flex-wrap flex-row justify-center gap-[19px]">
          
          <SoftSkills/>
          
          <div className="relative h-[280px] overflow-hidden">
            <div className="bg-[#101010] p-5 -top-5 left-4 rounded-full absolute">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 26 26" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.9841 0C14.2594 10.6979 15.2834 11.7232 25.9683 12.9807C15.2834 14.2574 14.2594 15.2827 12.9841 26C11.7282 15.2827 10.6849 14.2574 0 12.9807C10.6849 11.7232 11.7282 10.6979 12.9841 0Z" fill="#574FE4"/>
              </svg>
            </div>

            <Image
              src={ceci}
              alt="ceci"
            />
          </div>
        </div>
        
        <Hardskills/>
      </div>
    </div>
  )
}
