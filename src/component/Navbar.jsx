import React, { Component } from 'react'
import { VscLocation } from "react-icons/vsc";
import { GiSmartphone } from "react-icons/gi";
import "./animation.css"



export class Navbar extends Component {
    render() {
        return (

            <>
                <div className='bg-blue-900'>. </div>
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mt-6 mb-5 h-20 flex" >
                    <div className="navbar">
                        <div class="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-16 w-84 mr-10" src={"https://aisense.co.in/assets/img/logo.png"} />
                        </div>
                    </div>
                    <div className="navbar">

                        <div className='text-blue-900 font-semibold mr-16 flex'>
                            <GiSmartphone className=' text-blue-900 h-12 w-16 ml-10 ' /> Call Us Now<br className='text-gray-500' />+91 8530218319

                        </div>
                    </div>
                    <div className="navbar">
                        <div className='text-blue-900 font-bold mr-16 ml-4'><VscLocation className='h-14 w-16 ' />Shegaon baner</div>
                    </div>
                    
                        <div style={{ width: "2px", height: "5rem", background: "grey", marginLeft: "5rem" }}></div>
                        <div className="navbar">
                        <button className="group relative h-16 w-56 overflow-hidden ml-5 mt-2 rounded-full bg-gradient-to-l  from-blue-900 from-10% via-sky-700 via-30% to-emerald-500 to-95% ... text-s font-sans    text-white ">
                            Book an Appointment
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar