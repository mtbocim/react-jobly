import { React } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";

/**
 * Renders a navigation component
 *
 * State: none
 * Props: none
 *
 * App -> Navigation
 */

function Navigation({ userInfo }) {
    const isLoggedIn = Object.keys(userInfo).length !== 0;

    return (
        <nav className="Navigation">
            <div className="Navigation-homepage-link">
                <Link to="/">Jobly</Link>
            </div>
            {
                isLoggedIn
                    ? <div className="Navigation-data-links">
                        <NavLink to="/jobs">Jobs</NavLink>
                        <NavLink to="/companies">Companies</NavLink>
                        <NavLink to="/profile">Profile</NavLink>
                        <NavLink to="/logout">Logout</NavLink>
                    </div>
                    : <div className="Navigation-data-links">
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Signup</NavLink>
                    </div>
            }
        </nav>
    );
}

export default Navigation;
