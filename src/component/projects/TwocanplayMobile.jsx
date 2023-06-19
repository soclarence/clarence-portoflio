import ProjectIntro from "../ProjectIntro"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Footer from "../Footer"

export default function TwocanplayMobile() {

    useEffect(()=>{
        Aos.init({
            offset: 100,
            duration: 1500,
            delay: 100
        })
      },[]) 
  return (
    <div>
        <div className="w-full pt-32">
            <ProjectIntro
                year="2022"
                projectName="2CANPLAY"
                involvement="UI/UX"
                visibility="hidden"
                nextProject="/yourpadi"
                tools="Figma" 
                about="At the time I came onboard, the product was poorly designed and I was responsible for giving it a complete facelift. My thought was to go a different route than that of most dating app which was using swipe left and right to determine if you like someone (Also, Apple app store thought the swipe feature was a spam feature).
                    Considering the platform was meant to target Gen Z, I thought to use a familiar feature to get them hooked."
                />
            
            <div className="mt-32 px-1 space-y-3">
                <img data-aos="fade" src="https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732707/clarence%20Portfolio%20images/2canplay/2canplay_-_Clarence_-_mobile_h30coi.webp" alt="" />

                <img data-aos="fade" src="https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732703/clarence%20Portfolio%20images/2canplay/2canplay_-_Clarence_-_mobile-2_ngfl7z.webp" alt="" />

                <img data-aos="fade" src="https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732702/clarence%20Portfolio%20images/2canplay/2canplay_-_Clarence_-_mobile-1_fudbkt.webp" alt="" />

                <img data-aos="fade" src="https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732705/clarence%20Portfolio%20images/2canplay/2canplay_-_Clarence_-_mobile-4_jyqowe.webp" alt="" />

                <img data-aos="fade" src="https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732704/clarence%20Portfolio%20images/2canplay/2canplay_-_Clarence_-_mobile-3_idjpbc.webp" alt="" />
            </div>
        </div>
        <Footer />
    </div>
  )
}
