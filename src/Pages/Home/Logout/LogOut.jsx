import { getAuth } from "@/Context/getContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
    const {setUser} = getAuth();
    const navigate = useNavigate();

    const handleLogOut = () =>{
        localStorage.removeItem("accessToken");
        setUser({});
        navigate("/login");
    }

    return (
        <div  className="flex flex-col justify-center items-center">
            <h1 className="mt-10 text-center font-bold text-2xl text-white">Are you Confirm to Logout ?</h1>
            <Button onClick={handleLogOut} className="bg-red-800 mt-5 w-24">Log Out</Button>
        </div>
    );
};

export default LogOut;