'use client'

import { inter } from "@/app/fonts";
import { useActive } from "@/contexts/active_provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Header({title, type, description}: {title: string, type: string, description?: string}) {
	const {setHeaderActive, headerActive} = useActive()
	const router = useRouter()
		
	useEffect(() => {
		setHeaderActive(false)
	}, [])

	return(
		<header className="flex flex-col items-start">
			<button
					onClick={() => {
						router.push('/')
						setTimeout(() => {
							document
								.getElementById("projetos")
								?.scrollIntoView({ behavior: "smooth" })
						}, 100)
						}}
					className="cursor-pointer"
				>
				<svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
					<path d="M28.4319 19.9963L11.7072 20.1443M11.7072 20.1443L19.2999 27.6038M11.7072 20.1443L19.1667 12.5515" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</button>
			
			<div className="flex flex-wrap flex-col sm:gap-5 sm:flex-row sm:items-center items-start">
				<h1 className={`${inter.className} text-[40px] md:text-[60px] font-bold`}>{title}</h1>
			  {
					
					title == "VEEG" ? 
						<div className="flex flex-row flex-wrap gap-2">
							<p className={`${inter.className} text-[#1D8198] font-semibold text-[12px] md:text-[14px] rounded-2xl px-7 py-2 bg-[#92D1E0]`}>{type}</p>
							<p className={`${inter.className} text-[#1D8198] font-semibold text-[12px] md:text-[14px] rounded-2xl px-7 py-2 bg-[#92D1E0]`}>Primeiro projeto</p>
						</div>
					: type == "Identidade Visual" ?
					<p className={`${inter.className} text-[#1D8198] font-semibold text-[12px] md:text-[14px] rounded-2xl px-7 py-2 bg-[#92D1E0]`}>{type}</p> :
					type == "Lading page" ?
					<div className="flex flex-row flex-wrap gap-2">
						<p className={`${inter.className} text-[#C35C08] font-semibold text-[12px] md:text-[14px] rounded-2xl px-7 py-2 bg-[#EBC09C]`}>UX/UI</p>
						<p className={`${inter.className} text-[#C35C08] font-semibold text-[12px] md:text-[14px] rounded-2xl px-7 py-2 bg-[#EBC09C]`}>{type}</p>
					</div>
						:
					<p className={`${inter.className} text-[#C35C08] font-semibold text-[12px] md:text-[14px] rounded-2xl px-7 py-2 bg-[#EBC09C]`}>{type}</p>
				}
				
			</div>
			<p className={`${inter.className} text-[15px] md:text-[25px] font-medium text-[#828282] `}>{description}</p>
		</header>
	)
}