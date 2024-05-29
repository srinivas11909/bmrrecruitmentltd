import Dashboard from "@/components/admin/dashboard/Dashboard";
import Card from "@/components/job/Card";
import { Suspense } from "react";


export default async function ViewAllJobs(){
    const fetchJobs = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/jobs`,{cache: "no-store"})
        const jobs = await res.json()
        return jobs
    }

    const getAllJobs = await fetchJobs()
    const renderJobCard = () => {
        return getAllJobs.map((item, index) => {
            return <Card data={item} key={index} isAdmin={true}/>
         })
    }
    return <>
        <Dashboard title={"srini"}>
            <Suspense fallback={<div className="min-h-screen flex justify-center items-center"><h2 className="text-grey-500">Loading</h2></div>}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-3 gap-3">
                    {getAllJobs.length > 0 ? renderJobCard() : <div className=""> Add jobs</div>}
                </div>
            </Suspense>
        </Dashboard>  
    </>
}