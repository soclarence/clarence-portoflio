import ProjectIntro from "../ProjectIntro"

export default function YourpadiDesktop() {
  return (
    <div>
        <section className="flex flex-row items-start relative">
            <div className=" w-[60%]">
                <div className="bg-[url('https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732772/clarence%20Portfolio%20images/yourpadi/yourpadi_-_Clarence_-_Desktop_igsuih.webp')] h-screen w-full bg-contain bg-no-repeat bg-left bg-fixed grid relative items-end p-16">
                    <section className="flex items-center mix-blend-difference text-white space-x-3 text-sm sticky bottom-11">
                        <p>01</p>
                        <div className="h-[1px] w-[5%] bg-white"/>
                        <p>03</p>
                    </section>
                </div>

                <div className="bg-[url('https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732768/clarence%20Portfolio%20images/yourpadi/yourpadi_-_Clarence_-_Desktop-1_cefzmq.webp')] h-screen w-full bg-contain bg-no-repeat bg-left bg-fixed grid relative items-end p-16">
                    <section className="flex items-center mix-blend-difference text-white space-x-3 text-sm sticky bottom-11">
                        <p>02</p>
                        <div className="h-[1px] w-[5%] bg-white"/>
                        <p>03</p>
                    </section>
                </div>

                <div className="bg-[url('https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732768/clarence%20Portfolio%20images/yourpadi/yourpadi_-_Clarence_-_Desktop-2_n8uemy.webp')] h-screen w-full bg-contain bg-no-repeat bg-left bg-fixed grid relative items-end p-16">
                    <section className="flex items-center mix-blend-difference text-white space-x-3 text-sm sticky bottom-11">
                        <p>03</p>
                        <div className="h-[1px] w-[5%] bg-white"/>
                        <p>03</p>
                    </section>
                </div>
            </div>

            <div className="w-[50%] sticky top-0 pt-32">
                <ProjectIntro
                    projectName="YOURPADI"
                    year="2022"
                    visibility="flex"
                    nextProject="/2canplay"
                    liveSite="https://yourpadi.com"
                    involvement="UI/UX, Frontend Web Design/Dev"
                    tools="Figma, React JS, Tailwind CSS, Javascript, JSX" 
                    about="Yourpadi is a A lightweight search engine which takes in ‘product name’ and ‘location’ as search parameters to provide accurate request-specific results when compare to existing solutions that offer ‘suggestions’ and sometimes irrelevant search results"
                    />
            </div>
        </section>
    </div>
  )
}
