import ProjectIntro from "../ProjectIntro"

export default function TwocanplayDesktop() {
  return (
    <div>
        <section className="flex flex-row items-start relative">
            <div className=" w-[60%]">
                <div className="bg-[url('https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732703/clarence%20Portfolio%20images/2canplay/2canplay_-_Clarence_-_Desktop_hglxdn.jpg')] h-screen w-full bg-contain bg-no-repeat bg-left bg-fixed grid relative items-end p-16">
                    <section className="flex items-center mix-blend-difference text-white space-x-3 text-sm sticky bottom-11">
                        <p>01</p>
                        <div className="h-[1px] w-[5%] bg-white"/>
                        <p>05</p>
                    </section>
                </div>

                <div className="bg-[url('https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732701/clarence%20Portfolio%20images/2canplay/2canplay_-_Clarence_-_Desktop-1_ppyfim.jpg')] h-screen w-full bg-contain bg-no-repeat bg-left bg-fixed grid relative items-end p-16">
                    <section className="flex items-center mix-blend-difference text-white space-x-3 text-sm sticky bottom-11">
                        <p>02</p>
                        <div className="h-[1px] w-[5%] bg-white"/>
                        <p>05</p>
                    </section>
                </div>

                <div className="bg-[url('https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732700/clarence%20Portfolio%20images/2canplay/2canplay_-_Clarence_-_Desktop-4_v1oa20.jpg')] h-screen w-full bg-contain bg-no-repeat bg-left bg-fixed grid relative items-end p-16">
                    <section className="flex items-center mix-blend-difference text-white space-x-3 text-sm sticky bottom-11">
                        <p>03</p>
                        <div className="h-[1px] w-[5%] bg-white"/>
                        <p>05</p>
                    </section>
                </div>

                <div className="bg-[url('https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732700/clarence%20Portfolio%20images/2canplay/2canplay_-_Clarence_-_Desktop-2_euivqi.jpg')] h-screen w-full bg-contain bg-no-repeat bg-left bg-fixed grid relative items-end p-16">
                    <section className="flex items-center mix-blend-difference text-white space-x-3 text-sm sticky bottom-11">
                        <p>04</p>
                        <div className="h-[1px] w-[5%] bg-white"/>
                        <p>05</p>
                    </section>
                </div>

                <div className="bg-[url('https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732702/clarence%20Portfolio%20images/2canplay/2canplay_-_Clarence_-_Desktop-3_b6kch9.jpg')] h-screen w-full bg-contain bg-no-repeat bg-left bg-fixed grid relative items-end p-16">
                    <section className="flex items-center mix-blend-difference text-white space-x-3 text-sm sticky bottom-11">
                        <p>05</p>
                        <div className="h-[1px] w-[5%] bg-white"/>
                        <p>05</p>
                    </section>
                </div>
            </div>

            <div className="w-[50%] sticky top-0 pt-32">
                <ProjectIntro
                    projectName="2CANPLAY"
                    year="2022"
                    involvement="UI/UX"
                    visibility="hidden"
                    nextProject="/yourpadi"
                    tools="Figma" 
                    about="At the time I came onboard, the product was poorly designed and I was responsible for giving it a complete facelift. My thought was to go a different route than that of most dating app which was using swipe left and right to determine if you like someone (Also, Apple app store thought the swipe feature was a spam feature).
                    Considering the platform was meant to target Gen Z, I thought to use a familiar feature to get them hooked."
                    />
            </div>
        </section>
    </div>
  )
}
