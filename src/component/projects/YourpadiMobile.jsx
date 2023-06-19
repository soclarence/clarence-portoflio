import ProjectIntro from "../ProjectIntro"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Footer from "../Footer"

export default function YourpadiMobile() {

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
                projectName="YOURPADI"
                year="2022"
                visibility="flex"
                nextProject="/2canplay"
                liveSite="https://yourpadi.com"
                involvement="UI/UX, Frontend Web Design/Dev"
                tools="Figma, React JS, Tailwind CSS, Javascript, JSX" 
                about="Yourpadi is a A lightweight search engine which takes in ‘product name’ and ‘location’ as search parameters to provide accurate request-specific results when compare to existing solutions that offer ‘suggestions’ and sometimes irrelevant search results"
                />
            
            <div className="mt-32 px-1 space-y-3">
                <img data-aos="fade" src="https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732769/clarence%20Portfolio%20images/yourpadi/yourpadi_-_Clarence_-_mobile_unzrbv.webp" alt="yourpadi.com" />

                <img data-aos="fade" src="https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732772/clarence%20Portfolio%20images/yourpadi/yourpadi_-_Clarence_-_mobile-1_oym54n.webp" alt="yourpadi.com" />

                <img data-aos="fade" src="https://res.cloudinary.com/dja3bc8xm/image/upload/v1686732772/clarence%20Portfolio%20images/yourpadi/yourpadi_-_Clarence_-_mobile-2_efwhgb.webp" alt="yourpadi.com" />
            </div>
        </div>
        <Footer />
    </div>
  )
}
