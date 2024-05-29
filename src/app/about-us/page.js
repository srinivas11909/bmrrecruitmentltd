import Client from "@/components/home/Client"
import OurVision from "@/components/about/OurVision"

export const metadata = {
    title: "About Us | Leading Job Posting Site | BMR Recruitment Ltd",
    description: "Learn more about MR Recruitment Ltd, a leading job consulting site dedicated to connecting job seekers with top employers. Discover our mission, values, and the team behind our success.",
    keywords: "about us, job posting site, job board, employment opportunities, career services, connect job seekers, top employers, mission, values, BMR Recruitment Ltd"
};

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