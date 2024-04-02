import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const AddMovie = () => {
    const [name,setName] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [release, setRelease] = useState("");

    const handleMovieAdd = () =>{
        console.log(name,genre,rating,release);
    }
    return (
        <div className="bg-white bg-opacity-50 rounded-lg border p-5 w-2/3 mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center">Add a New Movie</h1>
            <p className="text-center text-xm">Please enter movie credentials here.</p>
            <div className='mt-8 w-2/3 mx-auto'>
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