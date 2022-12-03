import { React, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.css";
import userContext from "./userContext";

/**
 * Renders a Navigation component
 *
 * State: none
 * Props: handleLogout: logout callback function
 *
 * App -> Navigation
 * 
 * consuming userContext: username
 */

function Navigation({ handleLogout }) {
    const { username } = useContext(userContext);
    const isLoggedIn = username !== undefined;

    return (
        <nav className="Navigation">
            <div className="Navigation-homepage-link">
                <Link to="/">Jobly</Link>
            </div>
            {
                isLoggedIn
                    ?
                    <div className="Navigation-data-links">
                        <NavLink to="/jobs">Jobs</NavLink>
                        <NavLink to="/companies">Companies</NavLink>
                        <NavLink to="/profile">Profile</NavLink>
                        <NavLink
                            to="/logout"
                            onClick={handleLogout}
                            className="Navigation-data-links-logout"
                        >
                            Logout {username}
                        </NavLink>
                    </div>
                    :
                    <div className="Navigation-data-links">
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Signup</NavLink>
                    </div>
            }
        </nav>
    );
}

export default Navigation;
