import React, { useEffect, useState } from "react";
import { api } from "../../App";
import Navbar from "../../Components/Navbar/Navbar";

import "./Home.scss"; 

const LOADING = 0;
const SUCCESS = 1;
const ERROR = 2;

const GreetUser = (props) => {
    switch(props.status) {
        case LOADING:
            return (<h1> Loading... </h1>)
        case SUCCESS:
            return (<h1> Hello {props.userdata.Firstname}! </h1>)
        case ERROR:
            return (<h1> Error: {props.error}. </h1>)
        default:
            return <h1> Something went wrong... </h1>
    }
}

const Home = () => {
    const getUserdata = async () => {
        try {
            let res = await api.get("user/");
            if(!res.data.success) {
                setStatus(ERROR);
                setError(res.data.Err);
                return;
            }
            setUserData(res.data.data);
            setStatus(SUCCESS);
            return;
        } catch(err) {
            setStatus(ERROR);
            setError(err.toString());
        }

    }
    const [userData, setUserData] = useState(null);
    const [status, setStatus] = useState(LOADING);
    const [error, setError] = useState(null);


    useEffect(() => {
        getUserdata();
    }, [])

    return (
    <>
        <Navbar />
        <div className="homepage">
            <div className="greeting">
                <GreetUser status={status} error={error} userdata={userData} />
            </div>
        </div>
        
    </>
    )
}
export default Home;
