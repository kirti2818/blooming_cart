import React from 'react'
import {Navigate} from "react-router-dom"

const PrivateRoute = ({children}) => {
    const role = localStorage.getItem("role");
    if(role!=="Admin"){
        return(
            <Navigate to="/login" />
        )
    }
    return children;
}

export default PrivateRoute