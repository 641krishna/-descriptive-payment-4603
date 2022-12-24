import React from 'react'
import {useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Privateroute = ({children}) => {
    const userName = useSelector((state) => state.Auth);
    if(!userName.login){
        return <Navigate to="/signIn"/>
    }
  return children;
}

export default Privateroute