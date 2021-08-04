import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { api } from "../../App";

import "./Navbar.scss";

const Navbar = (props) => {
    const [userdata, setUserdata] = useState(null);
    const getUserdata = async () => {
        try {
            let res = await api.get("user/");
            if(!res.data.success) {
                toast.error(res.data.Err);
                return;
            }
            setUserdata(res.data.data);
            return;
        } catch(err) {
            toast.error(err);
        }
    }

    useEffect(() => {
        getUserdata();
    }, []);
    return (
        <>
        <nav className="navbar-container">
            <ul>
                <li>
                <Link to="/" >
                    Wilhelmiina
                </Link>
                </li>
                <li>
                <Link to="/messages" >
                    Messages
                </Link>
                </li>
                <li>
                <Link to="/schedule" >
                    Schedule
                </Link>
                </li>
                <li>
                <Link to="/courses" >
                    Courses
                </Link>
                </li>
                <li>
                <Link to="/options" >
                    Options
                </Link>
                </li>
                {userdata?.Role > 2 && (
                    <>
                    <li>
                    <Link to="/admin" >
                        Admin Panel
                    </Link>
                    </li>
                    </>
                )}
                <li>
                    <Link to="/logout" >
                    Logout
                    </Link>
                </li>
            </ul>
        </nav>
        <ToastContainer autoClose={false} />
        </>
    )
}
export default Navbar;