"use client"
import React, {useState} from "react"

const Imc: React.FC=()=>{

    const [altura,setAltura] = useState<string>("")
    const [peso,setPeso] = useState<string>("")

    const [imc,setImc] = useState<number | undefined>()

    const SumImc=()=>{
        let alt = parseFloat(altura);
        let pe = parseFloat(peso);
        if(!isNaN(alt)&&!isNaN(pe)){
            setImc(pe/(alt*alt))
        }else{
            setImc(undefined)
        }
    }

    return(
        <>
        <div  className=" flex justify-center aling-center mt-6 mb-6">
            <div className="flex flex-col bg-blue1 p-6 rounded-md w-2/3">
                <label className="text-white text-medium">Altura:</label>
                <input type="text" placeholder="Digite sua altura" className="p-1 text-small" value={altura} onChange={(e)=>{setAltura(e.target.value)}}/>
                <label  className="text-white text-medium">Peso:</label>
                <input type="text" placeholder="Digite sua Peso" className="p-1 text-small" value={peso} onChange={(e)=>{setPeso(e.target.value)}}/>
                <button className="bg-white mt-6 rounded-md" onClick={()=>{SumImc()}}>Calcular</button>
            </div>
        </div>
            {imc &&
                <div className="flex justify-center aling-center mt-6 mb-6">
                    <div className="flex flex-col bg-blue1 p-6 rounded-md w-1/3 text-white">
                    <h2>Seu IMC:{!isNaN(imc??NaN)?imc.toFixed(2):"Valores Invalidos"}</h2>
                    </div>
                </div>
            }
        </>
    )
}

export default Imc