import { useContext } from 'react';
import userContext from './userContext';

/**
 * Renders a Homepage component.
 *
 * State: none
 * Props: none
 *
 * App -> RoutesList -> Homepage
 */

function Homepage() {
    const { firstName } = useContext(userContext);
    const isLoggedIn = firstName !== undefined
    
    return (
        <div className="Homepage">
            <p>Find your future here...</p>
            {
                isLoggedIn
                && <p>Welcome back {firstName}!</p>
            }
        </div>
    )
}

export default Homepage;
