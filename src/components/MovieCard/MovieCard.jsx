import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const MovieCard = () => {
    return (
        <div className="bg-slate-300 rounded-lg border border-white bg-opacity-80 py-3 px-4">
            <h1 className="text-xl font-semibold capitalize">Avengers: Endgame</h1>
            <div className="flex justify-between items-center my-3">
                <h1 className="text-sm">Genre: Action</h1>
                <h1 className="text-sm">Rating: 5.00 (10)</h1>
            </div>
            <h1>Release Date: 10-05-2023</h1>
            <div className="mt-5 flex justify-between items-center">
                <Popover>
                    <PopoverTrigger className="text-blue-800 text-sm hover:underline">
                        Provide Rating
                    </PopoverTrigger>
                    <PopoverContent>
                        <h1 className="text-center font-medium">Provide Rating for <br /> Avengers Infinty War</h1>
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