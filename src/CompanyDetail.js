/**
 * Renders a CompanyDetail component
 * 
 * State: loading/isLoaded (bool)
 *        jobsData as [{title, description, salary, equity}, ...]
 *        //TODO: Company name/description
 * 
 * Props: none
 * 
 * App -> RoutesList -> CompanyDetail
 * 
 * jobsData populated by API request
 */

function CompanyDetail(){
    return(
        <div className="CompanyDetail">
            <p>CompanyDetail</p>
        </div>
    )
}

export default CompanyDetail;