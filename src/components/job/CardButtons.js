"use client"

import { Trash2, Edit } from "react-feather";
export default function CardButtons({handleDeleteJob, handleUpdateJob}){
    return <>
      <div className="ml-auto">
        <button className="mr-2" onClick={handleDeleteJob}><Trash2 size={24} /></button> 
        <button onClick={handleUpdateJob}><Edit size={24}/></button></div> 
    </>
}