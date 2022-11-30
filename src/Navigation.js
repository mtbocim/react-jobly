import {React} from "react";
import {NavLink,Link} from "react-router-dom";
import "./Navigation.css"

/**
 * Renders a navigation component
 * 
 * State: none
 * Props: none
 * 
 * App -> Navigation
 */

function Navigation(){
    return(
        <nav className="Navigation">
            <Link to="/">Jobly</Link>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/companies">Companies</NavLink>
        </nav>
    )
}

export default Navigation;