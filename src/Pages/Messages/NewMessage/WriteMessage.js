import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { api, UserCtx } from "../../../App";
import Navbar from "../../../Components/Navbar/Navbar";
import MessageEditor from "./MessageEditor";
const WriteMessage = () => {
    const sendHandler = (title, content) => {
        console.log({title,content});
    };
    return (
        <>
        <Navbar />
        <RecieverList />
        <h1>
            New Message:
        </h1>
        <MessageEditor onMessageSend={sendHandler} />
        <Link to="/messages"> Go back </Link>
        </>
    )
}

const RecieverList = (props) => {
    const userdata = useContext(UserCtx);
    const getPossibleRecipients = async () => {
        if(userdata.data.Role > 2) {
            return await getAllUsers();
        }
        return await getTeachers();
    };
    
    const getAllUsers = async () => {
        const res = await api.get("/user/list");
        console.log(res);
        return res;
    }
    const getTeachers = async () => {

    }

    useEffect(() => {
        getPossibleRecipients();
    });

    return (
        <>
        <h1>{userdata?.data.Firstname}</h1>
        </>
    )
}

export default WriteMessage;