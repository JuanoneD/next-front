"use client"
import React, {useState} from "react"

const Media: React.FC=()=>{

    const [nota1,setNota1] = useState<string>("")
    const [nota2,setNota2] = useState<string>("")
    const [nota3,setNota3] = useState<string>("")
    const [nota4,setNota4] = useState<string>("")
    const [nota5,setNota5] = useState<string>("")

    const [media,setMedia] = useState<number | undefined>()

    const SumMedia=()=>{
        let n1 = parseFloat(nota1)
        let n2 = parseFloat(nota2)
        let n3 = parseFloat(nota3)
        let n4 = parseFloat(nota4)
        let n5 = parseFloat(nota5)

        if(!isNaN(n1) &&!isNaN(n2) &&!isNaN(n3) &&!isNaN(n4) &&!isNaN(n5)){
            setMedia((n1+n2+n3+n4+n5)/5)
        }else{
            setMedia(undefined)
        }

    }

    return(
        <>
        <div  className=" flex justify-center aling-center mt-6 mb-6">
            <div className="flex flex-col bg-blue1 p-6 rounded-md w-2/3">
                <label className="text-white text-medium">Nota 1:</label>
                <input type="text" placeholder="Digite sua nota" className="p-1 text-small" value={nota1} onChange={(e)=>{setNota1(e.target.value)}}/>
                <label className="text-white text-medium">Nota 2:</label>
                <input type="text" placeholder="Digite sua nota" className="p-1 text-small" value={nota2} onChange={(e)=>{setNota2(e.target.value)}}/>
                <label className="text-white text-medium">Nota 3:</label>
                <input type="text" placeholder="Digite sua nota" className="p-1 text-small" value={nota3} onChange={(e)=>{setNota3(e.target.value)}}/>
                <label className="text-white text-medium">Nota 4:</label>
                <input type="text" placeholder="Digite sua nota" className="p-1 text-small" value={nota4} onChange={(e)=>{setNota4(e.target.value)}}/>
                <label className="text-white text-medium">Nota 5:</label>
                <input type="text" placeholder="Digite sua nota" className="p-1 text-small" value={nota5} onChange={(e)=>{setNota5(e.target.value)}}/>

                <button className="bg-white mt-6 rounded-md" onClick={()=>{SumMedia()}}>Calcular</button>
            </div>
        </div>
            {media &&
                <div className="flex justify-center aling-center mt-6 mb-6">
                    <div className="flex flex-col bg-blue1 p-6 rounded-md w-1/3 text-white">
                        <h2>Sua media é: {!isNaN(media??NaN)?media.toFixed(2):"Valores Invalidos"}</h2>
                        {media>=7?"Voce está Aprovado":"Voce Esta Reprovado"}
                    </div>
                </div>
            }
        </>
    )
}

export default Media