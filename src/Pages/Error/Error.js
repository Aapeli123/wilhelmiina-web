import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
        <h1>
            Error while fetching user data... Server might be offline
        </h1>
        <Link to="/"> Try again </Link>
        </>

    )
}
export default ErrorPage;