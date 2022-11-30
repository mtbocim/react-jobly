import SearchForm from "./SearchForm";

/**
 * Renders a JobList component
 * 
 * State: loading/isLoaded, jobData //TODO: example data
 * Props: none
 * 
 * App -> RoutesList -> JobList
 */

function JobList(){
    return(
        <div className="JobList">
            <SearchForm/>
            <p>JobList</p>
        </div>
    )
}

export default JobList;