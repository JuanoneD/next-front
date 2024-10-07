
interface ICard{
    name:string,
    desc:string
}

const Card=({name,desc}:ICard)=>{
    return(
        <div className="w-[300px] h-[400px]">
            <div className="flex items-center justify-center text-center bg-blue">
                <h2>
                    {name}
                </h2>
            </div>
            <div>
                <p>
                    {desc}
                </p>
            </div>
            <div>
                <a href={`#${name}Page`} ><button>Read more</button></a>
            </div>
        </div>
    )
}

export default Card;