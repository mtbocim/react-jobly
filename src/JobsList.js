import SearchForm from "./SearchForm";

/**
 * Renders a JobsList component
 * 
 * State: isLoaded (bool)
 *        jobsData as [{title, description, salary, equity}, ...]
 * Props: none
 * 
 * App -> RoutesList -> JobsList
 * 
 * jobsData populated by API request
 */

function JobsList(){
    return(
        <div className="JobsList">
            <SearchForm/>
            <p>JobsList</p>
        </div>
    )
}

export default JobsList;