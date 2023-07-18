// Higher Order Components
// Transforms components into other components
// Adding additional functionalities to the existing components.
import React from "react";
import { Route, Routes } from "react-router-dom";
import Defaultlayout from "../Layouts/Default.layout";

//...props = for spreading the class

const DefaultHOC = ({component: Component , ...rest}) => {
    return (
        <>
        

            <Defaultlayout>
                <Component />
            </Defaultlayout>
            
        </>
    )
    };

    export default DefaultHOC;