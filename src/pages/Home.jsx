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
        <Footer />
    </div>
  )
}
