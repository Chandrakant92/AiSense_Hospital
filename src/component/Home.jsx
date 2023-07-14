import { NavLink } from "react-router-dom";
import React, { Component } from 'react'
import Footer from "./Footer";
import Slider from "./Slider";
import About from "./About";

export class Home extends Component {

    render() {
        return (
            <>
            <div className="text-center"> Home </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* <About/> */}
                <About/>
                <Slider/>    
                <br />           
               <Footer/>
            </>


        )
    }
}

export default Home