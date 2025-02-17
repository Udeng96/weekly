import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserPage from "./user/userPage";
import LoginPage from "./login/loginPage";

export const WeeklyRouter = () =>{
    return(
        <BrowserRouter basename={"/weekly"}>
            <Routes>
                <Route path={"/login"} element={<LoginPage/>}></Route>
                <Route path={"/join"} element={<div></div>}></Route>
                <Route path={"/user/*"} element={<UserPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default WeeklyRouter