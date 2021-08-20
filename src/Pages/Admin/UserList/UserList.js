import React, { useEffect, useState } from "react";
import { api } from "../../../App";

const UserListAdmin = () => {
    const [userlist, setUserList] = useState(null);
    const getData = async () => {
        setUserList(null);
        const res = await api.get("/user/list")
        const {success, data, error} = res.data;
        if(!success) {
            console.log(error);
            return;
        }
        setUserList(data);
    }
    useEffect(() => {
        getData();
    }, []);

    return userlist == null ?  (
        <>
            <h2>Loading...</h2>
        </>
    ) : (<>
    <h2> List of users: </h2>
        <ul>
        {userlist.map(user => {
            console.log(user.UUID);
            return (
                    <li key={user.UUID}>
                        {user.Username}: {user.Firstname} {user.Surname} <button> Delete user </button>
                    </li>
            )
        })}
        </ul>
    </>)
}  

export default UserListAdmin;