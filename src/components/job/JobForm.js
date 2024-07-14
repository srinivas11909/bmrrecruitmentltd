"use client"

import { useState , useEffect} from "react"
import TextEditor from "../admin/TextEditor";
import { useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
export default function EditJob({data, onClose, params}) {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [editorContent, setEditorContent] = useState(data.description);
    const handleEditorChange = (content) => {
        setEditorContent(content);
    };
    useEffect(() => {
        setValue("title", data.title);
        setValue("location", data.location);
        setValue("jobType", data.jobType);
        setValue("category", data.category);
      }, [data, setValue]);
      //const params = useParams();
      const router = useRouter();  
    const onSubmit = async (formData) => {
        const fullData = {
            ...formData,
            slug: generateUrl(formData.title),
            description: editorContent,
          };
          try{
            //const savedJob  = await addJob(formData)
            await updateJob(fullData)
            alert("Job details updated successfully");
            onClose()
            router.refresh();
            
        }catch(error){
            console.error("Error adding job:", error.message);

        }
      
    }
    const updateJob = async (formData) => {
        try {
          const response=await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/jobs/${data.slug}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }, {cache: "no-store"});
          if (!response.ok) {
            throw new Error('Failed to update job');
          }
          router.push("/admin/view-all-jobs");
          router.refresh()
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
    return <>
       <div className="border shadow-sm rounded-lg p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="job title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Job title</label>
            <input type="text" placeholder="Enter job title" className="rounded-md border px-3 py-2 text-base w-full mb-3" name="title" {...register("title",{required: true, maxLength: 80})} />
            {errors.title && <span className="text-red-500">This field is required</span>}
            <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Job Description</label>
            <TextEditor className="mb-4" name="desc" onContentChange={handleEditorChange} content={editorContent} />
            {errors.title && <span className="text-red-500">This field is required</span>}

            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Select Location</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="locations" {...register("location",{required: true})}>
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
            </select>
            <label htmlFor="jobtype" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Select Job type</label>
            <select id="jobtype" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" name="jobType"  {...register("jobType",{required: true})}>
                    <option selected>All types</option>
                    <option value="Permanent">Permanent States</option>
                    <option value="Contract">Contract</option>
                    <option value="T to P">T to P</option>
            </select>
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Select Job Category</label>
            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"  multiple name="category" {...register("category",{required: true})}>
                    <option selected>Select Job Category</option>
                    <option value="administration">Administation</option>
                    <option value="it">Information Technology</option>
                    <option value="healthcare">Healthcare</option>
            </select>
            <button type="submit" className="rounded-md bg-indigo-500 border-indigo-500 text-white font-semibold p-2 px-5">Add Job</button>     
            </form>
       </div>
     </>
}