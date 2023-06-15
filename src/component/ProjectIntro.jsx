import { Link } from 'iconsax-react';
import { Link as LinkTo} from 'react-router-dom';

export default function ProjectIntro(props) {
  return (
    <div className="text-white w-full px-4 lg:px-14 flex flex-col justify-center h-fit">
        <div className=" space-y-6 h-[70%]">
            <h1 className="text-[5rem]">{props.projectName}</h1>
            <table className="w-full h-[15rem] uppercase">
                <tr className="border-b-[1px] justify-between">
                    <td className="w-">Year</td>
                    <td className='text-right'>{props.year}</td>
                </tr>
                <tr className="border-b-[1px] justify-between">
                    <td className="w-">Involvement</td>
                    <td className='text-right'>{props.involvement}</td>
                </tr>
                <tr className="border-b-[1px] justify-between">
                    <td className="w-">Tools / Language</td>
                    <td className='text-right'>{props.tools}</td>
                </tr>
            </table>

            <div>
                <p className="uppercase font-bold text-xl mb-3">About Project</p>
                <p className='text-sm'>{props.about}</p>
            </div>
        </div>

        <div className='flex items-center mt-5 '>
            <a href={props.liveSite} target="_blank" rel="noreferrer">
                <button className={`space-x-2 items-center justify-center border border-[#A6A6A6] rounded-full h-[2.5rem] mr-5 px-5 ${props.visibility}`}>
                    <Link
                size="25"
                color="#A6A6A6"
                />
                    <p className="text-[#A6A6A6] text-sm font-semibold">VIEW LIVE SITE</p>
                </button>
            </a>
            <LinkTo to={props.nextProject} className='w-fit'>
            <button className="border border-[#A6A6A6] rounded-full h-[2.5rem] px-5">
                <p className='text-[#A6A6A6] text-sm font-semibold'>NEXT PROJECT</p>
            </button>
            </LinkTo>
        </div>
    </div>
  )
}
