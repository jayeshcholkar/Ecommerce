import React from 'react'
import {  Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from './photo/img1.jpg';
import img2 from './photo/img2.png';
import img3 from './photo/img3.jpg';
import img4 from './photo/img4.jpg';


const Slide = () => {
  return (
    <div className=" flex items-center justify-center ">

    <div className=' flex wrapper shadow-2xl w-[75rem] h-[32rem]'>
       <Swiper
        modules={[ Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>

        <SwiperSlide className='relative flex w-full h-[15rem]
     md:h-[25rem] sm:h-[25rem]  lg:h-[33rem] pt-5 px-5'>
        <img src={img1} alt="" className='object-cover 
       w-full h-[30rem] max-sm:h-48 rounded-[1rem] '/>
  
      </SwiperSlide>
      
      <SwiperSlide className='relative flex w-full h-[15rem]
     md:h-[25rem] sm:h-[25rem]  lg:h-[33rem] pt-5 px-5'>
        <img src={img2} alt="" className='object-cover 
       w-full h-[30rem] max-sm:h-48 rounded-[1rem] '/>
       
      </SwiperSlide>

      <SwiperSlide className='relative flex w-full h-[15rem]
     md:h-[25rem] sm:h-[25rem]  lg:h-[33rem] pt-5 px-5'>
        <img src={img3} alt="" className='object-cover 
       w-full h-[30rem] max-sm:h-48 rounded-[1rem] '/>
       
      </SwiperSlide>

      <SwiperSlide className='relative flex w-full h-[15rem]
     md:h-[25rem] sm:h-[25rem]  lg:h-[33rem] pt-5 px-5'>
        <img src={img4} alt="" className='object-cover 
       w-full h-[30rem] max-sm:h-48 rounded-[1rem] '/>
       
      </SwiperSlide>
      
      
    </Swiper>
      </div>
     </div> 
  )
}

export default Slide