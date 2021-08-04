import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

import { api } from "../../App";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./Login.scss"

const Login = () => {
    const unRef = useRef();
    const pwRef = useRef();
    
    const history = useHistory();
    const login = async (e) => {
        e.preventDefault();
        let res; 
        try {
            res = await api.post("/auth/login", {
                Username: unRef.current.value,
                Password: pwRef.current.value
            });
        } catch(err) {
            toast.error(err.toString());
            return;            
        }
        if(!res.data.success) {
            toast.error(res.data.error);
            return;
        }
        history.push("/");
    }
    return (
        <div className="login">
            <div className={"login-container"}>
                <h2 className="login-header">Login to Wilhelmiina: </h2>
                <form onSubmit={login} className="login-form">
                    <input placeholder="Username" type="text" ref={unRef} required={true}/>
                    <input placeholder="Password" type="password" ref={pwRef} required={true}/>
                    <input type="submit" value="Login" readOnly={true}/>
                </form>
            </div>
        <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
        </div>
    )
};
export default Login; 