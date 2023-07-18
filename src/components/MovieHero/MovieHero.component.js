import React from "react";
import launchRazorPay from "../launchRazorpay.component"

import {FaHeart} from "react-icons/fa";
import {BiChevronRight} from "react-icons/bi";
import { SiWhatsapp } from "react-icons/si";
const MovieHero =() => {
    return (
        <>
        {/* small screen */}
        {/* md:hidden means only visible for large screen */}
        <div className="md:hidden"> 
        <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
        alt="poster"/>
        <button onClick={launchRazorPay} class=" absolute mb-4 bg-red-500
 hover:bg-red-400 text-white font-semibold px-2 items-center border-b-4
  border-red-700 hover:border-red-500 rounded -mt-16 ml-8">
  Book Tickets
</button>
       </div>

        {/* medium screen */}
        <div className="hidden md:block lg:hidden">    
        <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
        alt="poster"        
        />
<button onClick={launchRazorPay} class=" absolute mb-4 bg-red-500
 hover:bg-red-400 text-white font-bold py-2 ps-4 px-7 items-center border-b-4
  border-red-700 hover:border-red-500 rounded  -mt-32 ml-28">
  Book Tickets
</button>


</div>


{/* large screen */}
<div className="relative hidden lg:block" style={{height:"40rem"}}> 

<div className="absolute h-full w-full z-10"

style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
/>




<div className="absolute z-50 end-16 top-24">


<div className="text-5xl font-bold text-white mb-5">Shang-Chi and The Legends of Ten Rings </div>

<div className="container flex items-start">
<div><FaHeart className="text-red-500 text-2xl mt-3 hover:cursor-wait hover:animate-ping"/></div>
<div className="text-white px-2 font-semibold text-4xl mb-3">81.51%</div>
<div className="flex mt-3 text-white">2.701k ratings <BiChevronRight className="mt-1.5 hover:cursor-pointer "/></div>
</div>

<div className="container flex items-start w-96 space-between rounded-sm bg-bGCol-800">
    <div>
        <div className="text-lg ml-2 text-white font-semibold">Review & Rating Section</div>
        <div className="text-lg ml-2 text-bGCol-300 font-semibold">Your ratings matter</div>
    </div>
    <div className="bg-white rounded-sm hover:cursor-pointer text-base font-semibold ml-20 mt-4 px-2">Rate Now</div>
</div>
<div className="bg-white mt-4 mb-3 block text-sm font-semibold w-96">2D, 3D SCREENX ,3D, IMAX 2D, 4DX 3D, IMAX 3D, 4DX</div>

<div className="bg-white text-base mb-3 font-semibold w-96">English, Hindi, Kannada, Malayalam, Tamil, Telugu</div>


<div className="text-white text-xl mb-3"> 2h 30m  • Science Fiction Adventure Action  • UA  • 2023-05-03</div>

<button onClick={launchRazorPay} class=" absolute mb-4 bg-red-500
 hover:bg-red-400 text-white font-bold py-2 ps-4 px-7 items-center border-b-4
  border-red-700 hover:border-red-500 rounded">
  Book Tickets
</button>
<div className=" hover:cursor-pointer hover:w-32 hover:font-semibold hover:bg-green-500 ml-40 container flex items-center h-12 py-2 px-3 bg-bGCol-600 w-28 rounded-md">
<button className="flex items-start ">
    <SiWhatsapp className="text-white mt-2 text-xl hover:animate-spin"/>
   <h1 className="ml-2 text-white text-2xl hover:animate-bounce">Share</h1>
    </button>
</div>


</div>



<div className="absolute z-30 w-64 h-96 left-64 top-24">
    <img 
    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
    alt="poster"
    className="h-full w-full"
/>
</div>


<img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
        alt="poster" 
        className="w-full h-full"       
        />

<div>

</div>



</div>
        </>
    )

};
export  default MovieHero;
