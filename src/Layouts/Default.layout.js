import React,{useEffect , useState} from "react";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
// import DefaultHOC from "../HOC/Default.hoc";
// import Temp from "../components/temp";
import Navbar from "../components/Navbar/navbar.components";
import HeroCarousel from "../components/heroCarousel/herocarousel.component";
import Footdm from "../components/Footer/footer.Component";

import axios from "axios";



const Defaultlayout = (props) =>{
return(
    <>
    
    <Navbar/>
    <HeroCarousel/>
    {props.children}
    <Footdm/>
    </>
);
};

export default Defaultlayout;
