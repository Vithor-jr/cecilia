import Image, { StaticImageData } from "next/image"
import nexus from "../../../public/cards/nexus_card.png"
import { inter, poppins } from "@/app/fonts"

type cards = {
	title: string,
	type: string,
	desc: string,
	img: StaticImageData,
	tec: string[],
	href: string
}

import Figma from '../../../public/figma.svg'
import ai from '../../../public/ai.svg'
import figma from '../../../public/photoshop.svg'
import canva from '../../../public/canva.svg'
import Link from "next/link"

export default function Projeto({title, type, desc, img, tec, href}: cards) {
	return (
		<div className="max-w-[500px] h-full shadow-lg rounded-2xl pb-10 mb-5 mx-2 bg-[#F6F6F6] flex flex-col">
			<Image 
				className="w-full"
				src={img} 
				alt="Projeto Nexus"
			/>

			<div className="flex flex-wrap px-5 mt-3 flex-row justify-between items-center">
				<h1 className={`${inter.className} font-semibold text-[30px]`}>{title}</h1>

				<p className={`${inter.className} font-semibold text-[#574FE4] text-[13px] px-2 py-1 bg-[#D5D3FF] border border-[#574FE4] rounded-[10px]`}>{type}</p>
			</div>

			<p className={`${poppins.className} px-5 text-[#848484] text-[16px]`}>{desc}</p>

			<div className="flex-wrap gap-2 px-5 flex flex-row justify-between items-center mt-10">
				<Link
					href={href}
					className={`${inter.className} bg-[#574FE4] text-white px-6 py-1 rounded-[7px] text-[14px] font-semibold`}>ver projeto</Link>
				<div className="flex flex-row gap-1 items-center">
					{tec.map((item, index) => (
						<Image
							key={index}
							className="w-[30px] h-[30px] rounded-full"
							src={item === "figma" ? Figma : item === "ai" ? ai : item === "photoshop" ? figma : item === "canva" ? canva : Figma}
							alt="Tecnologia usada"
						/>
					))}
			
				</div>
			</div>
		</div>
	)
}