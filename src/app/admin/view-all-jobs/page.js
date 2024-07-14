import Dashboard from "@/components/admin/dashboard/Dashboard";
import ViewJobs from "@/components/admin/dashboard/ViewJobs";
// import Card from "@/components/job/Card";
// import { Suspense } from "react";



export default function ViewAllJobs(){
    // const fetchJobs = async () => {
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/jobs`,{cache: "no-store"})
    //     const jobs = await res.json()
    //     jobs.sort((a, b) => new Date(b.postedOn) - new Date(a.postedOn));
    //     return jobs
    // }

    // const getAllJobs = await fetchJobs()
    // const renderJobCard = () => {
    //     return getAllJobs.map((item, index) => {
    //         return <Card data={item} key={index} isAdmin={true}/>
    //      })
    // }
    return <>
       <ViewJobs />
    </>
}