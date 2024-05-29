import Client from "@/components/home/Client"
import Contact from "@/components/contact/Contact"

export const metadata = {
    title: "Contact Us | Get in Touch with BMR Recruitment Ltd | Job Posting Site",
    description: "Reach out to BMR Recruitment Ltd for any inquiries or support. Contact our team for assistance with job postings, job searches, and more. We are here to help!",
    keywords: "contact us, job posting site, job board, support, inquiries, customer service, job search assistance, employer support, [Your Site Name] contact, get in touch"
};


export default function ContactUs(){
    return <>
     <Client secInfo={{title: "Contact us",desc:"If you require any further information about the BMR Recruitment Ltd can offer you, please contact us on…", imgDirection:"right"}} className="get-in-touch-sec bg-cyan-600 mt-11 mb-24"/>
     <Contact />
    </>
}