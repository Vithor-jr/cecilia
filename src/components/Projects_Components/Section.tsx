import { inter } from "@/app/fonts"
import { ComponentType, SVGProps } from "react"
import { motion }from 'framer-motion'
type SectionProps = {
  title: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
	number: number
	description: string
	isNexusThird?: boolean
}

export default function Section({ title, Icon, isNexusThird=false, number, description }: SectionProps) {
  return (
    <motion.div 
			initial={{opacity:0, x:-100}}
			whileInView={{opacity:1, x:0}}
			transition={{duration:1, delay:0.2*number, type:'spring'}}
			className="bg-[#E7E6F4] px-10 pt-10 flex-1 flex flex-col pb-15 rounded-2xl">
      <div className="flex items-center flex-row justify-between">
				<div className="bg-[#D5D3FF] flex px-5 py-1 rounded-2xl items-center gap-2">
					<Icon className="w-[25px] h-[25px] text-[#574FE4]" />
					<h1 className={ `${inter.className} text-[#574FE4] text-[20px] md:text-[30px] font-bold`}>{title}</h1>
				</div>
				<p className={ `${inter.className} bg-[#D5D3FF] w-[30px] text-center py-1 rounded-full text-[#574FE4] text-[14px] font-bold`}>{number}</p>
			</div>

		{
				isNexusThird ?
				<div className="flex flex-col md:flex-row  gap-5 flex-wrap w-full justify-between">
			  	<p className={`${inter.className} max-w-[50%] text-[14px] text-[#6E6E6E] font-medium mt-5`}>{description}</p>
					<div className="flex flex-col gap-2">
						<div className="flex gap-2 flex-row items-center">
							<div className="bg-[#0B0B0B] w-[60px] h-[45px] rounded-[5px]"/>
							<p className={`${inter.className} font-medium text-[14px]`}>Preto para foco e sofisticação.</p>
						</div>

						<div className="flex gap-2 flex-row items-center">
							<div className="bg-[#01D4FF] w-[60px] h-[45px] rounded-[5px]"/>
							<p className={`${inter.className} font-medium text-[14px]`}>Azul para confiança e destaque.</p>
						</div>

						<div className="flex gap-2 flex-row items-center">
							<div className="bg-[#F0F0F0] w-[60px] h-[45px] rounded-[5px]"/>
							<p className={`${inter.className} font-medium text-[14px]`}>Branco para clareza e equilíbrio</p>
						</div>
					</div>
				</div>
					:
				<p className={`${inter.className} text-[14px] text-[#6E6E6E] font-medium mt-5`}>{description}</p>
			}
    </motion.div>
  )
}
