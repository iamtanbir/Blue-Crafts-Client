import React, { useContext } from 'react';
import { AuthContext } from './authProvider';
import Loader from '../components/loader';
import { Navigate} from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {loader,userLoggedin} = useContext(AuthContext)
    
    if(loader){
        return <Loader/>
    }

    if(!userLoggedin){
        
    }

    if(userLoggedin){
        return children
    }
    
    
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;