import JobDetail from "@/components/job/JobDetail"

const getSingleJob = async (slug) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/jobs/${slug}`) 
    const jobDetail = await res.json()
    return jobDetail
}

export const generateMetadata = async ({ params }) => {
    const { slug } = params;
  
    const job = await getSingleJob(slug);
  
    return {
      title: job[0]["title"] + "-" + "BMR Recuritment Ltd",
      description: job[0]["location"],
    };
};

export default async function JobDetails({params}) {
    const { slug } = params;
    // const getSingleJob = async () => {
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/jobs/${params.slug}`) 
    //     const jobDetail = await res.json()
    //     return jobDetail
    // }

    const jobDetail = await getSingleJob(slug)

    return <>
       <div className="w-full">
          <JobDetail data={jobDetail}/>
       </div>
    </>
}