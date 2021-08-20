import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { api } from "../../../App";


const UserCreator = ({refreshUserList}) => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const firstnameRef = useRef();
    const surnameRef = useRef();
    const roleRef = useRef();


    const createUser = async (username, password, firstname, surname, role) => {
        let response = await api.post("/user/new", {
            Username: username,
            Password: password,
            Firstname: firstname,
            Surname: surname,
            Role: role
        });
        const {success, data, error} = response.data;
        if(!success) {
            toast.error(error);
            return;
        }
        toast.success("User created successfully...");
        console.log(data);
    }

    const submitEvent = (e) => {
        e.preventDefault();
        let firstname = firstnameRef.current.value;
        let surname = surnameRef.current.value;
        
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        let role = parseInt(roleRef.current.value);
        createUser(username, password, firstname, surname, role);
    }
    
    return (
        <>
        <h2> Create new Users: </h2>
            <form onSubmit={submitEvent}> 
                <input type="text" ref={firstnameRef} placeholder="First name"/>
                <input type="text" ref={surnameRef} placeholder="Last names"/>
                <input type="text" ref={usernameRef} placeholder="Username"/>
                <input type="text" ref={passwordRef} placeholder="Password"/>
                <select ref={roleRef}>
                    <option value="0">
                        Student
                    </option>
                    <option value="1">
                        Guardian
                    </option>
                    <option value="2">
                        Teacher
                    </option>
                    <option value="3">
                        Moderator
                    </option>
                    <option value="4">
                        Admin
                    </option>
                </select>
                <input type="submit" value="Create user"/>
            </form>
            <ToastContainer />
        </>
    )
}

export default UserCreator;