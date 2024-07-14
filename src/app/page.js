import Image from "next/image";
import Welcome from "@/components/home/Welcome";
import Client from "@/components/home/Client";
import HeroSlider from "@/components/carousel/HeroSlider";
import JobSection from "@/components/home/JobSection";
import ApplyJob from "@/components/applyJobForm/ApplyJob";

export default function Home() {
  return <>
    <HeroSlider />
    <Welcome />
    <Client secInfo={{title: "Cleints",desc:"Providing fast and efficient recruitment solutions to employers in the Commercial and Industrial sectors. Upload your vacancies here.", imgDirection:"right",cta:{ctaText:"Read More",ctaPath:""}}} className="cleint-sec bg-cyan-600 mb-24"/>
    <Client secInfo={{title: "Candidates",desc:"Offering temporary and permanent job opportunities to candidates throughout Stoke-on-Trent, Staffordshire & Cheshire. Upload your CV here.", imgDirection:"left",cta:{ctaText:"Read More",ctaPath:""}}} className="candidate-sec bg-amber-400 mb-24"/>
    <JobSection />
    <Client secInfo={{title: "Get in touch",desc:"If you require any further information about the services BMR Recruitment Ltd can offer you, please contact us on…", imgDirection:"right",cta:{ctaText:"Online form",ctaPath:""}}} className="get-in-touch-sec bg-cyan-600 mb-24"/>
    
    </>;
}
