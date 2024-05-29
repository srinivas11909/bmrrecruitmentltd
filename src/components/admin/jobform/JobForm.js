"use client"


import { useState } from "react"
import TextEditor from "../TextEditor"
import {useFormState} from "react-dom"
import { useForm } from 'react-hook-form';
import { useRouter, useParams } from "next/navigation";

import { addJob } from "@/lib/actions"


export default function JobForm(){
    const [state, formAction] = useFormState(addJob, undefined)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [editorContent, setEditorContent] = useState('');

    const handleEditorChange = (content) => {
        setEditorContent(content);
    };
    const params = useParams();
    const router = useRouter();
    const createTask = async (formData) => {
        try {
          await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/jobs`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }, {cache: "no-store"});
          router.push("/admin");
          router.refresh();
        } catch (error) {
          console.error(error);
        }
      };
    
      const generateUrl = (title) => {
        return title.toLowerCase()
                    .replace(/[^a-zA-Z0-9]/g, '-') // Replace non-alphanumeric characters with hyphens
                    .replace(/-+/g, '-') // Replace consecutive hyphens with a single hyphen
                    .replace(/^-*/, '') // Remove leading hyphens
                    .replace(/-*$/, ''); // Remove trailing hyphens
      };

    const onSubmit = async (formData) => {
        console.log(formData)
        formData.description = editorContent
        formData.slug = generateUrl(formData.title)
        console.log(formData)
        try{
            //const savedJob  = await addJob(formData)
            const savedJob = await createTask(formData)
            alert("Job added successfully")
            reset()
            setEditorContent('')
        }catch(error){
            console.error("Error adding job:", error.message);

        }
    }
    return <>
       <div className="flex items-center mb-8">
          <h1 className="font-semibold text-lg md:text-2xl">
            Add Job
          </h1>
       </div>
       <div className="border shadow-sm rounded-lg p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="job title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Job title</label>
          <input type="text" placeholder="Enter job title" className="rounded-md border px-3 py-2 text-base w-full mb-3" name="title" {...register("title",{required: true, maxLength: 80})}/>
          <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Job Description</label>
          <TextEditor className="mb-4" name="desc" onContentChange={handleEditorChange}/>
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Select Location</label>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="locations" {...register("location",{required: true})} defaultValue={"Choose a country"}>
                <option value="select country">Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
         </select>
         <label htmlFor="jobtype" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Select Job type</label>
          <select id="jobtype" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" name="jobType" {...register("jobType",{required: true})} defaultValue={"All Types"}>
                <option value="All types">All types</option>
                <option value="Permanent">Permanent States</option>
                <option value="Contract">Contract</option>
                <option value="T to P">T to P</option>
         </select>
         <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Select Job Category</label>
         <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"  multiple={true} name="category" {...register("category",{required: true})} defaultValue={["Select Job Category"]}>
                <option value="Select Job Category">Select Job Category</option>
                <option value="administration">Administation</option>
                <option value="it">Information Technology</option>
                <option value="healthcare">Healthcare</option>
         </select>
         <button type="submit" className="rounded-md bg-indigo-500 border-indigo-500 text-white font-semibold p-2 px-5">Add Job</button>     
        </form>
       </div>
    </>
}