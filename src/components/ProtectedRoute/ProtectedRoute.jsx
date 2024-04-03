import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from '@/Context/getContext';
import Loader from '../Loader/Loader';

const Protected = ({ children }) => {
    const { user, loading } = getAuth();
    const location = useLocation();

    if (loading) {
        return <Loader />
    } else if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Protected;