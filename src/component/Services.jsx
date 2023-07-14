import React from 'react'
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

function Services() {

  const [slideBegOrNot, handleSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });
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

                  <div className='hover:bg-[#034ea1] hover:text-white w-auto text-center rounded p-1 cursor-pointer'>
                    {item.name}
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

            <div>
              <Sliders/>
            </div>

    </>


  )
}

export default Services