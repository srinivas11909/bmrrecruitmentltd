"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ApplyJob() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [fileError, setFileError] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      console.log('Selected File:', selectedFile);
      setFile(selectedFile);
    };

    const onSubmit = async (data) => {
      console.log(data)
        const file = data.file[0];

        if (file && file.type !== 'application/pdf') {
            setFileError('Only PDF files are accepted');
            return;
        }

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('contact', data.contact);
        formData.append('address', data.address);
        formData.append('comments', data.comments);
        formData.append('file', data.file[0]);


        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/applyJob`, {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                alert('Email sent successfully!');
                reset();
            } else {
                const errorText = await response.text(); // Read response as text
                console.error('Failed to send email:', errorText);
                alert(`Failed to send email: ${errorText}`);
            }
        } catch (err) {
            console.error('Failed to send email:', err);
            alert(`Failed to send email. ${err}`);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <div className="mb-2">
                        <input type="text" placeholder="Name" id="name" name="name" className="bg-gray-200 text-gray-700 placeholder:text-gray-500 border rounded-md focus:border-gray-300 outline-none px-3 py-2 w-full" {...register("name", { required: true })} />
                        {errors.name && <span className="text-red-500">Name is required</span>}
                    </div>
                    <div className="mb-2">
                        <input type="email" placeholder="Email" id="email" name="email" className="bg-gray-200 text-gray-700 placeholder:text-gray-500 border rounded-md focus:border-gray-300 outline-none px-3 py-2 w-full" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>
                    <div className="mb-2">
                        <input type="text" id="contact" className="bg-gray-200 text-gray-700 placeholder:text-gray-500 border rounded-md focus:border-gray-300 outline-none px-3 py-2 w-full" placeholder="Contact Number" name="contact" {...register("contact", {
                            required: true,
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Only numbers are allowed"
                            }
                        })} />
                        {errors.contact && <span className="text-red-500">Contact is required</span>}
                    </div>
                    <div className="mb-2">
                        <textarea rows={3} id="address" className="bg-gray-200 text-gray-700 placeholder:text-gray-500 border rounded-md focus:border-gray-300 outline-none px-3 py-2 w-full" placeholder="Address" name="address" {...register("address", { required: true })} />
                        {errors.address && <span className="text-red-500">Address is required</span>}
                    </div>
                    <div className="mb-2">
                        <textarea rows={3} id="comments" className="bg-gray-200 text-gray-700 placeholder:text-gray-500 border rounded-md focus:border-gray-300 outline-none px-3 py-2 w-full" placeholder="Comments" name="comments" {...register("comments", { required: true })} />
                        {errors.comments && <span className="text-red-500">Comments is required</span>}
                    </div>
                    <div className="mb-2">
                        <p className="text-base font-semibold font-sans">Upload Your CV (PDF Only)</p>
                        <input type="file" name="file" id="file" {...register('file', { required: true })} accept="application/pdf"  onChange={handleFileChange}/>
                     <p>
                     {errors.file && <span className="text-red-500">This field is required</span>}
                     {fileError && <span className="text-red-500">{fileError}</span>}
                     </p>
                    </div>
                    <div className="mt-3">
                        <button type="submit" className="border transition ease-in delay-100 px-3 min-w-20 py-2 text-indigo-500 hover:bg-indigo-600 hover:text-white rounded-md uppercase border-indigo-600">Apply Now</button>
                    </div>
                </div>
            </form>
        </>
    );
}
