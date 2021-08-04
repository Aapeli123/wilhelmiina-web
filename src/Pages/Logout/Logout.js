import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { api } from "../../App";


const Logout = () => {
    const history = useHistory()
    const logout = async () => {
        await api.get("auth/logout");
        history.push("/login");
    }
    useEffect(() => {
        logout();
    });
    return (
        <h1>
            Logging out...
        </h1>
    )
}
export default Logout;