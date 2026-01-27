'use client'
import "../nexus/styles.css"

import Header from "@/components/Projects_Components/Header"
import main from '../../../assets/vithor/main.png'
import {motion} from 'framer-motion'
import Image from "next/image"
import { inter } from "@/app/fonts"
import estilo from '../../../assets/vithor/estilo.png'
import wireframe from '../../../assets/vithor/wireframe.png'
import porfolio from '../../../assets/vithor/portoflio.png'
 export default function VithorUIPage(){
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	
	return(
		<div className="flex border-0 bg bg-[#F0F0F0] flex-col items-center justify-center  pt-20">
			<div className="w-[90vw] max-w-[1000px] pb-10  gap-4">
				<Header
					title="Vithor"
					type="Lading page"
					description="Landing page para programador full-stack, com foco em apresentar trajetória, tecnologias e projetos."
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
							<p className={`${inter.className} font-bold text-[clamp(25px,2vw,32px)]`}>Problema</p>
						</div>

						<p className={`${inter.className} font-medium text-[clamp(15px,1.3vw,20px)] text-[#6E6E6E]`}>O cliente precisava de uma página profissional, clara e impactante, que transmitisse credibilidade e organizasse suas experiências.</p>
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

						<p className={`${inter.className} font-medium text-[clamp(15px,1.3vw,20px)] text-[#6E6E6E]`}>Trabalhei com hierarquia visual bem definida (Hero, Sobre, Projetos, Contato), ícones para tecnologias e timeline para mostrar evolução.</p>
					</div>
				</div>

				
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

				<p className={`${inter.className} font-medium text-[clamp(15px,1.3vw,20px)] text-[#6E6E6E]`}>Após analisar outras estrulturas de páginas, comecei a construção do wireframe da página, de forma que todo o site tenha uma navegação fluída e entendível.</p>

				<motion.div 
					initial={{ opacity:0.5}}
					animate={{ opacity:1}}
					transition={{duration:1, delay:0.2}}
					className="w-[100%] mt-3 z-10 relative">
					<Image
						className="w-[100%]"
						src={wireframe}
						alt="desenvolver"
					/>
				</motion.div>

				<div className="flex gap-2 flex-row  mt-10 sm:mt-15 items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
						<path d="M8.12665 14.7441C10.5242 14.6059 10.6628 10.5202 8.03439 10.6125C6.92834 10.5662 5.32098 11.3595 5.77553 13.2689C6.04455 14.3979 7.02069 14.79 8.12665 14.7441Z" fill="#010002"/>
						<path d="M13.7954 10.1528C16.1929 10.0146 16.3311 5.92896 13.7031 6.02071C12.597 5.97437 10.9897 6.76767 11.4442 8.67715C11.7132 9.80666 12.6893 10.1988 13.7954 10.1528Z" fill="#010002"/>
						<path d="M20.9118 11.8171C23.3094 11.679 23.4475 7.59326 20.8195 7.68502C19.7135 7.63868 18.1061 8.43198 18.5607 10.3415C18.8297 11.471 19.8058 11.8631 20.9118 11.8171Z" fill="#010002"/>
						<path d="M20.121 19.7702C23.5498 19.5723 23.7476 13.7291 19.9889 13.8609C18.4071 13.7948 16.1084 14.9293 16.7585 17.6601C17.1427 19.2753 18.5389 19.8359 20.121 19.7702Z" fill="#010002"/>
						<path d="M9.23032 19.3252C10.0934 19.0515 10.9001 18.5915 11.7523 18.2839C13.6843 17.5865 13.6567 19.2572 13.4831 20.4762C13.2857 21.8577 13.3128 23.4155 14.5956 24.292C17.3407 26.1675 21.1082 25.353 23.4199 23.2194C25.7307 21.0859 26.5764 17.6586 26.8918 14.6573C27.1751 11.9664 26.9914 8.15803 25.2454 5.92391C23.5485 3.75132 20.651 2.45341 18.0235 1.90803C13.3234 0.932396 8.90584 2.95389 5.30079 5.82751C2.16084 8.51012 -0.942302 12.3966 0.267908 16.7693C1.33479 20.6255 6.24966 20.2701 9.23032 19.3252ZM2.97482 12.1014C3.84899 10.2631 5.39718 8.75491 6.92419 7.45007C11.6761 3.66278 19.079 2.25876 23.5072 7.3996C24.8597 8.96982 24.7349 12.2791 24.6338 14.184C24.4934 16.8244 23.666 19.6609 21.796 21.596C20.1675 23.2819 15.2696 24.0749 15.7558 20.6732C16.0363 18.7067 15.6351 15.8446 13.014 15.8083C9.88417 15.7652 7.51744 18.1494 4.21635 17.5617C1.57215 17.0912 2.13594 13.8649 2.97482 12.1014Z" fill="#010002"/>
					</svg>
					<p className={`${inter.className} font-bold text-[clamp(25px,2vw,32px)]`}>Guia de estilo</p>
				</div>

				<p className={`${inter.className} font-medium text-[clamp(15px,1.3vw,20px)] text-[#6E6E6E]`}>O Guia de Estilo inclui uma paleta de cores e tipografia, além de acrescentar a construção da logo e de elementos tecnológicos.</p>

				<Image
					src={estilo}
					alt="estilo"
					className="w-full mt-5"
				/>

				<div className="flex gap-2 flex-row  mt-10 sm:mt-15 items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
						<path d="M5 15.7639L11.1539 21.875L25 8.125" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					<p className={`${inter.className} font-bold text-[clamp(25px,2vw,32px)]`}>Maquetes de alta fidelidade</p>
				</div>

				<p className={`${inter.className} font-medium text-[clamp(15px,1.3vw,20px)] text-[#6E6E6E]`}>Foi entregado uma landing page clara e estruturada, guiando o visitante do impacto inicial até o contato, a página transmitiu mais profissionalismo, aumentou engajamento e facilitou a apresentação do portfólio.</p>

				<div className="w-full mt-10 flex justify-center">
					<Image
						src={porfolio}
						alt="porfolio"
						placeholder="blur"
						className="sm:w-[80%] w-full"
					/>
				</div>

				<div className="w-full flex justify-center mt-10 mb-20">
					<button onClick={()=>scrollToTop()} className={`${inter.className} cursor-pointer mx-auto bg-[#574FE4] text-[white] font-bold px-12 rounded-[6px] py-2 md:text-[20px] mt-5 text-[16px]`}>
						Voltar ao topo
					</button>
				</div>
			</div>
		</div>
	)
}