"use client"
import { useState } from "react"


export default function ContactForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        message: ''
    });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors = {};
    let valid = true;

    if (!formData.name) {
      tempErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email) {
      tempErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
      valid = false;
    }

    if (!formData.contact) {
      tempErrors.contact = 'Contact is required';
      valid = false;
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.contact)) {
      tempErrors.contact = 'Contact number is invalid';
      valid = false;
    }

    if (!formData.message) {
      tempErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };  
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (validate()) {
          setIsSubmitting(true);
          try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contact`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
    
            if (res.ok) {
              setFormData({ name: '', email: '', contact: '',message: '' });
              alert('Message sent successfully');
            } else {
              alert('Failed to send message');
            }
          } catch (error) {
            console.error(error);
            alert('An error occurred while sending the message');
          } finally {
            setIsSubmitting(false);
          }
        }
      };    
    return <>
       <div className="p-6 h-full flex items-center">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder={errors.name ? errors.name :"Enter your name"} className={`w-full px-3 py-2 border rounded-md ${errors.name ? "border-red-500": "border-gray-300"} mb-5 outline-0	focus:border-white`} name="name" value={formData.name} onChange={handleChange}/>
            <input type="email" placeholder="Enter your email" className={`w-full px-3 py-2 border rounded-md ${errors.email ? "border-red-500": "border-gray-300"} mb-5 outline-0 focus:border-white`} name="email" value={formData.email} onChange={handleChange}/>            
            <input type="text" placeholder="Enter your contact number" className={`w-full px-3 py-2 border ${errors.contact ? "border-red-500": "border-gray-300"} rounded-md mb-5 outline-0 focus:border-white`} name="contact" value={formData.contact} onChange={handleChange}/>            
            <textarea placeholder={errors.message ? errors.message: "Enter your message"} className={`w-full px-3 py-2 border ${errors.message ? "border-red-500": "border-gray-300"} foucs:border-white resize-none mb-5 outline-0 rounded-md`} name="message" value={formData.message} onChange={handleChange}/>
            <button type="submit" disabled={isSubmitting} className="uppercase text-base border-width-1 border rounded-md outline-0 border-white px-3 py-2 text-white md:min-w-36 hover:border-indigo-400 hover:bg-indigo-400 transition ease-in-out duration-150 hover:duration-150">{isSubmitting ? 'Sending...' : 'Send Message'}</button>
        </form>
       </div>
    </>
}