"use client"
import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';

import Dashboard from "@/components/admin/dashboard/Dashboard"
import JobForm from "@/components/admin/jobform/JobForm"
export default  function Admin({user}){
    return <>
       <Dashboard title={"srini"}>
         <JobForm />
       </Dashboard>
    </>
}
