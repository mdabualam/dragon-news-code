import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
    // Bring user data from AuthContext
    const {user, loading} = use(AuthContext);
    // console.log(user);

    const location = useLocation();
    console.log(location)

    if(loading){
        return <Loading></Loading>
    }

// if -> user is existed: return children
    if(user && user?.email){
        return children;
    }
// if -> user is not existed: navigate --> Login
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default PrivateRoute;