
export default function HeroAlt() {
  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-hidden mb-20 md:mb-0">
        <p className="text-white text-[11vw] md:text-[11.4vw]">FRONT-END DEV.</p>
        <div className="w-[93vw] md:w-full px-5 lg:px-16 flex flex-wrap h-[60%] md:overflow-hidden justify-between">
            <div className="w-[85vw] md:w-[26vw]">
                <p className="text-white text-[0.9rem]">
                    <span className="text-gray-600">ABOUT: </span>
                        My name is Clarence Aigbuza, I'm a front-end developer based in Edo-state Nigeria. <br />
                        I bring together the perfect blend of frontend development skills and a keen eye for visual aesthetics. With expertise in HTML, CSS, JavaScript, and UI design principles, I strive to create seamless user experiences that leave a lasting impact.
                </p>
                <p className="text-gray-600 mt-6 md:mt-10">
                    TOOLS: HTML, CSS, JAVASCRIPT, React JS/Native, Tailwind CSS, Node Js, Express Js
                </p>

                <div className="py-5 flex space-x-6">
                    <a href="https://drive.google.com/file/d/1bJCUebxQX8h_N87n8tEY5r6-FWB82L36/view?usp=sharing" target="_blank" rel="noreferrer">
                        <button className="text-white underline">Resume</button>
                    </a>
                    <a href="https://github.com/soclarence" target="_blank" rel="noreferrer">
                        <button className="text-white hover:bg-gradient-to-r from-[#FFD6B9] via-[#C7FFD3] hover:text-transparent bg-clip-text rounded-full via-47.05% to-[#FFC9FD] to-94.34% hover:underline">My Github</button>
                    </a>
                </div>
            </div>
            <div className="w-[85vw] md:w-[60vw] lg:w-[55vw] md:mt-[-27%] h-[100%] md:h-fit overflow-hidden">
                <img className="md:mt-0 mt-[-40%]" src="https://res.cloudinary.com/dja3bc8xm/image/upload/v1689323909/DSC_5243-1_m7nlhg.webp" alt="" />
            </div>
        </div>
    </div>
  )
}
