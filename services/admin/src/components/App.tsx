// import classes from "./Button.module.css"
import {Link, Outlet} from "react-router-dom";

export const App = () => {
    return (
        <div>
            ADMIN MODULE
            <Outlet/>
        </div>
    );
};

