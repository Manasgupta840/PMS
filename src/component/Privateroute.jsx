import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../auth";


const Privateroute= ()=> {
    return isLoggedIn() ? <Outlet /> :<Navigate to={"/customerLogin"} />
}
export default Privateroute;