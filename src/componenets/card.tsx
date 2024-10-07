
interface ICard{
    name:string,
    desc:string
}

export const Card=({name,desc}:ICard)=>{
    return(
        <div className="w-200 h-400 bg-white">
            <div className="w-full h-1/3">
                {name}
            </div>
            <div>
                {desc}
            </div>
            <div>
                <a href={`#${name}Page`} ><button>Read more</button></a>
            </div>
        </div>
    )
}