'use client'

import { inter, poppins } from "@/app/fonts"
import { motion } from "framer-motion"

export default function ExperienceSection() {
  return (
    <section id="experiencia" className={`${inter.className} pt-20 px-10 relative overflow-hidden z-1 w-full flex-col text-black flex items-center`}>
      <h1 className=" min-[1140px]:text-[65px] text-[50px] font-bold z-2">Serviços</h1>
      <p className="text-[#808080]  font-semibold min-[1140px]:text-[20px] text-center text-[15px] -mt-4 z-2">Design estratégico para cada etapa do seu negócio.</p>
      <h1 className={`text-[rgba(213,211,255,0.2)] text-[27vw] min-[1140px]:text-[350px] top-10 min-[720px]:-top-10 min-[1140px]:-top-15 absolute select-none z-1 font-bold ${inter.className}`}>Serviços</h1>


      <div className="flex mt-10 md:flex-row flex-col z-2  w-full gap-5">
        <div className="bg-[#E7E6F4] flex-1 p-10 rounded-2xl flex flex-col items-start">
          <div className="bg-[#9FDE8D] max-w-[230px] w-[60vw] py-[5px] rounded-3xl flex flex-row justify-center items-center">
            <svg className="w-[25x] h-[25px]" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M20.6003 26.9638C21.2245 26.0013 21.8501 24.7637 22.2998 23.1756C23.3379 23.5744 24.0501 24.0501 24.4874 24.4255C23.3673 25.5381 22.0255 26.4024 20.5494 26.9624H20.6003V26.9638ZM8.50025 24.4131C8.96225 24.0377 9.66213 23.5744 10.7003 23.1619C11.1623 24.7624 11.7631 25.9999 12.3997 26.9624C10.9455 26.3903 9.62596 25.5222 8.525 24.4131H8.50025ZM23.1248 15.2501C23.0863 14.1364 22.9735 13.024 22.7879 11.9254C24.1629 11.4249 25.1625 10.8254 25.8624 10.2754C26.8383 11.7693 27.4427 13.475 27.6251 15.2501H23.1248ZM10.7869 9.47512C10.0593 9.20705 9.37359 8.83666 8.7505 8.37512C9.80432 7.36732 11.0436 6.57349 12.3997 6.03762C11.8126 6.91212 11.2379 8.03687 10.7745 9.47512H10.7883H10.7869ZM20.6003 6.03762C21.9573 6.57176 23.1969 7.36579 24.2495 8.37512C23.6257 8.8355 22.9402 9.2058 22.2131 9.47512C21.8405 8.25672 21.293 7.09883 20.5879 6.03762H20.6003ZM20.35 12.5373C20.4738 13.3623 20.6003 14.2505 20.625 15.2501H12.375C12.4121 14.2505 12.4987 13.3499 12.6252 12.5373C15.1759 12.9965 17.787 12.9965 20.3376 12.5373H20.35ZM16.5 10.3744C15.2488 10.3744 14.1488 10.2754 13.2137 10.1255C14.212 7.04962 15.763 5.81212 16.5 5.37488C17.2123 5.81212 18.7756 7.062 19.7752 10.1255C18.6918 10.2952 17.5966 10.3784 16.5 10.3744ZM7.12525 10.2754C8.05993 10.986 9.10198 11.543 10.2121 11.9254C10.0266 13.025 9.91402 14.1357 9.87525 15.2501H5.324C5.52142 13.4706 6.14341 11.7645 7.13763 10.2754H7.12525ZM5.33775 17.7499H9.87525C9.92475 18.8251 9.999 19.8124 10.1502 20.713C8.9986 21.1086 7.92402 21.7003 6.974 22.462C6.07493 21.0362 5.51079 19.4251 5.324 17.7499H5.33775ZM16.5 19.7505C15.0013 19.7505 13.7129 19.8743 12.5881 20.075C12.4782 19.3045 12.4071 18.5289 12.375 17.7513H20.625C20.5879 18.5872 20.5246 19.3738 20.4256 20.075C19.1304 19.8409 17.8162 19.7281 16.5 19.7381V19.7505ZM16.5 27.6251C15.7506 27.1755 14.1006 25.8376 13.0996 22.5005C14.2235 22.3173 15.3614 22.2336 16.5 22.2502C17.8131 22.2502 18.9379 22.3369 19.9128 22.5005C18.9131 25.8748 17.2631 27.1755 16.5124 27.6251H16.5ZM26.0246 22.4496C25.0758 21.6869 24.0015 21.0951 22.8497 20.7006C23.0004 19.7234 23.0923 18.7381 23.1248 17.7499H27.676C27.4874 19.4208 26.9219 21.0275 26.0246 22.4496ZM16.5 2.75C8.90588 2.75 2.75 8.90588 2.75 16.5C2.75 24.0941 8.90588 30.25 16.5 30.25C24.0941 30.25 30.25 24.0941 30.25 16.5C30.25 8.90588 24.0941 2.75 16.5 2.75Z" fill="#49830A"/>
            </svg>
            <p className="text-[#49830A] font-bold">Lading page</p>
          </div>

          <p className="text-[#6A6973] mt-2">Páginas criadas para converter visitantes em clientes, com design estratégico e foco em resultados.</p>
        </div>
        
        <div className="bg-[#E7E6F4] relative flex-1 p-10 rounded-2xl flex flex-col items-start">
          <div className="bg-[#EBC09C]  max-w-[230px] w-[60vw] py-[5px] justify-center rounded-3xl flex flex-row  items-center">
            <svg className="w-[25x] h-[25px] -mr-1" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M17.9248 25.5H18.0748" stroke="#C35C08" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M25.5 4.5H10.5C9.67157 4.5 9 5.17157 9 6V30C9 30.8284 9.67157 31.5 10.5 31.5H25.5C26.3284 31.5 27 30.8284 27 30V6C27 5.17157 26.3284 4.5 25.5 4.5Z" stroke="#C35C08" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-[#C35C08] font-bold">Interface de usuário</p>
          </div>

          <motion.svg 
            initial={{scale:0, opacity:0}}
            whileInView={{scale:1, opacity:1}}
            transition={{
              type:"spring",
              stiffness: 80, 
              damping: 12, 
            }}
            className="w-[35px] rotate-12 h-[35px] absolute -top-2 right-7"
            xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.5 0.987793C13.7277 11.2868 14.7135 12.2739 25 13.4844C14.7135 14.7136 13.7277 15.7007 12.5 26.0183C11.2909 15.7007 10.2865 14.7136 0 13.4844C10.2865 12.2739 11.2909 11.2868 12.5 0.987793Z" fill="#6719E7"/>
          </motion.svg>


          <p className="text-[#6A6973] mt-2">Interfaces intuitivas e funcionais que elevam a experiência do usuário e fortalecem sua presença digital.</p>
        </div>
      </div>

      <div className="bg-[#E7E6F4] relative mt-5 p-10 z-2 rounded-2xl w-full flex flex-col items-start">
         <motion.svg 
          initial={{scale:0, opacity:0}}
          whileInView={{scale:1, opacity:1}}
          transition={{
            type:"spring",
            stiffness: 80, 
            damping: 12, 
          }}
          className="w-[35px] -rotate-22 h-[35px] absolute bottom-5 -left-3"
          xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.5 0.987793C13.7277 11.2868 14.7135 12.2739 25 13.4844C14.7135 14.7136 13.7277 15.7007 12.5 26.0183C11.2909 15.7007 10.2865 14.7136 0 13.4844C10.2865 12.2739 11.2909 11.2868 12.5 0.987793Z" fill="#6719E7"/>
        </motion.svg>
        <div className="bg-[#92D1E0] max-w-[230px] w-[60vw] py-[5px] justify-center rounded-3xl flex flex-row items-center">
          <svg className="w-[25x] h-[25px] -mr-1" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <path d="M21.0005 7.67773C11.4829 7.67773 3.77389 13.6352 3.77389 20.9924C3.67926 31.3035 18.2985 37.0967 28.4438 32.9934C28.9317 32.8123 29.3757 32.5302 29.7469 32.1655C30.1181 31.8009 30.4081 31.362 30.5979 30.8774C30.7876 30.3929 30.8728 29.8738 30.848 29.3541C30.8231 28.8343 30.6887 28.3257 30.4536 27.8615C29.3664 25.6531 27.4916 23.2946 30.0374 21.4159C30.5447 21.0728 31.1473 20.8986 31.7595 20.9179C32.3716 20.9372 32.962 21.1491 33.4466 21.5235L34.8751 22.6289C36.2356 23.6877 38.2511 22.7157 38.227 20.9924C38.227 13.6352 30.511 7.67773 21.0005 7.67773ZM11.7125 21.4805C9.11935 23.5444 5.99608 19.8253 8.48253 17.6332C11.0762 15.5689 14.1934 19.2877 11.7125 21.4805ZM14.1817 14.0228C14.264 10.7089 19.1242 10.7096 19.2061 14.0229C19.1193 17.3355 14.2681 17.3348 14.1817 14.0228ZM24.8191 26.828C24.1824 30.7009 16.599 29.7175 16.9595 25.8158C17.6 21.9477 25.1897 22.9203 24.8191 26.828ZM25.3071 16.535C21.9935 16.4483 21.9951 11.5921 25.3071 11.5106C28.6198 11.5925 28.62 16.449 25.3071 16.535Z" fill="#1D8198"/>
          </svg>
          <p className="text-[#1D8198] font-bold">Identidade visual</p>
        </div>         
        <p className="text-[#6A6973] mt-2 max-w-[782px]">Construção de uma marca única e memorável. Através do branding, criamos cores, tipografia e elementos que comunicam quem você é, destacam sua essência e posicionam seu negócio no mercado</p>
      </div>
    </section>
  )
}
