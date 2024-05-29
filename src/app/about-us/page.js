import Client from "@/components/home/Client"
import OurVision from "@/components/about/OurVision"

export default function AboutUs(){
    const info= {
        title: "ABOUT US", 
        desc:"We are a team of Dedicated Managers & Consultants chosen for our knowledge, experience & understanding within our chosen fields.",
        imgDirection: "right",
    }
    return <>
       <Client secInfo={info} className="about-us bg-emerald-400 mt-11 mb-24"/>
       <OurVision />
       <Client secInfo={{title: "Get in touch",desc:"If you require any further information about the BMR Recruitment Ltd can offer you, please contact us on…", imgDirection:"right",cta:{ctaText:"Online form",ctaPath:""}}} className="get-in-touch-sec bg-cyan-600 mb-24"/>
    </>
}