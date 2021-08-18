import React, { useContext, useEffect, useState } from "react";
import { api, GetUserCtx, UserCtx } from "../../App";
import Navbar from "../../Components/Navbar/Navbar";

import "./Home.scss"; 

const GreetUser = ({userdata}) => {
    return userdata?.success ? (
        <>
        <h1>Hi {userdata.data.Firstname}!</h1>
        </>
    ) : (
        <h1>Loading...</h1>
    );
}

const Home = () => {
    const updateUser = useContext(GetUserCtx);
    const ud = useContext(UserCtx);

    return (
    <>
        <Navbar />
        <div className="homepage">
            <div className="greeting">
                <GreetUser userdata={ud} />
            </div>
        </div>
        
    </>
    )
}
export default Home;
