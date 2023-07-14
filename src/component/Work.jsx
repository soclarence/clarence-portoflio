import Projects from "./Projects"

export default function Work() {

  return (
    <section className="flex flex-col items-center overflow-hidden px-5 lg:px-[4.5rem] w-full">
        <div className="flex items-end justify-between w-full mb-10">
          <p className="uppercase lg:text-[3rem] lg:leading-[3.5rem] text-[2rem] leading-[2.5rem] text-white">Selected <br /> Work</p>
          <p className="text-white">20' — Present</p>
        </div>
        <section className="mt-[3%] space-y-16">
            <Projects 
              name= "YOURPADI"
              dsc="Small business search engine/directory"
              year="2022"
              taskI="UI/UX"
              taskII="Frontend Dev"
              link="/yourpadi"
              image= "bg-[url('https://res.cloudinary.com/dja3bc8xm/image/upload/v1686137388/AdobeStock_411342745_u4lydi.webp')]"
              projectAlt="Yourpadi — Project by Clarence"
            />
            <Projects 
              name= "2CANPLAY"
              dsc="Imagine dating app meets tiktok."
              year="2020"
              taskI="UI/UX"
              projectAlt="2canplay - Project by Clarence"
              // taskII="Frontend Dev"
              link="/2canplay"
              image= "bg-[url('https://res.cloudinary.com/dja3bc8xm/image/upload/v1686741290/clarence%20Portfolio%20images/2canplay/2canplay-clarence_idc2ta.webp')]"
            />
        </section>
    </section>
  )
}
