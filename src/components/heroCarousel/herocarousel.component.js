import React,{useEffect, useState} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NextArrow,PrevArrow } from "./Arrows.component";


const HeroCarousel = () => {
     const settingsLg ={
        arrows:true,
        autoplay:true,
        centerMode:true,
        speed: 200,
        slidesToShow:1,
        slidesToScroll:1,
        centerPadding:"300px",
        infinite:true,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
    }
    
    //medium and small full width
    const settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll:1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
      };
//using hooks to fetch the images?!
const [images ,setImages] = useState([]);

useEffect(() => {
        const requestNowPlayingMovies = async() => {
                const getImages =await axios.get("/tv/top_rated");
                // const getImages =await axios.get("/tv/popular");

                setImages(getImages.data.results);
        }
        requestNowPlayingMovies();
}, []);

      return(
        <>
<div className="lg:hidden">
<HeroSlider{...settings}>
        {
      
images.map((image) =>
<div className="w-full h-96 md:h-76 py-3">
<img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
 className="w-full h-full hover:cursor-pointer" alt="logo"/>

</div>
)
        }
        </HeroSlider>
 </div>

<div className="hidden lg:block">
<HeroSlider{...settingsLg}>
        {
      
images.map((image) =>
<div className="w-full h-96 px-2 py-3 ">
    <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} 
   alt="logo" className="w-full h-full rounded hover:cursor-pointer " />

</div>
)
}
</HeroSlider>
 
 </div>

        </>
      );
}
export default HeroCarousel;