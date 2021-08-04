import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Messages = () => {
    return (
        <div>
            <Navbar />
            <h1>Messages:</h1>
            <div className="message-container">

            </div>

            <Link to="/messages/new"> <button>New Message</button> </Link>
        </div>
    )   
}

export default Messages;