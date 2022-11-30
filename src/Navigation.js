import { React } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navigation.css"

/**
 * Renders a navigation component
 * 
 * State: none
 * Props: none
 * 
 * App -> Navigation
 */

function Navigation() {
    return (
        <nav className="Navigation">
            <div className="Navigation-homepage-link">
                <Link to="/">Jobly</Link>
            </div>
            <div className="Navigation-data-links">
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="/companies">Companies</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;