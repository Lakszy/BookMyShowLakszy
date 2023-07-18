import React, { useEffect, useState } from "react";
import axios from "axios";
import Poster from "../components/Poster/Poster.component"
import PlaysFilter from "../components/PlaysFilter/PlaysFilter.Component"
import Footdm from "../components/Footer/footer.Component";
const Plays = (props) => {
    const [trendingmovies, settrendingmovies] = useState([]);
    useEffect(() => {
        const requesttrendingmovies = async () => {
            const gettrendingmovies = await axios.get("/trending/movie/day");
            settrendingmovies(gettrendingmovies.data.results);
        }
        requesttrendingmovies();
    }, []);
    console.log(trendingmovies);
    return (
        <>
            <div className="container mx-auto px-4 flex flex-row bg-gray-100">
                <div className=" hidden xl:block lg:w-1/4 ml-20 rounded-sm mt-16">
                    <h1 className="text-4xl  font-semibold rounded-sm -ml-12 mb-16">Filters</h1>
                    <div className="mr-24">


                        <div className="container items-center border-gray-400 border border-solid rounded-2xl bg-white mb-3 mt-4">
                            <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                        </div>


                        <div className="container items-center border-gray-400 border border-solid rounded-2xl bg-white mb-3 mt-4">
                            <PlaysFilter title="Languages" subtitle="clear" tags={["Hindi", "English", "Urdu", "Punjabi"]} />
                        </div>


                        <div className="container items-center border-gray-400 border border-solid rounded-2xl bg-white mb-3 mt-4">
                            <PlaysFilter title="Genres" tags={["Drama", "Comedy", "Adaptation", "Musical", " Classical", "Romantic", "Tragedy", "Fantasy", "Historical"]} />
                        </div>


                    </div>
                </div>


                <div className=" mt-20 lg:w-8/12">
                    <div>
                        <h1 className="text-2xl font-bold">Movies in Delhi-NCR</h1>
                    </div>


                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4" >
                        {trendingmovies.map((image) => (
                           <a className=" transition duration-150 ease-out hover:ease-in   rounded-t-lg hover:shadow-2xl hover:drop-shadow-slate-950 ">
                           <Poster{...image} />
                         </a>
                        ))}
                    </div>


                </div>
            </div>
        </>
    )
}
export default Plays;

