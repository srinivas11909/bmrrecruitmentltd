"use client"
import { useState } from 'react';
import { Remarkable } from 'remarkable';
import ApplyJob from '../applyJobForm/ApplyJob';
import Modal from '../popup/modal';

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    //const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const markup =renderMarkdownToHTML(data[0]?.["description"])
    const dateRender = (date) => {
       const dateParts = date.slice(0, 10).split('-'); // Extract year, month, and day parts
       const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
       return formattedDate
    }
    // const handelModal = () => {
    //     setIsModalOpen(true)
    // }
    return <>
        <div className="bg-lime-300 p-4 text-center mb-8" style={{height: "185px"}}>
            <h1 className="text-3xl font-semibold text-white uppercase">{data[0]["title"]}</h1>
        </div>
        <div className='container mx-auto relative mb-20'>
            <div className="border border-b-gray-300 p-6 shadow-lg mx-auto md:w-4/6 bg-white">
                <div className="text-zinc-800">
                    <strong>Location:</strong>{data[0]?.["location"]}
                </div>
                <div className="capitalize text-zinc-800">
                    <strong>Divison:</strong>{data[0]?.["category"].join(", ")}
                </div>

                <div className="capitalize text-zinc-800">
                    <strong>Divison:</strong>{data[0]?.["jobType"]}
                </div>
                <div className="">
                <div dangerouslySetInnerHTML={markup} className="text-base text-zinc-800"></div>
                </div>
                <div className='mt-3'>
                  <div className='lg:w-40 border border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white rounded-md p-2 text-base cursor-pointer text-center font-semibold' onClick={handelModal}>Apply now</div>
                </div>

            </div>
            {/* <Modal title="Apply Job" isOpen={isModalOpen} onClose={closeModal}  >
                <div className='px-3 py-3'> 
                    <ApplyJob  onClose={closeModal}/>
                </div>
            </Modal> */}
        </div>

    </>
}