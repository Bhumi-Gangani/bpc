import React from 'react'
import { Navigate } from "react-router-dom"

const AuthRoute = ({ children }) => {

    const userToken = "abcdabcd"
    return (
        <>
            {userToken ? (children) : <Navigate to="/" />}
        </>
    )
}

export default AuthRoute