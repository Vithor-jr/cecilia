'use client'
import "../nexus/styles.css"

import Header from "@/components/Projects_Components/Header"
import main from '../../../assets/studus/main.png'
import {motion} from 'framer-motion'
import Image from "next/image"
import { inter } from "@/app/fonts"
import apps from '../../../assets/studus/apps.png'
import requisitos from '../../../assets/studus/requisitos.png'
import desenvolver from '../../../assets/studus/desenvolver.png'

import Login from "../../../assets/studus/Login.png"
import Home from "../../../assets/studus/home.png"
import Metodos from "../../../assets/studus/metodos.png"
import Dicas from "../../../assets/studus/dicas.png"
import Chat from "../../../assets/studus/chat.png"

import Atividades from "../../../assets/studus/atividades.png"
import Meditacoes from "../../../assets/studus/Meditacoes.png"
import Emocional from "../../../assets/studus/emocional.png"
import Temorizador from "../../../assets/studus/Temporizador.png"
import Graficos from "../../../assets/studus/graficos.png"

 export default function StudusUIPage(){
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	
	return(
		<div className="flex border-0 bg bg-[#F0F0F0] flex-col items-center justify-center  pt-20">
			<div className="w-[90vw] max-w-[1000px] pb-10  gap-4">
				<Header
					title="Studus"
					type="UX/UI"
					description="Software para Apoio na Gestão Acadêmica e Bem-Estar Emocional de Estudantes do Ensino Médio"
				/>


				<motion.div 
					initial={{ opacity:0.5}}
					animate={{ opacity:1}}
					transition={{duration:1, delay:0.2}}
					className="w-[100%] mt-3 z-10 relative">
					<Image
						className="w-[100%]"
						src={main}
						alt="main"
					/>
				</motion.div>

				<div className="flex sm:flex-row flex-col mt-10 gap-x-[6%] gap-y-5">
					<div className="flex flex-col w-full sm:w-[47%]">
						<div className="flex gap-2 flex-row items-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
								<path fillRule="evenodd" clipRule="evenodd" d="M9.2311 10.9517C11.2932 8.38956 14.4551 6.75 18 6.75C18.5475 6.75 19.0857 6.7891 19.6122 6.86466L20.5689 8.77788L16.9074 12.4394L12.9699 13.0019L11.0401 14.9316L9.2311 10.9517ZM7.80165 13.2443C7.12689 14.6888 6.75 16.3004 6.75 18C6.75 23.5417 10.757 28.1476 16.0317 29.0784L16.6483 28.0793L13.222 23.3205L15.5611 20.2884L14.449 19.7323L10.4104 20.4054L9.62049 17.2458L7.80165 13.2443ZM11.9334 17.2203L12.0894 17.8446L14.8008 17.3927L17.0589 18.5217L21.1236 17.9571L28.4316 22.2203C28.9594 20.9171 29.25 19.4925 29.25 18C29.25 13.4059 26.4963 9.45504 22.5495 7.70784L23.3065 9.22215L17.9681 14.5607L14.0306 15.1231L11.9334 17.2203ZM27.3809 24.2121C25.4661 27.0978 22.2554 29.049 18.5788 29.2353L19.3517 27.9832L16.028 23.367L18.128 20.6448L20.6622 20.2929L27.3809 24.2121ZM18 4.5C10.5442 4.5 4.5 10.5442 4.5 18C4.5 25.4559 10.5442 31.5 18 31.5C25.4559 31.5 31.5 25.4559 31.5 18C31.5 10.5442 25.4559 4.5 18 4.5Z" fill="black"/>
							</svg>
							<p className={`${inter.className} font-bold text-[clamp(25px,2vw,32px)]`}>Visão geral</p>
						</div>

						<p className={`${inter.className} font-medium text-[clamp(15px,1.3vw,20px)] text-[#6E6E6E]`}>App para ajudar estudantes do ensino médio a organizar estudos, gerenciar o tempo e cuidar do bem-estar emocional.</p>
					</div>

					<div className="flex flex-col w-full sm:w-[47%]">
						<div className="flex gap-2 flex-row items-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
								<g clipPath="url(#clip0_4535_3183)">
									<path d="M15.4999 25.8335C18.2405 25.8335 20.8688 24.7448 22.8067 22.8069C24.7446 20.8691 25.8333 18.2407 25.8333 15.5002C25.8333 12.7596 24.7446 10.1313 22.8067 8.19339C20.8688 6.25552 18.2405 5.16683 15.4999 5.16683C12.7593 5.16683 10.131 6.25552 8.19315 8.19339C6.25527 10.1313 5.16659 12.7596 5.16659 15.5002C5.16659 18.2407 6.25527 20.8691 8.19315 22.8069C10.131 24.7448 12.7593 25.8335 15.4999 25.8335ZM15.4999 28.4168C8.36604 28.4168 2.58325 22.634 2.58325 15.5002C2.58325 8.36629 8.36604 2.5835 15.4999 2.5835C22.6338 2.5835 28.4166 8.36629 28.4166 15.5002C28.4166 22.634 22.6338 28.4168 15.4999 28.4168ZM15.4999 20.6668C16.8702 20.6668 18.1844 20.1225 19.1533 19.1535C20.1222 18.1846 20.6666 16.8704 20.6666 15.5002C20.6666 14.1299 20.1222 12.8157 19.1533 11.8468C18.1844 10.8778 16.8702 10.3335 15.4999 10.3335C14.1296 10.3335 12.8155 10.8778 11.8465 11.8468C10.8776 12.8157 10.3333 14.1299 10.3333 15.5002C10.3333 16.8704 10.8776 18.1846 11.8465 19.1535C12.8155 20.1225 14.1296 20.6668 15.4999 20.6668ZM15.4999 23.2502C13.4445 23.2502 11.4732 22.4336 10.0198 20.9802C8.56643 19.5268 7.74992 17.5556 7.74992 15.5002C7.74992 13.4447 8.56643 11.4735 10.0198 10.0201C11.4732 8.56668 13.4445 7.75016 15.4999 7.75016C17.5553 7.75016 19.5266 8.56668 20.98 10.0201C22.4334 11.4735 23.2499 13.4447 23.2499 15.5002C23.2499 17.5556 22.4334 19.5268 20.98 20.9802C19.5266 22.4336 17.5553 23.2502 15.4999 23.2502ZM15.4999 18.0835C14.8148 18.0835 14.1577 17.8113 13.6732 17.3269C13.1888 16.8424 12.9166 16.1853 12.9166 15.5002C12.9166 14.815 13.1888 14.1579 13.6732 13.6735C14.1577 13.189 14.8148 12.9168 15.4999 12.9168C16.1851 12.9168 16.8421 13.189 17.3266 13.6735C17.8111 14.1579 18.0833 14.815 18.0833 15.5002C18.0833 16.1853 17.8111 16.8424 17.3266 17.3269C16.8421 17.8113 16.1851 18.0835 15.4999 18.0835Z" fill="black"/>
								</g>
								<defs>
									<clipPath id="clip0_4535_3183">
										<rect width="31" height="31" fill="white"/>
									</clipPath>
								</defs>
							</svg>
							<p className={`${inter.className} font-bold text-[clamp(25px,2vw,32px)]`}>Abordagem</p>
						</div>

						<p className={`${inter.className} font-medium text-[clamp(15px,1.3vw,20px)] text-[#6E6E6E]`}>Design centrado no estudante: experiência simples, motivadora e acolhedora. O objetivo foi unir produtividade e equilíbrio emocional em um só lugar.</p>
					</div>
				</div>

				<div className="flex gap-2 flex-row mt-10 sm:mt-30 items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
						<path d="M21.0607 21.0815L28 28M24 14C24 19.5228 19.5228 24 14 24C8.47715 24 4 19.5228 4 14C4 8.47715 8.47715 4 14 4C19.5228 4 24 8.47715 24 14Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					<p className={`${inter.className} font-bold text-[clamp(25px,2vw,32px)]`}>Descobrir</p>
				</div>

				<p className={`${inter.className} font-medium text-[clamp(15px,1.3vw,20px)] text-[#6E6E6E]`}>Nesta etapa, analisei produtos similares, estudei a jornada do usuário e fiz benchmarking para identificar boas práticas e oportunidades de inovação.</p>

				<motion.div 
					initial={{ opacity:0.5}}
					animate={{ opacity:1}}
					transition={{duration:1, delay:0.2}}
					className="w-[100%] mt-3 z-10 relative">
					<Image
						className="w-[100%]"
						src={apps}
						alt="apps"
					/>
				</motion.div>

				<div className="flex gap-2 flex-row mt-10 sm:mt-20 items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
						<path d="M7.78435 17.8623H0V27.8091H7.78435V17.8623Z" fill="black"/>
						<path d="M18.8923 10.2275H11.1079V27.8089H18.8923V10.2275Z" fill="black"/>
						<path d="M29.9999 2.19092H22.2156V27.8093H29.9999V2.19092Z" fill="black"/>
					</svg>
					<p className={`${inter.className} font-bold text-[clamp(25px,2vw,32px)]`}>Definir</p>
				</div>

				<p className={`${inter.className} font-medium text-[clamp(15px,1.3vw,20px)] text-[#6E6E6E]`}>Com base nas pesquisas, estruturei as principais funcionalidades usando ferramentas como diagrama de afinidades para organizar ideias e priorizar recursos.</p>

				<motion.div 
					initial={{ opacity:0.5}}
					animate={{ opacity:1}}
					transition={{duration:1, delay:0.2}}
					className="w-[100%] mt-3 z-10 relative">
					<Image
						className="w-[100%]"
						src={requisitos}
						alt="requisitos"
					/>
				</motion.div>

				<div className="flex gap-2 flex-row  mt-10 sm:mt-15 items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
						<g clipPath="url(#clip0_4535_3198)">
						<path d="M2.33325 8.75016C2.33325 7.8332 2.52559 6.96116 2.87212 6.17219L5.8454 9.14546C6.75662 10.0567 8.23401 10.0567 9.14523 9.14546C10.0565 8.23425 10.0565 6.75687 9.14523 5.84564L6.17196 2.87237C6.96093 2.52583 7.83297 2.3335 8.74992 2.3335C12.2938 2.3335 15.1666 5.20633 15.1666 8.75016C15.1666 9.66712 14.9742 10.5392 14.6277 11.3281L25.0074 21.7079C25.9187 22.6191 25.9187 24.0965 25.0074 25.0077C24.0963 25.9189 22.6189 25.9189 21.7076 25.0077L11.3279 14.6279C10.5389 14.9744 9.66688 15.1668 8.74992 15.1668C5.20609 15.1668 2.33325 12.294 2.33325 8.75016Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
						</g>
						<defs>
						<clipPath id="clip0_4535_3198">
						<rect width="28" height="28" fill="white"/>
						</clipPath>
						</defs>
					</svg>
					<p className={`${inter.className} font-bold text-[clamp(25px,2vw,32px)]`}>Desenvolver</p>
				</div>

				<p className={`${inter.className} font-medium text-[clamp(15px,1.3vw,20px)] text-[#6E6E6E]`}>Depois de usar as técnicas Card Sorting e Storyboarding, iniciei o desenvolvimento de wireframes de baixa e média fidelidade.</p>

				<motion.div 
					initial={{ opacity:0.5}}
					animate={{ opacity:1}}
					transition={{duration:1, delay:0.2}}
					className="w-[100%] mt-3 z-10 relative">
					<Image
						className="w-[100%]"
						src={desenvolver}
						alt="desenvolver"
					/>
				</motion.div>

				<div className="flex gap-2 flex-row  mt-10 sm:mt-15 items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
						<path d="M5 15.7639L11.1539 21.875L25 8.125" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					<p className={`${inter.className} font-bold text-[clamp(25px,2vw,32px)]`}>Entregar - Alta fidelidade</p>
				</div>

				<p className={`${inter.className} font-medium text-[clamp(15px,1.3vw,20px)] text-[#6E6E6E]`}>Depois de usar as técnicas Card Sorting e Storyboarding, iniciei o desenvolvimento de wireframes de baixa e média fidelidade.</p>

				<motion.div 
					initial={{ opacity:0.5}}
					animate={{ opacity:1}}
					transition={{duration:1, delay:0.2}}
					className="w-[100%]  bg-[#DDDAFF] py-14 rounded-[20px] px-10 mt-3 z-10 flex">
						<div className="flex flex-row scrollbar-hidden w-full overflow-x-scroll gap-5 items-center">
							<Image
								className="w-[180px] sm:w-[clamp(150px,15vw,167px)] "
								src={Login}
								alt="login"
							/>
							<Image
								className="w-[180px] sm:w-[clamp(150px,15vw,167px)] "
								src={Home}
								alt="home"
							/>
							<Image
								className="w-[180px] sm:w-[clamp(150px,15vw,167px)] "
								src={Metodos}
								alt="metodos"
							/>
							<Image
								className="w-[180px] sm:w-[clamp(150px,15vw,167px)] "
								src={Dicas}
								alt="dicas"
							/>
							<Image
								className="w-[180px] sm:w-[clamp(150px,15vw,167px)] "
								src={Chat}
								alt="chat"
							/>
						</div>
				</motion.div>

				<motion.div 
					initial={{ opacity:0.5}}
					animate={{ opacity:1}}
					transition={{duration:1, delay:0.2}}
					className="w-[100%] bg-[#DDDAFF] py-14 rounded-[20px] px-10 mt-5 z-10 flex">
						<div className="flex flex-row w-full scrollbar-hidden overflow-x-scroll gap-5 items-center">
							<Image
								className="w-[180px] sm:w-[clamp(150px,15vw,167px)] "
								src={Atividades}
								alt="atividades"
							/>
							<Image
								className="w-[180px] sm:w-[clamp(150px,15vw,167px)] "
								src={Meditacoes}
								alt="meditacoes"
							/>
							<Image
								className="w-[180px] sm:w-[clamp(150px,15vw,167px)] "
								src={Emocional}
								alt="emocional"
							/>
							<Image
								className="w-[180px] sm:w-[clamp(150px,15vw,167px)] "
								src={Temorizador}
								alt="temporizador"
							/>
							<Image
								className="w-[180px] sm:w-[clamp(150px,15vw,167px)] "
								src={Graficos}
								alt="graficos"
							/>
						</div>
				</motion.div>
			
				<div className="w-full flex justify-center mt-10 mb-30">
					<button onClick={()=>scrollToTop()} className={`${inter.className} cursor-pointer mx-auto bg-[#574FE4] text-[white] font-bold px-12 rounded-[6px] py-2 md:text-[20px] mt-5 text-[16px]`}>
						Voltar ao topo
					</button>
				</div>
			</div>
		</div>
	)
}