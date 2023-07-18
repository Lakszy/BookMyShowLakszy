import React from "react";




 export const NextArrow = (props) =>{
return(
    <>
    <div className={props.className}
    style={{ ...props.style , 
        backgroundColor:"black",display: "flex",paddingRight:"20px", 
         borderRadius: "5px 5px 5px 5px",opacity: "0.6" , 
       width: "3.5rem" ,  height: "3.5rem" ,paddingLeft:"20px", 
        alignItems: "center" ,  justifyContent: "center",transform: "translateX(50%)"}}
     onClick ={props.onClick}
    />
    </>
)
}
export const PrevArrow = (props) =>{
    return(
        <>
       <div className={props.className}
     style={{ ...props.style , 
        backgroundColor:"black",display: "flex",paddingRight:"20px", 
         borderRadius: "0px 5px 5px 0px",opacity: "0.6" , 
       width: "3.5rem" ,  height: "3.5rem" ,paddingLeft:"20px", 
        alignItems: "center" ,  justifyContent: "center",transform: "translateX(-50%)"}}
     onClick ={props.onClick}
     />
        </>
    )
}