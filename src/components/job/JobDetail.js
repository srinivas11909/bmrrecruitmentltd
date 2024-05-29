"use client"
import { Remarkable } from 'remarkable';

const md = new Remarkable();
md.set({
   html: true,
   typographer: true

 });
function renderMarkdownToHTML(markdown) {
   const renderedHTML = md.render(markdown);
   return {__html: renderedHTML};
 }

export default function JobDetail(props){
    const {data} = props
    console.log(data)
    const markup =renderMarkdownToHTML(data[0]?.["description"])
    const dateRender = (date) => {
       const dateParts = date.slice(0, 10).split('-'); // Extract year, month, and day parts
       const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
       return formattedDate
    }
    return <>
        <div className="bg-lime-300 p-4 text-center mb-8" style={{height: "185px"}}>
            <h1 className="text-3xl font-semibold text-white uppercase">{data[0]["title"]}</h1>
        </div>
        <div className='container mx-auto relative mb-20'>
            <div className="border border-b-gray-300 p-6 shadow-lg mx-auto md:w-4/6 bg-white">
                <div className="">
                    <strong>Location:</strong>{data[0]?.["location"]}
                </div>
                <div className="capitalize">
                    <strong>Divison:</strong>{data[0]?.["category"].join(", ")}
                </div>

                <div className="capitalize">
                    <strong>Divison:</strong>{data[0]?.["jobType"]}
                </div>
                <div className="">
                <div dangerouslySetInnerHTML={markup} className="text-base"></div>
                </div>
            </div>
        </div>

    </>
}