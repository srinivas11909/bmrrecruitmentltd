"use client"
import Link from "next/link";
import "./Card.css"
import { Remarkable } from 'remarkable';
import CardButtons from "./CardButtons";
import { useRouter, useParams } from "next/navigation";
import Modal from "../popup/modal";
import { useState } from "react";
import EditJob from "./JobForm";


const md = new Remarkable();
md.set({
   html: true,
   breaks: true
 });
function renderMarkdownToHTML(markdown) {
   const renderedHTML = md.render(markdown);
   return {__html: renderedHTML};
 }
export default function Card({isAdmin = false, ...props}){
   const params = useParams();
   const router = useRouter();
   const [isModalOpen, setIsModalOpen] = useState(false);
   //const openModal = () => setIsModalOpen(true);
   const closeModal = () => setIsModalOpen(false);
   const markup =renderMarkdownToHTML(props.data.description)
   const dateRender = (date) => {
      const dateParts = date.slice(0, 10).split('-'); // Extract year, month, and day parts
      const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
      return formattedDate
   }
   const deleteJob = async (slug) => {
      if (window.confirm("Are you sure you want to delete this Job?")) {
         try {
           const res = await fetch(`/api/jobs/${slug}`, {
             method: "DELETE",
           });
           router.push("/admin/view-all-jobs");
           alert("Deleted successfully")
           router.refresh();
         } catch (error) {
           console.error(error);
         }
       }
   }
   const updateJobDetails = () => {
     setIsModalOpen(true);
   }
    return <>
       <div className="border boorder-grey-300 rounded-md shadow p-3 bg-gray-100 relative min-h-80">
          <div className="">
            <Link href={`/jobs/${props.data.slug}`} className="text-base text-black font-semibold">{props.data.title} </Link>
          </div>
          <div className="flex flex-col mb-2">
             <div className="">
                <p className="text-sm text-gray-600"><strong>Location :</strong> {props.data.location}</p>
             </div>
             <div className="">
                <p className="capitalize text-sm"><strong>Division :</strong> {props.data.category.join(", ")}</p>
             </div>
             <div className="">
                <p className="text-sm"><strong>Type :</strong> {props.data.jobType}</p>
             </div>
          </div>
          <div className="desc mb-3" style={{height: "96px"}}>
             <div dangerouslySetInnerHTML={markup} className="text-base truncate-text"></div>
          </div>
          <div className="flex w-full absolute bottom-16">
            <Link href={`/jobs/${props.data.slug}`} className="uppercase bg-cyan-500 hover:bg-cyan-600 text-white text-sm hover:text-white border cursor-pointer p-2 rounded-md">find out more</Link>
          </div>
          <div className="posted-date flex absolute w-full left-0 p-3 bottom-0 border-t border-bg-white">
            <div className="text-sm flex w-full items-center"><strong>Posted on :</strong> {dateRender(props.data.postedOn)}
               {isAdmin ? <CardButtons handleDeleteJob={() => deleteJob(props.data.slug)} handleUpdateJob={updateJobDetails}/> : null}
            </div>
          </div>
       </div>
       {isAdmin ? <Modal  isOpen={isModalOpen} onClose={closeModal} title="Update Job" >
          <EditJob data={props.data} onClose={closeModal}/>
       </Modal>: null}
    </>
}
