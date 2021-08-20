import axios from "axios";
import { Route, Switch, useHistory } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Logout from "./Pages/Logout/Logout";

import Home from "./Pages/Home/Home";
import Messages from "./Pages/Messages/Messages";
import WriteMessage from "./Pages/Messages/NewMessage/WriteMessage";
import { useEffect, useState } from "react";

import React from "react";
import { toast, ToastContainer } from "react-toastify";
import ErrorPage from "./Pages/Error/Error";
import AdminPanel from "./Pages/Admin/Admin";

const apiurl = "http://localhost:8080/api" 
export const api = axios.create({
  baseURL: apiurl,
  withCredentials: true,
  validateStatus: false,
})
export const UserCtx = React.createContext(null);
export const GetUserCtx = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    if(history.location.pathname == "/login" || history.location.pathname == "/logout") { // Do not try to get user when not logged in...
      return;
    }
    try {
      let res = await api.get("/user/");
      setUser(res.data);
      if(!res.data.success) {
        history.push("/login");
      }
    } catch(err) {
      console.log("Error Fetching user: " + err);
      toast(err);
      setUser(null);
      if(history.location.pathname != "/error") {
        history.push("/error")
      }
    }
  }
  const history = useHistory();
  useEffect(() => {
    getUser();
    history.listen(() => {
      getUser();
    });
  }, [history]);
  return (
    <UserCtx.Provider value={user}>
    <GetUserCtx.Provider value={getUser}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />

      <Route path="/messages/new" component={WriteMessage} />
      <Route path="/messages" component={Messages} />

      <Route path="/error" component={ErrorPage} />
      
      <Route path="/admin" component={AdminPanel} />

      <Route path="/" component={Home} />


    </Switch>
    </GetUserCtx.Provider>
    </UserCtx.Provider>
  );
}

export default App;
