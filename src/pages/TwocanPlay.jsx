import { useEffect } from "react"
import TwocanplayDesktop from "../component/projects/twocanplayDesktop"
import TwocanplayMobile from "../component/projects/TwocanplayMobile";
import { motion } from "framer-motion";

export default function TwocanPlay() {

  useEffect(() => {
    window.scrollTo(0, 0);
}, [])
  return (
    <div>
      <motion.div
        initial={{ opacity: 0,}}
        animate={{ opacity: 100 }}
        transition={{ 
          duration: 1,
          delay: 1, 
          ease: "easeInOut", 
          velocity: 50 }}>

        {/* Desktop */}
        <section className="hidden lg:block">
            <TwocanplayDesktop />
        </section>

        {/* Mobile */}
        <section className="block lg:hidden">
          <TwocanplayMobile />
        </section>
      </motion.div>
    </div>
  )
}
