import axios from 'axios';
import MovieNavbar from "../components/Navbar/MovieNavbar.component";
import Footdm from "../components/Footer/footer.Component";
import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';


import { MovieContext } from '../Context/movie.context'; 

 const MovieLayout = (props) => {
  const {id} = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  useEffect(() => {
    const requestMovie = async () => {
       const getMovieData = await axios.get(`/movie/${id}`);
       setMovie(getMovieData.data);
    };
    requestMovie();
  }, [id]);

    return ( 
        <>
          <MovieNavbar />
          {props.children}
<Footdm/>
        </>
        );
};



export default MovieLayout;
