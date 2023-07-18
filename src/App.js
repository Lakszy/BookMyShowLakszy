import { Routes,Route } from "react-router-dom";

//axios
import axios from "axios";

//HOC

import DefaultHOC from "./HOC/Default.hoc.js";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/plays.page.js";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
     <Routes> 
    <Route path="/" element ={<DefaultHOC component = { HomePage }/>} /> 
    <Route path="/movie/:id" element ={<MovieHOC component = { Movie }/>} /> 
    <Route path="/Plays" element ={<DefaultHOC component = { Plays }/>} /> 
  </Routes>
    </>
  );
}
// / , /movie
export default App;