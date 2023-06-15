import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className="flex items-center font-medium justify-between mix-blend-difference w-full text-white h-[10vh] fixed px-5 lg:px-20 z-50">
        <p className="font-bold text-[1.5rem] w-fit">
          <Link to="/">Ca.</Link>
        </p>
        <div className="flex items-center  w-[80%] lg:text-base lg:w-[30%] space-x-3">
          <a href="mailto:clarenceaigbuza@gmail.com">
            <p className="hover:underline cursor-pointer underline-offset-1">Email Me.</p>
          </a>
            <div className="h-[1px] w-[5%] bg-white " />

            <a href="https://instagram.com/untitled_fig" target="_blank" rel="noreferrer">
              <p className="hover:underline cursor-pointer underline-offset-1">IG</p>
            </a>
              <div className="h-[1px] w-[5%] bg-white " />

            <a href="https://dribbble.com/soclarence" target="_blank" rel="noreferrer">
              <p className="hover:underline cursor-pointer underline-offset-1">Dr</p>
            </a>

            <div className="h-[1px] w-[5%] bg-white " />
            
            <a href="https://twitter.com/3diale" target="_blank" rel="noreferrer">
              <p className="hover:underline cursor-pointer underline-offset-1">TW</p>
            </a>
            <div className="hidden lg:block pl-14">
                <p>© 2023</p>
            </div>
        </div>
    </div>
  )
}
