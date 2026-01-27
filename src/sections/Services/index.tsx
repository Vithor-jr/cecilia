'use client'

import { inter } from "@/app/fonts"
import { LettersAnimation } from "@/function/letters"
import { motion } from "framer-motion"
import ceci from '../../../public/cecilia/ceci_services.svg'
import ceci_2 from '../../../public/cecilia/ceci_services_2.svg'
import cecilia from '../../../public/cecilia/ceci_home.svg'
import Image from "next/image"

export default function ServicesSection() {
	return (
		<section id="servicos"  className="w-full flex items-center flex-col py-20 px-[30px]">
			<div className="flex gap-y-10 flex-col max-w-[1440px]	xl:flex-row justify-between flex-wrap">
				<div className="flex gap-y-10 flex-col justify-between flex-1 items-start">
				<div className="flex flex-col">
					<div className="flex flex-row gap-x-3 flex-wrap">
						<h1 className={`${inter.className} leading-[58px] font-bold text-[clamp(35px,10vw,45px)]`}>Vamos construir</h1>
						<div className="flex flex-row gap-3 flex-wrap">
							<h1 className={`${inter.className} leading-[58px] font-bold text-[clamp(35px,10vw,45px)]`}>sua</h1>
							<h1 className={`${inter.className} leading-[58px] flex flex-row gap-2 font-bold text-[clamp(35px,10vw,45px)]`}>
								presença 
								<Image
									src={ceci}
									alt="ceci"
									className="w-[clamp(35px,10vw,45px)]"
								/>
							</h1>
						</div>
					</div>
						
					<div className="flex flex-row gap-x-3 flex-wrap">
						<h1 className={`${inter.className} leading-[58px] font-bold text-[clamp(35px,10vw,45px)]`}>digital e física</h1>
						<h1 className={`${inter.className} bg-[#574FE4] w-[165px] h-[clamp(40px,15vw,58px)] rounded-2xl text-center text-white leading-[clamp(40px,15vw,58px)] font-bold text-[clamp(35px,10vw,45px)]`}>juntos</h1>
					</div>
				</div>
				<a href="#contato" className={`${inter.className} text-[20px] font-bold text-white bg-[#574FE4] px-10 py-3 rounded-full cursor-pointer`}>Fale comigo</a>
				</div>

				<div className={`${inter.className} flex-wrap gap-3 flex flex-row`}>
					<div className="text-white flex overflow-hidden relative w-full h-[480px] rounded-[30px] sm:w-[280px] bg-[#101010]">
						<div className="w-full absolute pl-5 pr-6 mt-[35px] items-center z-10 flex justify-between">
							<p className={`${inter.className} font-medium text-[16px]`}>Landing Page</p>

							<div className="flex items-center w-[50px] h-[50px] bg-white rounded-full justify-center">
								<div className="absolute w-[17px] h-[3px] rounded-3xl bg-[#574FE4]"/>
								<div className="absolute w-[3px] h-[17px] rounded-3xl bg-[#574FE4]"/>
							</div>
						</div>

						<svg className="absolute right-[-75px] -top-[41px]" xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 26 26" fill="none">
							<path fillRule="evenodd" clipRule="evenodd" d="M12.9841 0C14.2594 10.6979 15.2834 11.7232 25.9683 12.9807C15.2834 14.2574 14.2594 15.2827 12.9841 26C11.7282 15.2827 10.6849 14.2574 0 12.9807C10.6849 11.7232 11.7282 10.6979 12.9841 0Z" fill="#574FE4"/>
						</svg>
						

						<div className="absolute bottom-20 px-5">
							<div>
								<h1 className="font-bold text-[16px] flex items-center">
									Transforme visitantes em
								</h1>

								<div className="flex flex-row items-center gap-1">
									<p className="font-bold text-[16px] flex items-center">clientes</p>
									<div className="bg-[#574FE4] px-4 rounded-2xl py-[2px]">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="8" viewBox="0 0 24 8" fill="none">
											<path d="M0.5 3.18213C0.223858 3.18213 0 3.40599 0 3.68213C0 3.95827 0.223858 4.18213 0.5 4.18213L0.5 3.68213L0.5 3.18213ZM23.8536 4.03568C24.0488 3.84042 24.0488 3.52384 23.8536 3.32858L20.6716 0.146595C20.4763 -0.0486672 20.1597 -0.0486672 19.9645 0.146595C19.7692 0.341857 19.7692 0.65844 19.9645 0.853702L22.7929 3.68213L19.9645 6.51056C19.7692 6.70582 19.7692 7.0224 19.9645 7.21766C20.1597 7.41293 20.4763 7.41293 20.6716 7.21766L23.8536 4.03568ZM0.5 3.68213L0.5 4.18213L23.5 4.18213V3.68213V3.18213L0.5 3.18213L0.5 3.68213Z" fill="white"/>
										</svg>
									</div>
								</div>
							</div>

							<p className="font-normal text-[12px] mt-2">Páginas com design estratégico e foco total em conversão e resultados.</p>
						</div>
					</div>

					<div className="relative w-full h-[480px] rounded-[30px] sm:w-[280px] bg-[#DDDDDD]">
						<div className="w-full absolute pl-5 pr-6 mt-[35px] items-center z-10 flex justify-between">
							<p className={`${inter.className} font-medium text-[16px]`}>Interface de Usuário</p>

							<div className="flex items-center w-[50px] h-[50px] bg-white rounded-full justify-center">
								<div className="absolute w-[17px] h-[3px] rounded-3xl bg-[#574FE4]"/>
								<div className="absolute w-[3px] h-[17px] rounded-3xl bg-[#574FE4]"/>
							</div>
						</div>
						
						<div className="absolute bottom-5 gap-1 flex flex-col px-5">
							<p className={`${inter.className} text-[14px]`}>Interfaces intuitivas e funcionais que elevam a experiência e fortalecem sua presença digital.</p>
					
							<div className="flex flex-row">
								<div className="w-12 h-12 relative rounded-full overflow-hidden">
									<Image
										className="w-full absolute -bottom-4"
										src={cecilia}
										alt="ceci"
									/>
								</div>

								<div className="w-12 h-12 relative rounded-full bg-[#574FE4] -ml-5 overflow-hidden"/>
							</div>
						</div>
					</div>

					<div className="text-white relative w-full h-[480px] rounded-[30px] sm:w-[280px] bg-[#574FE4]">
						<div className="w-full absolute pl-5 pr-6 mt-[35px] items-center z-10 flex justify-between">
							<p className={`${inter.className} font-medium text-[16px]`}>Identidade visual</p>

							<div className="flex items-center w-[50px] h-[50px] bg-white rounded-full justify-center">
								<div className="absolute w-[17px] h-[3px] rounded-3xl bg-[#574FE4]"/>
								<div className="absolute w-[3px] h-[17px] rounded-3xl bg-[#574FE4]"/>
							</div>
						</div>

						<div className="flex w-full mt-30 items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="138" height="157" viewBox="0 0 138 157" fill="none">
								<path d="M72.0414 157C60.6636 157 50.526 154.948 41.6287 150.953C32.8392 146.958 25.3439 141.343 19.1966 134.109C12.9955 126.928 8.25024 118.56 4.96093 109.058C1.6177 99.4477 0 89.2978 0 78.608C0 67.8102 1.6177 57.6602 4.96093 48.1582C8.25024 38.5481 12.9955 30.1259 19.1966 22.8913C25.3439 15.7108 32.8392 10.0959 41.6287 6.04677C50.526 2.05159 60.6636 0 72.0414 0C80.7769 0 88.7575 0.755853 95.9832 2.15956C103.317 3.61727 109.464 5.34491 114.533 7.3425C119.548 9.23212 123.43 10.9598 126.18 12.5254C128.876 13.9832 130.278 14.685 130.278 14.685V39.5199H129.416C125.533 31.7455 120.41 25.1589 114.101 19.652C107.9 14.0371 101.16 9.826 93.8263 6.91059C86.4928 3.88721 79.0514 2.37552 71.61 2.37552C63.0901 2.37552 55.7565 4.04918 49.6093 7.3425C43.4081 10.6898 38.2855 15.0629 34.2951 20.5158C30.2509 26.0227 27.0155 32.0695 24.589 38.6561C22.1085 45.1348 20.3829 51.8294 19.4123 58.74C18.3878 65.6506 17.9564 72.0753 18.1182 77.9601C18.226 87.7861 19.682 96.9642 22.432 105.602C25.29 114.241 29.3342 121.961 34.5108 128.71C39.7953 135.35 46.2122 140.533 53.7075 144.259C61.3106 148.038 69.9383 149.873 79.5906 149.873C83.7427 149.873 88.434 149.334 93.6106 148.146C98.7872 146.85 103.964 144.852 109.14 142.099C114.425 139.238 119.332 135.512 123.808 130.869C128.229 126.28 131.68 120.611 134.161 113.809L137.181 115.105C131.68 127.522 123.376 137.564 112.16 145.338C101.052 153.113 87.6791 157 72.0414 157Z" fill="white" fillOpacity="0.3"/>
								<mask id="mask0_4535_1513" maskUnits="userSpaceOnUse" x="58" y="59" width="40" height="40">
									<path d="M58.7695 59.8618H97.5641V98.7038H58.7695V59.8618Z" fill="white"/>
								</mask>
								<g mask="url(#mask0_4535_1513)">
								<path fillRule="evenodd" clipRule="evenodd" d="M78.1668 59.8618C80.0719 75.8437 81.6018 77.3754 97.5641 79.2539C81.6018 81.1613 80.0719 82.693 78.1668 98.7038C76.2906 82.693 74.7319 81.1613 58.7695 79.2539C74.7319 77.3754 76.2906 75.8437 78.1668 59.8618Z" fill="white" fillOpacity="0.3"/>
								</g>
							</svg>
						</div>

						<div className="bottom-5 absolute px-5">
							<p className={`${inter.className} font-bold text-[14px]`}>Um branding que fala com você</p>
							<p className={`${inter.className} font-light text-[12px]`}>Construímos uma marca única que comunica sua essência e posiciona seu negócio com autenticidade</p>
						
							<div className="w-12 h-12 mt-2 bg-[#101010] items-center justify-center rounded-full flex">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
									<path d="M1 6.36377C0.447715 6.36377 0 6.81148 0 7.36377C0 7.91605 0.447715 8.36377 1 8.36377L1 7.36377L1 6.36377ZM17.7071 8.07088C18.0976 7.68035 18.0976 7.04719 17.7071 6.65666L11.3431 0.292702C10.9526 -0.0978227 10.3195 -0.0978227 9.92893 0.292702C9.53841 0.683226 9.53841 1.31639 9.92893 1.70692L15.5858 7.36377L9.92893 13.0206C9.53841 13.4111 9.53841 14.0443 9.92893 14.4348C10.3195 14.8254 10.9526 14.8254 11.3431 14.4348L17.7071 8.07088ZM1 7.36377L1 8.36377L9 8.36377V7.36377V6.36377L1 6.36377L1 7.36377ZM9 7.36377V8.36377L17 8.36377V7.36377V6.36377L9 6.36377V7.36377Z" fill="#574FE4"/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={`${inter.className} max-w-[1440px] gap-y-8 flex-wrap justify-between w-full flex flex-row mt-20 md:px-15 px-10 py-18 bg-[#101010] rounded-[30px] text-white`}>
				<div className="flex flex-col justify-between min-h-[471px] w-full md:w-[48%] lg:w-[37%] lg:max-w-[530px]">
					<div>
						<div className="flex flex-row flex-wrap items-center gap-2">
							<p className={`font-bold text-[clamp(30px,8vw,42px)]`}>Diferenciais</p>
							<div className="w-[clamp(40px,10vw,53px)] h-[clamp(40px,10vw,53px)] 13 bg-[#574FE4] flex justify-center items-center rounded-full">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
									<path d="M1 6.36401C0.447715 6.36401 0 6.81173 0 7.36401C0 7.9163 0.447715 8.36401 1 8.36401L1 7.36401L1 6.36401ZM17.7071 8.07112C18.0976 7.6806 18.0976 7.04743 17.7071 6.65691L11.3431 0.292946C10.9526 -0.0975785 10.3195 -0.0975785 9.92893 0.292946C9.53841 0.68347 9.53841 1.31664 9.92893 1.70716L15.5858 7.36401L9.92893 13.0209C9.53841 13.4114 9.53841 14.0446 9.92893 14.4351C10.3195 14.8256 10.9526 14.8256 11.3431 14.4351L17.7071 8.07112ZM1 7.36401L1 8.36401L17 8.36401V7.36401V6.36401L1 6.36401L1 7.36401Z" fill="white"/>
								</svg>
							</div>
						</div>
						
						<p className="font-light text-[clamp(18px,3vw,20px)]">O diferencial está em como cada decisão é guiada por método, intenção e clareza de marca.</p>
					</div>

					<div className="flex items-end relative bg-[#DDDDDD] gap-5 justify-between mt-5	min-h-[287px] px-6 pb-5 pt-8 rounded-[30px] flex-col text-black">
						<Image
							src={ceci_2}
							alt="ceci"
						/>

						<div>
							<div className="flex gap-1 w-full flex-row items-center">
								<h1 className="text-black font-bold text-[clamp(16px,3vw,20px)]"> 
									<span className="bg-[#101010] rounded-full px-[10px] py-[3px] mr-2 text-[16px] text-[#574FE4] ">1</span> 
									Estratégia antes da estética
								</h1>
							</div>

							<p className={`${inter.className} text-[14px]`}>Design bonito é consequência: primeiro vem o entendimento do negócio e o posicionamento da marca.</p>
							</div>
					</div>
				</div>
				
				<div className={`${inter.className} px-5 pb-13 relative w-full md:w-[48%] lg:w-[30%] min-h-[471px] flex flex-col justify-end lg:max-w-[390px] overflow-hidden rounded-[30px] bg-[#574FE4] `}>
					<svg  xmlns="http://www.w3.org/2000/svg" className="absolute -top-15 -right-15" width="285" height="285" viewBox="0 0 26 26" fill="none">
						<path fillRule="evenodd" clipRule="evenodd" d="M12.9841 0C14.2594 10.6979 15.2834 11.7232 25.9683 12.9807C15.2834 14.2574 14.2594 15.2827 12.9841 26C11.7282 15.2827 10.6849 14.2574 0 12.9807C10.6849 11.7232 11.7282 10.6979 12.9841 0Z" fill="#101010"/>
			  	</svg>

					<div className="mt-20 mb-1 flex gap-1 w-full flex-row items-center">
						<h1 className="text-[#DDDDDD] font-bold text-[clamp(16px,3vw,18px)]"> 
								<span className="bg-[#DDDDDD] rounded-full px-[9px] py-[3px] mr-2 text-[16px] text-[#574FE4] ">2</span> 
								Design orientado a resultado
							</h1>
					</div>
					<p className={`${inter.className} text-[14px]`}>Cada projeto é pensado para gerar impacto tangível, unindo criatividade e estratégia.</p>
				</div>

				<div className="flex lg:flex-col sm:flex-row flex-col justify-between lg:max-w-[390px] w-full lg:w-[31%] gap-2">
					<div className="flex flex-col justify-end p-5 pb-8 rounded-[30px] w-full relative bg-[#9FDE8D] min-h-[224px]">
						<svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-0" width="136" height="111" viewBox="0 0 136 111" fill="none">
							<path opacity="0.4" d="M64.8404 -22.4838C65.6033 -25.5043 69.8948 -25.5043 70.6577 -22.4839L78.8438 9.92728C79.3357 11.8746 81.565 12.798 83.2897 11.7688L111.996 -5.36081C114.672 -6.95716 117.706 -3.92258 116.11 -1.24735L98.9802 27.4593C97.951 29.1841 98.8744 31.4133 100.822 31.9052L133.233 40.0913C136.253 40.8542 136.253 45.1458 133.233 45.9087L100.822 54.0948C98.8744 54.5867 97.951 56.8159 98.9802 58.5407L116.11 87.2473C117.706 89.9226 114.672 92.9572 111.996 91.3608L83.2898 74.2312C81.565 73.202 79.3357 74.1254 78.8438 76.0727L70.6577 108.484C69.8948 111.504 65.6033 111.504 64.8404 108.484L56.6542 76.0727C56.1624 74.1254 53.9331 73.202 52.2083 74.2312L23.5017 91.3608C20.8264 92.9572 17.7919 89.9226 19.3882 87.2473L36.5179 58.5407C37.5471 56.8159 36.6237 54.5867 34.6763 54.0948L2.26518 45.9087C-0.755293 45.1458 -0.755299 40.8542 2.26517 40.0913L34.6763 31.9052C36.6237 31.4133 37.5471 29.1841 36.5179 27.4593L19.3882 -1.24734C17.7919 -3.92258 20.8264 -6.95716 23.5017 -5.36081L52.2083 11.7688C53.9331 12.798 56.1624 11.8746 56.6542 9.92728L64.8404 -22.4838Z" fill="#49830A"/>
						</svg>


						<div className=" flex gap-1 w-full flex-row items-center">
							<h1 className="text-[#101010] font-bold text-[clamp(16px,3vw,18px)]"> 
									<span className="bg-[#101010] rounded-full px-[8px] py-[3px] mr-2 text-[16px] text-[#574FE4] ">3</span> 
									Metodologia exclusiva
								</h1>
						</div>

						<p className={`${inter.className} text-[#101010] text-[13px]`}>Processo próprio que garante decisões guiadas por método, intenção e resultado.</p>
					</div>

					<div className="flex flex-col justify-end p-5 pb-8 rounded-[30px] w-full  relative bg-[#92D1E0] min-h-[224px]">
						<div className="bg-[#1D8198] w-11 h-11 absolute right-5 top-5 flex justify-center items-center rounded-full">
							<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
								<path d="M0.292893 9.29289C-0.0976311 9.68342 -0.0976311 10.3166 0.292893 10.7071C0.683418 11.0976 1.31658 11.0976 1.70711 10.7071L1 10L0.292893 9.29289ZM11 1C11 0.447715 10.5523 -3.74211e-07 10 4.72575e-08L1 -1.63477e-07C0.447715 -1.63477e-07 2.8711e-07 0.447715 2.8711e-07 1C2.8711e-07 1.55228 0.447715 2 1 2L9 2L9 10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10L11 1ZM1 10L1.70711 10.7071L10.7071 1.70711L10 1L9.29289 0.292893L0.292893 9.29289L1 10Z" fill="white"/>
							</svg>
						</div>
						
						<div className="flex gap-1 w-full flex-row items-center">
							<h1 className="text-[#101010] font-bold text-[clamp(16px,3vw,18px)]"> 
									<span className="bg-[#101010] rounded-full px-[8px] py-[3px] mr-2 text-[16px] text-[#574FE4] ">4</span> 
									Posicionamento digital 360°
							</h1>
						</div>
						<p className={`${inter.className} text-[#101010] text-[13px]`}>Entregas completas, do conceito visual ao alinhamento estratégico da marca.</p>
					</div>
				</div>
			</div>
		</section>
	)
}
