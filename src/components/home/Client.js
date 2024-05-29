"use client"

import  "./clients.css"
import Image from "next/image";
import { useEffect, useRef } from 'react';

export default function Client({secInfo, className}){
    const imageRef = useRef(null);

    useEffect(() => {
        const image = imageRef.current;
        if (!image) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const imageDirection = secInfo.imgDirection;
                    if (imageDirection === "right") {
                        image.classList.add('animated', 'fadeInRight');
                    } else {
                        image.classList.add('animated', 'fadeInLeft');
                    }
                }
            });
        });

        observer.observe(image);

        return () => {
            observer.unobserve(image);
        };
    }, []);
    return <>
       <section  className={className}>
        <div className="container mx-auto p-5">
            {
             secInfo.imgDirection == "right" ? 
             <div className="flex min-[320px]:flex-col-reverse md:items-center sm:flex-col-reverse md:flex-row lg:flex-row flex-wrap">
                <div className="sm:w-full md:w-2/6 md:pr-2 max-[768px]:text-center">
                  <h2 className="text-3xl text-white uppercase">{secInfo.title}</h2>
                  <p className="text-white text-base mb-5">{secInfo.desc}</p>
                    {secInfo?.cta  ? <a className="px-4 py-3 text-white text-base border-white border rounded-sm cursor-pointer uppercase transition ease-in-out delay-150 hover:scale-110">{secInfo.cta.ctaText}</a>:null}                
                </div>
                <div className="sm:w-full md:w-4/6">
                    <div className="flex items-center img-margin p-2.5">
                        <Image ref={imageRef} src="/assets/images/client.jpg" alt="clients" loading='lazy' sizes="100vw" style={{ width: '100%',height: 'auto'}} width={500} height={300}/>
                    </div>
                </div>
             </div>
             : <div className="flex flex-col md:items-center lg:flex-row">
                <div className="sm:w-full md:w-4/6">
                   <div className="flex items-center img-margin p-2.5">
                    <Image ref={imageRef} src="/assets/images/client.jpg" alt="clients" loading='lazy' sizes="100vw" style={{width: '100%',height: 'auto'}} width={500} height={300}/>
                    </div>
                </div>
                <div className="max-[768px]:text-center sm:w-full md:w-2/6 md:pl-3">
                  <h2 className="text-3xl text-white uppercase">{secInfo.title}</h2>
                  <p className="text-white text-base mb-5">{secInfo.desc}</p>
                  {secInfo?.cta  ? <a className="px-4 py-3 text-white text-base border-white border rounded-sm cursor-pointer uppercase transition ease-in-out delay-150 hover:scale-110">{secInfo.cta.ctaText}</a>:null}                
                </div>
             </div>
            }
        </div>
       </section>
    </>
}