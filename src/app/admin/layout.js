//"use client"
import Navigation from "@/components/admin/dashboard/Navigation"
//import { useSession, signOut } from 'next-auth/react';

export default function AdminLayout({children}){
    // const data = useSession()
    // console.log(data)
    
    return <>
      {/*data.status  === "authenticated" ? 
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                <Navigation />
         </div> 
         {children}
       </div> : 
<div>{children}</div>*/}
      
     
       <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                <Navigation />
         </div> 
         {children}
       </div>
    </>
}