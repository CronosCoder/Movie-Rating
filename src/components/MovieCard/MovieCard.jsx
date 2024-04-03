import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
    return (
        <div className="bg-slate-300 rounded-lg border border-white bg-opacity-80 hover:bg-opacity-70 duration-300 py-3 px-4">
            <h1 className="text-xl font-semibold capitalize">{movie.name}</h1>
            <div className="flex justify-between items-center my-3">
                <h1 className="text-sm">Genre: {movie.genre}</h1>
                <h1 className="text-sm">Rating: {movie.rating}</h1>
            </div>
            <h1>Release Date: {movie.release_date}</h1>
            <div className="mt-5 flex justify-between items-center">
                <Popover>
                    <PopoverTrigger className="text-blue-800 text-sm hover:underline">
                        Provide Rating
                    </PopoverTrigger>
                    <PopoverContent>
                        <h1 className="text-center font-medium">Provide Rating for <br /> {movie.name}</h1>
                        <div className="flex justify-center items-center gap-2 mt-5">
                            <Input type="number" max={5} min={1}></Input>
                            <Button>Submit</Button>
                        </div>
                    </PopoverContent>
                </Popover>
                <Link className="text-sm text-blue-800 hover:underline">See Details</Link>
            </div>
        </div>
    );
};

export default MovieCard;