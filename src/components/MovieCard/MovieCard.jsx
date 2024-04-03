import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { getAuth } from "@/Context/getContext";
import { useState } from "react";
import { ratingUrl } from "@/Utilities/Url";

const MovieCard = ({movie}) => {
    const [rating,setRating] = useState();
    const {user} = getAuth();
    const accessToken = localStorage.getItem('accessToken');
    const navigate = useNavigate();

    const handleRating = () =>{
        if(rating>-1 && rating < 6){
            const formData = {
                user_id:user.id,
                movie_id:movie.id,
                rating
            }
            fetch(ratingUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `JWT ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then(res =>{
                if(res.status==201){
                    Swal.fire("Rating added Successfully","","success");
                    navigate(`/movie/${movie.id}`);
                }else{
                    Swal.fire("Rating does not added !","","error");
                }
            })

        }else{
            Swal.fire("Rating must 0 to 5","",'error');
        }
    }

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
                            <Input onChange={(e) => setRating(e.target.value)} type="number" max={5} min={1}></Input>
                            <Button onClick={handleRating}>Submit</Button>
                        </div>
                    </PopoverContent>
                </Popover>
                <Link to={`/movie/${movie.id}`} className="text-sm text-blue-800 hover:underline">See Details</Link>
            </div>
        </div>
    );
};

export default MovieCard;