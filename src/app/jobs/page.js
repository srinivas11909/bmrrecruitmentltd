import { Suspense } from "react";
import Card from "@/components/job/Card"
export default async function Jobs(){
   const  fetchJobs = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/jobs`, {next: {revalidate: 10}})
    const jobs = await res.json()
    return jobs
   }
   
   const jobs = await fetchJobs()
    return <>
       <section className="jobs-sec min-h-screen">
         <div className="w-full p-3 px-11 bg-lime-500">
            <h1 className="text-3xl text-white uppercase">Jobs</h1>
         </div> 
         <div className="container mx-auto p-3 sm:p-0">
            <Suspense fallback={<div>Loading....</div>}>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-3 gap-3 mb-10 mt-10">
                  {jobs.map((item,index) => <Card data={item} key={index}/>)}
               </div>
            </Suspense>
         </div>
       </section>
    </>
}