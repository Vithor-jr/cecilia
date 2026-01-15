import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import "./styles.css"
import { inter } from "@/app/fonts";

const blogs = [
	{
		id: 1,
		name: "Camila chaves",
    message: "Quando você apresentou a Identidade Visual, eu chorei! Você entendeu a alma do meu negócio de um jeito que eu mesma não conseguia colocar para fora. Não é só sobre cores e logo, é sobre o sentido da marca. Você é incrível, Cecília!"
	},
	{
		id: 2,
		name: "Marina Salles",
    message: "Você fez a mágica na identidade visual do meu café! Eu estava perdida e você capturou exatamente o feeling que eu queria para o Fio café: sofisticado, mas super acolhedor. Gosto que meus clientes agora veem a marca como ela realmente é graças ao seu trabalho."
	},
  {
		id: 3,
		name: "Felipe dantas",
    message: "Obrigada por simplificar nosso dashboard! Antes, era uma bagunça, e eu perdia muito tempo. Com a sua interface, o trabalho ficou limpo e rápido. Você não apenas desenhou, você resolveu um problema enorme de usabilidade para a nossa rotina."
	},
  	{
		id: 4,
		name: "Patrícia Lima",
    message: "Eu precisava de alguém que entendesse meu projeto pessoal a fundo, e você entregou muito além! Profissionalismo incrível e super organizada com os prazos. Eu senti que você realmente vestiu a camisa do meu sonho. Recomendo de olhos fechados!"
	},
];

type Blog = {
  id: number,
  name: string,
  message: string
}

export const CardBlog = ({id, name, message} : Blog) => {
	return (
		<div className=' bg-[#E6E6E6] h-[230px] w-[400px] flex flex-col justify-between m-2 pl-10 pr-8 py-6 rounded-[30px] flex-shrink-0 cursor-pointer'>
			<p className={`${inter.className} text-[#574FE4] leading-[20px] text-[16px] font-normal`}>{message}</p>
     
      <div>
        <div className="bg-[#CFCFCF] w-20 h-1"/>
        <p className={`${inter.className} text-[#574FE4] text-[16px] font-bold`}>{name}</p>
      </div>
		</div>
	);
};

export default function Result() {
  const carouselBlogs = [...blogs, ...blogs];

  return (
    <div className='container my-16 flex items-center flex-col relative'>
        <div className="flex items-center relative flex-col">
          <p className={`${inter.className} text-[48px] font-bold`}>Excelência que Gera</p>
          <p className={`${inter.className} text-[48px] font-bold -mt-5`}>Resultados</p>

          <svg className="absolute -left-25 top-4" xmlns="http://www.w3.org/2000/svg" width="192" height="148" viewBox="0 0 192 148" fill="none">
            <path d="M17.0173 134.353C5.94475 122.593 0 109.403 0 88.021C0 50.396 26.4127 16.6733 64.8225 0L74.4223 14.8135C38.571 34.2065 31.562 59.3722 28.767 75.2392C34.5398 72.2507 42.097 71.208 49.5037 71.896C68.8967 73.6912 84.1833 89.612 84.1833 109.403C84.1833 119.382 80.2192 128.952 73.1631 136.008C66.1071 143.064 56.537 147.028 46.5582 147.028C35.0235 147.028 23.994 141.76 17.0173 134.353ZM124.517 134.353C113.445 122.593 107.5 109.403 107.5 88.021C107.5 50.396 133.913 16.6733 172.323 0L181.922 14.8135C146.071 34.2065 139.062 59.3722 136.267 75.2392C142.04 72.2507 149.597 71.208 157.004 71.896C176.397 73.6912 191.683 89.612 191.683 109.403C191.683 119.382 187.719 128.952 180.663 136.008C173.607 143.064 164.037 147.028 154.058 147.028C142.523 147.028 131.494 141.76 124.517 134.353Z" fill="#574FE4" fillOpacity="0.3"/>
          </svg>
        </div>

				<div className='overflow-hidden mt-5 w-full'>
					<div className='flex  animate-scroll'>
						{carouselBlogs.map((blog, index) => (
							<CardBlog id={blog.id} name={blog.name} message={blog.message} key={index} />
						))}
					</div>
				</div>
			</div>
  );
}
