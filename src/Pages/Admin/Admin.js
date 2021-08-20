import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserCtx } from "../../App";
import Navbar from "../../Components/Navbar/Navbar"
import UserCreator from "./UserCreator/UserCreator";
import UserListAdmin from "./UserList/UserList";

const AdminPanel = () => {
    const userdata = useContext(UserCtx);

    return userdata?.data?.Role < 3 ? (
        <Redirect to="/" />
    ) : (
        <>
            <Navbar />
            <h1>
                Control panel
            </h1>
            <UserCreator />
            <UserListAdmin />
        </>
    )
}

export default AdminPanel;