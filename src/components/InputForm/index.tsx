import { poppins } from '@/app/fonts';
import { FC } from 'react';

type InputFormProps = {
  icon: FC;
  label: string;
	type:string;
	placeholder?: string;
	inputType: "input" | "textarea";
};

export default function InputForm({ icon: Icon, placeholder, label, type, inputType }: InputFormProps) {
  return (
    <div className={`${poppins.className} w-full`}>
      <div className='flex flex-row items-center gap-1 mb-2'>
        <Icon/>
        <label className='font-bold text-[#574FE4] text-[14px]'>{label}</label>
      </div>

      {inputType === "input" ? ( 
				 <input 
				 	type={type}
					placeholder={placeholder}
					className={`w-full py-3 rounded-lg text-[#574FE4] text-[16px] placeholder:text-[#574FE4] border-[1.5px] border-[#574FE4] pr-1 pl-3 focus:outline-none focus:ring-2 focus:ring-[#574FE4]`}/>
			) : (
				<textarea
					placeholder={placeholder}
					className='w-full resize-none h-[200px] py-3 rounded-lg border-[1.5px] text-[16px] placeholder:text-[#574FE4] border-[#574FE4] pr-1 pl-3 focus:outline-none focus:ring-2 focus:ring-[#574FE4]'
				/>
			)}	
					
    </div>
  );
}
