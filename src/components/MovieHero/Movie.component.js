import React from "react";
const Movie = (props) =>{
    return (
        <>
        <div className=" mx-auto flex flex-col items-center gap-1 px-1 py-16">
            <div className="h-80">
    <img  src={`https://image.tmdb.org/t/p/original${props.poster_path}`} 
    alt={props.original_title} className="w-full h-full rounded-xl"/>
            </div>
            {/*  for heading->title */}
            <h3 className={`text-lg font-bold not-italic ${
                props.isDark ?"text-white" : "text-gray-700"
            }`}
            >{props.title}</h3>

            {/* for the paragraph->Descrp */}
           <p className={`text-sm font-semibold not-italic ${
                props.isDark ?"text-white" : "text-gray-500"
            }`}>{props.subtitle}</p>
        </div>
        </>
    )

};
export default Movie;