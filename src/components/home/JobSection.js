"use client"
import Dropdown from "../dropdown/Dropdown";
import RecentJob from "./RecentJob";
//import { useEffect, useState } from "react";

export default function JobSection() {
    // const [county, setCounty] = useState([])
   
    // const getCountyList = async () => {
    //     try{
    //     const response = await fetch(`https://us1.locationiq.com/v1/autocomplete.php?key=${process.env.LOCATION_KEY}&q=UK&tag=county&format=json`)
    //     const data = await response.json();
    //     console.log(data)
    //    }catch(err){
    //     console.log(err);
    //    }
    // }
   
    // useEffect(() => {
    //      getCountyList()
    // }, [])

    return <>
      <section className="job-sec bg-white mb-10">
         <div className="container mx-auto">
            <h2 className="text-3xl text-gray-600 uppercase text-center">Job Search</h2>
            {/* <div className="mt-4 flex justify-center items-center">
               <Dropdown items={
                    [
                        {name: "All Lcoations", value: "all"},
                        {name: "United States", value: "USA"},
                        {name: "France", value: "FR"},
                    ]
                }/>
                <Dropdown items={
                    [
                        {name: "All Lcoations", value: "all"},
                        {name: "United States", value: "USA"},
                        {name: "France", value: "FR"},
                    ]
                }/>
                <Dropdown items={
                    [
                        {name: "All Lcoations", value: "all"},
                        {name: "United States", value: "USA"},
                        {name: "France", value: "FR"},
                    ]
                }/>
                <button className="border border-gray-400 px-4 py-2 rounded-md">Search</button>
            </div> */}
         </div> 
            <div className="py-6 bg-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                     <RecentJob />
                </div>
            </div>

      </section>
    </>
}
