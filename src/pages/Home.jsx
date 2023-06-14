import { useEffect, useState } from "react"
import Hero from "../component/Hero"
import Work from "../component/Work"
import Footer from "../component/Footer"
import Loader from "../component/Loader"
import { motion } from "framer-motion"

export default function Home() {
  const [isVisible, setIsVisible] = useState(true)

  const show = {
    opacity: 1,
    display: "block"
  };
  
  const hide = {
    // opacity: 0,
    y: "-100%",
    duration: 1,
    transitionEnd: {
      display: "none",
      // ease: "easeInOut",
      // velocity: 50
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      setIsVisible(false)
    }, 3000);
  }, [])


  return (
    <div>
      <motion.div
      className="h-screen w-screen fixed top-0 left-0 z-[200000]"
      animate={isVisible ? show : hide}
      transition={{ 
        duration: 1,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01], 
        velocity: 50 }}
        >
        <Loader />
      </motion.div>

      <motion.div
      className="h-screen w-screen bg-[#61666B] backdrop-blur-sm bg-opacity-25 fixed top-0 left-0 z-[20000]"
      animate={isVisible ? show : hide}
      transition={{ 
        duration: 1.5,
        delay: 1.1,
        ease: [0, 0.71, 0.2, 1.01], 
        velocity: 50 }}
        >
        <div></div>
      </motion.div>

        <Hero />
        <Work />

        <div className="px-5 lg:px-[4.5rem] text-sm pt-20 flex flex-wrap items-start lg:space-x-10 lg:space-y-0 space-y-10">

          <p className="text-white lg:w-[35%]">I have a passion project I work on on the side called <span className="font-bold hover:underline"><a href="https://innvesio.com" rel="noopener" target="_blank">INNVESIO,</a></span> it's a think tank for me and a few exceptional people to play around with tech ideas, learn and have fun while doing it. <br/>I also help my friends at Heracules design and build amazing products.</p>

          <div>
            <h1 className="text-white mb-5 text-[1.5rem]">BOOKMARKS</h1>
            
            <section className="space-y-10">
              <div className="lg:pr-[50%]">
                <p className="text-white font-semibold">CAMELOT UI — DESIGN STSYEM (UI Kit)</p>
                <p className="text-gray-400">A little design system and components I worked on for a social commerce platform</p>
              </div>

              <div className="lg:pr-[50%]">
                <p className="text-white font-semibold">YOURPADI</p>
                <p className="text-gray-400">Play around with one of my Live projects</p>
              </div>
            </section>
          </div>
        </div>

        <Footer />
    </div>
  )
}
