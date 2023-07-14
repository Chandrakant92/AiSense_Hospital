import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import Header from './header'
import Services from './Services';


export class Home extends Component {
    static propTypes = {}

    render() {
        return (
            <>
                <Navbar />
                <Header/>
                <Services/>
            </>


        )
    }
}

export default Home