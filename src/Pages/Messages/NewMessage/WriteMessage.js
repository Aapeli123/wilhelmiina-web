import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";

const WriteMessage = () => {
    return (
        <>
        <Navbar />
        <h1>
            New Message:
        </h1>
        <input placeholder="Title" />
        <br />
        <input placeholder="Message text" />
        <Link to="/messages"> Go back </Link>
        </>
    )
}
export default WriteMessage;