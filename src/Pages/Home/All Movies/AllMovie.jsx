import MovieCard from "@/components/MovieCard/MovieCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AllMovie = () => {
    return (
        <div>
            <div className="w-1/2 flex justify-center items-center gap-2 mx-auto mt-5">
                <Input placeholder="Search Movies by name" />
                <Button className="bg-white text-black hover:text-white">Search</Button>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-8">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        </div>
    );
};

export default AllMovie;