import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="pb-[40%]  flex flex-col items-center justify-end lg:bg-cover bg-contain bg-no-repeat bg-top lg:bg-bottom bg-[url('https://res.cloudinary.com/dja3bc8xm/image/upload/v1686391597/Mask_group_c1qslv.png')] lg:bg-[url('https://res.cloudinary.com/dja3bc8xm/image/upload/v1686137309/clarence_ebudnh.png')] px-3 lg:px-0">
        <section className="flex flex-wrap-reverse h-[50%] items-end justify-between text-white lg:mt-0 mt-[30%] pt-[20%]">
            <div className=" w-[100%] lg:w-[49.5%] text-center lg:text-right">
                <motion.div
                    initial={{ opacity: 0,}}
                    animate={{ opacity: 100 }}
                    transition={{ 
                        duration: 1,
                        delay: 5, 
                        ease: "easeInOut", 
                        velocity: 50 }}>
                    <p className="px-11 pt-3 lg:pt-0 lg:px-0 lg:pl-[60%]">Hi, I’m Clarence Aigbuza, I design interfaces that are beautiful, useful and hard to ignore</p>
                </motion.div>
            </div>
            <div className="w-[100%] lg:w-[49.5%]">
                <h1 className="text-[3rem] flex flex-col items-center md:items-start leading-[3.5rem] uppercase text-center lg:text-left pt-[50%] lg:pt-0">
                    <span className="overflow-hidden h-[3.2rem]">
                        <motion.div
                            initial={{ y: 100,}}
                            animate={{ y: 0 }}
                            transition={{ 
                                duration: 1,
                                delay: 5, 
                                ease: [0, 0.71, 0.2, 1.01], 
                                velocity: 50 }}>
                            Product
                        </motion.div>
                    </span>
                    <span className="overflow-hidden h-[3.2rem]">
                        <motion.div
                            initial={{ y: 100,}}
                            animate={{ y: 0 }}
                            transition={{ 
                                duration: 1, 
                                delay: 5.2,
                                ease: [0, 0.71, 0.2, 1.01], 
                                velocity: 50 
                                }}>
                            Designer/Web
                        </motion.div>
                    </span>
                    <span className="overflow-hidden h-[3.2rem]">
                        <motion.div
                            initial={{ y: 100,}}
                            animate={{ y: 0 }}
                            transition={{ 
                                duration: 1,
                                delay: 5.3, 
                                ease: [0, 0.71, 0.2, 1.01], 
                                velocity: 50 
                                }}>
                            developer
                        </motion.div>
                    </span> 
                </h1>
            </div>
        </section>
        <div className="pt-10">
            <a href="https://drive.google.com/file/d/1bJCUebxQX8h_N87n8tEY5r6-FWB82L36/view?usp=sharing" target="_blank" rel="noopener">
                <button className="text-white underline">Resume</button>
            </a>
        </div>
    </div>
  )
}
