import { ROUTES } from "@/app/constants/routes";
import Link from "next/link";


export const Menu:React.FC=()=>{
    return(
        <>
            <nav className="text-[50px] flex flex-row justify-center aling-center bg-blue1 p-1 ">
                <div className="p-2">
                    <Link href={ROUTES.home}><p className="bg-cyan-700 px-2 py-1 w-18 text-white">Home</p></Link>
                </div>
                <div className="p-2">
                    <Link href={ROUTES.imc}><p className="bg-cyan-700 px-2 py-1 w-18 text-white">Imc</p></Link>
                </div>
                <div className="p-2">
                    <Link href={ROUTES.media}><p className="bg-cyan-700 px-2 py-1 w-18 text-white">Media</p></Link>
                </div>
            </nav>
        </>
    )
}