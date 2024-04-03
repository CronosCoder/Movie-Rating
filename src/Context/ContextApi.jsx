import { userUrl } from '@/Utilities/Url';
import {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext(null);

const ContextApi = ({children}) => {
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
    const accessToken = localStorage.getItem("accessToken");

    useEffect(()=>{
        if(!accessToken){
            setLoading(false);
        }
        if(accessToken){
            fetch(userUrl,{
                method : 'GET',
                headers: {
                    'Authorization': `JWT ${accessToken}`,
                    'Content-Type': 'application/json',
                },

            })
                .then(res => res.json())
                .then(data => {
                    setUser(data);
                    setLoading(false);
                })
        }
    },[])


    const info = {user,setUser,loading,setLoading};
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextApi;