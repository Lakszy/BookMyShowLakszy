// import React from "react";
// import Poster from "../Poster/Poster.component";

// import settings from "../../config/PosterCarousal.config";
// import Slider from "react-slick";
// import { BiChevronRight } from "react-icons/bi";
// const PosterSlider = (props) =>{
//     return(
//     <>
     
//             <h2 className={`text-2xl  py-8 font-bold ${
//                 props.isDark ? "text-white" : "text-gray-800"
//             }`
//         }>{props.title}</h2>
//             <p className="text-white text-sm ">{props.subtitle}</p>
        
//             <a href="http://localhost:3000/plays">
//                 <span className="flex mt-16 ite text-red-600 hover:underline"> See All <BiChevronRight className="-pt-2 mt-1"/></span>
//             </a>
//         <Slider {...settings}>
//             {props.images.map((image)=>(
//             <Poster {...image} isDark={props.isDark}/>

//             ))}
//         </Slider>
    
    
//     </>
//     )
// }
// export default PosterSlider;











import React from "react";
import PremierSlider from "react-slick";
import settings from "../../config/PosterCarousal.config";
import Poster from "../Poster/Poster.component"
import {BsChevronRight} from "react-icons/bs";
const PosterSlider = (props) => {
  return (
    <>
      
        <div className=" mt-16  flex justify-between items-center ">
         <div> <h3 className={`text-2xl font-bold ${props.isDark ? "text-white font bold" : "text-grey-700"}`}>{props.title}</h3></div>
        <a href="http://localhost:3000/plays  ">
            <span className="hover:underline flex items-center text-red-500 text-sm hover:cursor-pointer pr-6">See All  <BsChevronRight className="ps-1 " />
          </span></a>
          
      </div>
      <PremierSlider {...settings}>
        {props.images.map((image) => (
          <Poster{...image} isDark={props.isDark} />
        ))}
      </PremierSlider>
    </>
  )
}
export default PosterSlider;