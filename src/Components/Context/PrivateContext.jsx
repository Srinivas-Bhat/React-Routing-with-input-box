import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function PrivateContext ({children}) {
    const {state} = useContext(AuthContext);
    if(!state.isAuth) {
        return <Navigate to="/login" />;
    }
    return children;
}

export default PrivateContext;