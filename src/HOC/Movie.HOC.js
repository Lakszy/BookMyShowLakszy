//Transforms component into another component
//Adding additional functionalities to the existing components.

import React from "react";
import { Routes } from "react-router-dom";

//Layouts
import MovieLayout from "../Layouts/Movie.layout";

const MovieHOC = ({ component: Component , ...rest }) => {
  //component
  //props -> path exact
  return (
    <>
  
      <MovieLayout>
       <Component/>
      </MovieLayout>
    </>
  );
};

export default MovieHOC;