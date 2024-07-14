"use client"

import { useSession } from 'next-auth/react';
import Dashboard from "./Dashboard"
import ViewJobCards from './ViewJobsCards';
import { useState, useEffect } from 'react';
import LoginPage from '../login/Login';

export default function ViewJobs(){
    const data = useSession();
    console.log(data);
    if(data.status === "unauthenticated"){
        return <LoginPage />
    }else{
    return <>
       <Dashboard title={"srini"}>
            <ViewJobCards />
        </Dashboard>
       </>
    }
}