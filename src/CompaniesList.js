import SearchForm from "./SearchForm";

/**
 * Renders a CompanyList component
 * 
 * State: loading/isLoaded, companiesData
 * Props: none
 * 
 * App -> RoutesList -> CompanyList
 */

function CompaniesList({companiesData}){
    return(
        <div className="CompanyList">
            <SearchForm/>
            <p>CompanyList</p>
        </div>
    )
}

export default CompaniesList;