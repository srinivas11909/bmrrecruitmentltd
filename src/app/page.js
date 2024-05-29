import Image from "next/image";
import Welcome from "@/components/home/Welcome";
import Client from "@/components/home/Client";
import HeroSlider from "@/components/carousel/HeroSlider";

export default function Home() {
  return <>
    <HeroSlider />
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
      {/* <img src="/images/xera.svg" alt="Themeptation" className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10 animate-blob" />
      <img src="/images/shapes.svg" alt="hero" className="absolute w-full left-24 bottom-24 animate-blob2" /> */}
      <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
       <div className="text-center space-y-10">
         <h3 className="font-light text-xl uppercase tracking-wider">Coming soon</h3>
         <h1 className="text-7xl lg:text-9xl font-extrabold">We’r blowing up</h1>
         <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">We`re under construction. Check back for an update soon. Stay in touch!</p></div>
       </div>
    </div>
    <Welcome />
    <Client secInfo={{title: "Cleints",desc:"Providing fast and efficient recruitment solutions to employers in the Commercial and Industrial sectors. Upload your vacancies here.", imgDirection:"right",cta:{ctaText:"Read More",ctaPath:""}}} className="cleint-sec bg-cyan-600 mb-24"/>
    <Client secInfo={{title: "Candidates",desc:"Offering temporary and permanent job opportunities to candidates throughout Stoke-on-Trent, Staffordshire & Cheshire. Upload your CV here.", imgDirection:"left",cta:{ctaText:"Read More",ctaPath:""}}} className="candidate-sec bg-amber-400 mb-24"/>
    <Client secInfo={{title: "Get in touch",desc:"If you require any further information about the services BMR Recruitment Ltd can offer you, please contact us on…", imgDirection:"right",cta:{ctaText:"Online form",ctaPath:""}}} className="get-in-touch-sec bg-cyan-600 mb-24"/>
    
    </>;
}
