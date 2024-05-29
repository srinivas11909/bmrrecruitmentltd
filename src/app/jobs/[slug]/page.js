import JobDetail from "@/components/job/JobDetail"
export default async function JobDetails({params}) {
   
    const getSingleJob = async () => {

        const res = await fetch(`http://localhost:3000/api/jobs/${params.slug}`) 
        console.log(res)
        const jobDetail = await res.json()
        return jobDetail
    }

    const jobDetail = await getSingleJob()

    return <>
       <div className="w-full">
          <JobDetail data={jobDetail}/>
       </div>
    </>
}