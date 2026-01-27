import photoshop from "../../../public/photoshop.svg"
import canva from "../../../public/canva.svg"
import figma from '../../../public/figma.svg'
import ai from '../../../public/ai.svg'
import Image from "next/image"
import { poppins } from "@/app/fonts"
import bot from '../../../public/bot_1.svg'

export default function Hardskills() {
	return (
		<div>
			<div className="min-[840px]:flex hidden w-full h-[280px] rounded-[30px] flex-col justify-between">
				<div className="w-full relative pl-7 pr-5 items-center flex h-[55%] bg-[#574FE4] overflow-hidden rounded-t-2xl rounded-bl-2xl">
					<h1 className={`${poppins.className} text-white font-bold text-[20px] absolute top-7 right-5`}>Hard Skills</h1>

					<div className="flex flex-col w-full gap-2 mb-15 mt-14">
						<div className="flex w-full flex-row gap-2 items-center">
							<Image
								src={photoshop}
								alt="photo"
							/>

							<div className="max-w-80 flex-1 bg-[rgba(255,255,255,0.15)] h-3 rounded-2xl">
								<div className="w-[75%] bg-[#001E36] h-3 rounded-2xl"/>
							</div>
						</div>

						<div className="flex w-full flex-row gap-2 items-center">
							<Image
								src={ai}
								alt="ai"
							/>

							<div className="max-w-80 flex-1 bg-[rgba(255,255,255,0.15)] h-3 rounded-2xl">
								<div className="w-[85%] bg-[#320000] h-3 rounded-2xl"/>
							</div>
						</div>
					</div>
				</div>

				<div className="flex h-[45%] flex-row-reverse w-full">
					<div className="flex-2/3 flex pr-5 pl-7 gap-2 flex-col bg-[#574FE4] rounded-b-2xl">
						<div className="flex w-full justify-end flex-row gap-2 items-center">
							<div className="max-w-80 flex-1 h-3 rounded-2xl bg-[rgba(255,255,255,0.15)] items-end flex justify-end">
								<div className="w-[93%] bg-[#03011C] h-3 rounded-2xl"/>
							</div>

							<Image
								src={figma}
								alt="figma"
							/>
						</div>

						<div className="flex w-full justify-end flex-row gap-2 items-center">
						  <div className="max-w-80 flex-1 h-3 rounded-2xl bg-[rgba(255,255,255,0.15)] items-end flex justify-end">
								<div className="w-[95%] bg-[#02C2CD] h-3 rounded-2xl"/>
							</div>

							<Image
								src={canva}
								alt="canva"
							/>
						</div>
					</div>

					<div className="flex flex-1/3 relative">
						<div className="bg-[#574FE4] w-10 h-10 absolute top-0 right-0 z-0"/>

						<div className="bg-[#101010] rounded-2xl w-full h-full z-1 flex flex-row items-center gap-1">
								<Image
									src={bot}
									alt="bot"
								/>

								<div className="flex flex-col gap-1">
									<p className={`${poppins.className} text-white text-[12px] font-normal`} >Ferramentas de Inteligência artificial</p>
									<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
										<circle cx="7.5" cy="7.5" r="7" fill="#574FE4" stroke="#101010"/>
										<path d="M5.57125 9.74275C5.42918 9.97954 5.50596 10.2867 5.74275 10.4287C5.97954 10.5708 6.28667 10.494 6.42875 10.2572L6 10L5.57125 9.74275ZM9.48507 4.87873C9.4181 4.61083 9.14663 4.44795 8.87873 4.51493L4.51309 5.60634C4.24519 5.67331 4.08231 5.94478 4.14929 6.21268C4.21626 6.48058 4.48773 6.64346 4.75563 6.57648L8.6362 5.60634L9.60634 9.48691C9.67331 9.75481 9.94478 9.91769 10.2127 9.85071C10.4806 9.78374 10.6435 9.51227 10.5765 9.24437L9.48507 4.87873ZM6 10L6.42875 10.2572L9.42875 5.25725L9 5L8.57125 4.74275L5.57125 9.74275L6 10Z" fill="#101010"/>
									</svg>
								</div>
						</div>
					</div>
				</div>
		   </div>

			 <div className="min-[840px]:hidden flex w-full rounded-[30px] flex-col justify-between">
				<div className="w-full relative p-5  items-center flex flex-col bg-[#574FE4] overflow-hidden rounded-[20px]">
					<h1 className={`${poppins.className} text-white w-full mb-3 font-bold text-[20px]`}>Hard Skills</h1>

					<div className="flex flex-col w-full gap-3">
						<div className="flex w-full flex-row gap-2 items-center">
							<Image
								src={photoshop}
								alt="photo"
								className="w-[clamp(35px,5vw,43px)]"
							/>

							<div className="max-w-80 flex-1 bg-[rgba(255,255,255,0.15)] h-4 rounded-2xl">
								<div className="w-[75%] bg-[#001E36] h-4 rounded-2xl"/>
							</div>
						</div>

						<div className="flex w-full flex-row gap-2 items-center">
							<Image
								src={ai}
								alt="ai"
								className="w-[clamp(34px,5vw,43px)]"
							/>

							<div className="max-w-80 flex-1 bg-[rgba(255,255,255,0.15)] h-4 rounded-2xl">
								<div className="w-[85%] bg-[#320000] h-4 rounded-2xl"/>
							</div>
						</div>

						<div className="flex w-full justify-end flex-row gap-2 items-center">
							<div className="max-w-80 flex-1 h-4 rounded-2xl bg-[rgba(255,255,255,0.15)] items-end flex justify-end">
								<div className="w-[93%] bg-[#03011C] h-4 rounded-2xl"/>
							</div>

							<Image
								src={figma}
								alt="figma"
								className="w-[clamp(35px,5vw,43px)]"
							/>
						</div>

						<div className="flex w-full justify-end flex-row gap-2 items-center">
						  <div className="max-w-80 flex-1 h-4 rounded-2xl bg-[rgba(255,255,255,0.15)] items-end flex justify-end">
								<div className="w-[95%] bg-[#02C2CD] h-4 rounded-2xl"/>
							</div>

							<Image
								src={canva}
								alt="canva"
								className="w-[clamp(35px,5vw,43px)]"
							/>
						</div>
					</div>
				</div>


					<div className="bg-[#101010] mt-2 rounded-2xl w-full h-full z-1 flex flex-row items-center gap-1">
						<Image
							src={bot}
							alt="bot"
							className="w-[clamp(80px,40%,118px)]"
						/>

						<div className="flex flex-col gap-1">
							<p className={`${poppins.className} text-white text-[12px] font-normal`} >Ferramentas de Inteligência artificial</p>
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
								<circle cx="7.5" cy="7.5" r="7" fill="#574FE4" stroke="#101010"/>
								<path d="M5.57125 9.74275C5.42918 9.97954 5.50596 10.2867 5.74275 10.4287C5.97954 10.5708 6.28667 10.494 6.42875 10.2572L6 10L5.57125 9.74275ZM9.48507 4.87873C9.4181 4.61083 9.14663 4.44795 8.87873 4.51493L4.51309 5.60634C4.24519 5.67331 4.08231 5.94478 4.14929 6.21268C4.21626 6.48058 4.48773 6.64346 4.75563 6.57648L8.6362 5.60634L9.60634 9.48691C9.67331 9.75481 9.94478 9.91769 10.2127 9.85071C10.4806 9.78374 10.6435 9.51227 10.5765 9.24437L9.48507 4.87873ZM6 10L6.42875 10.2572L9.42875 5.25725L9 5L8.57125 4.74275L5.57125 9.74275L6 10Z" fill="#101010"/>
							</svg>
						</div>
					</div>
		   </div>
		</div>
	)
}