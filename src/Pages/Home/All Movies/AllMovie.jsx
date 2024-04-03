import { allMovieUrl } from "@/Utilities/Url";
import MovieCard from "@/components/MovieCard/MovieCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const AllMovie = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [movies,setMovies] = useState([]);
    const [search,setSearch] = useState("");

    const handleSearch = () =>{
        if(search)
        {
            const searched = movies.filter(movie => movie.name.toLowerCase().includes(search.toLocaleLowerCase()));
            setMovies(searched)
        }
    };

    useEffect(()=>{
        fetch(allMovieUrl, {
            method: 'GET',
            headers: {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
        .then(data => setMovies(data))
    },[search])

    return (
        <div>
            <div className="w-1/2 flex justify-center items-center gap-2 mx-auto mt-5">
                <Input onChange={(e)=>setSearch(e.target.value)} placeholder="Search Movies by name" />
                <Button onClick={handleSearch} className="bg-white text-black hover:text-white">Search</Button>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-8">
                {
                    movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                }
            </div>
        </div>
    );
};

export default AllMovie;