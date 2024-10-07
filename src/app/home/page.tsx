import { Card } from "@/componenets/card";

const data = [
    {
        title:"React",
        desc:"Lorem dasd lispo asda jasoda hasdjlnasdl  dkalsjd lkj adjksaj ajdlasd adas !!!!",
        id:"ReactPage"
    },
    {
        title:"Tailwind",
        desc:"Lorem dasd lispo asda jasoda hasdjlnasdl  dkalsjd lkj adjksaj ajdlasd adas !!!!",
        id:"TailWindPage"
    },
    {
        title:"Next",
        desc:"Lorem dasd lispo asda jasoda hasdjlnasdl  dkalsjd lkj adjksaj ajdlasd adas !!!!",
        id:"NextPage"
    },
    {
        title:"Jquery",
        desc:"Lorem dasd lispo asda jasoda hasdjlnasdl  dkalsjd lkj adjksaj ajdlasd adas !!!!",
        id:"JqueryPage"
    },
]

export default function Home() {
  return (
    <div>
        {data.map((item,index)=>{
            return(

                <Card key={index} name={item.title} desc={item.desc}/>
            )
        })}
    </div>
  );
}
