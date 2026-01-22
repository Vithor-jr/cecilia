import { poppins } from "@/app/fonts"


type ExperienceProps = {
	data: {
		title: string,
		date: string,
		prof: string,
		labels: string
	}
}

export default function ExperienceItem ({data}:ExperienceProps) {
	return(
		<div className={`${poppins.className} flex  flex-row gap-2 items-center`}>
			<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
				<path fillRule="evenodd" clipRule="evenodd" d="M12.9841 0C14.2594 10.6979 15.2834 11.7232 25.9683 12.9807C15.2834 14.2574 14.2594 15.2827 12.9841 26C11.7282 15.2827 10.6849 14.2574 0 12.9807C10.6849 11.7232 11.7282 10.6979 12.9841 0Z" fill="#574FE4"/>
			</svg>
			<div>
				<h1 className="font-bold break-words text-[18px] text-[#6D6D6D]">{data.title}</h1>
				<div className="flex break-words flex-wrap items-center flex-row gap-x-2">
					<p className="flex break-words flex-row gap-1 font-medium text-[12px] text-[#B5B5B5]">{data.date}</p>
					<p className="flex break-words flex-row gap-1 font-medium text-[14px] text-[#858585]">{data.prof}</p>
				</div>
				<p className="text-[#858585] break-words text-[12px]">{data.labels}</p>	
			</div>
		</div>
	)
}