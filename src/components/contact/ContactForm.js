export default function ContactForm(){
    return <>
       <div className="p-6 h-full flex items-center">
        <form>
            <input type="text" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md border-gray-300 mb-5 outline-0	focus:border-white" />
            <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md border-gray-300 mb-5 outline-0 focus:border-white"/>
            <input type="text" placeholder="Enter your contact number" className="w-full px-3 py-2 border border-gray-300 rounded-md mb-5 outline-0 focus:border-white"/>
            <textarea placeholder="Enter your message" className="w-full px-3 py-2 border-gray-300 foucs:border-white resize-none mb-5 outline-0 rounded-md"/>
            <button className="uppercase text-base border-width-1 border rounded-md outline-0 border-white px-3 py-2 text-white md:min-w-36 hover:border-indigo-400 hover:bg-indigo-400 transition ease-in-out duration-150 hover:duration-150">Send</button>
        </form>
       </div>
    </>
}