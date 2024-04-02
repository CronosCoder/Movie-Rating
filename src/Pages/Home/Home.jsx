import bgImg from "../../assets/homebg.jpeg"
import {NavLink, Outlet} from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-900 bg-fixed bg-blend-overlay bg-cover grid grid-cols-5 gap-4" style={{backgroundImage:`url(${bgImg})`}}>
            <div className="relative">
                <div className="min-h-screen bg-gray-950 backdrop-blur-3xl bg-opacity-50 p-3 absolute top-0 left-0 w-full">
                    <h1 className="text-yellow-600 font-bold text-2xl text-center">Movie Rating</h1>
                    <div className="mt-5 w-[70%] mx-auto flex flex-col">
                        <NavLink to="/" 
                            className={({ isActive }) => isActive ? 
                                "text-xl font-medium text-yellow-700 p-2 underline" : 
                                "text-xl font-medium text-white p-2" }>All Movies</NavLink>
                        <NavLink to="/add-movie" 
                            className={({ isActive }) => isActive ? 
                                "text-xl font-medium text-yellow-700 p-2 underline" : 
                                "text-xl font-medium text-white p-2"} >Add Movie</NavLink>
                        <NavLink to="/logout" 
                            className={({ isActive }) => isActive ?
                                "text-xl font-medium text-yellow-700 p-2 underline" :
                                "text-xl font-medium text-white p-2"}>Log Out</NavLink>
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <Outlet/>
            </div>
        </div>
    );
};

export default Home;