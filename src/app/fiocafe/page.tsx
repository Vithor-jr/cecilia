'use client'

import Header from "@/components/Projects_Components/Header"
import Section from "@/components/Projects_Components/Section"
import Image from "next/image"
import {motion} from 'framer-motion'

import bottons from '../../assets/magnnuz/bottons.png'
import mag_1 from "../../assets/magnnuz/mag_1.png"
import mag_2 from '../../assets/magnnuz/mag_2.png'

import { inter } from "../fonts"
import main from "../../assets/fiocafe/main.svg"

import cofee from '../../assets/fiocafe/cofee.png'
import copos from '../../assets/fiocafe/copos.png'
import paleta from '../../assets/fiocafe/paleta.png'

import caneca from '../../assets/VEEG/caneca.png'

import croassant from '../../assets/fiocafe/croassant.png'
import embalagem from '../../assets/fiocafe/embalagem.png'
import tshirt from '../../assets/fiocafe/shirt.png'
import papeis from '../../assets/fiocafe/papeis.png'

export default function FioCafePage(){
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className="flex border-0 bg bg-[#F0F0F0] flex-col items-center justify-center  pt-20">
			<div className="w-[90vw] max-w-[1000px] pb-10  gap-4">
				<Header
					title="Fio café"
					type="Indentidade Visual"
					description="Uma cafeteria de cafés especiais com atmosfera tranquila e instagramável.	"
				/>

				<div className="flex mt-10 flex-col  mb-5  md:flex-row flex-wrap gap-5">
					<Section
						title="Contexto"
						Icon={() => (
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path fillRule="evenodd" clipRule="evenodd" d="M4.20543 5.73488C6.03836 3.45739 8.84899 2 12 2C12.4867 2 12.9651 2.03476 13.4331 2.10192L14.2835 3.80256L11.0288 7.0572L7.5288 7.5572L5.81345 9.27255L4.20543 5.73488ZM2.9348 7.77272C2.33501 9.05675 2 10.4892 2 12C2 16.926 5.56177 21.0201 10.2504 21.8475L10.7985 20.9593L7.75293 16.7293L9.83213 14.0341L8.84357 13.5399L5.25369 14.1381L4.55155 11.3296L2.9348 7.77272ZM6.60745 11.3069L6.74616 11.8619L9.15629 11.4601L11.1635 12.4637L14.7765 11.9619L21.2725 15.7513C21.7417 14.5929 22 13.3267 22 12C22 7.91639 19.5523 4.40448 16.044 2.85141L16.7169 4.19747L11.9716 8.94281L8.47161 9.4428L6.60745 11.3069ZM20.3385 17.5219C18.6365 20.0869 15.7825 21.8213 12.5145 21.9869L13.2015 20.874L10.2471 16.7707L12.1137 14.3509L14.3664 14.0381L20.3385 17.5219ZM12 0C5.37259 0 0 5.37259 0 12C0 18.6275 5.37259 24 12 24C18.6275 24 24 18.6275 24 12C24 5.37259 18.6275 0 12 0Z" fill="#574FE4"/>
							</svg>
						)}
						number={1}
						description="A Fio de Café nasceu do desejo de criar um espaço de pausa em meio ao ritmo acelerado da cidade. Um lugar onde o café especial se une à hospitalidade, trazendo um momento de calma e inspiração para o dia a dia."
					/>
					
					<Section
						title="Pesquisa"
						Icon={() => (
							<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
								<path d="M17.1118 17.1287L22.75 22.75M19.5 11.375C19.5 15.8623 15.8623 19.5 11.375 19.5C6.88768 19.5 3.25 15.8623 3.25 11.375C3.25 6.88768 6.88768 3.25 11.375 3.25C15.8623 3.25 19.5 6.88768 19.5 11.375Z" stroke="#574FE4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						)}
						number={2}
						description="A identidade da Fio de Café foi construída em torno de três pilares: paixão, pausa e artesanal. Cada elemento visual, da paleta de cores naturais às tipografias elegantes, foi pensado para transmitir acolhimento e sofisticação, conectando o público ao ritual do café de forma autêntica."
					/>
				</div>

					<Section
						title="Conceito e estratégia"
						Icon={() => (
							<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
								<g clipPath="url(#clip0_3891_3590)">
									<path d="M18.6878 6.70817C20.011 6.70817 21.0837 5.63552 21.0837 4.31234C21.0837 2.98915 20.011 1.9165 18.6878 1.9165C17.3646 1.9165 16.292 2.98915 16.292 4.31234C16.292 5.63552 17.3646 6.70817 18.6878 6.70817Z" fill="#E7E6F4" stroke="#574FE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M4.31283 21.0832C5.63601 21.0832 6.70866 20.0105 6.70866 18.6873C6.70866 17.3642 5.63601 16.2915 4.31283 16.2915C2.98964 16.2915 1.91699 17.3642 1.91699 18.6873C1.91699 20.0105 2.98964 21.0832 4.31283 21.0832Z" fill="#E7E6F4" stroke="#574FE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M6.70866 1.9165H1.91699V6.70817H6.70866V1.9165Z" fill="#E7E6F4" stroke="#574FE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M21.0837 16.2915H16.292V21.0832H21.0837V16.2915Z" fill="#E7E6F4" stroke="#574FE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M16.2913 4.3125H6.70801" stroke="#574FE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M16.2913 18.6875H6.70801" stroke="#574FE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M4.3125 16.2918V6.7085" stroke="#574FE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M18.6875 16.2918V6.7085" stroke="#574FE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</g>
								<defs>
									<clipPath id="clip0_3891_3590">
								<rect width="23" height="23" fill="white"/>
									</clipPath>
								</defs>
							</svg>
						)}
						number={3}
						description="O símbolo nasce da letra V, estilizada como estrada — representando direção, progresso e movimento contínuo. Elementos de apoio exploram curvas, diagonais e padrões modulares, traduzindo dinamismo, organização e flexibilidade. A paleta de cores combina azul (confiança e estabilidade), apoiado por tons neutros.."
					/>
			</div>

			<motion.div 
				initial={{ opacity:0.5}}
				animate={{ opacity:1}}
				transition={{duration:1, delay:0.2}}
				className="w-[100%] z-10 relative">
				<Image
					className="w-[100%]"
					src={main}
					alt="main"
				/>
			</motion.div>

			<div className="flex relative bg-[#F4F4F4] w-full  flex-col sm:flex-row">
				<motion.div 
					initial={{ opacity:0.5}}
					animate={{ opacity:1}}
					transition={{duration:1, delay:0.2}}
					className="z-2">
					<Image
						className="sm:w-[calc(100vw*(778/1440))] w-full sm:h-[calc(100vw*(587/1440))] z-2"
						src={copos}
						alt="copos"
					/>
					<Image
						className="sm:w-[calc(100vw*(780/1440))] w-full sm:h-[calc(100vw*(246/1440))] z-2"
						src={paleta}
						alt="paleta"
					/>
				</motion.div>

				<motion.div 
					initial={{ opacity:0.5}}
					animate={{ opacity:1}}
					transition={{duration:1, delay:0.6}}
					className=" z-2">
					<Image
						className="sm:absolute h-full z-1 sm:w-[calc(100vw*(662/1440))] sm:h-[calc(100vw*(832/1440))] right-0"
						src={cofee}
						alt="coofee"
					/>
				</motion.div>
			</div>

				<div className="flex relative bg-[#F4F4F4] w-full  flex-col sm:flex-row">
				<motion.div 
					initial={{ opacity:0.5}}
					animate={{ opacity:1}}
					transition={{duration:1, delay:0.2}}
					className="z-2">
					<Image
						className="sm:w-[calc(100vw*(816/1440))] w-full sm:h-[calc(100vw*(544/1440))] z-2"
						src={croassant}
						alt="croassant"
					/>
					<Image
						className="sm:w-[calc(100vw*(816/1440))] w-full sm:h-[calc(100vw*(612/1440))] z-2"
						src={embalagem}
						alt="embalagem"
					/>
				</motion.div>

				<motion.div 
					initial={{ opacity:0.5}}
					animate={{ opacity:1}}
					transition={{duration:1, delay:0.6}}
					className="relative z-2">
					<Image
						className=" h-full z-1 -mt-1 sm:w-[calc(100vw*(629/1440))] sm:h-[calc(100vw*(1160/1440))] right-0"
						src={tshirt}
						alt="shirt"
					/>
					<Image
						src={papeis}
						className="absolute sm:top-[1%] -top-10 right-[10%] w-[calc(100vw*(384/1440))] z-10 sm:-left-[30%] "
						alt="papeis"
					/>
				</motion.div>
			</div>

			<div className="w-[90vw] max-w-[1000px]  mb-5 flex flex-col items-center pb-10  gap-4">
				<div className="flex mt-10 flex-col   md:flex-row w-full flex-wrap gap-5">
					<Section
						title="Resultado"
						Icon={() => (
							<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
								<path d="M3.83301 12.0857L8.55096 16.7709L19.1663 6.22925" stroke="#574FE4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						)}
						number={5}
						description="A nova identidade consolidou a Fio de Café como um espaço de pausa e reconexão. A combinação entre estética minimalista e atmosfera acolhedora fortaleceu a percepção de qualidade e exclusividade da marca."
					/>
					
					<Section
						title="Impacto"
						Icon={() => (
							<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
								<path fillRule="evenodd" clipRule="evenodd" d="M4.03425 9.15617L7.89586 7.79323C7.09858 8.86667 6.41363 10.0195 5.85201 11.2337L4.03425 9.15617ZM1.35107 9.37996L4.92873 13.4687L4.41052 14.7642C4.24958 15.1666 4.3439 15.6261 4.65033 15.9326L4.99009 16.2723C3.14507 18.3528 2.12596 20.5287 1.13863 23.4907C1.00887 23.8799 1.11018 24.3092 1.40033 24.5993C1.69049 24.8894 2.11967 24.9908 2.50895 24.861C5.47094 23.8737 7.64684 22.8546 9.72726 21.0095L10.067 21.3493C10.3734 21.6558 10.833 21.75 11.2354 21.5891L12.5309 21.0709L16.6197 24.6486C16.8901 24.8852 17.2601 24.9723 17.6077 24.8812C17.9553 24.7901 18.235 24.5327 18.3546 24.1938L21.5896 15.0281C23.7222 12.5046 24.9164 9.28928 24.9164 5.93743V2.16659C24.9164 1.56828 24.4314 1.08325 23.833 1.08325H20.0622C16.7103 1.08325 13.495 2.27736 10.9715 4.41006L1.80581 7.64501C1.46701 7.76459 1.20953 8.04437 1.11844 8.39192C1.02734 8.73947 1.11449 9.10957 1.35107 9.37996ZM3.99208 22.0075C4.67187 20.3657 5.43479 19.0589 6.52523 17.8075L8.19212 19.4744C6.94076 20.5648 5.63394 21.3277 3.99208 22.0075ZM11.0939 19.3121L10.5157 18.7339L7.26574 15.4839L6.68752 14.9057L7.45658 12.983C8.16224 11.2189 9.15318 9.58273 10.3897 8.1401L11.0144 7.41132C13.2783 4.77004 16.5834 3.24992 20.0622 3.24992H22.7497V5.93743C22.7497 9.41621 21.2296 12.7213 18.5883 14.9852L17.8595 15.6099C16.4169 16.8464 14.7807 17.8373 13.0166 18.543L11.0939 19.3121ZM16.8435 21.9654L14.766 20.1476C15.9802 19.586 17.1329 18.9011 18.2064 18.1037L16.8435 21.9654ZM16.2497 8.66659C16.2497 8.06828 16.7347 7.58325 17.333 7.58325C17.9314 7.58325 18.4164 8.06828 18.4164 8.66659C18.4164 9.26489 17.9314 9.74992 17.333 9.74992C16.7347 9.74992 16.2497 9.26489 16.2497 8.66659ZM17.333 5.41659C15.5381 5.41659 14.083 6.87166 14.083 8.66659C14.083 10.4615 15.5381 11.9166 17.333 11.9166C19.128 11.9166 20.583 10.4615 20.583 8.66659C20.583 6.87166 19.128 5.41659 17.333 5.41659Z" fill="#574FE4"/>
							</svg>
						)}
						number={6}
						description="Mais do que um lugar para apreciar café, a Fio de Café passou a ser vista como um ponto de encontro premium, que valoriza os pequenos rituais da rotina. A identidade visual reforçou sua posição como uma marca artesanal, acolhedora e inspiradora."
					/>
				</div>

					
					
				<a onClick={()=>scrollToTop()} className={`${inter.className} bg-[#574FE4] text-[white] font-bold cursor-pointer px-12 rounded-[6px] py-2 md:text-[20px] mt-5 text-[16px]`}>
					Voltar ao topo
				</a>
			</div>
		</div>
	)
}