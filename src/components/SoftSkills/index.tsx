import { poppins } from "@/app/fonts"
import word from '../../../public/words.svg'
import Image from "next/image"
export default function SoftSkills(){
	return(
		<div className={`${poppins.className} flex min-h-[280px] flex-col rounded-[30px] min-[840px]:w-[340px] w-full pt-5 bg-[#574FE4]`}>
			<h1 className="font-bold px-4 text-white text-[20px]">Softskills</h1>
			<Image
				className="w-full px-2 select-none"
				src={word}
				alt="word"
			/>
		</div>
	)
}