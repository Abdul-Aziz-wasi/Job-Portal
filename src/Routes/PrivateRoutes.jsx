import React, { use } from 'react';
import { AuthCotext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user,loading}=use(AuthCotext)
    const location =useLocation()

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    

    if(!user){
        return <Navigate to="/signin" state={location.pathname}></Navigate>
    }
    return children
};

export default PrivateRoutes;