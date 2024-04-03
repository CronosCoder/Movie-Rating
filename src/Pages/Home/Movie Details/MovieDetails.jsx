import { allMovieUrl } from "@/Utilities/Url";
import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const MovieDetails = () => {
    const {id} = useParams();
    const [movie,setMovie] = useState();
    const accessToken = localStorage.getItem('accessToken');

    useEffect(()=>{
        fetch(allMovieUrl+`${id}/`, {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then(data => setMovie(data))
    },[])

    if (!movie) {
        return <Loader />;
    }

    return (
        <div className="w-2/3 mx-auto mt-10">
            <h1 className="font-black text-6xl text-white">{movie.name}</h1>
            <h2 className="font-semibold text-gray-300 text-3xl mt-5">Genre: {movie.genre}</h2>
            <h2 className="font-semibold text-gray-300 text-3xl mt-5">Rating: {movie.rating}</h2>
            <h2 className="font-semibold text-gray-300 text-3xl mt-5">AVG Rating: <span className="font-bold text-yellow-400">{movie.avg_rating}</span> ({movie.total_rating})</h2>
            <h2 className="font-semibold text-gray-300 text-3xl mt-5">Release Date: {movie.release_date}</h2>
        </div>
    );
};

export default MovieDetails;