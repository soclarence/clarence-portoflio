import { useEffect } from "react"
import YourpadiDesktop from "../component/projects/YourpadiDesktop"
import YourpadiMobile from "../component/projects/YourpadiMobile";
import { motion } from "framer-motion";

export default function Yourpadi() {

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
            <YourpadiDesktop />
        </section>

        {/* Mobile */}
        <section className="block lg:hidden">
          <YourpadiMobile />
        </section>
      </motion.div>
    </div>
  )
}
