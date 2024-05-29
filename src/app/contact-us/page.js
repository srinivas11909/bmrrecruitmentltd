import Client from "@/components/home/Client"
import Contact from "@/components/contact/Contact"
export default function ContactUs(){
    return <>
     <Client secInfo={{title: "Contact us",desc:"If you require any further information about the BMR Recruitment Ltd can offer you, please contact us on…", imgDirection:"right"}} className="get-in-touch-sec bg-cyan-600 mt-11 mb-24"/>
     <Contact />
    </>
}