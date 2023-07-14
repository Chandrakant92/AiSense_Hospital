import React from 'react'
import "./style.css"
import { FcOk } from "react-icons/fc";

function Sliders() {



  return (
    <>
      <div className='m-10 flex flex-row'>
        <div className='w-40%'>
          <img src="https://www.manipalhospitals.com/campaign/hospitals/pune-baner/img/image_ortho.png" alt="..." className='flip-animation ' />
        </div>
        <div className='w-3/4 mr-60 slide-in '>
          <div className='ml-12'>
            <h1 className='font-bold text-2xl text-indigo-800'>Orthopaedics</h1>
            <p className='mt-8 text-base font-serif'>Orthopaedics is the branch of medicine that deals with the prevention or correction of deformities, disorders and injuries of the musculoskeletal system. Orthopaedic surgeons use a variety of techniques to treat conditions such as broken bones, torn ligaments, sprains, strains, joint problems, and congenital deformities. Orthopaedic surgery can be performed on patients of all ages, from infants to the elderly. In most cases, orthopaedic surgery is performed on an outpatient basis, which means the patient can go home the same day. However, some procedures may require a brief hospital stay. The goal of orthopaedic surgery is to restore the function and mobility of the musculoskeletal system. Orthopaedic surgeons work closely with other medical professionals, such as physical therapists, to ensure that patients receive the best possible care.</p>

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
    </>

  )
}

export default Sliders