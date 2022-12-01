import {useContext} from 'react';
import userContext from './userContext';

/**
 * Renders a Homepage component.
 *
 * State: none
 * Props: none
 *
 * App -> RoutesList -> Homepage
 */

function Homepage(){
    const userData = useContext(userContext);
    const isLoggedIn = Object.keys(userData).length !== 0;
    return(
        <div className="Homepage">
            <p>Find your future here...</p>
            {
                isLoggedIn
                && <p>Welcome back {userData.firstName}!</p>
            }
        </div>
    )
}

export default Homepage;
