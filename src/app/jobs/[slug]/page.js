import JobDetail from "@/components/job/JobDetail"
export default async function JobDetails({params}) {
   
    const getSingleJob = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/jobs/${params.slug}`) 
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