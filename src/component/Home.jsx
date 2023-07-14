import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import Header from './header'
import Services from './Services';
import Slider from './Slider'
import Footer from './Footer'

 function Home () {


        return (
            <>   
                <Navbar />
                <Header/>
                <Services/>
                <Slider/>
                <Footer/>
            </>


        )
    
}

export default Home