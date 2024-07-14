"use client"
import { useSession, signOut } from 'next-auth/react';
import Dashboard from "./Dashboard"
import JobForm from "../jobform/JobForm"
import LoginPage from '../login/Login';
export default function MainPage(){
    const data = useSession();
    console.log(data);
    if(data.status === "unauthenticated"){
        return <LoginPage />
    }else{
    return <>
       <Dashboard title={"srini"}>
            <JobForm />
        </Dashboard>
       </>
    }
}
