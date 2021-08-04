import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Logout from "./Pages/Logout/Logout";

import Home from "./Pages/Home/Home";
import Messages from "./Pages/Messages/Messages";
import WriteMessage from "./Pages/Messages/NewMessage/WriteMessage";



const apiurl = "http://localhost:8080/api" 
export const api = axios.create({
  baseURL: apiurl,
  withCredentials: true,
  validateStatus: false,
})

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />

      <Route path="/messages/new" component={WriteMessage} />
      <Route path="/messages" component={Messages} />

      <Route path="/" component={Home} />


    </Switch>
  );
}

export default App;
