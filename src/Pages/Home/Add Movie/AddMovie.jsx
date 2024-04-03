import { allMovieUrl } from "@/Utilities/Url";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const AddMovie = () => {
    const [name,setName] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [release, setRelease] = useState("");
    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();

    const handleMovieAdd = () =>{
        const movieData = {name,genre,rating,release_date:release}
        fetch(allMovieUrl, {
            method: 'POST',
            headers: {
                'Authorization': `JWT ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieData),
        })
            .then(res => {
                if (res.status == 201) {
                    Swal.fire("Successfully Created !", "", "success");
                    return res.json();
                } else {
                    
                    Swal.fire("An Error Occured !","","error");
                }
            })
            .then(data => navigate(`/movie/${data.id}`))
    }
    return (
        <div className="bg-white bg-opacity-50 rounded-lg border py-8 w-2/3 mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center">Add a New Movie</h1>
            <p className="text-center text-xm">Please enter movie credentials here.</p>
            <div className='mt-5 w-2/3 mx-auto'>
                <Label htmlFor="name">Movie Name</Label>
                <Input
                    className="bg-transparent text-black"
                    type="text"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Movie Name here"
                />
            </div>
            <div className='mt-2 w-2/3 mx-auto'>
                <Label htmlFor="genre">Genre</Label>
                <Input
                    className="bg-transparent text-black"
                    type="text"
                    id="genre"
                    onChange={(e) => setGenre(e.target.value)}
                    placeholder="Enter Movie Genre here"
                />
            </div>
            <div className='mt-2 w-2/3 mx-auto'>
                <Label htmlFor="rating">Rating</Label>
                <Input
                    className="bg-transparent text-black"
                    type="text"
                    id="rating"
                    onChange={(e) => setRating(e.target.value)}
                    placeholder="Enter Movie Rating here"
                />
            </div>
            <div className='mt-2 w-2/3 mx-auto'>
                <Label htmlFor="release">Release Date</Label>
                <Input
                    className="bg-transparent text-black w-full"
                    type="date"
                    id="release"
                    onChange={(e) => setRelease(e.target.value)}
                    placeholder="Enter Movie Release Date here"
                />
            </div>
            <div className='mt-2 w-2/3 mx-auto'>
                <Button onClick={handleMovieAdd} className="w-full">Add Movie</Button>
            </div>
        </div>
    );
};

export default AddMovie;