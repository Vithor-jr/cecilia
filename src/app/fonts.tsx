import { Inter, Poppins, Montserrat} from "next/font/google";

export const inter = Inter({
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900",
  ], // ou só "variable"
  style: ["normal", "italic"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
  preload: true,
})

export const montserrat = Montserrat({
  weight: ["100", "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  style: ["normal", "italic"]
})

export const poppins = Poppins({
  weight: ["100", "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  style: ["normal", "italic"]
})