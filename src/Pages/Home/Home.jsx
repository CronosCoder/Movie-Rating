import NavBar from "@/components/NavBar/NavBar";
import bgImg from "../../assets/homebg.jpeg"
import { Outlet} from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-900 bg-fixed bg-blend-overlay bg-cover grid grid-cols-5 gap-4" style={{backgroundImage:`url(${bgImg})`}}>
            <div>
                <div className="min-h-screen bg-gray-950 backdrop-blur-3xl bg-opacity-50 p-3 fixed  w-1/5 mr-2 ">
                    <h1 className="text-yellow-600 font-bold text-2xl text-center">Movie Rating</h1>
                    <NavBar/>
                </div>
            </div>
            <div className="col-span-4">
                <Outlet/>
            </div>
        </div>
    );
};

export default Home;