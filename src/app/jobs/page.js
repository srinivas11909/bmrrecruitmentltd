import Card from "@/components/job/Card"
export default async function Jobs(){
   const  fetchJobs = async () => {
    const res = await fetch("http://localhost:3000/api/jobs", {cache: "no-store"})
    console.log(res)
    const jobs = await res.json()
    return jobs
   }
   
   const jobs = await fetchJobs()
   console.log(jobs)
    return <>
       <section className="jobs-sec min-h-screen">
         <div className="w-full p-3 px-11 bg-lime-500">
            <h1 className="text-3xl text-white uppercase">Jobs</h1>
         </div> 
         <div className="container mx-auto p-3 sm:p-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-3 gap-3 mb-10 mt-10">
                {jobs.map((item,index) => <Card data={item}/>)}
            </div>

         </div>
       </section>
    </>
}