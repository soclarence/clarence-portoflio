import { Link } from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Projects(props) {

  useEffect(()=>{
    Aos.init({
        offset: 100,
        duration: 1500,
        delay: 100
    })
  },[]) 

  return (
    <div data-aos="fade" className="overflow-hidden px-5 lg:px-[4.5rem] w-[100vw] flex flex-col items-center justify-center">
      <div className="h-[0.5px] w-full bg-white " />
      <Link to={props.link} className="w-full">
      <div className="w-full flex justify-between pt-9 text-white mb-10 mt-[-1]">
        <div className="w-[50%] md:w-fit">
          <p className="text-[1.5rem] font-bold text-[#A6A6A6] lg:text-[1.5rem] cursor-pointer">{props.name}</p>
          <p>{props.dsc}</p>
        </div>
        <div className="w-[30%] lg:w-[10%] text-[0.8rem]">
          <p className="">{props.taskI}</p>
          <p className="">{props.taskII}</p>

          <div className="flex items-center space-x-1 lg:space-x-3">
            <p className="">Year</p>
            <div className="h-[1px] w-full bg-white" />
            <p className="">{props.year}</p>
          </div>
        </div>
      </div>
      </Link>

      <Link to={props.link} className="h-[40vh] lg:h-[80vh] bg-slate-400 w-[100%]">
        <div className={`h-[40vh] lg:h-[80vh] bg-slate-400 w-[100%] bg-cover cursor-pointer bg-center bg-no-repeat ${props.image}`}></div>
      </Link>
    </div>
  )
}
