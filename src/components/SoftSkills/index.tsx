import { poppins } from "@/app/fonts"

export default function SoftSkills(){
	return(
		<div className={`${poppins.className} flex h-[280px] flex-col rounded-[30px] w-[340px] px-4 pt-5 bg-[#574FE4]`}>
			<h1 className="font-bold text-white text-[20px]">Softskills</h1>
			<div className="relative w-full flex-1">
				<p className="z-2 left-0 -rotate-10 top-9 bg-[#574FE4] border border-[#D5D3FF] rounded-full absolute w-[160px] text-center py-3 font-medium text-[12px] text-[#D5D3FF]">Pensamento crítico</p>
				<p className="z-3 right-0 rotate-4 top-0 bg-[#D5D3FF] border border-[#D5D3FF] rounded-full absolute w-[180px] text-center py-3 font-medium text-[12px] text-[#574FE4]">Trabalho em equipe</p>
				<p className="z-1 right-3 rotate-1 top-12 bg-[#D5D3FF] border border-[#D5D3FF] rounded-full absolute w-[160px] text-center py-3 font-medium text-[12px] text-[#574FE4]">Visão estratégica</p>
				<p className="z-1 left-2 rotate-8 top-20 bg-[#D5D3FF] border border-[#D5D3FF] rounded-full absolute w-[160px] text-center py-3 font-medium text-[12px] text-[#574FE4]">Gestão de tempo</p>
				<p className="z-2 right-0 -rotate-9 top-26 bg-[#574FE4] border border-[#D5D3FF] rounded-full absolute w-[200px] text-center py-3 font-medium text-[12px] text-[#D5D3FF]">Resolução de problemas</p>
				<p className="z-3 left-2 rotate-6 top-35 bg-[#D5D3FF] border border-[#D5D3FF] rounded-full absolute w-[140px] text-center py-3 font-medium text-[12px] text-[#574FE4]">Resiliência</p>
				<p className="z-0	right-2 rotate-6 top-35	 bg-[#D5D3FF] border border-[#D5D3FF] rounded-full absolute w-[140px] text-center py-3 font-medium text-[12px] text-[#574FE4]">Comunicação</p>
				<p className="z-2 right-20 -rotate-8 bottom-3 bg-[#574FE4] border border-[#D5D3FF] rounded-full absolute w-[140px] text-center py-3 font-medium text-[12px] text-[#D5D3FF]">Empatia</p>
			</div>
		</div>
	)
}