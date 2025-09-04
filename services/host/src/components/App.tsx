// import classes from "./Button.module.css"
import {Link, Outlet} from "react-router-dom";

export const App = () => {
    return (
        <div>
            hello world
            <button>asdfasdf</button>
            <Link to={'/admin/about'}>ABOUT</Link>
            <Link to={'/shop/main'}>SHOP</Link>
            <Outlet/>
        </div>
    );
};

