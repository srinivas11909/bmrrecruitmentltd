import Location from "./Map"
import ContactForm from "./ContactForm"

export default function Contact(){
    return <>
       <section className="contact-container bg-white mb-20">
         <div className="container flex flex-col md:flex-row mx-auto">
            <div className="w-full md:w-3/6">
                <Location />
            </div>
            <div className="w-full md:w-3/6 bg-slate-300">
                <ContactForm />
            </div>
         </div>
       </section>
    </>
}