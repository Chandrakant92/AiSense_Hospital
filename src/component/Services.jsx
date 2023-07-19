import React from 'react'
import './style.css'
import { useRef, useState } from "react";
import CoursesApi from "./coursesApi";

import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import Sliders from './Sliders';
import { FcOk } from "react-icons/fc";







function Services() {

  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });

  const [id, setId] = useState('');
  const [course, setCourse] = useState('');


  const handleName = (name) => {
    console.log("name:-  ", name);
    const course = CoursesApi.find((course) => course.name === (name));
    console.log(course);
    setId(name)
    setCourse(course)

  }

  const SlideRef = useRef();

  const handleNext = () => {
    SlideRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    SlideRef.current.swiper.slidePrev();
  };

  const onSlideChange = (swiper) => {
    handleSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };


  const { isLast, isFirst } = slideBegOrNot;


  return (
    <>

      <div className="flex m-5">
        <div className=" ml-5 mr-5 text-white cursor-pointer bg-[#034ea1]  rounded-full px-3 py-1">
          <ArrowBackIcon
            className={''}
            onClick={handlePrev}
            fontSize="small"
          />
        </div>
        <Swiper
          // slidesPerView={1}
          // spaceBetween={0 }
          className={" font-medium text-lg"}
          ref={SlideRef}
          onSlideChange={onSlideChange}
          pagination={{
            el: ".swiper-paginations",
            type: "fraction",
          }}
          navigation={false}
          modules={[Pagination, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            550: {
              slidesPerView: 1.5,
            },
            700: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 2.5,
            },
            1050: {
              slidesPerView: 3,
            },
            1350: {
              slidesPerView: 4,
            },
            1800: {
              slidesPerView: 4.5,
            },
            2000: {
              slidesPerView: 5,
            },
          }}
        >
          {CoursesApi.map((item) => {
            return (
              <SwiperSlide key={item.id}>

                <div className='hover:bg-[#034ea1] hover:text-white w-auto text-center rounded p-1 cursor-pointer '>
                  <button onClick={() => handleName(item.name)}> {item.name}</button>
                </div>


              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="mr-5 text-white cursor-pointer bg-[#034ea1]  rounded-full px-3 py-1">
          <ArrowForwardIcon
            fontSize="small"
            className={''}
            onClick={handleNext}
          />
        </div>
      </div>



      {course ? (<div>
        <Sliders key={course.id}
          name={course.name}
          duration={course.duration}
          info={course.info} />
      </div>) : (
        <div className='sliderCon'>
          <div className='m-10 flex flex-row  '>
            <div className=''>
              <img src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/image_ortho.png" alt="..." className='flip-animation ' />
            </div>
            <div className='w-3/4  slide-in '>
              <div className='ml-12'>
                <h1 className='font-bold text-2xl text-indigo-800'>Personalized Wellness Assessment</h1>
                <p className='mt-8 text-base font-serif'>Our naturopathic consultants will conduct a comprehensive assessment of your health and lifestyle to gain a thorough understanding of your unique needs and concerns. Through in-depth discussions and analysis, we will identify potential imbalances and develop a personalized wellness plan tailored to your specific requirements.</p>

                <div className='mt-6'>
                  <div className='flex flex-row mt-8 text-base font-serif '>
                    <p className='flex flex-row'>  <FcOk className='mt-1 mr-5' /> Sports Injury Treatment</p>
                    <p className='flex flex-row ml-20'>  <FcOk className='mt-1 mr-5' /> Sports Injury Treatment</p>
                  </div>
                  <div className='flex flex-row mt-2 text-base font-serif '>
                    <p className='flex flex-row'>  <FcOk className='mt-1 mr-5' /> Sports Injury Treatment</p>
                    <p className='flex flex-row ml-20'>  <FcOk className='mt-1 mr-5' /> Sports Injury Treatment</p>
                  </div>
                  <div className='flex flex-row mt-2 text-base font-serif '>
                    <p className='flex flex-row'>  <FcOk className='mt-1 mr-5' /> Sports Injury Treatment</p>
                    <p className='flex flex-row ml-20'>  <FcOk className='mt-1 mr-5' /> Sports Injury Treatment</p>
                  </div>
                </div>
                <div className='bg-gradient-to-r  from-blue-900 from-10% via-sky-700 via-30% to-emerald-600 to-90% w-56 py-2 mt-10 rounded cursor-pointer flip-button'>
                  <p className='p-1 text-l font-serif text-white text-center '>Book An Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>



      )}





    </>


  )
}

export default Services