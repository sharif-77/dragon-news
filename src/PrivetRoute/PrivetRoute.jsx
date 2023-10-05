import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    console.log(location.pathname);
    if (loading) {
        return <p>Loading.....</p>
        
    }

    if (user) {
        return children
    }


    return <Navigate state={location.pathname} to='/login'/>
};

export default PrivetRoute;