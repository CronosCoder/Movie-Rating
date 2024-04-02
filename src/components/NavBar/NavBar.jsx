import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="mt-5 w-[70%] mx-auto flex flex-col">
            <NavLink to="/"
                className={({ isActive }) => isActive ?
                    "text-xl font-medium text-yellow-700 p-2 underline" :
                    "text-xl font-medium text-white p-2"}>All Movies</NavLink>
            <NavLink to="/add-movie"
                className={({ isActive }) => isActive ?
                    "text-xl font-medium text-yellow-700 p-2 underline" :
                    "text-xl font-medium text-white p-2"} >Add Movie</NavLink>
            <NavLink to="/logout"
                className={({ isActive }) => isActive ?
                    "text-xl font-medium text-yellow-700 p-2 underline" :
                    "text-xl font-medium text-white p-2"}>Log Out</NavLink>
        </div>
    );
};

export default NavBar;