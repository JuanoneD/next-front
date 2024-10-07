import reactimg from "@/img/React-icon.svg.png"
import tawild from "@/img/tail.png"
import nextimg from "@/img/next.png"
import jqueryimg from "@/img/jquery.png"

import Image from "next/image";

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
    <div >
        <div className="flex flex-wrap w-full justify-center items-center">
            {data.map((item,index)=>{
                return(
                    <div key={index} className="p-1">
                        <div className="w-[300px] h-[400px] border-4">
                            <div className="w-full h-2/5  flex justify-center bg-gradient-to-r from-blue1 to-purple-500">
                                <h2 className="flex items-center text-white text-[50px]">
                                    {item.title}
                                </h2>
                            </div>
                            <div className=" h-2/5  flex justify-center">
                                <p className="flex items-center text-center p-1">
                                    {item.desc}
                                </p>
                            </div>
                            <div className=" h-1/5 flex justify-center items-center">
                                <a href={`#${item.title}Page`}><button className="bg-gradient-to-r from-blue1 to-purple-500 p-2">Read more!</button></a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div id="ReactPage" className=" p-4 border-4 flex flex-col items-center">
            <h2 className="text-[40px]">React</h2>
            <Image src={reactimg} alt="" height={300} className="p-4"/>
            <p className=" text-center">React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug.</p>
        </div>
        <div id="TailwindPage" className=" p-4 border-4 flex flex-col items-center">
            <h2 className="text-[40px]">TailwindPage</h2>
            <Image src={tawild} alt="" height={300} className="p-4"/>
            <p>Tailwind CSS is a design system implementation in pure CSS. It is also configurable. It gives developers super powers. It allows them to build websites with a clean consistent UI out of the box.</p>
        </div>
        <div id="NextPage" className="p-4 border-4 flex flex-col items-center">
            <h2 className="text-[40px]">Next</h2>
            <Image src={nextimg} alt="" height={300} className="p-4"/>
            <p>The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.</p>
        </div>
        <div id="JqueryPage" className=" p-4 border-4 flex flex-col items-center">
            <h2 className="text-[40px]">Jquery</h2>
            <Image src={jqueryimg} alt="" height={300} className="p-4"/>
            <p>jQuery is a lightweight, "write less, do more", JavaScript library. The purpose of jQuery is to make it much easier to use JavaScript on your website. jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.</p>
        </div>
    </div>
  );
}
