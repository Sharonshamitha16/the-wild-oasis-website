import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Logo from "./components/Logo";
import Navigation from "./components/navigation";

import "@/app/_styles/globals.css"
import {Josefin_Sans} from "next/font/google"
import { Header } from "./components/Header";
const josefin = Josefin_Sans({
  subsets:["latin"],
  display:"swap",
})

console.log(josefin);

export const metadata = {
  title:{
    template:"%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis"
  },
  description:"Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",

}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${josefin.className} bg-primary-950 text-primary-50 min-h-screen flex flex-col `}>
      <Header/>
      <div className="flex-1 px-8 py-12 ">
        <main className="max-w-7xl   mx-auto ">
          {children}
        </main>
      </div>
        <footer className="flex justify-center items-center">Copyright by the Wild Oasis</footer>
      </body>
    </html>)
} 