'use cleint'
import Card from '@/components/job/Card';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ViewJobCards(){
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
                if(!res.ok){
                    console.log(err);
                }
           }catch(err){
             console.log(err)
           }
        }
        fetchJobs()
    }, [])
   const renderJobsCard = () => {
     return jobs.map((item, i) => {
        return <Card data={item} key={i} isAdmin={true}/>
      })
   } 
  return <>
    {jobs !=null && jobs.length > 0 ?<div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-3 gap-3">
        {renderJobsCard()} </div>: <div>Create/Add Job data to view <Link href={'/admin'}>Admin</Link> </div>}
  </>
}