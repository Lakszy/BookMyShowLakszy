import { BiSolidRightArrow } from "react-icons/bi";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";


import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




// import launchRazorPay from "../components/launchRazorpay.component";
import axios from "axios";






// import Premier from "../components/Premier/Premier.component";
// import TempPoster from"../config/TempPoster.config";


import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
// import { NextArrow,PrevArrow } from "./Arrows.component";






const HomePage = () => {


    const [onairMovies, setonAirMovies] = useState([]);
 
    useEffect(() => {


        const requestonAirMovies = async () => {
            const getonAirMovies = await axios.get("/movie/top_rated");
            setonAirMovies(getonAirMovies.data.results);
        };
        requestonAirMovies();
    }, []);


    const [upcomingMovies, setUpcomingMovies] = useState([]);


    useEffect(() => {


        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("/trending/movie/day");
            setUpcomingMovies(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    }, []);


    const [popularMovies, setPopularMovies] = useState([]);


    useEffect(() => {


        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);


    return (
        <>
        <div className="container mx-auto px-10 items-center hover:cursor-pointer  md:block  md:m-auto md:w-5/6 lg:w-4/5 sm:w-full">
            <div className="flex justify-between items-center  mt-8 ">
            <h2 className=" text-2xl font-bold -mb-36 sm:-mb-40">
                        Upcoming Movies
                    </h2>
               
                </div>
                </div>
            <div className=" items-center md:m-auto md:w-5/6 lg:w-4/5 sm:w-full">
                    <PosterSlider
                    images={upcomingMovies}
                    isDark={false}
                    />
                   
            </div>
            <div>
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" className="lg:flex m-auto w-full justify-between items-center mt-28 mb-10" alt="Rupay"/>
            </div>

            <div className="container mx-auto px-16 py-16 ">
                <h1 className="text-2xl font-bold text-gray-800 px-1 py-8">The Best Of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>


            <div className="bg-navCol-50 py-16">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png" alt="Banner" />
                <div className="container ">
                    <div>
                    </div>
                    <PosterSlider
                        className="flex" md="w-4/5" lg="w-5/6"
                        images={popularMovies} title="Premier Every Friday"  isDark={true}/>


                </div>
            </div>


            <div className="container mx-auto px-10 items-center hover:cursor-pointer  md:block  md:m-auto md:w-5/6 lg:w-4/5 sm:w-full">
            <div className="flex justify-between items-center  mt-8 ">
            <h2 className=" text-2xl font-bold -mb-36 sm:-mb-40">
                        Online Streaming 
                    </h2>
               
                </div>
                <PosterSlider
                    className="rounded-lg "
                    images={upcomingMovies}
                    isDark={false}
                />
            </div>

            <div className="container mx-auto px-10 items-center hover:cursor-pointer  md:block  md:m-auto md:w-5/6 lg:w-4/5 sm:w-full">
            <div className="flex justify-between items-center  mt-8 ">
            <h2 className=" text-2xl font-bold -mb-36 sm:-mb-40">
                        Top Rated Movies
                    </h2>
                   
                </div>


                <div>
                </div>
                <PosterSlider
                    images={onairMovies}
                    className="flex" md="w-4/5" lg="w-5/6"
                    isDark={false}
                />
            </div>


        </>
    );
};


export default HomePage;

