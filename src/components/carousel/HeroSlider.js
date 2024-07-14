"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import "./HeroSlider.css"


export default function HeroSlider() {
    const slides = [
        {
          id: 1,
          title: 'Personalized Job Matching',
          description: 'We connect you with jobs that fit your skills and career goals.',
        },
        {
          id: 2,
          title: 'Expert Career Advice',
          description: 'Get guidance from our experienced consultants to advance your career.',
        },
        {
          id: 3,
          title: 'Top Employers',
          description: 'Access job opportunities from leading companies worldwide.',
        }
      ];
    return <>
     <Swiper
      effect={"fade"}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      fadeEffect={{ crossFade: true }}
      loop={true}
      grabCursor={true}
      loopedslides={slides.length}
      slidesPerView={1}
      modules={[EffectFade, Autoplay]}
    >
     {slides.map((item, index) => {
        return <SwiperSlide key={index}>
         <div className='flex items-center justify-center px-4 flex-col min-h-96 bg-indigo-800'>
            <div className='lg:max-w-5xl text-center py-16'>
                <div className='text-2xl md:text-3xl lg:text-5xl text-white font-bold mb-7 uppercase font-sans'>{item.title}</div>
                <div className='text-4xl md:text-5xl lg:text-7xl text-white font-semibold uppercase font-mono'>{item.description}</div>
            </div>
        </div>
        </SwiperSlide>
     })}
    </Swiper>

     </>
}