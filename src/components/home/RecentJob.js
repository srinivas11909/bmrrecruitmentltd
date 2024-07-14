"use client"

import Link from "next/link"
import { useState, useEffect, Suspense } from "react"
import { Remarkable } from 'remarkable';


const md = new Remarkable();
md.set({
   html: true,
   breaks: true
 });
function renderMarkdownToHTML(markdown) {
   const renderedHTML = md.render(markdown);
   return {__html: renderedHTML};
 }

const randomColors = ['#fb923c','#fbbf24','#65a30d','#2563eb']

export default function RecentJob(){
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const fetchJobs = async () => {
            try{
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/jobs`,{next: {revalidate: 10}})
               // if(res.ok){
                  const jobs = await res.json()
                  jobs.sort((a, b) => new Date(b.postedOn) - new Date(a.postedOn));
                  setJobs(jobs)
                //}
           }catch(err){
             console.log(err)
           }
        }
        fetchJobs()
    }, [])
    console.log(jobs)
    const finalJobs = jobs.slice(0, 4) 
   return <>
    <Suspense fallback={<div className="flex justify-center items-center">Loading ...</div>}>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-4 gap-4 mb-10 mt-10">
            {jobs && finalJobs.map((item, index) => {
                return <>
                    <Link href={`jobs/${item.slug}`}  className="bg-white border shadow-sm rounded-lg border-gray-300 p-3 hover:shadow-lg relative min-h-32" key={item.slug} style={{ backgroundColor: randomColors[index % randomColors.length] }}>
                        <h2  className="text-base uppercase block mb-2 font-sans text-white font-medium">{item.title}</h2>
                        <div className="text-sm font-sans text-white line-clamp-4" dangerouslySetInnerHTML={renderMarkdownToHTML(item.description)}></div>
                    </Link>
                </>
            })}
         </div>
    </Suspense>
   </>    
}