import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react'
import './Local.css'

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Slider() {

    




    return (
        <>
            {/* <div>Slider</div> */}

            <div className="image-container">
                <img className="image" src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/EMR.jpg" alt="..." />
                <div className="image-h">We Provide 24/7 Emergency Services</div>
                <div className="image-no">Please free to contact us at +91 9513631568 for emergency cases</div>
                <div className="image-b"><p className='p-2  mt-6 text-white border w-56 text-center rounded-3xl font-bold'>Call Now</p></div>
            </div>


            {/* <div className='bg-gradient-to-l from-blue-100 from-10% via-sky-400 via-40% to-emerald-600 to-90% p-10 pl-80'>
                <h1 className='text-white text-xl font-bold mt-6'>We Provide 24/7 Emergency Services</h1>
                <p className='text-white  mt-4'>Please free to contact us at +91 9513631568 for emergency cases</p>
                <p className='p-2  mt-6 text-white border w-60 text-center rounded-3xl'>Call Now</p>
            </div> */}


            {/* <div className='w-96 h-96 overflow-hidden'>
            <img className='images' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility1.webp" alt="..."/>
            </div> */}
            {/* <div className='flex flex-row m-3'>
                <div className='slide'>
                    <div className="slider-container">
                        <div className='h-96 w-96 overflow-hidden ml-5'>
                            <img className='image' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility1.webp" alt=".." />
                        </div>
                    </div>
                </div>
                <div className='slide'>
                    <div className="slider-container">
                        <div className='h-96 w-96 overflow-hidden ml-5'>
                            <img className='image' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility12.webp" alt=".." />
                        </div>
                    </div>
                </div>
                <div className='slide'>
                    <div className="slider-container">
                        <div className='h-96 w-96 overflow-hidden ml-5'>
                            <img className='image' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility7.webp" alt=".." />
                        </div>
                    </div>
                </div>
                <div className='slide'>
                    <div className="slider-container">
                        <div className='h-96 w-96 overflow-hidden ml-5'>
                            <img className='image' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility10.webp" alt=".." />
                        </div>
                    </div>
                </div>
            </div> */}



            {/* <div className='flex flex-row m-3'>
                <marquee behavior="" direction="">
                    <div className='flex flex-row'>
                        <div className='h-96 w-96 overflow-hidden ml-5'>
                            <img className='image' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility1.webp" alt=".." />
                        </div>
                        <div className='h-96 w-96 overflow-hidden ml-5'>
                            <img className='image' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility2.webp" alt=".." />
                        </div>
                        <div className='h-96 w-96 overflow-hidden ml-5'>
                            <img className='image' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility3.webp" alt=".." />
                        </div>
                        <div className='h-96 w-96 overflow-hidden ml-5'>
                            <img className='image' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility4.webp" alt=".." />
                        </div>
                        <div className='h-96 w-96 overflow-hidden ml-5'>
                            <img className='image' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility5.webp" alt=".." />
                        </div>
                        <div className='h-96 w-96 overflow-hidden ml-5'>
                            <img className='image' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility6.webp" alt=".." />
                        </div>
                        <div className='h-96 w-96 overflow-hidden ml-5'>
                            <img className='image' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility7.webp" alt=".." />
                        </div>
                        <div className='h-96 w-96 overflow-hidden ml-5'>
                            <img className='image' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility9.webp" alt=".." />
                        </div>
                    </div>
                </marquee>
                            </div> */}




            <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
                <div className='h-96 w-96 flex flex-row m-4' >
                    <img className='image ' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility1.webp" alt="Image 1" />
                    <img className='image pl-5' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility2.webp" alt="Image 1" />
                    <img className='image pl-5' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility3.webp" alt="Image 1" />
                    <img className='image pl-5' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility4.webp" alt="Image 1" />

                </div>
                <div className='h-96 w-96 flex flex-row m-4' >
                    <img className='image ' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility4.webp" alt="Image 1" />
                    <img className='image pl-5' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility5.webp" alt="Image 1" />
                    <img className='image pl-5' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility6.webp" alt="Image 1" />
                    <img className='image pl-5' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility7.webp" alt="Image 1" />

                </div>
                <div className='h-96 w-96 flex flex-row m-4' >
                    <img className='image ' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility9.webp" alt="Image 1" />
                    <img className='image pl-5' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility10.webp" alt="Image 1" />
                    <img className='image pl-5' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility11.webp" alt="Image 1" />
                    <img className='image pl-5' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility12.webp" alt="Image 1" />

                </div>
                <div className='h-96 w-96 flex flex-row m-4' >
                    <img className='image ' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility13.webp" alt="Image 1" />
                    <img className='image pl-5' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility14.webp" alt="Image 1" />
                    <img className='image pl-5' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility15.webp" alt="Image 1" />
                    <img className='image pl-5' src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/jaipur-facility1.webp" alt="Image 1" />

                </div>
            </Carousel>



        </>
    )

}

export default Slider

// 