import { motion } from "framer-motion"
export default function Loader() {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black z-[200000]">
        <div className="bg-[#B0B9C2] h-full w-full flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0,}}
                animate={{ opacity: 100 }}
                transition={{ 
                    duration: 1,
                    delay: 0.5, 
                    ease: "easeInOut", 
                    velocity: 50 }}>
                <video className="hidden lg:block" width="320" height="240" muted autoplay="true" loop>
                    <source src="https://res.cloudinary.com/dja3bc8xm/video/upload/v1686745655/clarence%20Portfolio%20images/EmojiMovie700572202_2_zz0dsy.mpeg" type="video/mp4" />
                </video>
                <img className="block lg:hidden" width="150" height="150" src="https://res.cloudinary.com/dja3bc8xm/image/upload/v1687184701/sign-of-the-horns_1f918_yfcylf.webp" alt="loader image" />
            </motion.div>
            <div className="text-white font-bold overflow-hidden">
                <motion.div
                    initial={{ y: 100,}}
                    animate={{ y: 0 }}
                    transition={{ 
                        duration: 1,
                        delay: 1, 
                        ease: [0, 0.71, 0.2, 1.01], 
                        velocity: 50 }}>
                    <div className="flex items-center justify-between">
                        <div className="w-fit">
                            <p>Clarence Aigbuza</p>
                        </div>
                        <div className="h-[1px] w-[50%] bg-white " />
                    </div>
                </motion.div>
                <div className="overflow-hidden">
                    <motion.div
                        initial={{ y: 100,}}
                        animate={{ y: 0 }}
                        transition={{ 
                            duration: 1,
                            delay: 1.2, 
                            ease: [0, 0.71, 0.2, 1.01], 
                            velocity: 50 }}>
                        <p>Product Desinger & Frontend Developer</p>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}
